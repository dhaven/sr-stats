import { core_set } from '../card_data/core_set.js';
import { colony_wars } from '../card_data/colony_wars.js';
import { frontiers } from '../card_data/frontiers.js';
import { bases_battleships } from '../card_data/bases_battleships.js';
import { fleets_fortresses } from '../card_data/fleets_fortresses.js';
import { frontiers_promos } from '../card_data/frontiers_promos.js';
import { assault } from '../card_data/assault.js';
import { command } from '../card_data/command.js';
import { stellar_allies } from '../card_data/stellar_allies.js';
import { united_heroes } from '../card_data/united_heroes.js';
import { crisis_heroes } from '../card_data/crisis_heroes.js';
import { promo1 } from '../card_data/promo1.js';
import { promo2 } from '../card_data/promo2.js';
import { tech } from '../card_data/tech.js';
import { command_decks } from '../card_data/command_decks.js'
import { missions } from '../card_data/missions.js'
import { events } from '../card_data/events.js'
import { frontiers_events } from '../card_data/frontiers_events.js'
import { requisition } from '../card_data/requisition.js'

var card_list = Object.assign(
    core_set['cards'],
    frontiers['cards'],
    colony_wars['cards'],
    bases_battleships['cards'],
    fleets_fortresses['cards'],
    frontiers_promos['cards'],
    assault['cards'],
    command['cards'],
    stellar_allies['cards'],
    united_heroes['cards'],
    crisis_heroes['cards'],
    promo1['cards'],
    promo2['cards'],
    tech['cards'],
    command_decks['cards'],
    missions['cards'],
    events['cards'],
    frontiers_events['cards'],
    requisition['cards']
)

