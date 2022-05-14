import antlr4 from 'antlr4';
import StarRealmsLexer from './antlr4/StarRealmsLexer.js';
import StarRealmsParser from './antlr4/StarRealmsParser.js';
import StarRealmsVisitor from './antlr4/StarRealmsVisitor.js';
import { core_set } from './card_data/core_set.js';
import { colony_wars } from './card_data/colony_wars.js';
import { frontiers } from './card_data/frontiers.js';
import { bases_battleships } from './card_data/bases_battleships.js';
import { fleets_fortresses } from './card_data/fleets_fortresses.js';
import { frontiers_promos } from './card_data/frontiers_promos.js';
import { assault } from './card_data/assault.js';
import { command } from './card_data/command.js';
import { stellar_allies } from './card_data/stellar_allies.js'

const { S3Client, GetObjectCommand } = require("@aws-sdk/client-s3");


var card_list = Object.assign(
    core_set['cards'], 
    frontiers['cards'], 
    colony_wars['cards'],
    bases_battleships['cards'],
    fleets_fortresses['cards'],
    frontiers_promos['cards'],
    assault['cards'],
    command['cards'],
    stellar_allies['cards']
)

class Visitor extends StarRealmsVisitor{
    // update both players data with info from the latest round
    updatePlayerData(currentPlayer, lastRoundPlayers, nextRound){
        let newPlayerData = []
        for(let i = 0; i < lastRoundPlayers.length; i++){
            //get  copy of our player object
            let player = JSON.parse(JSON.stringify(lastRoundPlayers[i]))
            if(player.name == currentPlayer){
                player['authority'] += nextRound['selfAuthority']
                for(let j = 0; j < nextRound['purchasedCards'].length; j++){
                    let nextCard = nextRound['purchasedCards'][j]
                    console.log(nextCard)
                    if(nextCard in player['deck']){
                        player['deck'][nextCard]['count'] += 1
                    }else if(nextCard in card_list){
                        player.deck[nextCard] = {
                            name: card_list[nextCard]['name'],
                            cost: card_list[nextCard]['cost'],
                            faction: card_list[nextCard]['faction'],
                            type: card_list[nextCard]['type'],
                            count: 1,
                            scrapCount: 0,
                            discardCount: 0,
                            destroyedCount: 0,
                            playedCount: 0
                        }
                    }
                }
                for(let j = 0; j < nextRound['scrappedCards'].length; j++){
                    let nextCard = nextRound['scrappedCards'][j]
                    if(nextCard in player['deck']){
                        player['deck'][nextCard]['scrapCount'] += 1
                    }
                }
                for(let j = 0; j < nextRound['discardedCards'].length; j++){
                    let nextCard = nextRound['discardedCards'][j]
                    player['deck'][nextCard]['discardCount'] += 1
                }
                for(let j = 0; j < nextRound['playedCards'].length; j++){
                    let nextCard = nextRound['playedCards'][j]
                    player['deck'][nextCard]['playedCount'] += 1
                }
                newPlayerData.push(player)
            }else{
                player['authority'] += nextRound['otherAuthority']
                for(let j = 0; j < nextRound['destroyedBases'].length; j++){
                    let nextCard = nextRound['destroyedBases'][j]
                    if(nextCard in player['deck']){
                        player['deck'][nextCard]['destroyedCount'] += 1
                    }
                }
                newPlayerData.push(player)
            }
        }
        return newPlayerData
    }
    
    computeNewBalance(currentBalance, nextBalance){
        let newBalance = {}
        if(Object.keys(currentBalance).length == 0){
            newBalance = {
                tradePool: 0,
                combatPool: 0,
                usedTrade: 0,
                usedCombat: 0,
                selfAuthority: 0, // authority change of current player
                otherAuthority: 0 // authority change of other player
            }
        }else{
            newBalance = JSON.parse(JSON.stringify(currentBalance))
        }
        if(nextBalance['category'] == 'Trade'){
            if(nextBalance['value'] > 0){
                newBalance['tradePool'] += nextBalance['value']
            }else{
                newBalance['usedTrade'] += nextBalance['value']
            }
        }
        else if(nextBalance['category'] == 'Combat'){
            if(nextBalance['value'] > 0){
                newBalance['combatPool'] += nextBalance['value']
            }else{
                newBalance['usedCombat'] += nextBalance['value']
            }
        }
        else if(nextBalance['category'] == 'Authority'){
            //we assume any > 0 authority is for the current player
            // and any < 0 authority isfor the opponent
            if(nextBalance['value'] > 0){
                newBalance['selfAuthority'] += nextBalance['value']
            }else{
                newBalance['otherAuthority'] += nextBalance['value']
            }
        }
        return newBalance
    }

