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