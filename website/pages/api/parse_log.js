const { S3Client, PutObjectCommand } = require("@aws-sdk/client-s3");
const { MongoClient } = require('mongodb');
import { findErrors, parseBattle } from '../../lib/visitor'
import enhance from '../../lib/helper/enhanceBattle'

export default async function handler(req, res) {
  const S3client = new S3Client({ 
    region: "eu-central-1" ,
    credentials: {
      accessKeyId: process.env.SR_STATS_AWS_ACCESS_KEY_ID,
      secretAccessKey: process.env.SR_STATS_AWS_SECRET_ACCESS_KEY,
    }
  });
  //check for errors. Store file in error folder if any
  let success = findErrors(req.body)
  if(!success){
    //store file in S3 for later debugging
    let battleID = makeid(10)
    const uploadParams = {
      Bucket: 'star-realms-games',
      Body: req.body,
      Key: "errors/" +  battleID
    }
    await S3client.send(new PutObjectCommand(uploadParams))
    .then(()=>{
      res.status(200).json({
        id: battleID,
        status: "parsing error"
      })
    })
    .catch(error => {
      console.log(error)
      res.status(500).json({
        status: error
      })
    })
  }
  //if no errors build the battle object and store it in mongoDB
  const DBclient = await new MongoClient(process.env.MONGODB_URI, { useNewUrlParser: true }).connect();
  const db = DBclient.db("starrealms")
  let battle = parseBattle(req.body)
  let enhanced = enhance(battle['data']['rounds'])
  battle['data']['players'] = enhanced['players']
  battle['data']['extensions'] = enhanced['extensions']
  battle['data']['events'] = enhanced['events']
  await db.collection("battle").insertOne(battle);
  DBclient.close();
  let battleID = battle._id
  const uploadParams = {
		Bucket: 'star-realms-games',
		Body: req.body,
    Key: 'games/' + battleID
	}
  await S3client.send(new PutObjectCommand(uploadParams))
    .then(()=>{
      res.status(200).json({
        id: battleID,
        status: "success"
      })
    })
    .catch(error => {
      console.log(error)
      res.status(500).json({
        status: error
      })
    })
}

function makeid(length) {
  var result           = '';
  var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  var charactersLength = characters.length;
  for ( var i = 0; i < length; i++ ) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
 }
 return result;
}