    // grammar: turn+ EOF ;
    visitBattle(ctx){
        let firstPlayer = this.visit(ctx.turn()[0].endPhase())
        let secondPlayer = this.visit(ctx.turn()[1].endPhase())
        let winner = this.visit(ctx.turn()[ctx.turn().length-1].winStatus())
        let rounds = []
        //Initialize player data
        let lastRoundPlayers = [
            {
                name: firstPlayer,
                authority: 50,
                deck: {
                    "scout": {
                        name: card_list['scout']['name'],
                        cost: card_list['scout']['cost'],
                        faction: card_list['scout']['faction'],
                        type: card_list['scout']['type'],
                        count: 8,
                        scrapCount: 0,
                        discardCount: 0,
                        destroyedCount: 0,
                        playedCount: 0
                    },
                    "viper": {
                        name: card_list['viper']['name'],
                        cost: card_list['viper']['cost'],
                        faction: card_list['viper']['faction'],
                        type: card_list['scout']['type'],
                        count: 2,
                        scrapCount: 0,
                        discardCount: 0,
                        destroyedCount: 0,
                        playedCount: 0
                    }
                }
            },
            {
                name: secondPlayer,
                authority: 50,
                deck: {
                    "scout": {
                        name: card_list['scout']['name'],
                        cost: card_list['scout']['cost'],
                        faction: card_list['scout']['faction'],
                        type: card_list['scout']['type'],
                        count: 8,
                        scrapCount: 0,
                        discardCount: 0,
                        destroyedCount: 0,
                        playedCount: 0
                    },
                    "viper": {
                        name: card_list['viper']['name'],
                        cost: card_list['viper']['cost'],
                        faction: card_list['viper']['faction'],
                        type: card_list['scout']['type'],
                        count: 2,
                        scrapCount: 0,
                        discardCount: 0,
                        destroyedCount: 0,
                        playedCount: 0
                    }
                }
            }
        ]
        for(let i = 0; i < ctx.turn().length; i++){
            let nextRound = this.visit(ctx.turn()[i])
            //update the players  object based on the data collected from the latest round
            if(i % 2 == 0){
                nextRound['players'] = this.updatePlayerData(firstPlayer,lastRoundPlayers, nextRound)
            }else{
                nextRound['players'] = this.updatePlayerData(secondPlayer,lastRoundPlayers, nextRound)
            }
            rounds.push(nextRound)
            lastRoundPlayers = nextRound['players']
        }
        return {
            firstPlayer: firstPlayer,
            winner: winner,
            rounds: rounds
        }
    }

    // grammar: name HAS WON THE GAME NEWLINE ;
    // returns the name of the winner
    visitWinStatus(ctx){
        return this.visit(ctx.name())
    }

