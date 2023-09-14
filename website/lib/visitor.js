import antlr4 from 'antlr4';
import StarStarLexer from './antlr4/StarStarLexer.js';
import StarStarParser from './antlr4/StarStarParser.js';
import StarStarVisitor from './antlr4/StarStarVisitor.js';

//these cards have a primary or ally ability
//which lets the user scrap a card from his deck
const cardsWithDeckScrapAbility = [
    "assimilator",
    "battlebot",
    "battlemech",
    "blobbot",
    "blockaderunner",
    "borderfort",
    "builderbot",
    "brainworld",
    "cargomech",
    "cargorocket",
    "chancellorhartman",
    "coalitionfreighter",
    "confessormorris",
    "conversionyard",
    "converter",
    "convoybot",
    "deathworld",
    "defensebot",
    "demolisher",
    "destroyerbot",
    "enforcermech",
    "fortressoblivion",
    "junkyard",
    "machinebase",
    "mechcommandship",
    "mechcruiser",
    "mechwurm",
    "miningmech",
    "missilebot",
    "nanobotswarm",
    "neuralnexus",
    "patrolbot",
    "patrolmech",
    "plaguepod",
    "plasmabot",
    "probebot",
    "reclamationstation",
    "recyclebot",
    "repairbot",
    "repairmech",
    "salvagedrone",
    "spawningwurm",
    "supplybot",
    "tankermech",
    "theark",
    "thecitadel",
    "theincinerator",
    "theoracle",
    "thewrecker",
    "tradebot",
    "tradeenvoy",
    "unitystation"
]

//when scrapped using the scrap ability, these cards will
//let the user scrap another card from his deck 
const selfScrapToDeckScrapCards = [
    "acceptablelosses",
    "chancellorhartman",
    "exploration",
    "highpriestlyle",
    "lesforay",
    "unityfighter",
    "warelder",
    "alignmentbot"
]
class Visitor extends StarStarVisitor {
    visitBattle(ctx) {
        let rounds = []
        let firstPlayer = ""
        let secondPlayer = ""
        for (let i = 0; i < ctx.turn().length; i++) {
            let turn = this.visit(ctx.turn()[i])
            if (turn != null) {
                if (i % 2 == 0 && firstPlayer == "") {
                    firstPlayer = turn["currentPlayer"]
                }
                if (i % 2 == 1 && secondPlayer == "") {
                    secondPlayer = turn["currentPlayer"]
                }
                let formattedRound = {
                    tradePool: 0,
                    combatPool: 0,
                    usedTrade: 0,
                    usedCombat: 0,
                    purchasedCards: [],
                    completedMissions: [],
                    events: [],
                    scrappedCards: [],
                    discardedCards: [],
                    destroyedBases: [],
                    winner: "",
                    winCondition: "",
                    drawCount: 0,
                    shuffleCount: 0,
                    authority: {},
                }
                let currentPlayer = turn["currentPlayer"];
                if (currentPlayer == '') {
                    if (i % 2 == 0) {
                        currentPlayer = firstPlayer
                    } else {
                        currentPlayer = secondPlayer
                    }
                }
                formattedRound["player"] = currentPlayer
                if (Object.keys(turn["players"]).length != 0) {
                    for (let player in turn["players"]) {
                        if (player == currentPlayer) {
                            formattedRound["tradePool"] = turn["players"][currentPlayer]["tradePool"]
                            formattedRound["combatPool"] = turn["players"][currentPlayer]["combatPool"]
                            formattedRound["usedTrade"] = turn["players"][currentPlayer]["usedTrade"]
                            formattedRound["usedCombat"] = turn["players"][currentPlayer]["usedCombat"]
                        }
                        if ("newAuthority" in turn["players"][player]) {
                            formattedRound["authority"][player] = {
                                diff: turn["players"][player]["Authority"],
                                new: turn["players"][player]["newAuthority"]
                            }
                        }
                    }
                }
                formattedRound["purchasedCards"] = turn["purchasedCards"]
                formattedRound["completedMissions"] = turn["missions"]
                formattedRound["events"] = turn["events"]
                formattedRound["scrappedCards"] = turn["scrappedCards"]
                formattedRound["discardedCards"] = turn["discardedCards"]
                formattedRound["destroyedBases"] = turn["destroyedBases"]
                formattedRound["winner"] = turn["winner"]
                formattedRound["winCondition"] = turn["winCondition"]
                formattedRound["drawCount"] = turn["drawCount"]
                formattedRound["tradeRowSlot"] = turn["tradeRowSlot"]
                formattedRound["shuffleCount"] = turn["shuffleCount"]
                formattedRound["foundGambits"] = turn["foundGambits"]
                rounds.push(formattedRound)
            }
        }
        return {
            firstPlayer: firstPlayer,
            winner: rounds[rounds.length - 1]["winner"],
            rounds: rounds,
            winCondition: rounds[rounds.length - 1]["winCondition"]
        }
    }

