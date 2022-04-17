import { parseBattle } from '../../lib/visitor'

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
export default function handler(req, res) {
  if (req.method === 'POST') {
    let battle = parseBattle(req.body)
    res.status(200).json(battle)
  } 
}