    // for each turn, get the summary of action and the user who performed it
    // baseInstantEffect* action+ (endPhase | winStatus) ;
    visitTurn(ctx){
        let turnData = {
            tradePool: 0,
            combatPool: 0,
            usedTrade: 0,
            usedCombat: 0,
            purchasedCards: [],
            playedCards: [],
            scrappedCards: [],
            discardedCards: [],
            destroyedBases: [],
            drawCount: 0,
            selfAuthority: 0, // authority change of current player
            otherAuthority: 0 // authority change of other player
        }
        //get summary of all actions performed in this turn
        for(let i = 0; i < ctx.action().length; i++){
            if(ctx.action()[i].baseInstantEffect()){
                if(ctx.action()[i].baseInstantEffect().positiveBalance()){
                    let balance = this.computeNewBalance({}, this.visit(ctx.action()[i]))
                    turnData['tradePool'] += balance['tradePool']
                    turnData['combatPool'] += balance['combatPool']
                    turnData['usedTrade'] += balance['usedTrade']
                    turnData['usedCombat'] += balance['usedCombat']
                    turnData['selfAuthority'] += balance['selfAuthority']
                    turnData['otherAuthority'] += balance['otherAuthority']
                }else{ //drawCardsWithShuffle
                    turnData['drawCount'] += this.visit(ctx.action()[i])
                }
            }
            else if(ctx.action()[i].purchase()){
                let purchaseActionDetail = this.visit(ctx.action()[i])
                turnData['purchasedCards'].push(purchaseActionDetail['card'])
                turnData['tradePool'] += purchaseActionDetail['balance']['tradePool']
                turnData['combatPool'] += purchaseActionDetail['balance']['combatPool']
                turnData['usedTrade'] += purchaseActionDetail['balance']['usedTrade']
                turnData['usedCombat'] += purchaseActionDetail['balance']['usedCombat']
                turnData['selfAuthority'] += purchaseActionDetail['balance']['selfAuthority']
                turnData['otherAuthority'] += purchaseActionDetail['balance']['otherAuthority']
            }
            else if(ctx.action()[i].play()){
                let playActionDetail = this.visit(ctx.action()[i])
                turnData['purchasedCards'] = turnData['purchasedCards'].concat(playActionDetail['acquiredCards'])
                turnData['playedCards'] = turnData['playedCards'].concat(playActionDetail['playedCards'])
                turnData['scrappedCards'] = turnData['scrappedCards'].concat(playActionDetail['scrappedCards'])
                turnData['drawCount'] += playActionDetail['drawCount']
                turnData['tradePool'] += playActionDetail['balance']['tradePool']
                turnData['combatPool'] += playActionDetail['balance']['combatPool']
                turnData['usedTrade'] += playActionDetail['balance']['usedTrade']
                turnData['usedCombat'] += playActionDetail['balance']['usedCombat']
                turnData['selfAuthority'] += playActionDetail['balance']['selfAuthority']
                turnData['otherAuthority'] += playActionDetail['balance']['otherAuthority']
            }
            else if(ctx.action()[i].attackPlayer()){
                let attackPlayerActionDetail = this.visit(ctx.action()[i])
                turnData['otherAuthority'] -= attackPlayerActionDetail['combat']
                turnData['usedCombat'] -= attackPlayerActionDetail['combat']
            }
            else if(ctx.action()[i].attackBase()){
                let attackBaseActionDetail = this.visit(ctx.action()[i])
                turnData['destroyedBases'].push(attackBaseActionDetail['target'])
                turnData['scrappedCards'] = turnData['scrappedCards'].concat(attackBaseActionDetail['scrappedCards'])
                turnData['tradePool'] += attackBaseActionDetail['balance']['tradePool']
                turnData['combatPool'] += attackBaseActionDetail['balance']['combatPool']
                turnData['usedTrade'] += attackBaseActionDetail['balance']['usedTrade']
                turnData['usedCombat'] += attackBaseActionDetail['balance']['usedCombat']
                turnData['selfAuthority'] += attackBaseActionDetail['balance']['selfAuthority']
                turnData['otherAuthority'] += attackBaseActionDetail['balance']['otherAuthority']
            }
            else if(ctx.action()[i].scrapCard()){
                let scrapCardActionDetail = this.visit(ctx.action()[i])
                turnData['scrappedCards'] = turnData['scrappedCards'].concat(scrapCardActionDetail['scrappedCards'])
                turnData['purchasedCards'] = turnData['purchasedCards'].concat(scrapCardActionDetail['acquiredCards'])
                turnData['destroyedBases'] = turnData['destroyedBases'].concat(scrapCardActionDetail['destroyedBases'])
                turnData['drawCount'] += scrapCardActionDetail['drawCount']
                turnData['tradePool'] += scrapCardActionDetail['balance']['tradePool']
                turnData['combatPool'] += scrapCardActionDetail['balance']['combatPool']
                turnData['usedTrade'] += scrapCardActionDetail['balance']['usedTrade']
                turnData['usedCombat'] += scrapCardActionDetail['balance']['usedCombat']
                turnData['selfAuthority'] += scrapCardActionDetail['balance']['selfAuthority']
                turnData['otherAuthority'] += scrapCardActionDetail['balance']['otherAuthority']
            }
            else if(ctx.action()[i].discard()){
                let discardActionDetail = this.visit(ctx.action()[i])
                turnData['discardedCards'] = turnData['discardedCards'].concat(discardActionDetail['discardedCards'])
                //console.log(turnData['discardedCards'])
            }
            else if(ctx.action()[i].choseEffect()){
                let choseEffectActionDetail = this.visit(ctx.action()[i])
                turnData['discardedCards'] = turnData['discardedCards'].concat(choseEffectActionDetail['discardedCards'])
                turnData['drawCount'] += choseEffectActionDetail['drawCount']
                turnData['scrappedCards'] = turnData['scrappedCards'].concat(choseEffectActionDetail['scrappedCards'])
                turnData['tradePool'] += choseEffectActionDetail['balance']['tradePool']
                turnData['combatPool'] += choseEffectActionDetail['balance']['combatPool']
                turnData['usedTrade'] += choseEffectActionDetail['balance']['usedTrade']
                turnData['usedCombat'] += choseEffectActionDetail['balance']['usedCombat']
                turnData['selfAuthority'] += choseEffectActionDetail['balance']['selfAuthority']
                turnData['otherAuthority'] += choseEffectActionDetail['balance']['otherAuthority']
            }else if(ctx.action()[i].activatingEffect()){
                let activatingEffectActionDetail = this.visit(ctx.action()[i])
                if( 'drawAndScrapFromHand' in activatingEffectActionDetail){
                    turnData['drawCount'] += activatingEffectActionDetail['drawAndScrapFromHand']['drawCount']
                    turnData['scrappedCards'].push(activatingEffectActionDetail['drawAndScrapFromHand']['scrappedCard'])
                }else if('scrapAndDraw' in activatingEffectActionDetail){
                    turnData['drawCount'] += activatingEffectActionDetail['scrapAndDraw']['drawCount']
                    turnData['scrappedCards'] = turnData['scrappedCards'].concat(activatingEffectActionDetail['scrapAndDraw']['scrappedCards'])
                }else if('scrap' in activatingEffectActionDetail){
                    turnData['scrappedCards'] = turnData['scrappedCards'].concat(activatingEffectActionDetail['scrap'])
                }else if('freeAcquireToTop' in activatingEffectActionDetail){
                    turnData['purchasedCards'].push(activatingEffectActionDetail['freeAcquireToTop'])
                }else if('destroyAndScrap' in activatingEffectActionDetail){
                    if(activatingEffectActionDetail['destroyAndScrap']['destroyedBase'] != ""){
                        turnData['destroyedBases'].push(activatingEffectActionDetail['destroyAndScrap']['destroyedBase'])
                    }
                    if(activatingEffectActionDetail['destroyAndScrap']['scrappedCard'] != ""){
                        turnData['scrappedCards'].push(activatingEffectActionDetail['destroyAndScrap']['scrappedCard'])
                    }
                }else if('copyBase' in activatingEffectActionDetail){
                    turnData['tradePool'] += activatingEffectActionDetail['copyBase']['tradePool']
                    turnData['combatPool'] += activatingEffectActionDetail['copyBase']['combatPool']
                    turnData['usedTrade'] += activatingEffectActionDetail['copyBase']['usedTrade']
                    turnData['usedCombat'] += activatingEffectActionDetail['copyBase']['usedCombat']
                    turnData['selfAuthority'] += activatingEffectActionDetail['copyBase']['selfAuthority']
                    turnData['otherAuthority'] += activatingEffectActionDetail['copyBase']['otherAuthority']
                }else if('discardAndDraw' in activatingEffectActionDetail){
                    turnData['discardedCards'] = turnData['discardedCards'].concat(activatingEffectActionDetail['discardAndDraw']['discardedCards'])
                    turnData['drawCount'] += activatingEffectActionDetail['discardAndDraw']['drawCount']
                }
            }
        }
        //console.log(turnData['discardedCards'])
        return turnData
    }

