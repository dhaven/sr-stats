import { MongoClient, ObjectId } from 'mongodb';
import * as dotenv from 'dotenv'

dotenv.config({ path: '../.env.local' })

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
    const cursor = db.collection('users')
        .find()
        .project({ 'games': 1, '_id': 1 })
    while (await cursor.hasNext()) {
        let { games, _id } = await cursor.next()
        for (let i = 0; i < games.length; i++) {
            const cursor2 = db.collection('battle')
                .find({ _id: ObjectId(games[i]['id']) })
                .project({ 'createdAt': 1 })
            while (await cursor2.hasNext()) {
                let { createdAt } = await cursor2.next()
                let newGameSummary = games[i]
                newGameSummary['createdAt'] = createdAt
                let update = { $set: {} }
                update["$set"]["games." + i] = newGameSummary
                await db.collection('users').updateOne(
                    { _id },
                    update
                )
            }
        }
    }

} catch (error) {
    console.log(error)
    res.status(500).json({
        status: error
    })
}
DBclient.close();