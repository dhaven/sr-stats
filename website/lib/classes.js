export class Card{
    static CARD_SCOUT = 0
    static CARD_VIPER = 1
    static CARD_BATTLE_MECH = 2
    static CARD_BATTLE_STATION = 3
    static CARD_BATTLE_POD = 4
    static CARD_BLOB_CARRIER = 5
    static CARD_BLOB_WHEEL = 6
    static CARD_BLOB_FIGHTER = 7
    static CARD_CORVETTE = 8
    static CARD_CUTTER = 9
    static CARD_DEFENSE_CENTER = 10
    static CARD_DREADNAUGHT = 11
    static CARD_EMBASSY_YACHT = 12
    static CARD_EXPLORER = 13
    static CARD_FEDERATION_SHUTTLE = 14
    static CARD_FLAGSHIP = 15
    static CARD_FREIGHTER = 16
    static CARD_IMPERIAL_FIGHTER = 17
    static CARD_IMPERIAL_FRIGATE = 18
    static CARD_MECH_WORLD = 19
    static CARD_MISSILE_BOT = 20
    static CARD_MISSILE_MECH = 21
    static CARD_PORT_OF_CALL = 22
    static CARD_PATROL_MECH = 23
    static CARD_ROYAL_REDOUBT = 24
    static CARD_RECYCLING_STATION = 25
    static CARD_STEALTH_NEEDLE = 26
    static CARD_SUPPLY_BOT = 27
    static CARD_SURVEY_SHIP = 28
    static CARD_SPACE_STATION = 29
    static CARD_TRADE_BOT = 30
    static CARD_TRADE_POD = 31
    static CARD_TRADING_POST = 32
    static CARD_TRADE_ESCORT = 33

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
        switch(cardName){
            case "Scout":
                this.cardType = Card.CARD_SCOUT
                break
            case "Viper":
                this.cardType = Card.CARD_VIPER
                break
            case "BattleMech":
                this.cardType = Card.CARD_BATTLE_MECH
                break
            case "BattleStation":
                this.cardType = Card.CARD_BATTLE_STATION
                break
            case "BattlePod":
                this.cardType = Card.CARD_BATTLE_POD
                break
            case "BlobCarrier":
                this.cardType = Card.CARD_BLOB_CARRIER
                break
            case "BlobWheel":
                this.cardType = Card.CARD_BLOB_WHEEL
                break
            case "BlobFighter":
                this.cardType = Card.CARD_BLOB_FIGHTER
                break
            case "Corvette":
                this.cardType = Card.CARD_CORVETTE
                break
            case "Cutter":
                this.cardType = Card.CARD_CUTTER
                break
            case "DefenseCenter":
                this.cardType = Card.CARD_DEFENSE_CENTER
                break
            case "Dreadnaught":
                this.cardType = Card.CARD_DREADNAUGHT
                break
            case "EmbassyYacht":
                this.cardType = Card.CARD_EMBASSY_YACHT
                break
            case "Explorer":
                this.cardType = Card.CARD_EXPLORER
                break
            case "FederationShuttle":
                this.cardType = Card.CARD_FEDERATION_SHUTTLE
                break
            case "Flagship":
                this.cardType = Card.CARD_FLAGSHIP
                break
            case "Freighter":
                this.cardType = Card.CARD_FREIGHTER
                break
            case "ImperialFighter":
                this.cardType = Card.CARD_IMPERIAL_FIGHTER
                break
            case "ImperialFrigate":
                this.cardType = Card.CARD_IMPERIAL_FRIGATE
                break
            case "MechWorld":
                this.cardType = Card.CARD_MECH_WORLD
                break
            case "MissileBot":
                this.cardType = Card.CARD_MISSILE_BOT
                break
            case "MissileMech":
                this.cardType = Card.CARD_MISSILE_MECH
                break
            case "PortofCall":
                this.cardType = Card.CARD_PORT_OF_CALL
                break
            case "PatrolMech":
                this.cardType = Card.CARD_PATROL_MECH
                break
            case "RoyalRedoubt":
                this.cardType = Card.CARD_ROYAL_REDOUBT
                break
            case "RecyclingStation":
                this.cardType = Card.CARD_RECYCLING_STATION
                break
            case "StealthNeedle":
                this.cardType = Card.CARD_STEALTH_NEEDLE
                break
            case "SupplyBot":
                this.cardType = Card.CARD_SUPPLY_BOT
                break
            case "SurveyShip":
                this.cardType = Card.CARD_SURVEY_SHIP
                break
            case "SpaceStation":
                this.cardType = Card.CARD_SPACE_STATION
                break
            case "TradeBot":
                this.cardType = Card.CARD_TRADE_BOT
                break
            case "TradePod":
                this.cardType = Card.CARD_TRADE_POD
                break
            case "TradingPost":
                this.cardType = Card.CARD_TRADING_POST
                break
            case "TradeEscort":
                this.cardType = Card.CARD_TRADE_ESCORT
                break
        }
        
    }

    getString(){
        switch(this.cardType){
            case Card.CARD_SCOUT:
                return "Scout"
            case Card.CARD_VIPER:
                return "Viper"
            case Card.CARD_BATTLE_MECH:
                return "Battle Mech"
            case Card.CARD_BATTLE_STATION:
                return "Battle Station"
            case Card.CARD_BATTLE_POD:
                return "Battle Pod"
            case Card.CARD_BLOB_CARRIER:
                return "Blob Carrier"
            case Card.CARD_BLOB_WHEEL:
                return "Blob Wheel"
            case Card.CARD_BLOB_FIGHTER:
                return "Blob Fighter"
            case Card.CARD_CORVETTE:
                return "Corvette"
            case Card.CARD_CUTTER:
                return "Cutter"
            case Card.CARD_DEFENSE_CENTER:
                return "Defense Center"
            case Card.CARD_DREADNAUGHT:
                return "Dreadnaught"
            case Card.CARD_EMBASSY_YACHT:
                return "Embassy Yacht"
            case Card.CARD_EXPLORER:
                return "Explorer"
            case Card.CARD_FEDERATION_SHUTTLE:
                return "Federation Shuttle"
            case Card.CARD_FLAGSHIP:
                return "Flagship"
            case Card.CARD_FREIGHTER:
                return "Freighter"
            case Card.CARD_IMPERIAL_FIGHTER:
                return "Imperial Fighter"
            case Card.CARD_IMPERIAL_FRIGATE:
                return "Imperial Frigate"
            case Card.CARD_MECH_WORLD:
                return "Mech World"
            case Card.CARD_MISSILE_BOT:
                return "Missile Bot"
            case Card.CARD_MISSILE_MECH:
                return "Missile Mech"
            case Card.CARD_PORT_OF_CALL:
                return "Port of Call"
            case Card.CARD_PATROL_MECH:
                return "Patrol Mech"
            case Card.CARD_ROYAL_REDOUBT:
                return "Royal Redoubt"
            case Card.CARD_RECYCLING_STATION:
                return "Recycling Station"
            case Card.CARD_STEALTH_NEEDLE:
                return "Stealth Needle"
            case Card.CARD_SUPPLY_BOT:
                return "Supply Bot"
            case Card.CARD_SURVEY_SHIP:
                return "Survey Ship"
            case Card.CARD_SPACE_STATION:
                return "Space Station"
            case Card.CARD_TRADE_BOT:
                return "Trade Bot"
            case Card.CARD_TRADE_POD:
                return "Trade Pod"
            case Card.CARD_TRADING_POST:
                return "Trading Post"
            case Card.CARD_TRADE_ESCORT:
                return "Trade Escort"
            default:
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
    let lastRound = battle['rounds'][battle['rounds'].length-1]
    for(let i = 0; i < lastRound['players'].length; i++){
        let player = lastRound['players'][i]
        finalDecks[player['name']] = []
        for(let card in player['deck']){
            let nextCard = {}
            nextCard[card] = player['deck'][card]['count']
            finalDecks[player['name']].push(nextCard)
        }

    }
    return finalDecks
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
    for(let i = 0; i < battle['rounds'].length; i++){
        for(let j = 0; j < battle['rounds'][i]['players'].length; j++){
            let player = battle['rounds'][i]['players'][j]
            if(player['name'] in authorityData){
                authorityData[player['name']].push(player['authority'])
            }else{
                authorityData[player['name']] = [player['authority']]
            }
        }
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
    let firstPlayer = battle['firstPlayer']
    let secondPlayer = ""
    for(let i = 0; i < battle['rounds'][0]['players'].length; i++){
        let player = battle['rounds'][0]['players'][i]
        if(player['name'] != battle['firstPlayer']){
            secondPlayer = player['name']
        }
    }
    tradeData[firstPlayer] = []
    tradeData[secondPlayer] = []
    for(let i = 0; i < battle['rounds'].length; i++){
        if(i % 2 == 0){
            tradeData[firstPlayer].push(battle['rounds'][i]['tradePool'])
        }else{
            tradeData[secondPlayer].push(battle['rounds'][i]['tradePool'])
        }
    }
    return tradeData
}