    //grammar: endTurn drawPhaseDetail* ;
    visitEndPhase(ctx){
        return this.visit(ctx.endTurn())
    }

    // grammar: name ENDS TURN INT NEWLINE ;
    visitEndTurn(ctx){
        return ctx.name().getText()
    }

    //grammar: baseInstantEffect | purchase | play | attackPlayer | attackBase | scrapCard | discard | choseEffect | activatingEffect;
    visitAction(ctx){
        if(ctx.baseInstantEffect()){
            return this.visit(ctx.baseInstantEffect())
        }else if(ctx.purchase()){
            return this.visit(ctx.purchase())
        }else if(ctx.play()){
            return this.visit(ctx.play())
        }else if(ctx.attackPlayer()){
            return this.visit(ctx.attackPlayer())
        }else if(ctx.attackBase()){
            return this.visit(ctx.attackBase())
        }else if(ctx.scrapCard()){
            return this.visit(ctx.scrapCard())
        }else if(ctx.discard()){
            return this.visit(ctx.discard())
        }else if(ctx.choseEffect()){
            return this.visit(ctx.choseEffect())
        }else{
            return this.visit(ctx.activatingEffect())
        }
    }

    // grammar: positiveBalance | drawCardsWithShuffle;
    visitBaseInstantEffect(ctx){
        if(ctx.positiveBalance()){
            return this.visit(ctx.positiveBalance())
        }
        if(ctx.drawCardsWithShuffle()){
            return this.visit(ctx.drawCardsWithShuffle())
        }
    }

    // grammar: purchaseSummary purchaseDetail*;
    visitPurchase(ctx){
        let purchase = {
            balance: {
                tradePool: 0,
                combatPool: 0,
                usedTrade: 0,
                usedCombat: 0,
                selfAuthority: 0, // authority change of current player
                otherAuthority: 0 // authority change of other player
            }
        }
        purchase['card'] = this.visit(ctx.purchaseSummary())
        for(let i = 0; i < ctx.purchaseDetail().length; i++){
            if(ctx.purchaseDetail()[i].negativeBalance()){
                let newBalanceDetail = this.visit(ctx.purchaseDetail()[i])
                purchase['balance'] = this.computeNewBalance(purchase['balance'], newBalanceDetail)
            }
        }
        return purchase
    }

    // grammar: ACQUIRED card  NEWLINE;
    visitPurchaseSummary(ctx){
        return this.visit(ctx.card())
    }

    // grammar: negativeBalance | acquireToHand | acquireToDeck;
    visitPurchaseDetail(ctx){
        let balance = this.visit(ctx.negativeBalance())
        if(balance['category'] != 'Trade' || balance['value'] > 0){
            return 'there was some error'
        }
        return balance
    }