    visitTurn(ctx) {
        let turnData = {
            purchasedCards: [],
            scrappedCards: [],
            discardedCards: [],
            destroyedBases: [],
            events: [],
            missions: [],
            tradeRowSlot: [],
            winner: "",
            winCondition: "",
            drawCount: 0,
            shuffleCount: 0,
            currentPlayer: "",
            players: {},
            foundGambits: []
        }
        if (ctx.action().length > 0 && ctx.action()[0].resolveCommander()) {
            //skip the first turns of a skirmish because nothing happend
            //during these turns apart from the user chosing their commander
            return null
        }
        for (let i = 0; i < ctx.action().length; i++) {
            let action = this.visit(ctx.action()[i])
            //console.log(action)
            if ("cardAcquisition" in action) {
                if (!(action["cardAcquisition"].match("tothetopofthedeck") || action["cardAcquisition"].match("tohand"))) {
                    turnData["purchasedCards"].push(action["cardAcquisition"])
                }
            }
            else if ("discardedCard" in action) {
                turnData["discardedCards"].push(action["discardedCard"])
            }
            else if ("baseDestroy" in action) {
                turnData["destroyedBases"].push(action["baseDestroy"])
            }
            else if ("cardAction" in action) {
                //console.log(action["cardAction"]["cardEffect"]["players"])
                let listPlayers = Object.keys(action["cardAction"]["cardEffect"]["players"])
                for (let i = 0; i < listPlayers.length; i++) {
                    let playerName = listPlayers[i]
                    let player = action["cardAction"]["cardEffect"]["players"][playerName]
                    if (!(playerName in turnData["players"])) {
                        turnData["players"][playerName] = {
                            tradePool: player["tradePool"],
                            usedTrade: player["usedTrade"],
                            combatPool: player["combatPool"],
                            usedCombat: player["usedCombat"],
                            Authority: player["Authority"],
                            Discard: player["Discard"],
                        }
                    } else {
                        turnData["players"][playerName]["tradePool"] += player["tradePool"]
                        turnData["players"][playerName]["usedTrade"] += player["usedTrade"]
                        turnData["players"][playerName]["combatPool"] += player["combatPool"]
                        turnData["players"][playerName]["usedCombat"] += player["usedCombat"]
                        turnData["players"][playerName]["Authority"] += player["Authority"]
                        turnData["players"][playerName]["Discard"] += player["Discard"]
                    }
                    if ("newAuthority" in player) {
                        //console.log(player)
                        turnData["players"][playerName]["newAuthority"] = player["newAuthority"]
                    }
                }
                //turnData["scrappedCards"] = turnData["scrappedCards"].concat(action["cardAction"]["cardEffect"]["scrap"])
                turnData["drawCount"] += action["cardAction"]["cardEffect"]["drawCount"]
                turnData["shuffleCount"] += action["cardAction"]["cardEffect"]["shuffleCount"]
                // if we see a new shuffle we should create a new list of purchased cards to distinguish decks
                turnData["purchasedCards"] = turnData["purchasedCards"].concat(action["cardAction"]["cardEffect"]["acquiredCards"])
                turnData["foundGambits"] = turnData["foundGambits"].concat(action["cardAction"]["cardEffect"]["foundGambits"])
                if ("event" in action["cardAction"]["trigger"]) {
                    turnData["events"] = turnData["events"].concat(action["cardAction"]["trigger"]["event"])
                }
                else if ("mission" in action["cardAction"]["trigger"]) {
                    turnData["missions"] = turnData["missions"].concat(action["cardAction"]["trigger"]["mission"])
                }
                else if ("scrapSelf" in action["cardAction"]["trigger"]) {
                    //check if we are scrapping a stealthneedle
                    if (action["cardAction"]["cardEffect"]["scrap"].includes("stealthneedle")) {
                        turnData["scrappedCards"].push("stealthneedle")
                    } else {
                        turnData["scrappedCards"] = turnData["scrappedCards"].concat(action["cardAction"]["trigger"]["scrapSelf"])
                    }
                    //in some cases self-scrap can trigger the scrap of deck cards
                    if (selfScrapToDeckScrapCards.includes(action["cardAction"]["trigger"]["scrapSelf"])) {
                        turnData["scrappedCards"] = turnData["scrappedCards"].concat(action["cardAction"]["cardEffect"]["scrapSummary"])
                    }
                    if (action["cardAction"]["trigger"]["scrapSelf"] == "acceptablelosses") {
                        //scrapping this card does not result in a "player is scrapping X" so we need to check the scrapped cards
                        for (let i = 0; i < action["cardAction"]["cardEffect"]["scrap"].length; i++) {
                            if (action["cardAction"]["cardEffect"]["scrap"][i] != "acceptablelosses") {
                                turnData["scrappedCards"].push(action["cardAction"]["cardEffect"]["scrap"][i])
                            }
                        }
                    }
                }
                else if ("play" in action["cardAction"]["trigger"]) {
                    if (cardsWithDeckScrapAbility.includes(action["cardAction"]["trigger"]["play"])) {
                        if (action["cardAction"]["cardEffect"]["scrapSummary"].length != 0) {
                            turnData["scrappedCards"] = turnData["scrappedCards"].concat(action["cardAction"]["cardEffect"]["scrapSummary"])
                        } else {
                            //for some cards (battle bot) the instant effect doesn't result in a "player is scrapping  X"
                            turnData["scrappedCards"] = turnData["scrappedCards"].concat(action["cardAction"]["cardEffect"]["scrap"])
                        }
                    }
                }
                else if ("activate" in action["cardAction"]["trigger"]) {
                    if (cardsWithDeckScrapAbility.includes(action["cardAction"]["trigger"]["activate"])) {
                        //careful that acivating unity fighter will let you scrap from both deck and trade row
                        //the solution is to only read the scrap from the scrapsummary if it is present
                        if (action["cardAction"]["cardEffect"]["scrapSummary"].length != 0) {
                            turnData["scrappedCards"] = turnData["scrappedCards"].concat(action["cardAction"]["cardEffect"]["scrapSummary"])
                            if (action["cardAction"]["trigger"]["activate"] == "recyclebot") {
                                //if we are activating recycle bot then it is also scrapped
                                turnData["scrappedCards"].push("recyclebot")
                            }
                        } else {
                            //for some cards (battle bot) the instant effect doesn't result in a "player is scrapping  X"
                            turnData["scrappedCards"] = turnData["scrappedCards"].concat(action["cardAction"]["cardEffect"]["scrap"])
                        }
                    }
                }
                else if ("resolve" in action["cardAction"]["trigger"]) {
                    turnData["scrappedCards"] = turnData["scrappedCards"].concat(action["cardAction"]["cardEffect"]["scrap"])
                }
                else if ("traderowslot" in action["cardAction"]["trigger"]) {
                    turnData["tradeRowSlot"] = action["cardAction"]["cardEffect"]["scrap"]
                }
                else if ("chose" in action["cardAction"]["trigger"]) {
                    turnData["scrappedCards"] = turnData["scrappedCards"].concat(action["cardAction"]["cardEffect"]["scrap"])
                } else if ("choseScrapTradeRow" in action["cardAction"]["trigger"]) {
                    if (action["cardAction"]["cardEffect"]["scrap"].includes("biodroidotto")) {
                        //don't include card scrapped from the trade row
                        turnData["scrappedCards"] = turnData["scrappedCards"].concat(["biodroidotto"])
                    } else if (action["cardAction"]["cardEffect"]["scrap"].includes("biocaptainkalle")) {
                        //don't include card scrapped from the trade row
                        turnData["scrappedCards"] = turnData["scrappedCards"].concat(["biocaptainkalle"])
                    } else if (action["cardAction"]["cardEffect"]["scrap"].includes("pactmanagerscott")) {
                        //don't include card scrapped from the trade row
                        turnData["scrappedCards"] = turnData["scrappedCards"].concat(["pactmanagerscott"])
                    }
                }
            }
            else if ("balanceUpdate" in action) {
                let playerName = action["balanceUpdate"]["target"]
                if (!(playerName in turnData["players"])) {
                    turnData["players"][playerName] = {
                        tradePool: 0,
                        usedTrade: 0,
                        combatPool: 0,
                        usedCombat: 0,
                        Authority: 0,
                        Discard: 0
                    }
                }
                let category = action["balanceUpdate"]["effect"]["category"]
                turnData["players"][playerName][category] += action["balanceUpdate"]["effect"]["value"]
                if (category == "Authority") {
                    //console.log(action["balanceUpdate"])
                    turnData["players"][playerName]["newAuthority"] = action["balanceUpdate"]["newValue"]
                }
                if ("card" in action["balanceUpdate"]) {
                    if ((action["balanceUpdate"]["card"] == "energyshield") || (action["balanceUpdate"]["card"] == "frontierfleet") || (action["balanceUpdate"]["card"] == "veteranpilots")) {
                        //console.log(action["balanceUpdate"]["card"])
                        turnData["foundGambits"].push(action["balanceUpdate"]["card"])
                    }
                }
            }
            else if ("drawCount" in action) {
                turnData["drawCount"] += action["drawCount"]
            }
            else if ("currentPlayer" in action) {
                turnData["currentPlayer"] = action["currentPlayer"]
            }
            else if ("winner" in action) {
                turnData["winner"] = action["winner"]
            }
            else if ("scrapped" in action) {
                if (action["scrapped"] == "graymarket") {
                    turnData["scrappedCards"].push(action["scrapped"])
                }
            }
            else if ("concede" in action) {
                turnData["winCondition"] = "resignation"
            }
            else if ("timeout" in action && turnData["winCondition"] == "") {
                //don't override win condition if already set
                turnData["winCondition"] = "timeout"
            }
            else if ("shuffled" in action) {
                turnData["shuffleCount"] += 1
            }
        }
        return turnData
    }

