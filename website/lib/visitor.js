import antlr4 from 'antlr4';
import StarRealmsLexer from './antlr4/StarRealmsLexer.js';
import StarRealmsParser from './antlr4/StarRealmsParser.js';
import StarRealmsVisitor from './antlr4/StarRealmsVisitor.js';

class Visitor extends StarRealmsVisitor{

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
    updateAuthorityObj(currentAuth, nextAuth){
        let newAuth = {}
        for(let key1 in currentAuth){
            newAuth[key1] = {}
            if(key1 in nextAuth){
                newAuth[key1]['diff'] = currentAuth[key1]['diff'] + nextAuth[key1]['diff']
                newAuth[key1]['new'] = nextAuth[key1]['new']
            }else{
                newAuth[key1]['diff'] = currentAuth[key1]['diff']
                newAuth[key1]['new'] = currentAuth[key1]['new']
            }
        }
        for(let key2 in nextAuth){
            if(!(key2 in currentAuth)){
                newAuth[key2] = {}
                newAuth[key2]['diff'] = nextAuth[key2]['diff']
                newAuth[key2]['new'] = nextAuth[key2]['new']
            }
        }
        return newAuth
    }

    // grammar: turn+;
    visitBattle(ctx){
        let firstPlayer = this.visit(ctx.turn()[0].endPhase())
        let secondPlayer = this.visit(ctx.turn()[1].endPhase())
        let rounds = []
        let winner = ""
        let winCondition = ""
        for(let i = 0; i < ctx.turn().length; i++){
            let nextRound = this.visit(ctx.turn()[i])
            if(nextRound['winner'] != ""){
                winner = nextRound['winner']
            }
            if(nextRound['winCondition'] == "resignation"){
                winCondition = nextRound['winCondition']
            }
            if(i % 2 == 0){
                nextRound['player'] = firstPlayer
            }else{
                nextRound['player'] = secondPlayer
            }
            rounds.push(nextRound)
        }
        return {
            firstPlayer: firstPlayer,
            winner: winner,
            rounds: rounds,
            winCondition: winCondition
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
            completedMissions: [],
            events: [],
            playedCards: [],
            scrappedCards: [],
            discardedCards: [],
            destroyedBases: [],
            winner: "",
            winCondition: "",
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
                turnData['events'].push(triggeredEventDetail['event'])
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
                    turnData['completedMissions'].push(playActionDetail['mission'])
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
            }else if(ctx.action()[i].concede()){
                let summary = this.visit(ctx.action()[i])
                turnData['authority'] = this.updateAuthorityObj(turnData['authority'], summary['authority'])
                turnData['winCondition'] = "resignation"
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

    // grammar: name '('INT ')' CONCEDED NEWLINE negativeBalance;
	visitConcede(ctx) {
        return this.computeNewBalance({}, this.visit(ctx.negativeBalance()))
      }

    //grammar: startTurnEffect | triggeredEvent | resolveEvent | purchase | purchaseHero | play | attackPlayer | attackBase | scrapCard | discard | choseEffect | activatingEffect | concede;
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
        }else if(ctx.activatingEffect()){
            return this.visit(ctx.activatingEffect())
        }else if(ctx.concede()){
            return this.visit(ctx.concede())
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
            event: '',
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
            }else if(ctx.choseEffectDetail()[i].scrap()){
                let summary = this.visit(ctx.choseEffectDetail()[i])
                choseEffectSummary['scrappedCards'] = choseEffectSummary['scrappedCards'].concat(summary)
            }
        }
        return choseEffectSummary
    }

    // grammar: selectDiscard | discardForPool | discarding | drawCardsWithShuffle | noScrap | simpleScrap | positiveBalance | refreshTradeRow | changeHiddenBaseToFaction | replaceGambit | scrap;
    visitChoseEffectDetail(ctx) {
        if(ctx.discarding()){
            return this.visit(ctx.discarding())
        }else if(ctx.drawCardsWithShuffle()){
            return this.visit(ctx.drawCardsWithShuffle())
        }else if(ctx.simpleScrap()){
            return this.visit(ctx.simpleScrap())
        }else if(ctx.positiveBalance()){
            return this.visit(ctx.positiveBalance())
        }else if(ctx.scrap()){
            return this .visit(ctx.scrap())
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
            if(ctx.activatingDetail()[i].resolveHandScrap()){
                let summary = this.visit(ctx.activatingDetail()[i])
                activatingEffectSummary['scrappedCards'].push(summary)
            }else if(ctx.activatingDetail()[i].drawCardsWithShuffle()){
                activatingEffectSummary['drawCount'] += this.visit(ctx.activatingDetail()[i])
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
            }else if(ctx.activatingDetail()[i].discarding()){
                let summary = this.visit(ctx.activatingDetail()[i])
                activatingEffectSummary['discardedCards'].push(summary)
            }
        }
        return activatingEffectSummary
    }

    // grammar: drawAndScrapFromHand | scrapAndDraw | drawCardsWithShuffle | scrap | noScrap | freeAcquireToTop | destroyBase | scrapDetail | noCopy | noCopyBases | copyCard | copyBase | discardAndDraw | positiveBalance | negativeBalance | resolveStealth | copyStealth | selectCard;
    visitActivatingDetail(ctx) {
        if(ctx.resolveHandScrap()){
            return this.visit(ctx.resolveHandScrap())
        }else if(ctx.drawCardsWithShuffle()){
            return this.visit(ctx.drawCardsWithShuffle())
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
        }else if(ctx.discarding()){
            return this.visit(ctx.discarding())
        }
    }

    // grammar: resolveHandScrapSummary scrapDetail;
    visitResolveHandScrap(ctx) {
        return this.visit(ctx.scrapDetail())
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

//identify if there are any syntax errors in the file
export function findErrors(battlelog) {
    const chars = new antlr4.InputStream(battlelog);
    const lexer = new StarRealmsLexer(chars);
    const tokens = new antlr4.CommonTokenStream(lexer);
    const parser = new StarRealmsParser(tokens);
    parser.buildParseTrees = true;
    parser.battle() //this is really slow
    return parser._syntaxErrors == 0
}