    // grammar: playSummary playDetail*;
    // returns info about the cards played and associated effects
    visitPlay(ctx){
        let playSummary =  {
            acquiredCards: [],
            playedCards: [],
            scrappedCards: [],
            destroyedBases: [],
            drawCount: 0,
            balance: {
                tradePool: 0,
                combatPool: 0,
                usedTrade: 0,
                usedCombat: 0,
                selfAuthority: 0, // authority change of current player
                otherAuthority: 0 // authority change of other player
            }
        }
        if(ctx.playSummary().playSingle()){
            playSummary['playedCards'].push(this.visit(ctx.playSummary().playSingle()))
        }
        if(ctx.playDetail()){
            for(let i = 0; i < ctx.playDetail().length; i++){
                if(ctx.playDetail()[i].positiveBalance()){
                    let newBalanceDetail = this.visit(ctx.playDetail()[i])
                    playSummary['balance'] = this.computeNewBalance(playSummary['balance'], newBalanceDetail)   
                }
                else if(ctx.playDetail()[i].drawCardsWithShuffle()){
                    let drawCountSummary = this.visit(ctx.playDetail()[i])
                    playSummary['drawCount'] += drawCountSummary
                }
                else if(ctx.playDetail()[i].multiScrap()){
                    let scrappedCards = this.visit(ctx.playDetail()[i])
                    playSummary['scrappedCards'] = playSummary['scrappedCards'].concat(scrappedCards)
                }
                else if(ctx.playDetail()[i].simpleScrap()){
                    let simpleScrapSummary = this.visit(ctx.playDetail()[i])
                    playSummary['scrappedCards'].push(simpleScrapSummary)
                }
                else if(ctx.playDetail()[i].destroyBase()){
                    let destroyBaseSummary = this.visit(ctx.playDetail()[i])
                    playSummary['destroyedBases'].push(destroyBaseSummary)
                }
                else if(ctx.playDetail()[i].freeAcquire()){
                    let acquiredCard = this.visit(ctx.playDetail()[i])
                    playSummary['acquiredCards'].push(acquiredCard)
                }
            }
        }
        return playSummary
    }

    // grammar: PLAYED card NEWLINE;
    visitPlaySingle(ctx){
        return this.visit(ctx.card())
    }

    // grammar: positiveBalance | newAbility | drawCardsWithShuffle | scrapCardEffect | discarding | multiScrap | noScrap | simpleScrap | destroyBase | moveBaseToDeck | freeAcquire | copyCardSummary | copyCardEffect;
    visitPlayDetail(ctx){
        if(ctx.positiveBalance()){
            return this.visit(ctx.positiveBalance())
        }else if(ctx.drawCardsWithShuffle()){
            return this.visit(ctx.drawCardsWithShuffle())
        }else if(ctx.multiScrap()){
            return this.visit(ctx.multiScrap())
        }else if(ctx.simpleScrap()){
            return this.visit(ctx.simpleScrap())
        }else if(ctx.destroyBase()){
            return this.visit(ctx.destroyBase())
        }else if(ctx.freeAcquire()){
            return this.visit(ctx.freeAcquire())
        }
    }

    // grammar: multiScrapSummary multiScrapDetail;
    visitMultiScrap(ctx) {
        return this.visit(ctx.multiScrapDetail());
    }

    // grammar: scrapCardEffect+ simpleScrap+;
    visitMultiScrapDetail(ctx) {
        let scrappedCards = []
        for(let i = 0; i < ctx.simpleScrap(); i++){
            scrappedCards.push(this.visit(ctx.simpleScrap()[i]))
        }
        return scrappedCards
    }

    // grammar: SCRAPPED card NEWLINE;
    visitSimpleScrap(ctx) {
        return this.visit(ctx.card())
    }

    // grammar: ACQUIRED card  NEWLINE (acquireToHand|acquireToDeck);
    visitFreeAcquire(ctx) {
        return this.visit(ctx.card());
      }

    // grammar: attackPlayerSummary negativeBalance+;
    visitAttackPlayer(ctx){
        return this.visit(ctx.attackPlayerSummary())
    }

    // grammar:  ATTACKED name FOR INT newAuthority NEWLINE;
    visitAttackPlayerSummary(ctx) {
        return {
            target: this.visit(ctx.name()),
            combat: parseInt(ctx.INT())
        }
    }

    // grammar: atackBaseSummary attackBaseDetail* ;
    visitAttackBase(ctx) {
        let attackBase = {
            scrappedCards: [],
            balance: {
                tradePool: 0,
                combatPool: 0,
                usedTrade: 0,
                usedCombat: 0,
                selfAuthority: 0, // authority change of current player
                otherAuthority: 0 // authority change of other player
            }

        }
        attackBase['target'] = this.visit(ctx.attackBaseSummary())
        for(let i = 0; i < ctx.attackBaseDetail().length; i++){
            if(ctx.attackBaseDetail()[i].negativeBalance()){
                let newBalanceDetail = this.visit(ctx.attackBaseDetail()[i])
                attackBase['balance'] = this.computeNewBalance(attackBase['balance'], newBalanceDetail)
            }else if (ctx.attackBaseDetail()[i].scrapAction()){
                attackBase['scrappedCards'].push(this.visit(ctx.attackBaseDetail()[i]))
            }
        }
        return attackBase
    }
    
