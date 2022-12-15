import card_list from '../card_data/cards.js'


export function getExtensionsAndEvents(rounds) {
    // track extensions in use for this game
    let extensions = []
    // track events that are triggered for this game
    let events = []
    let nextRound = {}
    for (let i = 0; i < rounds.length; i++) {
        nextRound = rounds[i]
        for(let j = 0; j < nextRound['purchasedCards'].length; j++){
            let nextCard = nextRound['purchasedCards'][j]
            if(!(extensions.includes(card_list[nextCard]['metadata']['extension']))){
                extensions.push(card_list[nextCard]['metadata']['extension'])
            }
        }
        for (let j = 0; j < nextRound['events'].length; j++) {
            let event = nextRound['events'][j]
            events.push(card_list[event]['name'])
            if (!(extensions.includes(card_list[event]['metadata']['extension']))) {
                extensions.push(card_list[event]['metadata']['extension'])
            }
        }
    }
    return {
        extensions: extensions,
        events: events
    }
}

export function getAuthorityChart(rounds) {
    let authorityData = {}
    let firstPlayer = rounds[0]['player']
    let secondPlayer = rounds[1]['player']
    let indivTurns = Math.ceil(rounds.length / 2)
    authorityData[firstPlayer] = Array(indivTurns).fill(0)
    authorityData[secondPlayer] = Array(indivTurns).fill(0)
    let startAuthority = getInitialAuthority(rounds)
    authorityData[firstPlayer][0] = startAuthority[firstPlayer]
    authorityData[secondPlayer][0] = startAuthority[secondPlayer]
    for (let i = 1; i < rounds.length; i++) {
        if (firstPlayer in rounds[i]['authority']) {
            authorityData[firstPlayer][i] = authorityData[firstPlayer][i - 1] + parseInt(rounds[i]['authority'][firstPlayer]['diff'])
        } else {
            authorityData[firstPlayer][i] = authorityData[firstPlayer][i - 1]
        }
        if (secondPlayer in rounds[i]['authority']) {
            authorityData[secondPlayer][i] = authorityData[secondPlayer][i - 1] + parseInt(rounds[i]['authority'][secondPlayer]['diff'])
        } else {
            authorityData[secondPlayer][i] = authorityData[secondPlayer][i - 1]
        }
    }
    return authorityData
}

export function getChart(rounds, category) {
    let data = {}
    let firstPlayer = rounds[0]['player']
    let secondPlayer = rounds[1]['player']
    let indivTurns = Math.ceil(rounds.length / 2)
    data[firstPlayer] = Array(indivTurns).fill(0)
    data[secondPlayer] = Array(indivTurns).fill(0)
    for (let i = 0; i < rounds.length; i++) {
        if (i % 2 == 0) {
            data[firstPlayer][i / 2] = rounds[i][category]
        } else {
            data[secondPlayer][parseInt(i / 2)] = rounds[i][category]
        }
    }
    return data
}

export function getAggregateChart(rounds, category) {
    let data = {}
    let firstPlayer = rounds[0]['player']
    let secondPlayer = rounds[1]['player']
    data[firstPlayer] = 0
    data[secondPlayer] = 0
    for (let i = 0; i < rounds.length; i++) {
        if (i % 2 == 0) {
            data[firstPlayer] += rounds[i][category]
        } else {
            data[secondPlayer] += rounds[i][category]
        }
    }
    return data
}



export function getDiscardChart(rounds) {
    let discardData = {}
    let firstPlayer = rounds[0]['player']
    let secondPlayer = rounds[1]['player']
    let indivTurns = Math.ceil(rounds.length / 2)
    discardData[firstPlayer] = Array(indivTurns).fill(0)
    discardData[secondPlayer] = Array(indivTurns).fill(0)
    for (let i = 0; i < rounds.length; i++) {
        if (i % 2 == 0) {
            discardData[firstPlayer][i / 2] = rounds[i]['discardedCards'].length
        } else {
            discardData[secondPlayer][parseInt(i / 2)] = rounds[i]['discardedCards'].length
        }
    }
    return discardData
}

