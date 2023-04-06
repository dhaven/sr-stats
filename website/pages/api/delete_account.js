import { getServerSession } from "next-auth"
import { authOptions } from "./auth/[...nextauth]"
const { MongoClient, ObjectId } = require('mongodb');
var ManagementClient = require('auth0').ManagementClient;

export default async function handler(req, res) {
    const session = await getServerSession(req, res, authOptions)
    if (session && req.body["delete"]) {
        //for each id in user.games array
        //drop a document from battle collection
        var management = new ManagementClient({
            domain: process.env.AUTH0_ACCOUNT + '.eu.auth0.com',
            clientId: process.env.AUTH0_DELETE_API_CLIENT_ID,
            clientSecret: process.env.AUTH0_DELETE_API_CLIENT_SECRET,
            scope: 'delete:users',
        });
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
            while (await cursor.hasNext()) {
                let { games } = await cursor.next() | []
                for (let i = 0; i < games?.length; i++) {
                    const query = { _id: ObjectId(games[i].id) }
                    await db.collection("battle").deleteOne(query)
                }
            }
            const cursor2 = db
                .collection('accounts')
                .find({
                    userId: ObjectId(session.user.id)
                })
                .project({ providerAccountId: 1, _id: 0 })
            while (await cursor2.hasNext()) {
                let { providerAccountId } = await cursor2.next()
                console.log(providerAccountId)
                management.deleteUser({ id: providerAccountId }, function (err) {
                    if (err) {
                        console.log(err)
                    }else{
                        console.log("success")
                    }
                });
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