    // grammar: ATTACKED card NEWLINE;
    visitAttackBaseSummary(ctx) {
        return this.visit(ctx.card())
    }

    // grammar: negativeBalance | destroyBase | scrapAction;
    visitAttackBaseDetail(ctx) {
        if(ctx.negativeBalance()){
            return this.visit(ctx.negativeBalance())
        }else if(ctx.scrapAction()){
            return this.visit(ctx.scrapAction())
        }
      }

    // grammar: scrappingSummary scrappingDetail;
	visitScrapCard(ctx) {
        return this.visit(ctx.scrappingDetail())
    }
  
    // grammar: scrapEffect+;
    visitScrappingDetail(ctx) {
        let scrapSummary = {
            scrappedCards: [],
            acquiredCards: [],
            drawCount: 0,
            destroyedBases: [],
            balance: {
                tradePool: 0,
                combatPool: 0,
                usedTrade: 0,
                usedCombat: 0,
                selfAuthority: 0, // authority change of current player
                otherAuthority: 0 // authority change of other player
            }
        }
        for(let i = 0; i < ctx.scrapEffect().length; i++){
            if(ctx.scrapEffect()[i].scrapAction()){
                scrapSummary['scrappedCards'].push(this.visit(ctx.scrapEffect()[i]))
            }
            else if(ctx.scrapEffect()[i].drawCardsWithShuffle()){
                scrapSummary['drawCount'] += this.visit(ctx.scrapEffect()[i])
            }
            else if(ctx.scrapEffect()[i].destroyBase()){
                scrapSummary['destroyedBases'].push(this.visit(ctx.scrapEffect()[i]))
            }else if(ctx.scrapEffect()[i].newBalanceDetail()){
                scrapSummary['balance'] = this.computeNewBalance(scrapSummary['balance'],this.visit(ctx.scrapEffect()[i]))
            }else if(ctx.scrapEffect()[i].freePurchase()){
                scrapSummary['acquiredCards'].push(this.visit(ctx.scrapEffect()[i]))
            }
        }
        return scrapSummary
    }

    // grammar: scrapAction | drawCardsWithShuffle | destroyBase | newBalanceDetail | (freePurchase scrapAction) | replaceGambit | scrapSummary | moveDiscardToDeck;
    visitScrapEffect(ctx) {
        if(ctx.scrapAction()){
            return this.visit(ctx.scrapAction())
        }else if(ctx.drawCardsWithShuffle()){
            return this.visit(ctx.drawCardsWithShuffle())
        }else if(ctx.destroyBase()){
            return this.visit(ctx.destroyBase())
        }else if(ctx.newBalanceDetail()){
            return this.visit(ctx.newBalanceDetail())
        }else if(ctx.freePurchase()){
            return this.visit(ctx.freePurchase())
        }
    }

    // grammar: SCRAPPED card NEWLINE;
    visitScrapAction(ctx) {
        return this.visit(ctx.card())
    }

    // grammar: ACQUIRED card NEWLINE;
    visitFreePurchase(ctx) {
        return this.visit(ctx.card());
    }

    // grammar: discardSummary discardDetail* ;
    visitDiscard(ctx) {
        let discardSummary = {
            discardedCards: []
        }
        for(let i = 0; i < ctx.discardDetail().length; i++){
            if(ctx.discardDetail()[i].discarding()){
                let discardedCard = this.visit(ctx.discardDetail()[i])
                discardSummary['discardedCards'].push(discardedCard)
            }
        }
        //console.log(discardSummary)
        return discardSummary
    }
    
    // grammar: discardAction | discardEnd | discarding ;
    visitDiscardDetail(ctx) {
        if(ctx.discarding()){
            return this.visit(ctx.discarding())
        }
    }

    // grammar: choseEffectSummary choseEffectDetail*;
    visitChoseEffect(ctx) {
        let choseEffectSummary = {
            discardedCards: [],
            scrappedCards: [],
            drawCount: 0,
            balance: {
                tradePool: 0,
                combatPool: 0,
                usedTrade: 0,
                usedCombat: 0,
                selfAuthority: 0, // authority change of current player
                otherAuthority: 0 // authority change of other player
            }
        }
        for(let i = 0; i < ctx.choseEffectDetail().length; i++){
            if(ctx.choseEffectDetail()[i].discarding()){
                let discardedCard = this.visit(ctx.choseEffectDetail()[i])
                choseEffectSummary['discardedCards'].push(discardedCard)
            }else if(ctx.choseEffectDetail()[i].drawCardsWithShuffle()){
                let drawCount = this.visit(ctx.choseEffectDetail()[i])
                choseEffectSummary['drawCount'] += drawCount
            }else if(ctx.choseEffectDetail()[i].simpleScrap()){
                let scrappedCard = this.visit(ctx.choseEffectDetail()[i])
                choseEffectSummary['scrappedCards'].push(scrappedCard)
            }else if(ctx.choseEffectDetail()[i].positiveBalance()){
                let newBalance = this.visit(ctx.choseEffectDetail()[i])
                choseEffectSummary['balance'] = this.computeNewBalance(choseEffectSummary['balance'], newBalance)
            }
        }
        return choseEffectSummary
    }

