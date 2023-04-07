import { MongoClient } from 'mongodb';

export default async function handler(req, res) {
    let mySort = function (x, y) {
        return Object.values(y)[0] - Object.values(x)[0]
    }
    let convertToList = function (cardCounts) {
        return Object.entries(cardCounts).map(
            ([card, count]) => {
                let newObj = {}
                newObj[card] = count
                return newObj
            }
        )
    }
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
    let earlyGameCards = {}
    let midGameCards = {}
    let lateGameCards = {}
    try {
        const cursor = db.collection('battle')
            .find()
            .project({ 'data.rounds': 1 })
        while (await cursor.hasNext()) {
            let { data } = await cursor.next()
            for (let i = 0; i < data['rounds'].length; i++) {
                let phase;
                if (i <= 3) { //early game = round 0,1,2,3
                    phase = earlyGameCards
                } else if (i <= 9) { //mid game = round 4,5,6,7,8,9
                    phase = midGameCards
                } else { //late game
                    phase = lateGameCards
                }
                for (let j = 0; j < data['rounds'][i]['purchasedCards'].length; j++) {
                    let nextCard = data['rounds'][i]['purchasedCards'][j]
                    if (nextCard in phase) {
                        phase[nextCard] += 1
                    } else {
                        phase[nextCard] = 1
                    }
                }
            }
        }
        await db
            .collection('popular_cards')
            .insertOne(
                {
                    earlyGame: convertToList(earlyGameCards).sort(mySort),
                    midGame: convertToList(midGameCards).sort(mySort),
                    lateGame: convertToList(lateGameCards).sort(mySort),
                    createdAt: new Date()
                }
            )
    } catch (error) {
        console.log(error)
        res.status(500).json({
            status: error
        })
    }
    DBclient.close();
    res.status(200).end('Hello Cron!');
}