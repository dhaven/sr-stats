import antlr4 from 'antlr4';
import StarRealmsLexer from './antlr4/StarRealmsLexer.js';
import StarRealmsParser from './antlr4/StarRealmsParser.js';
import StarRealmsVisitor from './antlr4/StarRealmsVisitor.js';
import { Battle, Round, Action, Card} from './classes.js'

class Visitor extends StarRealmsVisitor{

    visitBattle(ctx){
        let battle = new Battle()
        for(let i = 0; i < ctx.turn().length; i++){
            let nextRound = this.visit(ctx.turn()[i])
            battle.rounds.push(nextRound)
            battle.updatePlayer(nextRound.player, nextRound.actions)
        }
        return battle
    }

    // for each turn, get the summary of action and the user who performed it
    // grammar: action+ endPhase ;
    visitTurn(ctx){
        let nextRound = new Round([],this.visit(ctx.endPhase()))
        for(let i = 0; i < ctx.action().length; i++){
            let nextAction = this.visit(ctx.action()[i])
            nextRound.actions.push(nextAction)
        }
        return nextRound
    }

    visitEndPhase(ctx){
        return this.visit(ctx.endTurn())
    }

    // endTurn subtree has the name of the player who played this turn
    // grammar: WORD+ turnCount ;
    visitEndTurn(ctx){
        let playerName = ""
        for(let i = 0; i < ctx.name().WORD().length; i++){
            playerName += ctx.name().WORD()[i].getText()
        }
        return playerName
    }

    // grammar: summaryAction NEWLINE actionDetail* ;
    visitAction(ctx){
        let nextAction = new Action()
        if(ctx.summaryAction().purchase()){
            nextAction.type = Action.ACTION_PURCHASE
            nextAction.purchasedCards.push(this.visit(ctx.summaryAction().purchase()))
        }else if(ctx.summaryAction().attackPlayer()){
            nextAction.type = Action.ACTION_ATTACK
        }else if(ctx.summaryAction().play()){
            nextAction.type = Action.ACTION_PLAY
        }else if(ctx.summaryAction().scrap()){
            nextAction.type = Action.ACTION_SCRAP
        }else{
            throw new Error()
        }
        for(let i = 0; i < ctx.actionDetail().length; i++){
            let tempActionDetail =ctx.actionDetail()[i]
            if(tempActionDetail.newBalanceDetail()){
                let summary = this.visit(tempActionDetail.newBalanceDetail())
                if('addedPoolTrade' in summary['effect']){
                    nextAction.addToPool(Action.POOL_TRADE,summary['effect']['addedPoolTrade'])
                }
                if('addedPoolCombat' in summary['effect']){
                    nextAction.addToPool(Action.POOL_COMBAT,summary['effect']['addedPoolCombat'])
                }
                if('removedPoolTrade' in summary['effect']){
                    nextAction.removeFromPool(Action.POOL_TRADE,summary['effect']['removedPoolTrade'])
                }
                if('removedPoolCombat' in summary['effect']){
                    nextAction.removeFromPool(Action.POOL_COMBAT,summary['effect']['removedPoolCombat'])
                }
                if('authority' in summary['effect']){
                    nextAction.updateAuthority(summary['name'], summary['effect']['authority'])
                }
                if(summary['card'] !== undefined){
                    nextAction.playedCards.push(summary['card'])
                }
            }else if(tempActionDetail.scrapDetail()){
                let scrappedCard = this.visit(tempActionDetail.scrapDetail())
                nextAction.scrappedCards.push(scrappedCard)
            }else{
                throw new Error()
            }
        }
        return nextAction
    }
    //grammar: name SEPARATOR card? effect balance ;
    visitNewBalanceDetail(ctx){
        let card
        if(ctx.card()){
            card = this.visit(ctx.card())
        }
        let effect = this.visit(ctx.effect())
        let name = this.visit(ctx.name())
        return {
            "name": name,
            "effect": effect,
            "card": card,
        }
    }

    // grammar: SCRAPPED card ;
    visitScrapDetail(ctx){
        let card
        if(ctx.card()){
            card = this.visit(ctx.card())
        }
        return card
    }

    // grammar: : (INCREMENT | DECREASE) WORD ;
    visitEffect(ctx){
        let effect = {}
        let category = ctx.WORD().getText()
        if(ctx.INCREMENT() && category == "Trade"){
            effect['addedPoolTrade'] = Number(ctx.INCREMENT().getText().replace('+',''))
        }
        else if(ctx.DECREASE() && category == "Trade"){
            effect['removedPoolTrade'] = Number(ctx.DECREASE().getText().replace('-',''))
        }
        else if(ctx.INCREMENT() && category == "Combat"){
            effect['addedPoolCombat'] = Number(ctx.INCREMENT().getText().replace('+',''))
        }
        else if(ctx.DECREASE() && category == "Combat"){
            effect['removedPoolCombat'] = Number(ctx.DECREASE().getText().replace('-',''))
        }
        else if(ctx.INCREMENT() && category == "Authority"){
            effect['authority'] = Number(ctx.INCREMENT().getText().replace('+',''))
        }
        else if(ctx.DECREASE() && category == "Authority"){
            effect['authority'] = 0 - Number(ctx.DECREASE().getText().replace('-',''))
        }
        else{
            throw new Error()
        }
        return effect
    }

    visitPurchase(ctx){
        return this.visit(ctx.card())
    }

    visitScrap(ctx){
        return this.visit(ctx.card())
    }

    visitCategory(ctx){
        return ctx.getText()
    }

    visitName(ctx){
        return ctx.getText()
    }

    visitCard(ctx){
        let nextCard = new Card()
        nextCard.addNameFromString(ctx.getText())
        return nextCard
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