    // grammar: selectDiscard | discardForPool | discarding | drawCardsWithShuffle | noScrap | simpleScrap | positiveBalance | refreshTradeRow | changeHiddenBaseToFaction | replaceGambit;
    visitChoseEffectDetail(ctx) {
        if(ctx.discarding()){
            return this.visit(ctx.discarding())
        }else if(ctx.drawCardsWithShuffle()){
            return this.visit(ctx.drawCardsWithShuffle())
        }else if(ctx.simpleScrap()){
            return this.visit(ctx.simpleScrap())
        }else if(ctx.positiveBalance()){
            return this.visit(ctx.positiveBalance())
        }
    }

    // grammar: activatingSummary activatingDetail?;
    visitActivatingEffect(ctx) {
        if(ctx.activatingDetail()){
            return this.visit(ctx.activatingDetail())
        }else{
            return {}
        }
    }

    // grammar: drawAndScrapFromHand | scrapAndDraw | scrap | noScrap | freeAcquireToTop | destroyAndScrap | noCopy | noCopyBases | copyCard | copyBase | discardAndDraw;
    visitActivatingDetail(ctx) {
        if(ctx.drawAndScrapFromHand()){
            return {
                drawAndScrapFromHand: this.visit(ctx.drawAndScrapFromHand())
            }
        }else if(ctx.scrapAndDraw()){
            return {
                scrapAndDraw: this.visit(ctx.scrapAndDraw())
            }
        }else if(ctx.scrap()){
            return {
                scrap: this.visit(ctx.scrap())
            }
        }else if(ctx.freeAcquireToTop()){
            return {
                freeAcquireToTop: this.visit(ctx.freeAcquireToTop())
            }
        }else if(ctx.destroyAndScrap()){
            return {
                destroyAndScrap: this.visit(ctx.destroyAndScrap())
            }
        }else if(ctx.copyBase()){
            return {
                copyBase: this.visit(ctx.copyBase())
            }
        }else if(ctx.discardAndDraw()){
            return {
                discardAndDraw: this.visit(ctx.discardAndDraw())
            }
        }
        else{
            return {}
        }
    }

    // grammar: drawCardsWithShuffle resolveHandScrap;
    visitDrawAndScrapFromHand(ctx) {
        return {
            drawCount: this.visit(ctx.drawCardsWithShuffle()),
            scrappedCard: this.visit(ctx.resolveHandScrap())
        }
    }

    // grammar: resolveHandScrapSummary scrapDetail;
    visitResolveHandScrap(ctx) {
        return this.visit(ctx.scrapDetail())
    }

    // grammar: scrap drawCardsWithShuffle;
    visitScrapAndDraw(ctx) {
        return {
            scrappedCards: this.visit(ctx.scrap()),
            drawCount: this.visit(ctx.drawCardsWithShuffle())
        }
    }

    // grammar: ACQUIRED card NEWLINE purchaseToTop;
    visitFreeAcquireToTop(ctx) {
        return this.visit(ctx.card())
    }

    // grammar: destroyBase | scrapDetail | destroyBase scrapDetail;
    visitDestroyAndScrap(ctx) {
        let destroyAndOrScrapSummary = {
            destroyedBase: "",
            scrappedCard: ""
        }
        if(ctx.destroyBase()){
            destroyAndOrScrapSummary['destroyedBase'] = this.visit(ctx.destroyBase())
        }
        if(ctx.scrapDetail()){
            destroyAndOrScrapSummary['scrappedCard'] = this.visit(ctx.scrapDetail())
        }
        return destroyAndOrScrapSummary
    }

    // grammar: copyBaseSummary copyBaseDetail;
    visitCopyBase(ctx) {
        return this.visit(ctx.copyBaseDetail());
    }

    // grammar: copyCardEffect newBalanceDetail*;
    visitCopyBaseDetail(ctx) {
        let balance = {
            tradePool: 0,
            combatPool: 0,
            usedTrade: 0,
            usedCombat: 0,
            selfAuthority: 0, // authority change of current player
            otherAuthority: 0 // authority change of other player
        }
        if(ctx.newBalanceDetail()){
            for(let i = 0; i < ctx.newBalanceDetail().length; i++){
                balance = this.computeNewBalance(balance,this.visit(ctx.newBalanceDetail()[i]))
            }
        }
        return balance
    }

