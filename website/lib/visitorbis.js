import antlr4 from 'antlr4';
import StarStarLexer from './antlr4bis/StarStarLexer.js';
import StarStarParser from './antlr4bis/StarStarParser.js';
import StarStarVisitor from './antlr4bis/StarStarVisitor.js';

class Visitor extends StarStarVisitor {
    visitBattle(ctx) {
        let rounds = []
        for (let i = 0; i < ctx.turn().length; i++) {
            let turn = this.visit(ctx.turn()[i])
            let currentPlayer = turn["currentPlayer"] || turn["winner"]
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
                authority: {},
            }
            //format to match our legacy visitor so that we can easily compare
            formattedRound["tradePool"] = turn["players"][currentPlayer]["tradePool"]
            formattedRound["combatPool"] = turn["players"][currentPlayer]["combatPool"]
            formattedRound["usedTrade"] = turn["players"][currentPlayer]["usedTrade"]
            formattedRound["usedCombat"] = turn["players"][currentPlayer]["usedCombat"]
            formattedRound["purchasedCards"] = turn["purchasedCards"]
            formattedRound["completedMissions"] = []
            formattedRound["events"] = []
            formattedRound["scrappedCards"] = turn["scrappedCards"]
            formattedRound["discardedCards"] = turn["discardedCards"]
            formattedRound["destroyedBases"] = turn["destroyedBases"]
            formattedRound["winner"] = turn["winner"]
            formattedRound["winCondition"] = ""
            formattedRound["drawCount"] = turn["drawCount"] - 5
            for (let player in turn["players"]) {
                if ("newAuthority" in turn["players"][player]) {
                    formattedRound["authority"][player] = {
                        diff: turn["players"][player]["Authority"],
                        new: turn["players"][player]["newAuthority"]
                    }
                }
            }
            formattedRound["player"] = currentPlayer
            rounds.push(formattedRound)
        }
        return {
            firstPlayer: rounds[0]["player"],
            winner: rounds[rounds.length-1]["winner"],
            rounds: rounds,
            winCondition: ""
        }
    }

    visitTurn(ctx) {
        let turnData = {
            purchasedCards: [],
            scrappedCards: [],
            discardedCards: [],
            destroyedBases: [],
            winner: "",
            drawCount: 0,
            currentPlayer: "",
            players: {}
        }
        for (let i = 0; i < ctx.action().length; i++) {
            let action = this.visit(ctx.action()[i])
            if ("cardAcquisition" in action) {
                turnData["purchasedCards"].push(action["cardAcquisition"])
            }
            if ("discardedCard" in action) {
                turnData["discardedCards"].push(action["discardedCard"])
            }
            if ("baseDestroy" in action) {
                turnData["destroyedBases"].push(action["baseDestroy"])
            }
            if ("cardAction" in action) {
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
                        if ("newAuthority" in player) {
                            turnData["players"][playerName]["newAuthority"] = player["newAuthority"]
                        }
                    }
                }
                turnData["scrappedCards"] = turnData["scrappedCards"].concat(action["cardAction"]["cardEffect"]["scrap"])
                turnData["drawCount"] += action["cardAction"]["cardEffect"]["drawCount"]
            }
            if ("balanceUpdate" in action) {
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
                    turnData["players"][playerName]["newAuthority"] = action["balanceUpdate"]["newValue"]
                }
            }
            if ("drawCount" in action) {
                turnData["drawCount"] += action["drawCount"]
            }
            if ("currentPlayer" in action) {
                turnData["currentPlayer"] = action["currentPlayer"]
            }
            if ("winner" in action) {
                turnData["winner"] = action["winner"]
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
            return {}
        } else if (ctx.endTurn()) {
            return {
                currentPlayer: this.visit(ctx.endTurn())
            }
        } else if (ctx.winStatus()) {
            //console.log(`player ${this.visit(ctx.winStatus())} has won the game`)
            return {
                winner: this.visit(ctx.winStatus())
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
                drawCount: 0,
                players: []
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
            }
            if ("scrapped" in cardEffect) {
                cardAction["cardEffect"]["scrap"].push(cardEffect["scrapped"])
            }
            if("drawCount" in cardEffect){
                cardAction["cardEffect"]["drawCount"] += cardEffect["drawCount"]
            }
        }
        return cardAction
    }

    visitCardTrigger(ctx) {
        if (ctx.playSingle()) {
            return this.visit(ctx.playSingle())
        } else if (ctx.activate()) {
            return this.visit(ctx.activate())
        } else {
            return this.visit(ctx.scrapSelf())
        }
    }

    visitCardEffect(ctx) {
        let cardEffect = {}
        if (ctx.balanceUpdate()) {
            cardEffect["balanceUpdate"] = this.visit(ctx.balanceUpdate())
        } else if (ctx.scrapped()) {
            //console.log(`Card: ${this.visit(ctx.scrapped())} has been scrapped`)
            cardEffect["scrapped"] = this.visit(ctx.scrapped())
        } else if (ctx.scrapSummary()) {
            //console.log(`Card: ${this.visit(ctx.scrapSummary())} has been scrapped`)
            cardEffect["scrapSummary"] = this.visit(ctx.scrapSummary())
        } else if(ctx.drawCards()){
            cardEffect["drawCount"] = this.visit(ctx.drawCards())
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

    visitScrapped(ctx) {
        return this.visit(ctx.card())
    }

    visitDestroyBase(ctx) {
        return this.visit(ctx.card())
    }

    visitCardAcquisition(ctx) {
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

    visitEffect(ctx) {
        let val;
        if (ctx.INCREMENT()) {
            val = Number(ctx.INCREMENT().getText().replace('+', ''))
        } else if (ctx.DECREASE()) {
            val = 0 - Number(ctx.DECREASE().getText().replace('-', ''))
        } else {
            val = Nummber(ctx.INT())
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
        return ctx.getText().toLowerCase()
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
        return {
            status: "success",
            data: tree.accept(new Visitor())
        }
    } catch (error) {
        return {
            status: "error",
            data: error.message
        }
    }
}