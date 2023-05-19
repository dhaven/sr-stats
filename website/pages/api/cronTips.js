import { MongoClient } from 'mongodb';
import card_list from '../../lib/card_data/cards.js'
import { getTemporalDeck } from '../../lib/helper/enhanceBattle.js'

const DBclient = new MongoClient(process.env.MONGODB_URI,
    {
        auth: {
            username: process.env.MONGODB_USERNAME,
            password: process.env.MONGODB_PASSWORD
        },
        authSource: '$external',
        authMechanism: 'SCRAM'
    });
const db = DBclient.db("starrealms")
try {
    const cursor = db.collection('battle')
        .find()
        .project({ 'data.rounds': 1, 'data.winner': 1 })
    let gamesCount = 0
    let deckSize = 0
    let factions = {
        'Machine Cult': 0,
        'Trade Federation': 0,
        'Star Empire': 0,
        'Blob': 0,
        'Unaligned': 0
    }
    let cardsWithCostX = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    let baseCount = 0
    let shipCount = 0
    while (await cursor.hasNext()) {
        let { data } = await cursor.next()
        gamesCount += 1
        let turnDecks = getTemporalDeck(data['rounds'])
        if (data['winner'] != "") {
            let winningDeck = turnDecks[turnDecks.length - 1]['players'][data['winner']]['deck']
            Object.keys(winningDeck).forEach(card => {
                let cardCount = winningDeck[card]["purchaseCount"] - winningDeck[card]["scrapCount"]
                card_list[card]['faction'].forEach(faction => {
                    factions[faction] += cardCount
                })
                if (winningDeck[card]["purchaseCount"] - winningDeck[card]["scrapCount"] > 0) {
                    let cost = card_list[card]['cost'] || 0
                    if (card_list[card]['type'] == "ship") {
                        shipCount += cardCount
                        cardsWithCostX[cost] += cardCount
                        deckSize = deckSize + cardCount
                    } else if (card_list[card]['type'] == "base") {
                        baseCount += cardCount
                        cardsWithCostX[cost] += cardCount
                        deckSize = deckSize + cardCount
                    }
                }
            })
        }
    }
    for (let i = 0; i < cardsWithCostX.length; i++) {
        cardsWithCostX[i] = cardsWithCostX[i]
    }
    deckSize = Math.round(deckSize / gamesCount)
    baseCount = Math.round(baseCount / gamesCount)
    shipCount = Math.round(shipCount / gamesCount)
    await db
        .collection('winning_strategy')
        .insertOne(
            {
                gamesCount: gamesCount,
                factionsCount: factions,
                cardCostCount: cardsWithCostX,
                deckSize: deckSize,
                baseCount: baseCount,
                shipCount: shipCount,
                createdAt: new Date()
            }
        )
} catch (error) {
    console.log(error)
}
DBclient.close();