    visitAction(ctx) {
        if (ctx.cardAcquisition()) {
            //console.log(`acquired card: ${this.visit(ctx.cardAcquisition())}`)
            return {
                cardAcquisition: this.visit(ctx.cardAcquisition())
            }
        } else if (ctx.discarded()) {
            //console.log(`player is discarding: ${this.visit(ctx.discard())}`)
            return {
                discardedCard: this.visit(ctx.discarded())
            }
        } else if (ctx.destroyBase()) {
            //console.log(`player destroyed base: ${this.visit(ctx.destroyBase())}`)
            return {
                baseDestroy: this.visit(ctx.destroyBase())
            }
        } else if (ctx.cardAction()) {
            return {
                cardAction: this.visit(ctx.cardAction())
            }
        } else if (ctx.balanceUpdate()) {
            return {
                balanceUpdate: this.visit(ctx.balanceUpdate())
            }
        } else if (ctx.drawCards()) {
            //console.log(`Player just drew ${this.visit(ctx.drawCards())} cards`)
            return {
                drawCount: this.visit(ctx.drawCards())
            }
        } else if (ctx.shuffleCards()) {
            return {
                shuffled: true
            }
        } else if (ctx.endTurn()) {
            return {
                currentPlayer: this.visit(ctx.endTurn())
            }
        } else if (ctx.winStatus()) {
            //console.log(`player ${this.visit(ctx.winStatus())} has won the game`)
            return {
                winner: this.visit(ctx.winStatus())
            }
        } else if (ctx.scrapped()) {
            return {
                scrapped: this.visit(ctx.scrapped())
            }
        } else if (ctx.concede()) {
            return {
                concede: this.visit(ctx.concede())
            }
        } else if (ctx.timeout()) {
            return {
                timeout: this.visit(ctx.timeout())
            }
        } else {
            return {}
        }
    }

