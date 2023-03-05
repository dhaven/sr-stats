import { getServerSession } from "next-auth"
import { authOptions } from "./auth/[...nextauth]"
const { MongoClient } = require('mongodb');

export default async function handler(req, res) {
    const session = await getServerSession(req, res, authOptions)
    if (session) {
        console.log(session.user.email)
        console.log(req.body)
        //add ign field to user object
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
            await db.collection("users").updateOne(
                { email: session.user.email },
                {
                    $set:{ ign: req.body }
                }
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
    res.end()
}