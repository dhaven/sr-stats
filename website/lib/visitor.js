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
import { stellar_allies } from './card_data/stellar_allies.js';
import { united_heroes } from './card_data/united_heroes.js';
import { crisis_heroes } from './card_data/crisis_heroes.js';
import { promo1 } from './card_data/promo1.js';
import { promo2 } from './card_data/promo2.js';
import { tech } from './card_data/tech.js';
import { command_decks } from './card_data/command_decks.js'

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
    stellar_allies['cards'],
    united_heroes['cards'],
    crisis_heroes['cards'],
    promo1['cards'],
    promo2['cards'],
    tech['cards'],
    command_decks['cards']
)

class Visitor extends StarRealmsVisitor{

    // update both players data with info from the latest round
    updatePlayerData(currentPlayer, lastRoundPlayers, nextRound){
        let newPlayerData = []
        for(let i = 0; i < lastRoundPlayers.length; i++){
            //get  copy of our player object
            let player = JSON.parse(JSON.stringify(lastRoundPlayers[i]))
            if(player.name in nextRound['authority']){
                player['authority'] += nextRound['authority'][player.name]['diff']
            }
            if(player.name == currentPlayer){
                for(let j = 0; j < nextRound['purchasedCards'].length; j++){
                    let nextCard = nextRound['purchasedCards'][j]
                    //console.log(nextCard)
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
                    if(nextCard in player['deck']){
                        player['deck'][nextCard]['discardCount'] += 1
                    }
                }
                for(let j = 0; j < nextRound['playedCards'].length; j++){
                    let nextCard = nextRound['playedCards'][j]
                    if(nextCard in player['deck']){
                        player['deck'][nextCard]['playedCount'] += 1
                    }
                }
                newPlayerData.push(player)
            }else{
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
    // returns a standard balance object from the union of curentBalance and nextBalance
    // nextBalance has format
    // {
    //     category: Trade/Combat/authority,
    //     target: string
    //     value: int
    //     newBalance: int
    // }
    computeNewBalance(currentBalance, nextBalance){
        let newBalance = {}
        //console.log(nextBalance)
        if(Object.keys(currentBalance).length == 0){
            newBalance = {
                tradePool: 0,
                combatPool: 0,
                usedTrade: 0,
                usedCombat: 0,
                authority: {}
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
            if(!(nextBalance['target'] in newBalance['authority'])){
                newBalance['authority'][nextBalance['target']] = {}
                newBalance['authority'][nextBalance['target']]['diff'] = nextBalance['value']
            }else{
                newBalance['authority'][nextBalance['target']]['diff'] += nextBalance['value']
            }
            newBalance['authority'][nextBalance['target']]['new'] = nextBalance['newBalance']
        }
        //console.log(newBalance)
        return newBalance
    }
    //auth1 auth2 are authority object of the form
    // {
    //     playerX: {diff: X, new: Y},
    //     playerY: {diff: X, new: Y}
    // }
    updateAuthorityObj(auth1, auth2){
        let newAuth = {}
        //console.log(auth1)
        //console.log(auth2)
        for(let key1 in auth1){
            newAuth[key1] = {}
            if(key1 in auth2){
                newAuth[key1]['diff'] = auth1[key1]['diff'] + auth2[key1]['diff']
            }else{
                newAuth[key1]['diff'] = auth1[key1]['diff']
            }
            newAuth[key1]['new'] = auth1[key1]['new']
        }
        for(let key2 in auth2){
            if(!(key2 in auth1)){
                newAuth[key2] = {}
                newAuth[key2]['diff'] = auth2[key2]['diff']
                newAuth[key2]['new'] = auth2[key2]['new']
            }
        }
        //console.log(newAuth)
        return newAuth
    }

    initializeDeck(type, current){
        if(type == "default"){
            // add 8 scout and 2 vipers to current deck
            current["scout"] = {
                name: card_list['scout']['name'],
                cost: card_list['scout']['cost'],
                faction: card_list['scout']['faction'],
                type: card_list['scout']['type'],
                count: 8,
                scrapCount: 0,
                discardCount: 0,
                destroyedCount: 0,
                playedCount: 0
            }
            current["viper"] = {
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
        }else if(type == "alignment_commander"){
            let card_set = command_decks['commanders']['alignment']['deck']
            current = Object.assign(current,card_set)
        }else if(type == "alliance_commander"){
            let card_set = command_decks['commanders']['alliance']['deck']
            current = Object.assign(current,card_set)
        }else if(type == "coalition_commander"){
            let card_set = command_decks['commanders']['coalition']['deck']
            current = Object.assign(current,card_set)
        }else if(type == "pact_commander"){
            let card_set = command_decks['commanders']['pact']['deck']
            current = Object.assign(current,card_set)
        }else if(type == "unity_commander"){
            let card_set = command_decks['commanders']['unity']['deck']
            current = Object.assign(current,card_set)
        }else if(type == "union_commander"){
            let card_set = command_decks['commanders']['union']['deck']
            current = Object.assign(current,card_set)
        }else if(type == "lostfleet_commander"){
            let card_set = command_decks['commanders']['lostfleet']['deck']
            current = Object.assign(current,card_set)
        }
        return current
    }

    // grammar: turn+;
    visitBattle(ctx){
        let firstPlayer = this.visit(ctx.turn()[0].endPhase())
        let secondPlayer = this.visit(ctx.turn()[1].endPhase())
        let rounds = []
        let winner = ""
        //Initialize player data
        let lastRoundPlayers = [
            {
                name: firstPlayer,
                completedMissions: [],
                deckInitialized: false,
                deck: {}
            },
            {
                name: secondPlayer,
                completedMissions: [],
                deckInitialized: false,
                deck: {}
            }
        ]
        for(let i = 0; i < ctx.turn().length; i++){
            let nextRound = this.visit(ctx.turn()[i])
            if(nextRound['winner'] != ""){
                winner = nextRound['winner']
            }
            //console.log(nextRound['authority'])
            //update the players  object based on the data collected from the latest round
            for(let j = 0; j < lastRoundPlayers.length; j++){
                if(!(lastRoundPlayers[j]['deckInitialized']) && (lastRoundPlayers[j]['name'] in nextRound['authority'])){
                    let startAuthority = nextRound['authority'][lastRoundPlayers[j]['name']]['new'] - nextRound['authority'][lastRoundPlayers[j]['name']]['diff']
                    if(startAuthority == 50){
                        //initialize deck with standard game
                        lastRoundPlayers[j]['authority'] = 50
                        lastRoundPlayers[j]['deck'] = this.initializeDeck("default", lastRoundPlayers[j]['deck'])
                        lastRoundPlayers[j]['deckInitialized']= true
                    }else if(startAuthority == 64){
                        lastRoundPlayers[j]['authority'] = 64
                        lastRoundPlayers[j]['deck'] = this.initializeDeck("alignment_commander", lastRoundPlayers[j]['deck'])
                        lastRoundPlayers[j]['deckInitialized']= true
                    }
                    else if(startAuthority == 68){
                        lastRoundPlayers[j]['authority'] = 68
                        lastRoundPlayers[j]['deck'] = this.initializeDeck("alliance_commander", lastRoundPlayers[j]['deck'])
                        lastRoundPlayers[j]['deckInitialized']= true
                    }
                    else if(startAuthority == 62){
                        lastRoundPlayers[j]['authority'] = 62
                        lastRoundPlayers[j]['deck'] = this.initializeDeck("coalition_commander", lastRoundPlayers[j]['deck'])
                        lastRoundPlayers[j]['deckInitialized']= true
                    }
                    else if(startAuthority == 66){
                        lastRoundPlayers[j]['authority'] = 66
                        lastRoundPlayers[j]['deck'] = this.initializeDeck("pact_commander", lastRoundPlayers[j]['deck'])
                        lastRoundPlayers[j]['deckInitialized']= true
                    }
                    else if(startAuthority == 70){
                        lastRoundPlayers[j]['authority'] = 70
                        lastRoundPlayers[j]['deck'] = this.initializeDeck("unity_commander", lastRoundPlayers[j]['deck'])
                        lastRoundPlayers[j]['deckInitialized']= true
                    }
                    else if(startAuthority == 60){
                        lastRoundPlayers[j]['authority'] = 60
                        lastRoundPlayers[j]['deck'] = this.initializeDeck("union_commander", lastRoundPlayers[j]['deck'])
                        lastRoundPlayers[j]['deckInitialized']= true
                    }
                    else if(startAuthority == 72){
                        lastRoundPlayers[j]['authority'] = 72
                        lastRoundPlayers[j]['deck'] = this.initializeDeck("lostfleet_commander", lastRoundPlayers[j]['deck'])
                        lastRoundPlayers[j]['deckInitialized']= true
                    }
                }
            }
            if(i % 2 == 0){
                nextRound['players'] = this.updatePlayerData(firstPlayer,lastRoundPlayers, nextRound)
            }else{
                nextRound['players'] = this.updatePlayerData(secondPlayer,lastRoundPlayers, nextRound)
            }
            rounds.push(nextRound)
            lastRoundPlayers = JSON.parse(JSON.stringify(nextRound['players']))
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
    // grammar: action+ (endPhase | winStatus | EOF) ;
    visitTurn(ctx){
        let turnData = {
            tradePool: 0,
            combatPool: 0,
            usedTrade: 0,
            usedCombat: 0,
            purchasedCards: [],
            completedMission: "",
            playedCards: [],
            scrappedCards: [],
            discardedCards: [],
            destroyedBases: [],
            winner: "",
            drawCount: 0,
            authority: {},
        }
        //get summary of all actions performed in this turn
        for(let i = 0; i < ctx.action().length; i++){
            //console.log(turnData['authority'])
            if(ctx.action()[i].startTurnEffect()){
                if(ctx.action()[i].startTurnEffect().positiveBalance()){
                    let balance = this.computeNewBalance({}, this.visit(ctx.action()[i]))
                    turnData['tradePool'] += balance['tradePool']
                    turnData['combatPool'] += balance['combatPool']
                    turnData['usedTrade'] += balance['usedTrade']
                    turnData['usedCombat'] += balance['usedCombat']
                    //console.log(balance['authority'])
                    turnData['authority'] = this.updateAuthorityObj(turnData['authority'], balance['authority'])
                }else{ //drawCardsWithShuffle
                    turnData['drawCount'] += this.visit(ctx.action()[i])
                }
            }
            else if(ctx.action()[i].triggeredEvent()){
                let triggeredEventDetail = this.visit(ctx.action()[i])
                turnData['tradePool'] += triggeredEventDetail['balance']['tradePool']
                turnData['combatPool'] += triggeredEventDetail['balance']['combatPool']
                turnData['usedTrade'] += triggeredEventDetail['balance']['usedTrade']
                turnData['usedCombat'] += triggeredEventDetail['balance']['usedCombat']
                //console.log(triggeredEventDetail['balance']['authority'])
                turnData['authority'] = this.updateAuthorityObj(turnData['authority'], triggeredEventDetail['balance']['authority'])
                turnData['scrappedCards'] = turnData['scrappedCards'].concat(triggeredEventDetail['scrappedCards'])
                turnData['discardedCards'] = turnData['discardedCards'].concat(triggeredEventDetail['discardedCards'])
                turnData['purchasedCards'] = turnData['purchasedCards'].concat(triggeredEventDetail['acquiredCards'])
                turnData['drawCount'] += triggeredEventDetail['drawCount']
            }
            else if(ctx.action()[i].resolveEvent()){
                let resolveEventDetail = this.visit(ctx.action()[i])
                turnData['drawCount'] += resolveEventDetail['drawCount']
                turnData['tradePool'] += resolveEventDetail['balance']['tradePool']
                turnData['combatPool'] += resolveEventDetail['balance']['combatPool']
                turnData['usedTrade'] += resolveEventDetail['balance']['usedTrade']
                turnData['usedCombat'] += resolveEventDetail['balance']['usedCombat']
                //console.log(resolveEventDetail['balance']['authority'])
                turnData['authority'] = this.updateAuthorityObj(turnData['authority'], resolveEventDetail['balance']['authority'])
                turnData['scrappedCards'] = turnData['scrappedCards'].concat(resolveEventDetail['scrappedCards'])
                turnData['discardedCards'] = turnData['discardedCards'].concat(resolveEventDetail['discardedCards'])
                turnData['purchasedCards'] = turnData['purchasedCards'].concat(resolveEventDetail['acquiredCards'])
            }
            else if(ctx.action()[i].purchase()){
                let purchaseActionDetail = this.visit(ctx.action()[i])
                turnData['purchasedCards'].push(purchaseActionDetail['card'])
                turnData['tradePool'] += purchaseActionDetail['balance']['tradePool']
                turnData['combatPool'] += purchaseActionDetail['balance']['combatPool']
                turnData['usedTrade'] += purchaseActionDetail['balance']['usedTrade']
                turnData['usedCombat'] += purchaseActionDetail['balance']['usedCombat']
                //console.log(purchaseActionDetail['balance']['authority'])
                turnData['authority'] = this.updateAuthorityObj(turnData['authority'], purchaseActionDetail['balance']['authority'])
            }
            else if(ctx.action()[i].purchaseHero()){
                let purchaseHeroDetail = this.visit(ctx.action()[i])
                turnData['purchasedCards'].push(purchaseHeroDetail['card'])
                turnData['tradePool'] += purchaseHeroDetail['balance']['tradePool']
                turnData['combatPool'] += purchaseHeroDetail['balance']['combatPool']
                turnData['usedTrade'] += purchaseHeroDetail['balance']['usedTrade']
                turnData['usedCombat'] += purchaseHeroDetail['balance']['usedCombat']
                //console.log(purchaseHeroDetail['balance']['authority'])
                turnData['authority'] = this.updateAuthorityObj(turnData['authority'], purchaseHeroDetail['balance']['authority'])
                turnData['scrappedCards'] = turnData['scrappedCards'].concat(purchaseHeroDetail['scrappedCards'])
                turnData['drawCount'] += purchaseHeroDetail['drawCount']
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
                //console.log(playActionDetail['balance']['authority'])
                turnData['authority'] = this.updateAuthorityObj(turnData['authority'], playActionDetail['balance']['authority'])
                if(playActionDetail['mission'] != ""){
                    turnData['completedMission'] = playActionDetail['mission']
                }
                if(playActionDetail['winner'] != ""){
                    turnData['winner'] = playActionDetail['winner']
                }
            }
            else if(ctx.action()[i].attackPlayer()){
                let attackPlayerActionDetail = this.visit(ctx.action()[i])
                turnData['authority'] = this.updateAuthorityObj(turnData['authority'], attackPlayerActionDetail['authority'])
                turnData['tradePool'] += attackPlayerActionDetail['tradePool']
                turnData['combatPool'] += attackPlayerActionDetail['combatPool']
                turnData['usedTrade'] += attackPlayerActionDetail['usedTrade']
                turnData['usedCombat'] += attackPlayerActionDetail['usedCombat']
            }
            else if(ctx.action()[i].attackBase()){
                let attackBaseActionDetail = this.visit(ctx.action()[i])
                turnData['destroyedBases'].push(attackBaseActionDetail['target'])
                turnData['scrappedCards'] = turnData['scrappedCards'].concat(attackBaseActionDetail['scrappedCards'])
                turnData['tradePool'] += attackBaseActionDetail['balance']['tradePool']
                turnData['combatPool'] += attackBaseActionDetail['balance']['combatPool']
                turnData['usedTrade'] += attackBaseActionDetail['balance']['usedTrade']
                turnData['usedCombat'] += attackBaseActionDetail['balance']['usedCombat']
                //console.log(attackBaseActionDetail['balance']['authority'])
                turnData['authority'] = this.updateAuthorityObj(turnData['authority'], attackBaseActionDetail['balance']['authority'])
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
                //console.log(scrapCardActionDetail['balance']['authority'])
                turnData['authority'] = this.updateAuthorityObj(turnData['authority'], scrapCardActionDetail['balance']['authority'])
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
                //console.log(choseEffectActionDetail['balance']['authority'])
                turnData['authority'] = this.updateAuthorityObj(turnData['authority'], choseEffectActionDetail['balance']['authority'])
            }else if(ctx.action()[i].activatingEffect()){
                let activatingEffectActionDetail = this.visit(ctx.action()[i])
                turnData['purchasedCards'] = turnData['purchasedCards'].concat(activatingEffectActionDetail['acquiredCards'])
                turnData['scrappedCards'] = turnData['scrappedCards'].concat(activatingEffectActionDetail['scrappedCards'])
                turnData['discardedCards'] = turnData['discardedCards'].concat(activatingEffectActionDetail['discardedCards'])
                turnData['drawCount'] += activatingEffectActionDetail['drawCount']
                turnData['tradePool'] += activatingEffectActionDetail['balance']['tradePool']
                turnData['combatPool'] += activatingEffectActionDetail['balance']['combatPool']
                turnData['usedTrade'] += activatingEffectActionDetail['balance']['usedTrade']
                turnData['usedCombat'] += activatingEffectActionDetail['balance']['usedCombat']
                turnData['authority'] = this.updateAuthorityObj(turnData['authority'], activatingEffectActionDetail['balance']['authority'])
            }
        }
        if(ctx.winStatus()){
            turnData['winner'] = this.visit(ctx.winStatus())
        }
        //console.log(turnData['authority'])
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

    //grammar: startTurnEffect | triggeredEvent | resolveEvent | purchase | purchaseHero | play | attackPlayer | attackBase | scrapCard | discard | choseEffect | activatingEffect;
    visitAction(ctx){
        if(ctx.startTurnEffect()){
            return this.visit(ctx.startTurnEffect())
        }else if(ctx.triggeredEvent()){
            return this.visit(ctx.triggeredEvent())
        }else if(ctx.resolveEvent()){
            return this.visit(ctx.resolveEvent())
        }else if(ctx.purchase()){
            return this.visit(ctx.purchase())   
        }else if(ctx.purchaseHero()){
            return this.visit(ctx.purchaseHero())
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
    visitStartTurnEffect(ctx){
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
                authority: {}
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

    // grammar: ACQUIRED card TO HAND NEWLINE;
    visitAcquireToHand(ctx) {
        return this.visit(ctx.card())
    }
    
    // grammar: ACQUIRED card TO THE TOP OF THE DECK NEWLINE;
	visitAcquireToDeck(ctx) {
        return this.visit(ctx.card());
    }

    // grammar: purchaseSummary purchaseHeroDetail playHero*;
    visitPurchaseHero(ctx) {
        let purchase = {
            card : '',
            scrappedCards: [],
            drawCount : 0,
            balance: {
                tradePool: 0,
                combatPool: 0,
                usedTrade: 0,
                usedCombat: 0,
                authority: {}
            }
        }
        purchase['card'] = this.visit(ctx.purchaseSummary())
        let newBalanceDetail = this.visit(ctx.purchaseHeroDetail())
        purchase['balance'] = this.computeNewBalance(purchase['balance'], newBalanceDetail)
        for(let i = 0; i < ctx.playHero().length; i++){
            if(ctx.playHero()[i].positiveBalance()){
                let playHeroDetail = this.visit(ctx.playHero()[i])
                purchase['balance'] = this.computeNewBalance(purchase['balance'], playHeroDetail)
            }else if(ctx.playHero()[i].drawCardsWithShuffle()){
                purchase['drawCount'] += this.visit(ctx.playHero()[i])
            }else if(ctx.playHero()[i].multiScrapDetail()){
                let playHeroDetail = this.visit(ctx.playHero()[i])
                purchase['scrappedCards'] = purchase['scrappedCards'].concat(playHeroDetail)
            }else if(ctx.playHero()[i].simpleScrap()){
                let playHeroDetail = this.visit(ctx.playHero()[i])
                purchase['scrappedCards'].push(playHeroDetail)
            }
        }
        //console.log(purchase)
        return purchase
    }

    // grammar: negativeBalance acquireHeroToTable refreshIndicators;
    visitPurchaseHeroDetail(ctx) {
        return this.visit(ctx.negativeBalance())
    }

    // grammar: tradeRowScrap | resolveFreeAcquire | resolveSelfScrap | multiScrapSummary | positiveBalance | drawCardsWithShuffle | multiScrapDetail | simpleScrap;
    visitPlayHero(ctx) {
        if(ctx.positiveBalance()){
            return this.visit(ctx.positiveBalance())
        }else if(ctx.drawCardsWithShuffle()){
            return this.visit(ctx.drawCardsWithShuffle())
        }else if(ctx.multiScrapDetail()){
            return this.visit(ctx.multiScrapDetail())
        }else if(ctx.simpleScrap()){
            return this.visit(ctx.simpleScrap())
        }else{
            console.log("error")
        }
      }

    // grammar: playSummary playDetail* completeMission?;
    // returns info about the cards played and associated effects
    visitPlay(ctx){
        let playSummary =  {
            acquiredCards: [],
            playedCards: [],
            scrappedCards: [],
            destroyedBases: [],
            drawCount: 0,
            winner: "",
            mission: "",
            balance: {
                tradePool: 0,
                combatPool: 0,
                usedTrade: 0,
                usedCombat: 0,
                authority: {}
            }
        }
        if(ctx.playSummary().playSingle()){
            playSummary['playedCards'].push(this.visit(ctx.playSummary().playSingle()))
        }
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
        if(ctx.completeMission()){
            let missionSummary = this.visit(ctx.completeMission())
            playSummary['balance']['tradePool'] += missionSummary['balance']['tradePool']
            playSummary['balance']['combatPool'] += missionSummary['balance']['combatPool']
            playSummary['balance']['usedTrade'] += missionSummary['balance']['usedTrade']
            playSummary['balance']['usedCombat'] += missionSummary['balance']['usedCombat']
            playSummary['balance']['authority'] = this.updateAuthorityObj(playSummary['balance']['authority'],  missionSummary['balance']['authority'])
            playSummary['acquiredCards'] = playSummary['acquiredCards'].concat(missionSummary['purchasedCards'])
            playSummary['drawCount'] += missionSummary['drawCount']
            playSummary['mission'] = missionSummary['name']
            playSummary['winner'] = missionSummary['winner']
            
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
        for(let i = 0; i < ctx.simpleScrap().length; i++){
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

    // grammar: completeMissionSummary  completeMissionsDetail*;
    visitCompleteMission(ctx) {
        let missionSummary = {
            name: '',
            drawCount: 0,
            purchasedCards: [],
            winner : "",
            balance: {
                tradePool: 0,
                combatPool: 0,
                usedTrade: 0,
                usedCombat: 0,
                authority: {}
            }
        }
        missionSummary['name'] = this.visit(ctx.completeMissionSummary())
        for(let i = 0; i < ctx.completeMissionsDetail().length; i++){
            if(ctx.completeMissionsDetail()[i].positiveBalance()){
                let missionDetail = this.visit(ctx.completeMissionsDetail()[i])
                missionSummary['balance'] = this.computeNewBalance(missionSummary['balance'], missionDetail)  
            }else if(ctx.completeMissionsDetail()[i].drawCardsWithShuffle()){
                missionSummary['drawCount'] += this.visit(ctx.completeMissionsDetail()[i])
            }else if(ctx.completeMissionsDetail()[i].acquireToHand()){
                let missionDetail = this.visit(ctx.completeMissionsDetail()[i])
                missionSummary['purchasedCards'].push(missionDetail)
            }else if(ctx.completeMissionsDetail()[i].freeAcquire()){
                let missionDetail = this.visit(ctx.completeMissionsDetail()[i])
                missionSummary['purchasedCards'].push(missionDetail)
            }else if(ctx.completeMissionsDetail()[i].winStatus()){
                missionSummary['winner'] = this.visit(ctx.completeMissionsDetail()[i])
            }
        }
        //console.log(missionSummary)
        return missionSummary
    }

    // grammar: positiveBalance | drawCardsWithShuffle | acquireToHand | selectMissionsReward | winStatus | freeAcquire | resolveAllyReward | resolveRuleReward | resolveDefendReward | resolveConvertReward;
    visitCompleteMissionsDetail(ctx) {
        if(ctx.positiveBalance()){
            return this.visit(ctx.positiveBalance())
        }else if(ctx.drawCardsWithShuffle()){
            return this.visit(ctx.drawCardsWithShuffle())
        }else if(ctx.acquireToHand()){
            return this.visit(ctx.acquireToHand())
        }else if(ctx.freeAcquire()){
            return this.visit(ctx.freeAcquire())
        }else if(ctx.winStatus()){
            return this.visit(ctx.winStatus())
        }
    }

    //grammar: REVEALED card NEWLINE;
    visitCompleteMissionSummary(ctx) {
        return this.visit(ctx.card());
    }

    // grammar: triggeredEventSummary triggeredEventDetail* ;
    visitTriggeredEvent(ctx) {
        let eventSummary = {
            drawCount: 0,
            scrappedCards: [],
            discardedCards: [],
            acquiredCards: [],
            balance: {
                tradePool: 0,
                combatPool: 0,
                usedTrade: 0,
                usedCombat: 0,
                authority: {}
            }
        }
        eventSummary['event'] = this.visit(ctx.triggeredEventSummary())
        for(let i = 0; i < ctx.triggeredEventDetail().length; i++){
            if(ctx.triggeredEventDetail()[i].positiveBalance()) {
                let newBalance = this.visit(ctx.triggeredEventDetail()[i])
                eventSummary['balance'] = this.computeNewBalance(eventSummary['balance'], newBalance)
            }else if(ctx.triggeredEventDetail()[i].negativeBalance()) {
                let newBalance = this.visit(ctx.triggeredEventDetail()[i])
                eventSummary['balance'] = this.computeNewBalance(eventSummary['balance'], newBalance)
            }else if(ctx.triggeredEventDetail()[i].scrapAction()) {
                let scrappedCard = this.visit(ctx.triggeredEventDetail()[i])
                eventSummary['scrappedCards'].push(scrappedCard)
            }else if(ctx.triggeredEventDetail()[i].drawCardsWithShuffle()) {
                eventSummary['drawCount'] += this.visit(ctx.triggeredEventDetail()[i])
            }else if(ctx.triggeredEventDetail()[i].resolveEvent()) {
                let resolveEvent = this.visit(ctx.triggeredEventDetail()[i])
                eventSummary['drawCount'] += resolveEvent['drawCount']
                eventSummary['balance']['tradePool'] += resolveEvent['balance']['tradePool']
                eventSummary['balance']['combatPool'] += resolveEvent['balance']['combatPool']
                eventSummary['balance']['usedTrade'] += resolveEvent['balance']['usedTrade']
                eventSummary['balance']['usedCombat'] += resolveEvent['balance']['usedCombat']
                eventSummary['balance']['authority'] = this.updateAuthorityObj(eventSummary['balance']['authority'],  resolveEvent['balance']['authority'])
                eventSummary['scrappedCards'] = eventSummary['scrappedCards'].concat(resolveEvent['scrappedCards'])
                eventSummary['discardedCards'] = eventSummary['discardedCards'].concat(resolveEvent['discardedCards'])
                eventSummary['acquiredCards'] = eventSummary['acquiredCards'].concat(resolveEvent['acquiredCards'])
            }
        }
        //console.log(eventSummary)
        return eventSummary
    }

    //grammar: REVEALED EVENT card NEWLINE ;
    visitTriggeredEventSummary(ctx) {
        return this.visit(ctx.card())
    }
  
  
    // positiveBalance | negativeBalance | scrapAction | drawCardsWithShuffle | resolveEvent;
    visitTriggeredEventDetail(ctx) {
        if(ctx.positiveBalance()){
            return this.visit(ctx.positiveBalance())
        }else if(ctx.negativeBalance()){
            return this.visit(ctx.negativeBalance())
        }else if(ctx.scrapAction()){
            return this.visit(ctx.scrapAction())
        }else if(ctx.drawCardsWithShuffle()){
            return this.visit(ctx.drawCardsWithShuffle())
        }else if(ctx.resolveEvent()){
            return this.visit(ctx.resolveEvent())
        }
    }

    // grammar: resolveEventSummary resolveEventDetail*;
    visitResolveEvent(ctx) {
        let eventSummary = {
            scrappedCards: [],
            discardedCards: [],
            acquiredCards: [],
            drawCount: 0,
            balance: {
                tradePool: 0,
                combatPool: 0,
                usedTrade: 0,
                usedCombat: 0,
                authority: {}
            }
        }
        if(ctx.resolveEventSummary().negativeBalance()){
            let newBalance = this.visit(ctx.resolveEventSummary())
            eventSummary['balance'] = this.computeNewBalance(eventSummary['balance'], newBalance)
            console.log(eventSummary['balance'])
        }
        for(let i = 0; i < ctx.resolveEventDetail().length; i++){
            if(ctx.resolveEventDetail()[i].negativeBalance()){
                let newBalance = this.visit(ctx.resolveEventDetail()[i])
                eventSummary['balance'] = this.computeNewBalance(eventSummary['balance'], newBalance)
            }else if(ctx.resolveEventDetail()[i].positiveBalance()){
                let newBalance = this.visit(ctx.resolveEventDetail()[i])
                eventSummary['balance'] = this.computeNewBalance(eventSummary['balance'], newBalance)
            }else if(ctx.resolveEventDetail()[i].acquireToDeck()){
                let summary = this.visit(ctx.resolveEventDetail()[i])
                eventSummary['acquiredCards'].push(summary)
            }else if(ctx.resolveEventDetail()[i].drawCardsWithShuffle()){
                eventSummary['drawCount'] += this.visit(ctx.resolveEventDetail()[i])
            }else if(ctx.resolveEventDetail()[i].discarding()){
                let discardedCard = this.visit(ctx.resolveEventDetail()[i])
                eventSummary['discardedCards'].push(discardedCard)
            }else if(ctx.resolveEventDetail()[i].scrapDetail()){
                let scrappedCard = this.visit(ctx.resolveEventDetail()[i])
                eventSummary['scrappedCards'].push(scrappedCard)
            }
        }
        return eventSummary
    }
    
    // grammar: resolveSimple | resolveBombardment | resolveComet | resolveCard | negativeBalance | resolveSupplyRun | resolvingTacticalMan1 | resolvingTacticalMan2 | resolveWormhole;
    visitResolveEventSummary(ctx) {
        if(ctx.negativeBalance()){
            return this.visit(ctx.negativeBalance())
        }
    }
  
    // grammar: negativeBalance | positiveBalance | discardFromEvent | discarding | scrapSummary | scrapDetail | resolveMobilization | acquireToDeck | selectCard | drawCardsWithShuffle | moveCardToHand | acquireToHand;
	visitResolveEventDetail(ctx) {
      if(ctx.negativeBalance()){
          return this.visit(ctx.negativeBalance())
      }else if(ctx.positiveBalance()){
        return this.visit(ctx.positiveBalance())
      }else if(ctx.acquireToDeck()){
        return this.visit(ctx.acquireToDeck())
      }else if(ctx.drawCardsWithShuffle()){
        return this.visit(ctx.drawCardsWithShuffle())
      }else if(ctx.discarding()){
          return this.visit(ctx.discarding())
      }else if(ctx.scrapDetail()){
          return this.visit(ctx.scrapDetail())
      }
	}

    // grammar: attackPlayerSummary negativeBalance+;
    visitAttackPlayer(ctx){
        let balance = {
            tradePool: 0,
            combatPool: 0,
            usedTrade: 0,
            usedCombat: 0,
            authority: {}
        }
        for(let i = 0; i < ctx.negativeBalance().length; i++){
            let newBalance = this.visit(ctx.negativeBalance()[i])
            balance = this.computeNewBalance(balance, newBalance)
        }
        return balance
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
                authority: {}
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
                authority: {}
            }
        }
        for(let i = 0; i < ctx.scrapEffect().length; i++){
            if(ctx.scrapEffect()[i].scrapAction()){
                scrapSummary['scrappedCards'].push(this.visit(ctx.scrapEffect()[i]))
                if(ctx.scrapEffect()[i].freePurchase()){
                    scrapSummary['acquiredCards'].push(this.visit(ctx.scrapEffect()[i].freePurchase()))
                }
            }
            else if(ctx.scrapEffect()[i].drawCardsWithShuffle()){
                scrapSummary['drawCount'] += this.visit(ctx.scrapEffect()[i])
            }
            else if(ctx.scrapEffect()[i].destroyBase()){
                scrapSummary['destroyedBases'].push(this.visit(ctx.scrapEffect()[i]))
            }else if(ctx.scrapEffect()[i].newBalanceDetail()){
                scrapSummary['balance'] = this.computeNewBalance(scrapSummary['balance'],this.visit(ctx.scrapEffect()[i]))
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
        }
    }

    // grammar: SCRAPPED card NEWLINE;
    visitScrapAction(ctx) {
        return this.visit(ctx.card())
    }

    // grammar: (ACQUIRED card TO HAND NEWLINE) | ( ACQUIRED card TO THE TOP OF THE DECK NEWLINE) | (ACQUIRED card NEWLINE) ;
    visitFreePurchase(ctx) {
        return this.visit(ctx.card());
    }

    // grammar: discardSummary discardDetail* ;
    visitDiscard(ctx) {
        let discardSummary = {
            discardedCards: [],
            balance: {
                tradePool: 0,
                combatPool: 0,
                usedTrade: 0,
                usedCombat: 0,
                authority: {}
            }
        }
        for(let i = 0; i < ctx.discardDetail().length; i++){
            if(ctx.discardDetail()[i].discarding()){
                let discardedCard = this.visit(ctx.discardDetail()[i])
                discardSummary['discardedCards'].push(discardedCard)
            }
            else if(ctx.discardDetail()[i].negativeBalance()){
                let balance = this.visit(ctx.discardDetail()[i])
                discardSummary['balance'] = this.computeNewBalance(discardSummary['balance'],balance)
            }
        }
        return discardSummary
    }
    
    // grammar: discardAction | discardEnd | discarding | eventRefuseDiscard | negativeBalance ;
    visitDiscardDetail(ctx) {
        if(ctx.discarding()){
            return this.visit(ctx.discarding())
        }
        else if(ctx.negativeBalance()){
            return this.visit(ctx.negativeBalance())
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
                authority: {}
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

    // grammar: activatingSummary activatingDetail*;
    visitActivatingEffect(ctx) {
        let activatingEffectSummary = {
            acquiredCards: [],
            scrappedCards: [],
            discardedCards: [],
            drawCount: 0,
            balance: {
                tradePool: 0,
                combatPool: 0,
                usedTrade: 0,
                usedCombat: 0,
                authority: {}
            }
        }
        for(let i = 0; i < ctx.activatingDetail().length; i++){
            if(ctx.activatingDetail()[i].drawAndScrapFromHand()){
                let summary = this.visit(ctx.activatingDetail()[i])
                activatingEffectSummary['scrappedCards'].push(summary['scrappedCard'])
                activatingEffectSummary['drawCount'] += summary['drawCount']
            }else if(ctx.activatingDetail()[i].scrapAndDraw()){
                let summary = this.visit(ctx.activatingDetail()[i])
                activatingEffectSummary['scrappedCards'] = activatingEffectSummary['scrappedCards'].concat(summary['scrappedCards'])
                activatingEffectSummary['drawCount'] += summary['drawCount']
            }else if(ctx.activatingDetail()[i].drawCardsWithShuffle()){
                activatingEffectSummary['drawCount'] += this.visit(ctx.activatingDetail()[i])
            }else if(ctx.activatingDetail()[i].scrap()){
                let summary = this.visit(ctx.activatingDetail()[i])
                activatingEffectSummary['scrappedCards'] = activatingEffectSummary['scrappedCards'].concat(summary)
            }else if(ctx.activatingDetail()[i].freeAcquireToTop()){
                let summary = this.visit(ctx.activatingDetail()[i])
                activatingEffectSummary['acquiredCards'].push(summary)
            }else if(ctx.activatingDetail()[i].scrapDetail()){
                let summary = this.visit(ctx.activatingDetail()[i])
                activatingEffectSummary['scrappedCards'].push(summary)
            }else if(ctx.activatingDetail()[i].copyBase()){
                let summary = this.visit(ctx.activatingDetail()[i])
                activatingEffectSummary['balance'] = this.computeNewBalance(activatingEffectSummary['balance'],summary)
            }else if(ctx.activatingDetail()[i].discardAndDraw()){
                let summary = this.visit(ctx.activatingDetail()[i])
                activatingEffectSummary['discardedCards'] = activatingEffectSummary['discardedCards'].concat(summary['discardedCards'])
                activatingEffectSummary['drawCount'] += summary['drawCount']
            }else if(ctx.activatingDetail()[i].positiveBalance()){
                let summary = this.visit(ctx.activatingDetail()[i])
                activatingEffectSummary['balance'] = this.computeNewBalance(activatingEffectSummary['balance'],summary)
            }else if(ctx.activatingDetail()[i].negativeBalance()){
                let summary = this.visit(ctx.activatingDetail()[i])
                activatingEffectSummary['balance'] = this.computeNewBalance(activatingEffectSummary['balance'],summary)
            }
        }
        return activatingEffectSummary
    }

    // grammar: drawAndScrapFromHand | scrapAndDraw | drawCardsWithShuffle | scrap | noScrap | freeAcquireToTop | destroyBase | scrapDetail | noCopy | noCopyBases | copyCard | copyBase | discardAndDraw | positiveBalance | negativeBalance | resolveStealth | copyStealth | selectCard;
    visitActivatingDetail(ctx) {
        if(ctx.drawAndScrapFromHand()){
            return this.visit(ctx.drawAndScrapFromHand())
        }else if(ctx.scrapAndDraw()){
            return this.visit(ctx.scrapAndDraw())
        }else if(ctx.drawCardsWithShuffle()){
            return this.visit(ctx.drawCardsWithShuffle())
        }else if(ctx.scrap()){
            return this.visit(ctx.scrap())
        }else if(ctx.freeAcquireToTop()){
            return this.visit(ctx.freeAcquireToTop())
        }else if(ctx.scrapDetail()){
            return this.visit(ctx.scrapDetail())
        }else if(ctx.copyBase()){
            return this.visit(ctx.copyBase())
        }else if(ctx.discardAndDraw()){
            return this.visit(ctx.discardAndDraw())
        }else if(ctx.positiveBalance()){
            return this.visit(ctx.positiveBalance())
        }else if(ctx.negativeBalance()){
            return this.visit(ctx.negativeBalance())
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
            authority: {}
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
        let effect = this.visit(ctx.effect())
        effect['target'] = ctx.name().getText()
        return effect
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
        return {
            category: ctx.wordPlus().getText(),
            value: val,
            target: ctx.name().getText(),
            newBalance: this.visit(ctx.balance())
        }
    }

    // grammar: name SEPARATOR card? (DECREASE) (wordPlus) balance NEWLINE;
    visitNegativeBalance(ctx) {
        let val
        if(ctx.DECREASE()){
            val = 0 - Number(ctx.DECREASE().getText().replace('-',''))
        }
        return {
            category: ctx.wordPlus().getText(), 
            value: val,
            target: ctx.name().getText(),
            newBalance: this.visit(ctx.balance())
        }
    }

    // grammar: '('wordPlus':'(INT | DECREASE)')' ;
	visitBalance(ctx) {
        if(ctx.INT()){
            return parseInt(ctx.INT())
        }else{
            return 0 - Number(ctx.DECREASE().getText().replace('-',''))
        }
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
