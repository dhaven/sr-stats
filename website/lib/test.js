import antlr4 from 'antlr4';
import StarRealmsLexer from './antlr4/StarRealmsLexer.js';
import StarRealmsParser from './antlr4/StarRealmsParser.js';
import StarRealmsVisitor from './antlr4/StarRealmsVisitor.js';

const input = `Play all
        Hard AI  >  <color=#800080>Scout</color> +1 Trade (Trade:1)
        Hard AI  >  <color=#800080>Scout</color> +1 Trade (Trade:2)
        Hard AI  >  <color=#800080>Scout</color> +1 Trade (Trade:3)
Acquired <color=#1589FF>Cutter</color>
        Hard AI - -2 Trade (Trade:1)
Acquired <color=#1589FF>Federation Shuttle</color>
        Hard AI - -1 Trade (Trade:0)
Hard AI ends turn 1
        Drew 5 cards.
        Refresh ally indicators
        It is now Player's turn 2
Play all
        Player  >  <color=#800080>Scout</color> +1 Trade (Trade:1)
        Player  >  <color=#800080>Scout</color> +1 Trade (Trade:2)
        Player  >  <color=#800080>Scout</color> +1 Trade (Trade:3)
        Player  >  <color=#800080>Scout</color> +1 Trade (Trade:4)
        Player  >  <color=#800080>Viper</color> +1 Combat (Combat:1)
Acquired <color=#1589FF>Cutter</color>
        Player - -2 Trade (Trade:2)
Acquired <color=#800080>Explorer</color>
        Player - -2 Trade (Trade:0)
Attacked Hard AI for 1 (New Authority:49)
        Player - -1 Combat (Combat:0)
        Hard AI - -1 Authority (Authority:49)
Player ends turn 2
        Drew 5 cards.
        Refresh ally indicators
        It is now Hard AI's turn 3
Play all
        Hard AI  >  <color=#800080>Viper</color> +1 Combat (Combat:1)
        Hard AI  >  <color=#800080>Viper</color> +1 Combat (Combat:2)
        Hard AI  >  <color=#800080>Scout</color> +1 Trade (Trade:1)
        Hard AI  >  <color=#800080>Scout</color> +1 Trade (Trade:2)
        Hard AI  >  <color=#800080>Scout</color> +1 Trade (Trade:3)
Acquired <color=#FF0000>Battle Station</color>
        Hard AI - -3 Trade (Trade:0)
Attacked Player for 2 (New Authority:48)
        Hard AI - -2 Combat (Combat:0)
        Player - -2 Authority (Authority:48)
Hard AI ends turn 3
        Drew 2 cards.
        Shuffled discard pile to form new deck
        Drew 3 cards.
        Refresh ally indicators
        It is now Player's turn 4
Play all
        Player  >  <color=#800080>Scout</color> +1 Trade (Trade:1)
        Player  >  <color=#800080>Scout</color> +1 Trade (Trade:2)
        Player  >  <color=#800080>Scout</color> +1 Trade (Trade:3)
        Player  >  <color=#800080>Viper</color> +1 Combat (Combat:1)
        Player  >  <color=#800080>Scout</color> +1 Trade (Trade:4)
Acquired <color=#FFFF00>Recycling Station</color>
        Player - -4 Trade (Trade:0)
Attacked Hard AI for 1 (New Authority:48)
        Player - -1 Combat (Combat:0)
        Hard AI - -1 Authority (Authority:48)
Player ends turn 4
        Shuffled discard pile to form new deck
        Drew 5 cards.
        Refresh ally indicators
        It is now Hard AI's turn 5
`

class Card{
    static CARD_SCOUT = 0
    static CARD_VIPER = 1
    static CARD_SUPPLY_BOT = 2
    static CARD_EXPLORER = 3
    static CARD_FEDERATION_SHUTTLE = 4
    static CARD_PATROL_MECH = 5
    static CARD_ROYAL_REDOUBT = 6
    static CARD_CUTTER = 7
    static CARD_RECYCLING_STATION = 8
    static CARD_BATTLE_STATION = 9

    constructor(cardType=-1, count=1){
        this.cardType = cardType
        this.count = count
        this.playedCount = 0
        this.scrappedCount = 0
    }

    addCount(count){
        this.count += count
    }

    addPlayed(count){
        this.playedCount += count
    }

    addScrappedCount(count){
        this.scrappedCount += count
    }

    addNameFromString(cardName){
        if(cardName == "SupplyBot"){
            this.cardType = Card.CARD_SUPPLY_BOT
        }
        if(cardName == "FederationShuttle"){
            this.cardType = Card.CARD_FEDERATION_SHUTTLE
        }
        if(cardName == "Explorer"){
            this.cardType = Card.CARD_EXPLORER
        }
        if(cardName == "Scout"){
            this.cardType = Card.CARD_SCOUT
        }
        if(cardName == "Viper"){
            this.cardType = Card.CARD_VIPER
        }
        if(cardName == "PatrolMech"){
            this.cardType = Card.CARD_PATROL_MECH
        }
        if(cardName == "RoyalRedoubt"){
            this.cardType = Card.CARD_ROYAL_REDOUBT
        }
        if(cardName == "Cutter"){
            this.cardType = Card.CARD_CUTTER
        }
        if(cardName == "RecyclingStation"){
            this.cardType = Card.CARD_RECYCLING_STATION
        }
        if(cardName == "BattleStation"){
            this.cardType = Card.CARD_BATTLE_STATION
        }
    }