export function getAggrDiscardChart(rounds) {
    let discardData = {}
    let firstPlayer = rounds[0]['player']
    let secondPlayer = rounds[1]['player']
    discardData[firstPlayer] = 0
    discardData[secondPlayer] = 0
    for (let i = 0; i < rounds.length; i++) {
        if (i % 2 == 0) {
            discardData[firstPlayer] += rounds[i]['discardedCards'].length
        } else {
            discardData[secondPlayer] += rounds[i]['discardedCards'].length
        }
    }
    return discardData
}

export function getTemporalDeck(rounds) {
    let firstPlayer = rounds[0]['player']
    let secondPlayer = rounds[1]['player']
    let firstPlayerInit = initializeDecks(rounds, firstPlayer)
    let secondPlayerInit = initializeDecks(rounds, secondPlayer)
    let tradeRowSlots = {}
    tradeRowSlots[firstPlayer] = ""
    tradeRowSlots[secondPlayer] = ""
    let turnDecks = []
    let lastTurnDeck = {
        players: {}
    }
    lastTurnDeck['players'][firstPlayer] = firstPlayerInit
    lastTurnDeck['players'][secondPlayer] = secondPlayerInit
    for (let i = 0; i < rounds.length; i++) {
        let currentRound = rounds[i]
        let nextTurnDecks = JSON.parse(JSON.stringify(lastTurnDeck));
        let currentPlayer = ""
        if (i % 2 == 0) {
            currentPlayer = firstPlayer
        } else {
            currentPlayer = secondPlayer
        }
        //this is the effect of patience rewarded event
        if (currentRound["tradeRowSlot"].length == 1) {
            tradeRowSlots[currentPlayer] = currentRound["tradeRowSlot"][0]
        }
        //update completed missions
        if (currentRound["completedMissions"].length != 0) {
            nextTurnDecks['players'][currentPlayer]['missions'] = nextTurnDecks['players'][currentPlayer]['missions'].concat(currentRound["completedMissions"])
        }
        for (let j = 0; j < currentRound['purchasedCards'].length; j++) {
            let purchasedCard = currentRound['purchasedCards'][j]
            console.log(nextTurnDecks['players'][currentPlayer])
            if (!(purchasedCard in nextTurnDecks['players'][currentPlayer]['deck'])) {
                nextTurnDecks['players'][currentPlayer]['deck'][purchasedCard] = {
                    purchaseCount: 1,
                    scrapCount: 0
                }
            } else {
                nextTurnDecks['players'][currentPlayer]['deck'][purchasedCard]['purchaseCount'] += 1
            }
        }
        for (let j = 0; j < currentRound['scrappedCards'].length; j++) {
            let scrappedCard = currentRound['scrappedCards'][j]
            let gambitCard = ""
            //check if the card is a traderowslot
            if (scrappedCard == "traderowslot") {
                let tradeRowSlot = tradeRowSlots[currentPlayer]
                if (!(tradeRowSlot in nextTurnDecks['players'][currentPlayer]['deck'])) {
                    nextTurnDecks['players'][currentPlayer]['deck'][tradeRowSlot] = {
                        purchaseCount: 1,
                        scrapCount: 0
                    }
                } else {
                    nextTurnDecks['players'][currentPlayer]['deck'][tradeRowSlot]['purchaseCount'] += 1
                }
            } else if (scrappedCard.endsWith("2")) {
                gambitCard = scrappedCard.substring(0, scrappedCard.length - 1)
                if (gambitCard in card_list && card_list[gambitCard]["metadata"]["extension"] == "gambit") {
                    if (!(gambitCard in nextTurnDecks['players'][currentPlayer]['gambit'])) {
                        nextTurnDecks['players'][currentPlayer]["gambit"][gambitCard] = {
                            scrapCount: 1
                        }
                    } else {
                        nextTurnDecks['players'][currentPlayer]["gambit"][gambitCard]['scrapCount'] += 1
                    }
                } else {
                    console.log(`found a scrapped card ${scrappedCard} not in card list`)
                }
            }
            else if (scrappedCard in card_list) {
                if (card_list[scrappedCard]["metadata"]["extension"] == "gambit") {
                    if (!(scrappedCard in nextTurnDecks['players'][currentPlayer]['gambit'])) {
                        nextTurnDecks['players'][currentPlayer]["gambit"][scrappedCard] = {
                            scrapCount: 1
                        }
                    } else {
                        nextTurnDecks['players'][currentPlayer]["gambit"][scrappedCard] += 1
                    }
                }
                else if (scrappedCard in nextTurnDecks['players'][currentPlayer]['deck']) {
                    nextTurnDecks['players'][currentPlayer]['deck'][scrappedCard]['scrapCount'] += 1
                } else {
                    console.log(`found a scrapped card ${scrappedCard} not in deck`)
                }
            } else {
                console.log(`found a scrapped card ${scrappedCard} not in card list`)
            }
        }
        lastTurnDeck = nextTurnDecks
        turnDecks.push(nextTurnDecks)
    }
    return turnDecks
}

