import { parseBattle } from '../../lib/visitor'

export default function handler(req, res) {
    if (req.method === 'POST') {
      let battle = parseBattle(req.body)
      res.status(200).json(battle)
    } 
  }