    getString(){
        if(this.cardType == Card.CARD_SUPPLY_BOT){
            return "Supply Bot"
        }
        else if(this.cardType == Card.CARD_SCOUT){
            return "Scout"
        }
        else if(this.cardType == Card.CARD_VIPER){
            return "Viper"
        }
        else if(this.cardType == Card.CARD_FEDERATION_SHUTTLE){
            return "Federation Shuttle"
        }
        else if(this.cardType == Card.CARD_EXPLORER){
            return "Explorer"
        }
        else if(this.cardType == Card.CARD_PATROL_MECH){
            return "Patrol Mech"
        }
        else if(this.cardType == Card.CARD_ROYAL_REDOUBT){
            return "Royal Redoubt"
        }
        else if(this.cardType == Card.CARD_CUTTER){
            return "Cutter"
        }
        else if(this.cardType == Card.CARD_RECYCLING_STATION){
            return "Recycling Station"
        }
        else if(this.cardType == Card.CARD_BATTLE_STATION){
            return "Battle Station"
        }
        else{
            return "noname"
        }
    }

    toString(){
        return this.getString() + "-- count: " + String(this.count) + ", played times: " + String(this.playedCount) + ", scrapped times: " + String(this.scrappedCount)
    }
}

class Deck{
    constructor(){
        this.cards = {}
        let cardScout = new Card(Card.CARD_SCOUT, 8)
        let cardViper = new Card(Card.CARD_VIPER, 2)
        this.cards[cardScout.getString()] = cardScout
        this.cards[cardViper.getString()] = cardViper
    }

    update(actions){
        for(let i=0; i < actions.length; i++){
            let tempAction = actions[i]
            if(tempAction.type == Action.ACTION_PURCHASE){
                for(let j=0; j < tempAction.purchasedCards.length; j++){
                    let tempCard = tempAction.purchasedCards[j]
                    if(!(tempCard.getString() in this.cards)){
                        this.cards[tempCard.getString()] = tempCard
                    }else{
                        this.cards[tempCard.getString()].addCount(1)
                    }
                }
            }if(tempAction.type == Action.ACTION_PLAY){
                for(let j=0; j < tempAction.playedCards.length; j++){
                    this.cards[tempAction.playedCards[j].getString()].addPlayed(1)
                }
            }if(tempAction.type == Action.ACTION_SCRAP){
                for(let j=0; j < tempAction.scrappedCards.length; j++){
                    this.cards[tempAction.scrappedCards[j].getString()].addScrappedCount(1)
                }
            }
        }
    }

    toString(){
        let cardList = ""
        for(let card in this.cards){
            cardList += String(this.cards[card]) + "\n"
        }
        return cardList
    }
}
class Action{
    static ACTION_PURCHASE = 0
    static ACTION_PLAY = 1
    static ACTION_ATTACK = 2
    static ACTION_SCRAP = 3
    static POOL_COMBAT = 4
    static POOL_TRADE = 5

    constructor(){
        this.type = Action.ACTION_PURCHASE
        this.addedPoolCombat = 0
        this.removedPoolCombat = 0
        this.addedPoolTrade = 0
        this.removedPoolTrade = 0
        this.authorityChange = {}
        this.playedCards = []
        this.purchasedCards = []
        this.scrappedCards = []
    }

    addToPool(poolCategory, amount){
        if(poolCategory == Action.POOL_COMBAT){
            this.addedPoolCombat += amount
        }
        if(poolCategory == Action.POOL_TRADE){
            this.addedPoolTrade += amount
        }
    }
    
    removeFromPool(poolCategory, amount){
        if(poolCategory == Action.POOL_COMBAT){
            this.removedPoolCombat -= amount
        }
        if(poolCategory == Action.POOL_TRADE){
            this.removedPoolTrade -= amount
        }
    }

    updateAuthority(name, amount){
        if(!(name in this.authorityChange)){
            this.authorityChange[name] = 0
        }
        this.authorityChange[name] += amount
    }

    getString(){
        if(this.type == Action.ACTION_PURCHASE){
            return "Purchase"
        }else if(this.type == Action.ACTION_PLAY){
            return "Play"
        }else if(this.type == Action.ACTION_ATTACK){
            return "Attack"
        }else{
            return "Other"
        }
    }

    toString(){
        let action = "action type: " + this.getString() + "\n"
        action += "Authority: "
        action += JSON.stringify(this.authorityChange)
        action += "\n"
        action += "Pool balance \n"
        action += "addedPoolCombat: " + String(this.addedPoolCombat) + ", removedPoolCombat: " + String(this.removedPoolCombat) + ", addedPoolTrade: " + String(this.addedPoolTrade) + ", removedPoolTrade: " + String(this.removedPoolTrade) + "\n"
        return action
    }
}