function getInitialAuthority(rounds) {
    let players = {}
    for (let i = 0; i < rounds.length; i++) {
        let nextRound = rounds[i]
        for (let player in nextRound['authority']) {
            if (!(player in players)) {
                players[player] = nextRound['authority'][player]['new']
            }
        }
        if (Object.keys(players).length == 2) {
            return players
        }
    }
}

export function initializeDecks(rounds, player) {
    let nextRound = {}
    for (let i = 0; i < rounds.length; i++) {
        nextRound = rounds[i]
        if (player in nextRound['authority']) {
            let startAuthority = nextRound['authority'][player]['new'] - nextRound['authority'][player]['diff']
            return {
                deck: getInitialDeck(startAuthority),
                gambit: {},
                missions: []
            }
        }
    }
}

// If the commanders extension is in use the the initial deck is not going to
// be 8 scouts and 2 vipers
function getInitialDeck(startAuthority) {
    if (startAuthority == 50) {
        //initialize deck with standard game
        return {
            scout: {
                purchaseCount: 8,
                scrapCount: 0
            },
            viper: {
                purchaseCount: 2,
                scrapCount: 0
            }
        }
    } else if (startAuthority == 64) {
        return {
            "imperialtalon": {
                "purchaseCount": 1,
                "scrapCount": 0
            },
            "imperialviper": {
                "purchaseCount": 1,
                "scrapCount": 0
            },
            "ranger": {
                "purchaseCount": 1,
                "scrapCount": 0
            },
            "salvagedrone": {
                "purchaseCount": 1,
                "scrapCount": 0
            },
            "scout": {
                "purchaseCount": 4,
                "scrapCount": 0
            },
            "scoutbot": {
                "purchaseCount": 1,
                "scrapCount": 0
            },
            "stellarfalcon": {
                "purchaseCount": 1,
                "scrapCount": 0
            },
            "viper": {
                "purchaseCount": 1,
                "scrapCount": 0
            },
            "welderdrone": {
                "purchaseCount": 1,
                "scrapCount": 0
            }
        }
    }
    else if (startAuthority == 68) {
        return {
            "cargoboat": {
                "purchaseCount": 1,
                "scrapCount": 0
            },
            "diplomaticshuttle": {
                "purchaseCount": 1,
                "scrapCount": 0
            },
            "federationscout": {
                "purchaseCount": 1,
                "scrapCount": 0
            },
            "imperialviper": {
                "purchaseCount": 1,
                "scrapCount": 0
            },
            "scout": {
                "purchaseCount": 4,
                "scrapCount": 0
            },
            "stellarfalcon": {
                "purchaseCount": 1,
                "scrapCount": 0
            },
            "tributetransport": {
                "purchaseCount": 1,
                "scrapCount": 0
            },
            "viper": {
                "purchaseCount": 1,
                "scrapCount": 0
            },
        }
    }
    else if (startAuthority == 62) {
        return {
            "cargoboat": {
                "purchaseCount": 1,
                "scrapCount": 0
            },
            "federationscout": {
                "purchaseCount": 1,
                "scrapCount": 0
            },
            "frontiertug": {
                "purchaseCount": 1,
                "scrapCount": 0
            },
            "laserdrone": {
                "purchaseCount": 1,
                "scrapCount": 0
            },
            "ranger": {
                "purchaseCount": 1,
                "scrapCount": 0
            },
            "salvagedrone": {
                "purchaseCount": 1,
                "scrapCount": 0
            },
            "scout": {
                "purchaseCount": 4,
                "scrapCount": 0
            },
            "viper": {
                "purchaseCount": 1,
                "scrapCount": 0
            },
            "viperbot": {
                "purchaseCount": 1,
                "scrapCount": 0
            },
            "coalitionstronghold": {
                "purchaseCount": 1,
                "scrapCount": 0
            }
        }
    }
    else if (startAuthority == 66) {
        return {
            "clusterscout": {
                "purchaseCount": 1,
                "scrapCount": 0
            },
            "diplomaticshuttle": {
                "purchaseCount": 1,
                "scrapCount": 0
            },
            "escortviper": {
                "purchaseCount": 1,
                "scrapCount": 0
            },
            "frontiertug": {
                "purchaseCount": 1,
                "scrapCount": 0
            },
            "ranger": {
                "purchaseCount": 1,
                "scrapCount": 0
            },
            "ripper": {
                "purchaseCount": 1,
                "scrapCount": 0
            },
            "scout": {
                "purchaseCount": 4,
                "scrapCount": 0
            },
            "swarmling": {
                "purchaseCount": 1,
                "scrapCount": 0
            },
            "viper": {
                "purchaseCount": 1,
                "scrapCount": 0
            },
        }
    }
    else if (startAuthority == 70) {
        return {
            "clusterviper": {
                "purchaseCount": 1,
                "scrapCount": 0
            },
            "laserdrone": {
                "purchaseCount": 1,
                "scrapCount": 0
            },
            "protopod": {
                "purchaseCount": 1,
                "scrapCount": 0
            },
            "ranger": {
                "purchaseCount": 1,
                "scrapCount": 0
            },
            "scout": {
                "purchaseCount": 4,
                "scrapCount": 0
            },
            "scoutbot": {
                "purchaseCount": 1,
                "scrapCount": 0
            },
            "swarmling": {
                "purchaseCount": 1,
                "scrapCount": 0
            },
            "viper": {
                "purchaseCount": 1,
                "scrapCount": 0
            },
            "welderdrone": {
                "purchaseCount": 1,
                "scrapCount": 0
            }
        }
    }
    else if (startAuthority == 60) {
        return {
            "clusterviper": {
                "purchaseCount": 1,
                "scrapCount": 0
            },
            "imperialscout": {
                "purchaseCount": 1,
                "scrapCount": 0
            },
            "imperialtalon": {
                "purchaseCount": 1,
                "scrapCount": 0
            },
            "protopod": {
                "purchaseCount": 1,
                "scrapCount": 0
            },
            "ranger": {
                "purchaseCount": 1,
                "scrapCount": 0
            },
            "ripper": {
                "purchaseCount": 1,
                "scrapCount": 0
            },
            "scout": {
                "purchaseCount": 4,
                "scrapCount": 0
            },
            "tributetransport": {
                "purchaseCount": 1,
                "scrapCount": 0
            },
            "viper": {
                "purchaseCount": 1,
                "scrapCount": 0
            }
        }
    }
    else if (startAuthority == 72) {
        return {
            "assaultshard": {
                "purchaseCount": 3,
                "scrapCount": 0
            },
            "commandshard": {
                "purchaseCount": 2,
                "scrapCount": 0
            },
            "reconshard": {
                "purchaseCount": 3,
                "scrapCount": 0
            },
            "salvageshard": {
                "purchaseCount": 3,
                "scrapCount": 0
            },
            "transportshard": {
                "purchaseCount": 3,
                "scrapCount": 0
            }
        }
    }
}