    visitCardAction(ctx) {
        let cardAction = {
            trigger: this.visit(ctx.cardTrigger()),
            cardEffect: {
                scrap: [],
                scrapSummary: [],
                drawCount: 0,
                players: [],
                acquiredCards: [],
                shuffleCount: 0,
                foundGambits: []
            }
        }
        //console.log(`Card triggering effect is ${this.visit(ctx.cardTrigger())}`)
        for (let i = 0; i < ctx.cardEffect().length; i++) {
            let cardEffect = this.visit(ctx.cardEffect()[i])
            if ("balanceUpdate" in cardEffect) {
                let target = cardEffect["balanceUpdate"]["target"]
                if (!(target in cardAction["cardEffect"]["players"])) {
                    cardAction["cardEffect"]["players"][target] = {
                        tradePool: 0,
                        usedTrade: 0,
                        combatPool: 0,
                        usedCombat: 0,
                        Authority: 0,
                        Discard: 0
                    }
                }
                let category = cardEffect["balanceUpdate"]["effect"]["category"]
                cardAction["cardEffect"]["players"][target][category] += cardEffect["balanceUpdate"]["effect"]["value"]
                if (category == "Authority") {
                    cardAction["cardEffect"]["players"][target]["newAuthority"] = cardEffect["balanceUpdate"]["newValue"]
                }
                if ("card" in cardEffect["balanceUpdate"]) {
                    if ((cardEffect["balanceUpdate"]["card"] == "energyshield") || (cardEffect["balanceUpdate"]["card"] == "frontierfleet") || (cardEffect["balanceUpdate"]["card"] == "veteranpilots")) {
                        cardAction["cardEffect"]["foundGambits"].push(cardEffect["balanceUpdate"]["card"])
                    }
                }
            }
            if ("scrapped" in cardEffect) {
                cardAction["cardEffect"]["scrap"].push(cardEffect["scrapped"])
            }
            if ("drawCount" in cardEffect) {
                cardAction["cardEffect"]["drawCount"] += cardEffect["drawCount"]
            }
            if ("acquiredCard" in cardEffect) {
                cardAction["cardEffect"]["acquiredCards"].push(cardEffect["acquiredCard"])
            }
            if ("scrapSummary" in cardEffect) {
                cardAction["cardEffect"]["scrapSummary"].push(cardEffect["scrapSummary"])
            }
            if ("shuffled" in cardEffect) {
                cardAction["cardEffect"]["shuffleCount"] += 1
            }
        }
        return cardAction
    }