class Player{
    constructor(name){
        this.deck = new Deck()
        this.name = name.trim()
    }

    isPlayer(name){
        return this.name == name.trim()
    }

    toString(){
        return this.name + " with deck: \n" + String(this.deck) + "\n"
    }
}

// information representing a round in a game
class Round {
    constructor(actions, player){
        this.actions = actions
        this.player = player
    }

    toString(){
        let roundActions = this.player + "\n"
        for(let i=0; i < this.actions.length; i++){
            roundActions += String(this.actions[i])
            roundActions += "\n"
        }
        return roundActions
    }
}

class Battle {
    constructor(){
        this.rounds = []
        this.players = []
    }

    updatePlayer(name, actions){
        for(let i = 0; i < this.players.length; i++){
            if(this.players[i].isPlayer(name)){
                this.players[i].deck.update(actions)
            }
        }
        let nextPlayer = new Player(name)
        nextPlayer.deck.update(actions)
        this.players.push(nextPlayer)
    }

    toString(){
        let battle = "Battle started! \n"
        for(let i=0; i < this.rounds.length; i++){
            battle += String(this.rounds[i])
            battle += "\n"
            battle += "next round! \n"
        }
        for(let i=0; i < this.players.length; i++){
            battle += String(this.players[i])
        }
        return battle
    }
}
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

export function parseBattle(battlelog) {
    const chars = new antlr4.InputStream(battlelog);
    const lexer = new StarRealmsLexer(chars);
    const tokens = new antlr4.CommonTokenStream(lexer);
    const parser = new StarRealmsParser(tokens);
    parser.buildParseTrees = true;
    const tree = parser.battle();
    return tree.accept(new Visitor());
}

//accepts a Battle object as input
// returns an object:
// {
//     "user1": [{"card1": x},{"card2": y},{"card3":z}, ...,{"cardN":w],
//     "user2": [{"card1": x},{"card2": y},{"card3":z}, ...,{"cardN":w],
// }
export function getDecks(battle){
    let finalDecks = {}
    for(let i = 0; i < battle.players.length; i++){
        let tempPlayer = battle.players[i]
        let cardDeck = []
        for(let card in tempPlayer.deck.cards){
            let nextCard = {}
            let nextCardName = tempPlayer.deck.cards[card].getString()
            let nextCardCount = tempPlayer.deck.cards[card].count
            nextCard[nextCardName] = nextCardCount
            cardDeck.push(nextCard)
        }
        finalDecks[tempPlayer.name] = cardDeck
    }
    return finalDecks
}

//return the authority change for each player in this round
function getRoundAuthority(round){
    let roundAuthority = {}
    for(let i = 0; i < round.actions.length; i++){
        let nextAuthorityChange = round.actions[i].authorityChange
        let playerList = Object.keys(nextAuthorityChange)
        for(let j = 0; j < playerList.length; j++){
            let nextPlayer = playerList[j]
            if(nextPlayer in roundAuthority){
                roundAuthority[nextPlayer] += nextAuthorityChange[nextPlayer]
            }else{
                roundAuthority[nextPlayer] = nextAuthorityChange[nextPlayer]
            }
        }
    }
    return roundAuthority
}
//accept a Battle object as input
// each item in the array represent the amount of authority for that player 
// at the end of the current round
// returns a object:
// {
//     "user1": [50,48,48,56,52,...] length of array is number of rounds in the game
//     "user2": [50,49,47,42,...] length of arra is number of rounds in the game
// }
export function getAuthority(battle){
    let authorityData = {}
    for(let i = 0; i < battle.players.length; i++){
        authorityData[battle.players[i].name] = []
    }
    for(let i = 0; i < battle.rounds.length; i++){
        let nextRound = battle.rounds[i]
        let nextRoundAuthority = getRoundAuthority(nextRound)
        for(let player in authorityData){
            if(!(player in nextRoundAuthority)){
                authorityData[player].push(0)
            }else{
                authorityData[player].push(nextRoundAuthority[player])
            }
        }
    }
    //transform authority change into total authority at given turn
    for(let player in authorityData){
        authorityData[player] = authorityData[player].map((x,i, array)=>{
            return array[i] += array[i-1] ? array[i-1] : 50
        })
    }
    return authorityData
}


//accept a Battle object as input
// each item in the array represents the total amount of Trade in a
// player's trade pool during a given turn
// returns a object:
// {
//     "user1": [4,3,6,2,5,...] length of array is number of rounds in the game
//     "user2": [3,4,3,8,...] length of arra is number of rounds in the game
// }
export function getTrade(battle){
    let tradeData = {}
    for(let i = 0; i < battle.players.length; i++){
        tradeData[battle.players[i].name] = []
    }
    //for each turn check who is the player for this turn
    //for each action in this turn accumulate the amount of trade
    //push the total amount of trade
    for(let i = 0; i < battle.rounds.length; i++){
        let nextRound = battle.rounds[i]
        let nextTrade = 0
        for(let j = 0; j < nextRound.actions.length; j++){
            nextTrade += nextRound.actions[j].addedPoolTrade
        }
        tradeData[nextRound.player].push(nextTrade)
    }
    return tradeData
}
