import { getServerSession } from "next-auth"
import { authOptions } from "./auth/[...nextauth]"
const { MongoClient, ObjectId } = require('mongodb');

export default async function handler(req, res) {
    const session = await getServerSession(req, res, authOptions)
    if (session && req.body["delete"]) {
        //for each id in user.games array
        //drop a document from battle collection
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
            const cursor = db
                .collection('users')
                .find({
                    _id: ObjectId(session.user.id)
                })
                .project({ games: 1, _id: 0 })
            while( await cursor.hasNext()){
                let { games } = await cursor.next() | []
                for(let i = 0; i < games?.length; i++){
                    const query = { _id: ObjectId(games[i].id) }
                    await db.collection("battle").deleteOne(query)
                }
            }
            await db.collection("users").deleteOne(
                { _id: ObjectId(session.user.id) }
            );
            await db.collection("accounts").deleteOne(
                { userId: ObjectId(session.user.id) }
            );
            await db.collection("sessions").deleteOne(
                { userId: ObjectId(session.user.id) }
            );
        } catch (error) {
            console.log(error)
            res.status(500).json({
                status: error
            })
        }
        DBclient.close();
        res.status(200).json({
            status: "success"
        })
    } else {
        // Not Signed in
        res.status(503)
    }
}