    visitCardTrigger(ctx) {
        if (ctx.playSingle()) {
            return {
                "play": this.visit(ctx.playSingle())
            }
        } else if (ctx.activate()) {
            return {
                "activate": this.visit(ctx.activate())
            }
        } else if (ctx.scrapSelf()) {
            return {
                "scrapSelf": this.visit(ctx.scrapSelf())
            }
        } else if (ctx.event()) {
            return {
                "event": this.visit(ctx.event())
            }
        } else if (ctx.mission()) {
            return {
                "mission": this.visit(ctx.mission())
            }
        } else if (ctx.resolving()) {
            return this.visit(ctx.resolving())
        } else if (ctx.choseScrapHandOrDiscard() || ctx.choseScrapDiscard() || ctx.choseBattleAndDiscard() || ctx.choseAddAuthority()) {
            return {
                "chose": true
            }
        } else if (ctx.choseScrapTradeRow()) {
            return {
                "choseScrapTradeRow": true
            }

        } else {
            return {}
        }
    }

    visitCardEffect(ctx) {
        let cardEffect = {}
        if (ctx.balanceUpdate()) {
            cardEffect["balanceUpdate"] = this.visit(ctx.balanceUpdate())
        } else if (ctx.scrapped()) {
            cardEffect["scrapped"] = this.visit(ctx.scrapped())
        } else if (ctx.scrapSummary()) {
            cardEffect["scrapSummary"] = this.visit(ctx.scrapSummary())
        } else if (ctx.drawCards()) {
            cardEffect["drawCount"] = this.visit(ctx.drawCards())
        } else if (ctx.acquireToHand()) {
            cardEffect["acquiredCard"] = this.visit(ctx.acquireToHand())
        } else if (ctx.acquireToDeck()) {
            cardEffect["acquiredCard"] = this.visit(ctx.acquireToDeck())
        } else if (ctx.shuffleCards()) {
            cardEffect["shuffled"] = true
        } else {
            return {}
        }
        return cardEffect
    }

