export class Card{
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

    static deserialize(jobject){
        let card = new Card()
        card.cardType = jobject['cardType']
        card.count = jobject['count']
        card.playedCount = jobject['playedCount']
        card.scrappedCount = jobject['scrappedCount']
        return card
    }
}

export class Deck{
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

    static deserialize(jobject){
        let deck = new Deck()
        deck.cards = {} //make sure the deck is empty
        for(let card in jobject['cards']){
            let nextCard = jobject['cards'][card]
            deck.cards[card] = Card.deserialize(nextCard)
        }
        return deck
    }
}
export class Action{
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

    static deserialize(jobject){
        let action = new Action()
        action.type = jobject['type']
        action.addedPoolCombat = jobject['addedPoolCombat']
        action.addedPoolTrade = jobject['addedPoolTrade']
        action.removedPoolCombat = jobject['removedPoolCombat']
        action.removedPoolTrade = jobject['removedPoolTrade']
        action.authorityChange = jobject['authorityChange']
        for(let i = 0; i < jobject['playedCards'].length; i++){
            let nextPlayedCard = jobject['playedCards'][i]
            action.playedCards.push(Card.deserialize(nextPlayedCard))
        }
        for(let i = 0; i < jobject['purchasedCards'].length; i++){
            let nextPurchasedCard = jobject['purchasedCards'][i]
            action.purchasedCards.push(Card.deserialize(nextPurchasedCard))
        }
        for(let i = 0; i < jobject['scrappedCards'].length; i++){
            let nextScrappedCard = jobject['scrappedCards'][i]
            action.scrappedCards.push(Card.deserialize(nextScrappedCard))
        }
        return action
    }
}

export class Player{
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

    static deserialize(jobject){
        let player = new Player(jobject['name'])
        player.deck = Deck.deserialize(jobject['deck'])
        return player
    }
}

// information representing a round in a game
export class Round {
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

    static deserialize(jobject){
        let round = new Round([],jobject['player'])
        for(let i = 0; i < jobject['actions'].length; i++){
            let nextAction = jobject['actions'][i]
            round.actions.push(Action.deserialize(nextAction))
        }
        return round
    }
}

export class Battle {
    constructor(){
        this.rounds = []
        this.players = []
    }

    updatePlayer(name, actions){
        for(let i = 0; i < this.players.length; i++){
            if(this.players[i].isPlayer(name)){
                this.players[i].deck.update(actions)
                return
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

    static deserialize(jobject){
        let battle = new Battle()
        for(let i = 0; i < jobject['rounds'].length; i++){
            let nextRound = jobject['rounds'][i]
            battle.rounds.push(Round.deserialize(nextRound))
        }
        for(let i = 0; i < jobject['players'].length; i++){
            let nextPlayer = jobject['players'][i]
            battle.players.push(Player.deserialize(nextPlayer))
        }
        return battle
    }
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