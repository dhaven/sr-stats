const { S3Client, PutObjectCommand } = require("@aws-sdk/client-s3");
const { MongoClient } = require('mongodb');
import { findErrors, parseBattle } from '../../lib/visitor'
import enhance from '../../lib/helper/enhanceBattle'

export default async function handler(req, res) {
  const S3client = new S3Client({ 
    region: "eu-west-1" ,
    credentials: {
      accessKeyId: process.env.SR_STATS_AWS_ACCESS_KEY_ID,
      secretAccessKey: process.env.SR_STATS_AWS_SECRET_ACCESS_KEY,
    }
  });
  const username = encodeURIComponent(process.env.SR_STATS_AWS_ACCESS_KEY_ID);
  const password = encodeURIComponent(process.env.SR_STATS_AWS_SECRET_ACCESS_KEY);
  const cluster = process.env.MONGO_CLUSTER;
  const authSource = encodeURIComponent("$external");
  const authMechanism = "MONGODB-AWS";
  const MONGODB_URI = `mongodb+srv://${username}:${password}@${cluster}/?authSource=${authSource}&authMechanism=${authMechanism}`;
  console.log(MONGODB_URI)
  //check for errors. Store file in error folder if any
  let success = findErrors(req.body)
  if(!success){
    //store file in S3 for later debugging
    let battleID = makeid(10)
    const uploadParams = {
      Bucket: process.env.S3_BUCKET,
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
  const DBclient = await new MongoClient(MONGODB_URI, { useNewUrlParser: true }).connect().catch((err) =>{
    console.log(err)
    res.status(500).json({
      status: err
    })
  });
  const db = DBclient.db("starrealms")
  let battle = parseBattle(req.body)
  let enhanced = enhance(battle['data']['rounds'])
  battle['data']['players'] = enhanced['players']
  battle['data']['extensions'] = enhanced['extensions']
  battle['data']['events'] = enhanced['events']
  battle['createdAt'] = new Date()
  try{
    await db.collection("battle").insertOne(battle);
  }catch(e){
    console.log(e)
    res.status(500).json({
      status: e
    })
  }
  //check for failed insertion
  DBclient.close();
  let battleID = battle._id
  const uploadParams = {
		Bucket: process.env.S3_BUCKET,
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