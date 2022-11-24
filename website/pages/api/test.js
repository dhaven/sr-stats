import { parseBattle } from '../../lib/visitor'
import enhance from '../../lib/helper/enhanceBattle'

// This file is used for the test suite so don't remove
export default function handler(req, res) {
    if (req.method === 'POST') {
      let battle = parseBattle(req.body)
      res.status(200).json(battle)
    } 
  }