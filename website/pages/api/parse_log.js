const { S3Client, PutObjectCommand } = require("@aws-sdk/client-s3");
const { MongoClient } = require('mongodb');
import { findErrors, parseBattle } from '../../lib/visitor'
import { authOptions } from "./auth/[...nextauth]"
import { getServerSession } from "next-auth"
import { getTemporalDeck } from '../../lib/helper/enhanceBattle'

export default async function handler(req, res) {
  const IAMCreds = {
    accessKeyId: process.env.SR_STATS_AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.SR_STATS_AWS_SECRET_ACCESS_KEY
  }
  const S3client = new S3Client({
    region: "eu-west-1",
    credentials: IAMCreds
  });
  //check for errors. Store file in error folder if any
  let success = findErrors(req.body)
  console.log(success)
  if (!success) {
    //store file in S3 for later debugging
    let battleID = makeid(10)
    const uploadParams = {
      Bucket: process.env.S3_BUCKET,
      Body: req.body,
      Key: "errors/" + battleID
    }
    await S3client.send(new PutObjectCommand(uploadParams))
      .then(() => {
        res.status(200).json({
          id: battleID,
          status: "parsing error: the input data contains errors"
        })
      })
      .catch(error => {
        console.log(error)
        res.status(500).json({
          status: error
        })
      })
  } else {
    //if no errors build the battle object and store it in mongoDB
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
    let battle = parseBattle(req.body)
    if (battle["status"] == "error") {
      let battleID = makeid(10)
      const uploadParams = {
        Bucket: process.env.S3_BUCKET,
        Body: req.body,
        Key: "errors/" + battleID
      }
      await S3client.send(new PutObjectCommand(uploadParams))
        .then(() => {
          res.status(200).json({
            id: battleID,
            status: "parsing error: the input data contains errors"
          })
        })
        .catch(error => {
          console.log(error)
          res.status(500).json({
            status: error
          })
        })
    } else {
      battle['createdAt'] = new Date()
      try {
        await db.collection("battle").insertOne(battle);
      } catch (e) {
        let battleID = makeid(10)
        const uploadParams = {
          Bucket: process.env.S3_BUCKET,
          Body: req.body,
          Key: "errors/" + battleID
        }
        await S3client.send(new PutObjectCommand(uploadParams))
          .then(() => {
            res.status(200).json({
              id: battleID,
              status: "enable to access mongoDB database"
            })
          })
          .catch(error => {
            console.log(error)
            res.status(500).json({
              status: error
            })
          })
      }
      let battleID = battle._id
      const session = await getServerSession(req, res, authOptions)
      let playersNames = []
      playersNames[0] = battle['data']['rounds'][0]['player']
      playersNames[1] = battle['data']['rounds'][1]['player']
      playersNames.splice(playersNames.indexOf(battle['data']['winner']), 1)
      let loserName = playersNames[0]
      let turnDecks = getTemporalDeck(battle['data']['rounds'])
      let winCondition = ""
      if (turnDecks[turnDecks.length - 1]['players'][battle['data']['winner']]['missions'].length == 3) {
        winCondition = "completed missions" //data['winner'] + "won by completing 3 missions"
      } else {
        if (battle['data']['winCondition'] == "resignation") {
          winCondition = "resignation" //data['winner'] + " won by resignation"
        } else if (battle['data']['winCondition'] == "timeout") {
          winCondition = "timeout"
        } else {
          winCondition = "defeat" //data['winner'] + " won by defeating " + loserName
        }
      }
      let battleSummary = {
        id: battleID.toString(),
        winner: battle['data']['winner'],
        loser: loserName,
        winCondition: winCondition
      }
      if (session) {
        try {
          await db.collection("users").updateOne(
            { email: session.user.email },
            { $push: { games: battleSummary } }
          );
        } catch (error) {
          console.log(error)
          res.status(500).json({
            status: error
          })
        }
      }
      DBclient.close();
      const uploadParams = {
        Bucket: process.env.S3_BUCKET,
        Body: req.body,
        Key: 'games/' + battleID
      }
      await S3client.send(new PutObjectCommand(uploadParams))
        .then(() => {
          res.status(200).json({
            id: battleID,
            status: "success",
            summary: battleSummary
          })
        })
        .catch(error => {
          console.log(error)
          res.status(500).json({
            status: error
          })
        })
    }
  }
}

function makeid(length) {
  var result = '';
  var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  var charactersLength = characters.length;
  for (var i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}