    // grammar: selectDiscard+ discarding+ drawCardsWithShuffle;
    visitDiscardAndDraw(ctx) {
        let discardAndDraw = {
            discardedCards: [],
            drawCount: 0
        }
        for(let i = 0; i < ctx.discarding().length; i++){
            discardAndDraw['discardedCards'].push(this.visit(ctx.discarding()[i]))
        }
        discardAndDraw['drawCount'] = this.visit(ctx.drawCardsWithShuffle())
        return discardAndDraw
    }

    // grammar:  scrapSummary+ scrapDetail+;
    visitScrap(ctx){
        let scrappedCards = []
        for(let i = 0; i < ctx.scrapDetail().length; i++){
            scrappedCards.push(this.visit(ctx.scrapDetail()[i]))
        }
        return scrappedCards
    }

    // grammar: SCRAPPED card NEWLINE;
    visitScrapDetail(ctx){
        return this.visit(ctx.card())
    }

    // grammar: 'Destroyed' card NEWLINE;
	visitDestroyBase(ctx) {
        return this.visit(ctx.card())
      }
    
    // grammar: DISCARDED card NEWLINE;
    visitDiscarding(ctx){
        return this.visit(ctx.card())
    }

    // grammar: (drawCards+ shuffleCards drawCards+) | (shuffleCards? drawCards+);
    visitDrawCardsWithShuffle(ctx){
        //need to improve this
        let drawCount = 0
        for(let i = 0; i < ctx.drawCards().length; i++){
            drawCount += this.visit(ctx.drawCards()[i])
        }
        return drawCount
    }

    // grammar: DREW INT 'cards' NEWLINE;
    visitDrawCards(ctx){
        return parseInt(ctx.INT())
    }

    //grammar: name SEPARATOR card? effect balance NEWLINE;
    visitNewBalanceDetail(ctx){
        return this.visit(ctx.effect())
    }

    // grammar: : (INCREMENT | DECREASE | INT) (wordPlus) ;
    visitEffect(ctx){
        let val
        if(ctx.INCREMENT()){
            val = Number(ctx.INCREMENT().getText().replace('+',''))
        }else if(ctx.DECREASE()){
            val = 0 - Number(ctx.DECREASE().getText().replace('-',''))
        }else{
            val = 0
        }
        return {category: ctx.wordPlus().getText(), value: val}
    }

    // grammar: name SEPARATOR card? (INCREMENT | INT) (wordPlus) balance NEWLINE;
    visitPositiveBalance(ctx) {
        let val
        if(ctx.INCREMENT()){
            val = Number(ctx.INCREMENT().getText().replace('+',''))
        }else{
            val = 0
        }
        return {category: ctx.wordPlus().getText(), value: val}
    }

    // grammar: name SEPARATOR card? (DECREASE) (wordPlus) balance NEWLINE;
    visitNegativeBalance(ctx) {
        let val
        if(ctx.DECREASE()){
            val = 0 - Number(ctx.DECREASE().getText().replace('-',''))
        }
        return {category: ctx.wordPlus().getText(), value: val}
    }

    // grammar: (wordPlus)+ ;
    visitName(ctx){
        return ctx.getText()
    }

    //grammar: ((wordPlus '\'s'?) | INT)+ 
    visitCard(ctx){
        return ctx.getText().toLowerCase()
    }

    visitWordPlus(ctx){
        return ctx.getText()
    }

}

//battle log is a string representation of a battle log file content
export function parseBattle(battlelog) {
    const chars = new antlr4.InputStream(battlelog);
    const lexer = new StarRealmsLexer(chars);
    const tokens = new antlr4.CommonTokenStream(lexer);
    const parser = new StarRealmsParser(tokens);
    parser.buildParseTrees = true;
    try{
        const tree = parser.battle();
        return {
            status: "success",
            data: tree.accept(new Visitor())
        }
    }catch(error){
        return {
            status: "error",
            data: error.message
        }
    }
}

function getBattleS3(id){
    const client = new S3Client({ 
        region: "eu-central-1" ,
        credentials: {
          accessKeyId: process.env.SR_STATS_AWS_ACCESS_KEY_ID,
          secretAccessKey: process.env.SR_STATS_AWS_SECRET_ACCESS_KEY,
        }
    });
    const downloadParams = {
        Bucket: 'star-realms-games',
        Key: 'games/' + id,
    };
    const streamToString = (stream) =>
      new Promise((resolve, reject) => {
        const chunks = [];
        stream.on("data", (chunk) => chunks.push(chunk));
        stream.on("error", reject);
        stream.on("end", () => resolve(Buffer.concat(chunks).toString("utf8")));
    });
    let promise = new Promise((resolve,reject) => {
        client.send(new GetObjectCommand(downloadParams))
        .then((data) => {
            streamToString(data.Body).then(bodyContents => {
                return resolve(parseBattle(bodyContents))
            });
        })
    })
    return promise
}
//battle log is a string representation of a battle log file content
export async function fetchBattle(id) {
    let battleData = await getBattleS3(id)
    return battleData
}