    visitBalanceUpdate(ctx) {
        let balanceUpdate = {
            target: this.visit(ctx.name()),
            effect: this.visit(ctx.effect())
        }
        if (ctx.card()) {
            balanceUpdate["card"] = this.visit(ctx.card())
        }
        if (ctx.INT()) {
            balanceUpdate["newValue"] = parseInt(ctx.INT())
        } else {
            balanceUpdate["newValue"] = 0 - Number(ctx.DECREASE().getText().replace('-', ''))
        }
        //console.log(balanceUpdate)
        return balanceUpdate
    }

    visitScrapSummary(ctx) {
        return this.visit(ctx.card())
    }

    visitDiscarded(ctx) {
        return this.visit(ctx.card())
    }

    visitWinStatus(ctx) {
        return this.visit(ctx.name())
    }

    visitEvent(ctx) {
        return this.visit(ctx.card())
    }

    visitMission(ctx) {
        return this.visit(ctx.card())
    }

    visitScrapped(ctx) {
        return this.visit(ctx.card())
    }

    visitDestroyBase(ctx) {
        return this.visit(ctx.card())
    }

    visitCardAcquisition(ctx) {
        return this.visit(ctx.card())
    }

    visitAcquireToDeck(ctx) {
        return this.visit(ctx.card())
    }

    visitAcquireToHand(ctx) {
        return this.visit(ctx.card())
    }

    visitPlaySingle(ctx) {
        return this.visit(ctx.card())
    }

    visitActivate(ctx) {
        return this.visit(ctx.card())
    }

    visitScrapSelf(ctx) {
        return this.visit(ctx.card())
    }

    visitEndTurn(ctx) {
        return this.visit(ctx.name())
    }

    visitResolving(ctx) {
        if (ctx.resolveScrapHand()) {
            return {
                "resolve": true
            }
        } else if (ctx.resolveScrapHandOrDiscard()) {
            return {
                "resolve": true
            }
        } else if (ctx.resolveScrapMultiple()) {
            return {
                "resolve": true
            }
        } else if (ctx.resolvePatience()) {
            return {
                "traderowslot": true
            }
        } else {
            return {}
        }
    }

    visitConcede(ctx) {
        return this.visit(ctx.name())
    }

    visitTimeout(ctx) {
        return this.visit(ctx.name())
    }

    visitEffect(ctx) {
        let val;
        if (ctx.INCREMENT()) {
            val = Number(ctx.INCREMENT().getText().replace('+', ''))
        } else if (ctx.DECREASE()) {
            val = 0 - Number(ctx.DECREASE().getText().replace('-', ''))
        } else {
            val = Number(ctx.INT())
        }
        let category = ctx.customWord().getText()
        if (category == "Trade" && val >= 0) {
            return {
                category: "tradePool",
                value: val
            }
        } else if (category == "Trade" && val < 0) {
            return {
                category: "usedTrade",
                value: val
            }
        } else if (category == "Combat" && val >= 0) {
            return {
                category: "combatPool",
                value: val
            }
        } else if (category == "Combat" && val < 0) {
            return {
                category: "usedCombat",
                value: val
            }
        } else {
            return {
                category: ctx.customWord().getText(),
                value: val
            }
        }
    }

    visitDrawCards(ctx) {
        return Number(ctx.INT())
    }

    visitCard(ctx) {
        return ctx.getText().toLowerCase().replace("\'", "")
    }

    visitName(ctx) {
        return ctx.getText()
    }
}

export function parseBattle(battlelog) {
    const chars = new antlr4.InputStream(battlelog);
    const lexer = new StarStarLexer(chars);
    const tokens = new antlr4.CommonTokenStream(lexer);
    const parser = new StarStarParser(tokens);
    parser.buildParseTrees = true;
    try {
        const tree = parser.battle();
        const data = tree.accept(new Visitor())
        return {
            status: "success",
            data: data
        }
    } catch (error) {
        return {
            status: "error",
            data: "Input data contains errors"
        }
    }
}

//identify if there are any syntax errors in the file
export function findErrors(battlelog) {
    const chars = new antlr4.InputStream(battlelog);
    const lexer = new StarStarLexer(chars);
    const tokens = new antlr4.CommonTokenStream(lexer);
    const parser = new StarStarParser(tokens);
    parser.buildParseTrees = true;
    try {
        parser.battle() //this is really slow
        return parser._syntaxErrors == 0
    } catch (error) {
        return false
    }
}