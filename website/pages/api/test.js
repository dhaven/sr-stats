import { parseBattle } from '../../lib/visitor'

// This file is used for the test suite so don't remove
export default function handler(req, res) {
    if (req.method === 'POST') {
      console.log(req.body)
      let battle = parseBattle(req.body)
      console.log(battle)
      if(battle.status == "error"){
        res.status(500).json(battle)
      }
      res.status(200).json(battle)
    } 
  }