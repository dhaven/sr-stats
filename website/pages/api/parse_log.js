const { S3Client, PutObjectCommand } = require("@aws-sdk/client-s3");
import { findErrors } from '../../lib/visitor'

//returns a JSON object representing a battle with format:
// {
//     firstPlayer: "normalAI",
//     winner: "Player",
//     rounds: [
//         {
//             players: [ //represents the status of the player at the end of the turn
//                 {
//                     name: "normalPlayer"
//                     authority: 50,
//                     deck: {
//                         'blobFighter' : {
//                             faction: 'blob'
//                             cost: 4 
//                             name: 'Blob Fighter'
//                             count: 2 //total amount of time purchased
//                             playedCount: 4
//                             scrapCount: 1
//                             discardCount: 0
//                             destroyedCount: 0

//                         }

//                     }
//                 }
//             ],
//             purchasedCards: [
//                 {
//                     <card-data>
//                 }
//             ],
//             playedCards: [
//                 {
//                     <card-data>
//                 }
//             ],
//             scrappedCards: [
//                 {
//                     <card-data>
//                 }
//             ],
//             discardedCards: [
//                 {
//                     <card-data>
//                 }
//             ],
//             destroyedBases: [
//                 {
//                     <card-data>
//                 }
//             ],
//             tradePool: 5,
//             combatPool: 2,
//             usedTrade: 5, //sometimes < tradePool
//             usedCombat: 2 //sometimes < combatPool
//             selfAuthority: 0
//             otherAuthority: -1 
//         }

//     ]
// }
export default async function handler(req, res) {
  const client = new S3Client({ 
    region: "eu-central-1" ,
    credentials: {
      accessKeyId: process.env.SR_STATS_AWS_ACCESS_KEY_ID,
      secretAccessKey: process.env.SR_STATS_AWS_SECRET_ACCESS_KEY,
    }
  });
  let battleID = makeid(10)
  let success = findErrors(req.body)
  const uploadParams = {
		Bucket: 'star-realms-games',
		Body: req.body,
	}
  if(success){
    uploadParams['Key'] = 'games/' + battleID
  }else{
    uploadParams['Key'] = "errors/" +  battleID
  }
  await client.send(new PutObjectCommand(uploadParams))
    .then(()=>{
      if(success){
        res.status(200).json({
          id: battleID,
          status: "success"
        })
      }else{
        res.status(200).json({
          id: battleID,
          status: "parsing error"
        })
      }
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