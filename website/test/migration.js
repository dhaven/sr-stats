import schema from './schema.js'
import * as dotenv from 'dotenv'
import { MongoClient } from 'mongodb';
import { GetObjectCommand, S3Client } from "@aws-sdk/client-s3";
import axios from 'axios';

/*
Short script to migrate games in mongodb that have an old
document format to the newest document format as defined
by the schema
Some games are not parsable. Manually remove from db and s3
Some games are broken in db and missing from s3. Manually remove from db
*/


dotenv.config({ path: '../.env.local' })
axios.defaults.headers.post['Content-Type'] = 'application/json';

const REGION = "eu-west-1";
const IAMCreds = {
    accessKeyId: process.env.SR_STATS_AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.SR_STATS_AWS_SECRET_ACCESS_KEY
}
const s3Client = new S3Client({ region: REGION, credentials: IAMCreds });
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
const cursor = db
    .collection('battle')
    .find({ $nor: [schema] })
    .project({ _id: 1, status: 1 })
while (await cursor.hasNext()) {
    let { _id } = await cursor.next()
    const getCommand = new GetObjectCommand({
        Bucket: process.env.S3_BUCKET,
        Key: "games/" + _id.toString()
    });
    try {
        const response = await s3Client.send(getCommand);
        let battleData = await response.Body.transformToString();
        await axios
            .post('http://localhost:3000/api/test', JSON.stringify(battleData),)
            .then(res => {
                db
                    .collection('battle')
                    .updateOne(
                        { _id: _id },
                        { $set: { data: res.data.data } }
                    )
            })
            .catch(error => {
                console.log("cannot parse game with id: " + _id.toString())
            });
    } catch (err) {
        if (err.Code == "NoSuchKey") {
            console.error("no file found for game " + _id.toString());
        } else {
            console.log(err)
        }
    }

}
DBclient.close()