// enhance battle object with deck data and extensions in use
function enhance(rounds) {
    let activePlayer = ""
    let players = {}
    let firstPlayerInit = initializeAuthorityAndDecks(rounds, rounds[0]['player'])
    let secondPlayerInit = initializeAuthorityAndDecks(rounds, rounds[1]['player'])
    // track extensions in use for this game
    let extensions = []
    // track events that are triggered for this game
    let events = []
    players[rounds[0]['player']] = {
        startAuthority: firstPlayerInit['startAuthority'],
        finalAuthority: firstPlayerInit['startAuthority'],
        deck: firstPlayerInit['deck'],
        completedMissions: []

    }
    players[rounds[1]['player']] = {
        startAuthority: secondPlayerInit['startAuthority'],
        finalAuthority: secondPlayerInit['startAuthority'],
        deck: secondPlayerInit['deck'],
        completedMissions: []
    }
    let nextRound = {}
    for (let i = 0; i < rounds.length; i++) {
        nextRound = rounds[i]
        activePlayer = rounds[i]['player']
        for (let player in nextRound['authority']) {
            players[player]['finalAuthority'] += nextRound['authority'][player]['diff']
        }
        for (let j = 0; j < nextRound['purchasedCards'].length; j++) {
            let nextCard = nextRound['purchasedCards'][j];
            let nextFaction = ""
            players[activePlayer]['deck']['count'] += 1
            players[activePlayer]['deck']['cost'] += card_list[nextCard]['cost']
            if (!(extensions.includes(card_list[nextCard]['metadata']['extension']))) {
                extensions.push(card_list[nextCard]['metadata']['extension'])
            }
            if (card_list[nextCard]['type'] == "ship") {
                players[activePlayer]['deck']['ships'] += 1
            } else if (card_list[nextCard]['type'] == "base") {
                players[activePlayer]['deck']['bases'] += 1
            }
            for (let k = 0; k < card_list[nextCard]['faction'].length; k++) {
                nextFaction = card_list[nextCard]['faction'][k]
                players[activePlayer]['deck']['factions'][nextFaction] += 1
            }
            if (nextCard in players[activePlayer]['deck']['cards']) {
                players[activePlayer]['deck']['cards'][nextCard]['count'] += 1
            } else {
                players[activePlayer]['deck']['cards'][nextCard] = {
                    name: card_list[nextCard]['name'],
                    cost: card_list[nextCard]['cost'],
                    faction: card_list[nextCard]['faction'],
                    type: card_list[nextCard]['type'],
                    metadata: card_list[nextCard]['metadata'],
                    count: 1,
                    discardCount: 0
                }
            }
        }
        for (let j = 0; j < nextRound['discardedCards'].length; j++) {
            let nextCard = nextRound['discardedCards'][j]
            if (nextCard in players[activePlayer]['deck']['cards']) {
                players[activePlayer]['deck']['cards'][nextCard]['discardCount'] += 1
            }
        }
        for (let j = 0; j < nextRound['completedMissions'].length; j++) {
            let mission = nextRound['completedMissions'][j]
            players[activePlayer]['completedMissions'].push(card_list[mission]['name'])
            if (!(extensions.includes(card_list[mission]['metadata']['extension']))) {
                extensions.push(card_list[mission]['metadata']['extension'])
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
        players: players,
        extensions: extensions,
        events: events
    }
}

function initializeDecks(rounds, player) {
    let nextRound = {}
    for (let i = 0; i < rounds.length; i++) {
        nextRound = rounds[i]
        if (player in nextRound['authority']) {
            let startAuthority = nextRound['authority'][player]['new'] - nextRound['authority'][player]['diff']
            return {
                deck: getInitialDeckBis(startAuthority)
            }
        }
    }
}

function getInitialDeckBis(startAuthority) {
    if (startAuthority == 50) {
        //initialize deck with standard game
        return {
            scout: {
                name: core_set['cards']['scout']['name'],
                cost: core_set['cards']['scout']['cost'],
                faction: core_set['cards']['scout']['faction'],
                type: core_set['cards']['scout']['type'],
                purchaseCount: 8,
                scrapCount: 0
            },
            viper: {
                name: core_set['cards']['viper']['name'],
                cost: core_set['cards']['viper']['cost'],
                faction: core_set['cards']['viper']['faction'],
                type: core_set['cards']['viper']['type'],
                purchaseCount: 2,
                scrapCount: 0
            }
        }
    }
}
//find the first occurence of each player taking damage. Based on that we can
//infer their initial authority and this their starting deck
// ! events can affect this
function initializeAuthorityAndDecks(rounds, player) {
    let nextRound = {}
    for (let i = 0; i < rounds.length; i++) {
        nextRound = rounds[i]
        if (player in nextRound['authority']) {
            let startAuthority = nextRound['authority'][player]['new'] - nextRound['authority'][player]['diff']
            return {
                startAuthority: startAuthority,
                deck: getInitialDeck(startAuthority)
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
            count: 10,
            cost: 0,
            ships: 10,
            bases: 0,
            factions: {
                "Blob": 0,
                "Trade Federation": 0,
                "Star Empire": 0,
                "Machine Cult": 0,
                "Unaligned": 10
            },
            cards: {
                scout: {
                    name: core_set['cards']['scout']['name'],
                    cost: core_set['cards']['scout']['cost'],
                    faction: core_set['cards']['scout']['faction'],
                    type: core_set['cards']['scout']['type'],
                    metadata: {
                        extension: "core_set",
                        image: {
                            width: "x",
                            height: "y",
                            filename: "x.jpg"
                        }
                    },
                    purchaseCount: 8,
                    discardCount: 0
                },
                viper: {
                    name: core_set['cards']['viper']['name'],
                    cost: core_set['cards']['viper']['cost'],
                    faction: core_set['cards']['viper']['faction'],
                    type: core_set['cards']['viper']['type'],
                    metadata: {
                        extension: "core_set",
                        image: {
                            width: "x",
                            height: "y",
                            filename: "x.jpg"
                        }
                    },
                    purchaseCount: 2,
                    discardCount: 0
                }
            }
        }
    } else if (startAuthority == 64) {
        return {
            count: 12,
            cost: 0,
            ships: 12,
            bases: 0,
            factions: {
                "Blob": 0,
                "Trade Federation": 0,
                "Star Empire": 2,
                "Machine Cult": 2,
                "Unaligned": 8
            },
            cards: command_decks['commanders']['alignment']['deck']
        }
    }
    else if (startAuthority == 68) {
        return {
            count: 12,
            cost: 0,
            ships: 12,
            bases: 0,
            factions: {
                "Blob": 0,
                "Trade Federation": 2,
                "Star Empire": 2,
                "Machine Cult": 0,
                "Unaligned": 8
            },
            cards: command_decks['commanders']['alliance']['deck']
        }
    }
    else if (startAuthority == 62) {
        return {
            count: 13,
            cost: 0,
            ships: 12,
            bases: 1,
            factions: {
                "Blob": 0,
                "Trade Federation": 3,
                "Star Empire": 0,
                "Machine Cult": 3,
                "Unaligned": 8
            },
            cards: command_decks['commanders']['coalition']['deck']
        }
    }
    else if (startAuthority == 66) {
        return {
            count: 12,
            cost: 0,
            ships: 12,
            bases: 0,
            factions: {
                "Blob": 2,
                "Trade Federation": 2,
                "Star Empire": 0,
                "Machine Cult": 0,
                "Unaligned": 8
            },
            cards: command_decks['commanders']['pact']['deck']
        }
    }
    else if (startAuthority == 70) {
        return {
            count: 12,
            cost: 0,
            ships: 12,
            bases: 0,
            factions: {
                "Blob": 2,
                "Trade Federation": 0,
                "Star Empire": 0,
                "Machine Cult": 2,
                "Unaligned": 8
            },
            cards: command_decks['commanders']['unity']['deck']
        }
    }
    else if (startAuthority == 60) {
        return {
            count: 12,
            cost: 0,
            ships: 12,
            bases: 0,
            factions: {
                "Blob": 2,
                "Trade Federation": 0,
                "Star Empire": 0,
                "Machine Cult": 2,
                "Unaligned": 8
            },
            cards: command_decks['commanders']['union']['deck']
        }
    }
    else if (startAuthority == 72) {
        return {
            count: 12,
            cost: 0,
            ships: 12,
            bases: 0,
            factions: {
                "Blob": 2,
                "Trade Federation": 0,
                "Star Empire": 2,
                "Machine Cult": 0,
                "Unaligned": 8
            },
            cards: command_decks['commanders']['lostfleet']['deck']
        }
    }
}

export default enhance