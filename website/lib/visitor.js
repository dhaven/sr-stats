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

    // grammar: turn+ winStatus EOF ;
    visitBattle(ctx){
        let firstPlayer = this.visit(ctx.turn()[0].endPhase())
        let secondPlayer = this.visit(ctx.turn()[1].endPhase())
        let winner = this.visit(ctx.winStatus())
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
    // (newBalanceDetail NEWLINE)* action+ endPhase ;
    visitTurn(ctx){
        let turnData = {
            tradePool: 0,
            combatPool: 0,
            usedTrade: 0,
            usedCombat: 0,
            purchasedCards: [],
            selfAuthority: 0, // authority change of current player
            otherAuthority: 0 // authority change of other player
        }
        //get any new balance triggered from bases
        if(ctx.newBalanceDetail()){
            for(let i = 0; i < ctx.newBalanceDetail().length; i++){
                let newBalance = this.visit(ctx.newBalanceDetail()[i])
                if(Object.keys(newBalance).length != 0 && newBalance['category'] == "Trade"){
                    if(newBalance['value'] > 0){
                        turnData['tradePool'] += newBalance['value']
                    }else{
                        turnData['usedTrade'] += newBalance['value']
                    }
                }else if(Object.keys(newBalance).length != 0 && newBalance['category'] == "Combat"){
                    if(newBalance['value'] > 0){
                        turnData['combatPool'] += newBalance['value']
                    }else{
                        turnData['usedCombat'] += newBalance['value']
                    }
                }
            }
        }
        //get summary of all actions performed in this turn
        for(let i = 0; i < ctx.action().length; i++){
            let nextActionSummary = this.visit(ctx.action()[i])
            if(nextActionSummary.purchasedCards != ""){
                turnData['purchasedCards'].push(nextActionSummary.purchasedCards)
            }
            turnData['tradePool'] += nextActionSummary.balance['tradePool']
            turnData['combatPool'] += nextActionSummary.balance['combatPool']
            turnData['usedTrade'] += nextActionSummary.balance['usedTrade']
            turnData['usedCombat'] += nextActionSummary.balance['usedCombat']
            turnData['selfAuthority'] += nextActionSummary.balance['selfAuthority']
            turnData['otherAuthority'] += nextActionSummary.balance['otherAuthority']
        }
        return turnData
    }

    visitEndPhase(ctx){
        return this.visit(ctx.endTurn())
    }

    // endTurn subtree has the name of the player who played this turn
    // grammar: name ENDS TURN INT ;
    visitEndTurn(ctx){
        return ctx.name().getText()
    }

    // grammar: summaryAction actionDetail* ;
    visitAction(ctx){
        // return only useful info needed for this turn
        let purchasedCards = this.visit(ctx.summaryAction())
        //loop through all actionDetail and collect new balances
        let newBalance = {
            tradePool: 0,
            combatPool: 0,
            usedTrade: 0,
            usedCombat: 0,
            selfAuthority: 0, // authority change of current player
            otherAuthority: 0 // authority change of other player
        }
        for(let i = 0; i < ctx.actionDetail().length; i++){
            let actionDetail = this.visit(ctx.actionDetail()[i])
            if(Object.keys(actionDetail).length != 0 && actionDetail['category'] == "Trade"){
                if(actionDetail['value'] > 0){
                    newBalance['tradePool'] += actionDetail['value']
                }else{
                    newBalance['usedTrade'] += actionDetail['value']
                }
            }else if(Object.keys(actionDetail).length != 0 && actionDetail['category'] == "Combat"){
                if(actionDetail['value'] > 0){
                    newBalance['combatPool'] += actionDetail['value']
                }else{
                    newBalance['usedCombat'] += actionDetail['value']
                }
            }else if(Object.keys(actionDetail).length != 0 && actionDetail['category'] == "Authority"){
                //we assume any > 0 authority is for the current player
                // and any < 0 authority isfor the opponent
                if(actionDetail['value'] > 0){
                    newBalance['selfAuthority'] += actionDetail['value']
                }else{
                    newBalance['otherAuthority'] += actionDetail['value']
                }
            }
        }
        return {
            balance: newBalance,
            purchasedCards: purchasedCards
        }
    }

    //gammar: play | purchase | attackPlayer | attackBase | scrap | discard | activateBase ;
    visitSummaryAction(ctx){
        if(ctx.purchase()){
            return this.visit(ctx.purchase())
        }
        return ""
    }

    visitPurchase(ctx){
        return this.visit(ctx.card())
    }

    // grammar: (scrapDetail | newBalanceDetail | newAbility | destroyBase | drawCards) NEWLINE;
    visitActionDetail(ctx){
        //visit scrapDetail to get any scrapped cards
        // visit newBalanceDetail to get any new balance
        if(ctx.newBalanceDetail()){
            return this.visit(ctx.newBalanceDetail())
        }
        return {}
    }

    // grammar: SCRAPPED card ;
    visitScrapDetail(ctx){
        return this.visit(ctx.card())
    }

    visitScrap(ctx){
        return this.visit(ctx.card())
    }

    //grammar: name SEPARATOR card? effect balance ;
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
    const tree = parser.battle();
    return tree.accept(new Visitor());
}
