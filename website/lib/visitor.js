import antlr4 from 'antlr4';
import StarRealmsLexer from './antlr4/StarRealmsLexer.js';
import StarRealmsParser from './antlr4/StarRealmsParser.js';
import StarRealmsVisitor from './antlr4/StarRealmsVisitor.js';

class Visitor extends StarRealmsVisitor{

    updatePlayerData(currentPlayer, lastRoundPlayers, nextRound){
        let newPlayerData = []
        for(let i = 0; i < lastRoundPlayers.length; i++){
            //get  copy of our player object
            let player = JSON.parse(JSON.stringify(lastRoundPlayers[i]))
            if(player.name == currentPlayer){
                player['authority'] += nextRound['selfAuthority']
                for(let j = 0; j < nextRound['purchasedCards'].length; j++){
                    let nextCard = nextRound['purchasedCards'][j]
                    if(nextCard in player.deck){
                        player.deck[nextCard].count += 1
                    }else{
                        player.deck[nextCard] = {
                            type: nextCard,
                            count: 1
                        }
                    }
                }
                newPlayerData.push(player)
            }else{
                player['authority'] += nextRound['otherAuthority']
                newPlayerData.push(player)
            }
        }
        return newPlayerData
    }
    
    computeNewBalance(currentBalance, nextBalance){
        if(Object.keys(currentBalance).length === 0){
            currentBalance = {
                tradePool: 0,
                combatPool: 0,
                usedTrade: 0,
                usedCombat: 0,
                selfAuthority: 0, // authority change of current player
                otherAuthority: 0 // authority change of other player
            }
        }
        if(nextBalance['category'] == 'Trade'){
            if(nextBalance['value'] > 0){
                currentBalance['tradePool'] += nextBalance['value']
            }else{
                currentBalance['usedTrade'] += nextBalance['value']
            }
        }
        else if(nextBalance['category'] == 'Combat'){
            if(nextBalance['value'] > 0){
                currentBalance['combatPool'] += nextBalance['value']
            }else{
                currentBalance['usedCombat'] += nextBalance['value']
            }
        }
        else if(nextBalance['category'] == 'Authority'){
            //we assume any > 0 authority is for the current player
            // and any < 0 authority isfor the opponent
            if(nextBalance['value'] > 0){
                currentBalance['selfAuthority'] += nextBalance['value']
            }else{
                currentBalance['otherAuthority'] += nextBalance['value']
            }
        }
        return currentBalance
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
                    "Scout": {
                        name: "Scout",
                        count: 8
                    },
                    "Viper": {
                        name: "Viper",
                        count: 2
                    }
                }
            },
            {
                name: secondPlayer,
                authority: 50,
                deck: {
                    "Scout": {
                        name: "Scout",
                        count: 8
                    },
                    "Viper": {
                        name: "Viper",
                        count: 2
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

    // grammar: name 'has' 'won' 'the' 'game' NEWLINE ;
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
        //get any new balance triggered from bases
        if(ctx.baseInstantEffect()){
            for(let i = 0; i < ctx.baseInstantEffect().length; i++){
                if(ctx.baseInstantEffect()[i].newBalanceDetail()){
                    let balance = this.computeNewBalance({}, this.visit(ctx.baseInstantEffect()[i]))
                    turnData['tradePool'] += balance['tradePool']
                    turnData['combatPool'] += balance['combatPool']
                    turnData['usedTrade'] += balance['usedTrade']
                    turnData['usedCombat'] += balance['usedCombat']
                    turnData['selfAuthority'] += balance['selfAuthority']
                    turnData['otherAuthority'] += balance['otherAuthority']
                }else{ //drawCardsWithShuffle
                    turnData['drawCount'] += this.visit(ctx.baseInstantEffect()[i])
                }
            }
        }
        //get summary of all actions performed in this turn
        for(let i = 0; i < ctx.action().length; i++){
            if(ctx.action()[i].purchase()){
                let purchaseActionDetail = this.visit(ctx.action()[i])
                turnData['purchasedCards'].push(purchaseActionDetail['card'])
                turnData['usedTrade'] += purchaseActionDetail['balance']['value']
            }
            else if(ctx.action()[i].play()){
                let playActionDetail = this.visit(ctx.action()[i])
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
                turnData['usedCombat'] += attackBaseActionDetail['balance']['value']
            }
            else if(ctx.action()[i].scrapCard()){
                let scrapCardActionDetail = this.visit(ctx.action()[i])
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
            }
            else if(ctx.action()[i].choseEffect()){
                let choseEffectActionDetail = this.visit(ctx.action()[i])
                if(ctx.action()[i].choseEffect().choseDiscardAndDraw()){
                    turnData['discardedCards'] = turnData['discardedCards'].concat(choseEffectActionDetail['discardedCards'])
                    turnData['drawCount'] += choseEffectActionDetail['drawCount']
                }else{
                    turnData['tradePool'] += choseEffectActionDetail['tradePool']
                    turnData['combatPool'] += choseEffectActionDetail['combatPool']
                    turnData['usedTrade'] += choseEffectActionDetail['usedTrade']
                    turnData['usedCombat'] += choseEffectActionDetail['usedCombat']
                    turnData['selfAuthority'] += choseEffectActionDetail['selfAuthority']
                    turnData['otherAuthority'] += choseEffectActionDetail['otherAuthority']
                }
            }else{
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
                }
            }
        }
        return turnData
    }

    // grammar: newBalanceDetail | drawCardsWithShuffle;
    visitBaseInstantEffect(ctx){
        if(ctx.newBalanceDetail()){
            return this.visit(ctx.newBalanceDetail())
        }
        if(ctx.drawCardsWithShuffle()){
            return this.visit(ctx.drawCardsWithShuffle())
        }
    }

    visitEndPhase(ctx){
        return this.visit(ctx.endTurn())
    }

    // endTurn subtree has the name of the player who played this turn
    // grammar: name ENDS TURN INT ;
    visitEndTurn(ctx){
        return ctx.name().getText()
    }

    //grammar: purchase | play | attackPlayer | attackBase | scrapCard | discard | choseEffect | activatingEffect;
    visitAction(ctx){
        if(ctx.purchase()){
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

    // grammar: purchaseSummary purchaseDetail;
    visitPurchase(ctx){
        let cardName = this.visit(ctx.purchaseSummary())
        let balance = this.visit(ctx.purchaseDetail())
        return {
            card: cardName,
            balance: balance
        }
    }

    // grammar: ACQUIRED card  NEWLINE;
    visitPurchaseSummary(ctx){
        return this.visit(ctx.card())
    }

    // grammar: newBalanceDetail (ACQUIRED card 'to' 'the' 'top' WORD 'the' 'deck' NEWLINE)?;
    visitPurchaseDetail(ctx){
        let balance = this.visit(ctx.newBalanceDetail())
        if(balance['category'] != 'Trade' || balance['value'] > 0){
            return 'there was some error'
        }
        return balance
    }

    // grammar: playSummary playDetail*;
    // returns info about the cards played and associated effects
    visitPlay(ctx){
        let playSummary =  {
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
                if(ctx.playDetail()[i].newBalanceDetail()){
                    let newBalanceDetail = this.visit(ctx.playDetail()[i])
                    playSummary['balance'] = this.computeNewBalance(playSummary['balance'], newBalanceDetail)
                }
                else if(ctx.playDetail()[i].drawCardsWithShuffle()){
                    let drawCountSummary = this.visit(ctx.playDetail()[i])
                    playSummary['drawCount'] += drawCountSummary
                }
                else if(ctx.playDetail()[i].scrapCardEffect()){
                    let scrapCardEffectSummary = this.visit(ctx.playDetail()[i])
                    playSummary['scrappedCards'].push(scrapCardEffectSummary['scrappedCard'])
                    playSummary['balance'] = this.computeNewBalance(playSummary['balance'], scrapCardEffectSummary['balance'])
                }
                else if(ctx.playDetail()[i].simpleScrap()){
                    let simpleScrapSummary = this.visit(ctx.playDetail()[i])
                    playSummary['scrappedCards'].push(simpleScrapSummary)
                }
                else if(ctx.playDetail()[i].destroyBase()){
                    let destroyBaseSummary = this.visit(ctx.playDetail()[i])
                    playSummary['destroyedBases'].push(destroyBaseSummary)
                }
            }
        }
        return playSummary
    }

    // grammar: PLAYED card NEWLINE;
    visitPlaySingle(ctx){
        return this.visit(ctx.card())
    }

    // grammar: newBalanceDetail | newAbility | drawCardsWithShuffle | scrapCardEffect | simpleScrap | destroyBase;
    visitPlayDetail(ctx){
        if(ctx.newBalanceDetail()){
            return this.visit(ctx.newBalanceDetail())
        }else if(ctx.drawCardsWithShuffle()){
            return this.visit(ctx.drawCardsWithShuffle())
        }else if(ctx.scrapCardEffect()){
            return this.visit(ctx.scrapCardEffect())
        }else if(ctx.simpleScrap()){
            return this.visit(ctx.simpleScrap())
        }else if(ctx.destroyBase()){
            return this.visit(ctx.destroyBase())
        }
    }

    // grammar: scrapCardEffectSummary scrapCardEffectDetail;
    visitScrapCardEffect(ctx) {
        let scrapSummary = {}
        scrapSummary['scrappedCard'] = this.visit(ctx.scrapCardEffectSummary())
        if(ctx.scrapCardEffectDetail().newBalanceDetail()){
            scrapSummary['balance'] = this.visit(ctx.scrapCardEffectDetail().newBalanceDetail())
        }
        return scrapSummary
    }

    // grammar: SCRAPPED card NEWLINE;
    visitSimpleScrap(ctx) {
        return this.visit(ctx.card())
      }

    // grammar: name IS SCRAPPING (':')? card NEWLINE;
    visitScrapCardEffectSummary(ctx) {
        return this.visit(ctx.card())
    }

    // grammar: attackPlayerSummary newBalanceDetail+;
    visitAttackPlayer(ctx){
        return this.visit(ctx.attackPlayerSummary())
    }

    // grammar: ATTACKED name WORD INT newAuthority NEWLINE;
    visitAttackPlayerSummary(ctx) {
        return {
            target: this.visit(ctx.name()),
            combat: parseInt(ctx.INT())
        }
    }

    // grammar: attackBaseSummary newBalanceDetail destroyBase;
    visitAttackBase(ctx) {
        return {
            target: this.visit(ctx.attackBaseSummary()),
            balance: this.visit(ctx.newBalanceDetail())
        }
    }
    
    // grammar: ATTACKED card NEWLINE;
    visitAttackBaseSummary(ctx) {
        return this.visit(ctx.card())
    }

    // grammar: scrappingSummary scrappingDetail;
	visitScrapCard(ctx) {
        return this.visit(ctx.scrappingDetail())
    }
  
    // grammar: scrapAction scrapEffect+;
    visitScrappingDetail(ctx) {
        let scrapSummary = {
            card: this.visit(ctx.scrapAction()),
            drawCount: 0,
            destroyedBases: [],
            balance: {}
        }
        for(let i = 0; i < ctx.scrapEffect().length; i++){
            if(ctx.scrapEffect()[i].drawCardsWithShuffle()){
                scrapSummary['drawCount'] += this.visit(ctx.scrapEffect()[i])
            }
            else if(ctx.scrapEffect()[i].destroyBase()){
                scrapSummary['destroyedBases'].push(this.visit(ctx.scrapEffect()[i]))
            }else{
                scrapSummary['balance'] = this.computeNewBalance(scrapSummary['balance'],this.visit(ctx.scrapEffect()[i]))
            }
        }
        return scrapSummary
    }

    // grammar: SCRAPPED card NEWLINE;
    visitScrapAction(ctx) {
        return this.visit(ctx.card())
    }
  
    // grammar: drawCardsWithShuffle | destroyBase | newBalanceDetail;
    visitScrapEffect(ctx) {
        if(ctx.drawCardsWithShuffle()){
            return this.visit(ctx.drawCardsWithShuffle())
        }else if(ctx.destroyBase()){
            return this.visit(ctx.destroyBase())
        }else{
            return this.visit(ctx.newBalanceDetail())
        }
    }

    // grammar: resolveDiscard discardAction+ discardDetails ;
    visitDiscard(ctx) {
        let discardSummary = {
            discardedCards: []
        }
        for(let i = 0; i < ctx.discardAction().length; i++){
            discardSummary['discardedCards'].push(this.visit(ctx.discardAction()[i]))
        }
        return discardSummary
    }
    
    // grammar: name IS WORD card NEWLINE ;
    visitDiscardAction(ctx) {
        return this.visit(ctx.card())
    }

    // grammar: choseDiscardAndDraw | choseIncreasePool;
    visitChoseEffect(ctx) {
        if(ctx.choseDiscardAndDraw()){
            return this.visit(ctx.choseDiscardAndDraw())
        }else{
            return this.computeNewBalance({}, this.visit(ctx.choseIncreasePool()))
        }
    }
    
    // grammar: discardAndDrawSummary selectDiscard+ discarding+ drawCardsWithShuffle;
    visitChoseDiscardAndDraw(ctx) {
        let discardSummary = {
            discardedCards: [],
            drawCount: ctx.selectDiscard().length
        }
        for(let i = 0; i < ctx.selectDiscard().length; i++){
            discardSummary['discardedCards'].push(this.visit(ctx.selectDiscard()[i]))
        }
        return discardSummary
    }

    // grammar: name IS 'selecting' card NEWLINE ;
    visitSelectDiscard(ctx) {
        return this.visit(ctx.card())
      }

    // grammar: 'Chose' 'Add' INT WORD NEWLINE newBalanceDetail;
    visitChoseIncreasePool(ctx) {
        return this.visit(ctx.newBalanceDetail());
    }

    // grammar: activatingSummary activatingDetail;
    visitActivatingEffect(ctx) {
        return this.visit(ctx.activatingDetail())
    }

    // grammar: drawAndScrapFromHand | scrapAndDraw | scrap | freeAcquireToTop | destroyAndScrap | stealthNeedle;
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

    // grammar:  scrapSummary+ scrapDetail+;
    visitScrap(ctx){
        let scrappedCards = []
        for(let i = 0; i < ctx.scrapDetail().length; i++){
            scrapDetail['scrappedCards'].push(this.visit(ctx.scrapDetail()))
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
    // collect any new Trade/Combat/authority change. "Discard effect is ommited because
    // it doesn't impact the current player"
    visitNewBalanceDetail(ctx){
        //How to indentify when a card is played?
        return this.visit(ctx.effect())
    }

    // grammar: : (INCREMENT | DECREASE) (WORD | DISCARD) ;
    visitEffect(ctx){
        // don't return anything if it's a discard effect
        if(ctx.DISCARD()){
            return {}
        }
        let val
        if(ctx.INCREMENT()){
            val = Number(ctx.INCREMENT().getText().replace('+',''))
        }else{
            val = 0 - Number(ctx.DECREASE().getText().replace('-',''))
        }
        return {category: ctx.WORD().getText(), value: val}
    }

    // grammar: WORD+
    visitName(ctx){
        return ctx.getText()
    }

    //grammar WORD+ 
    visitCard(ctx){
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
