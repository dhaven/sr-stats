import { parseBattle } from '../../lib/visitor'
import enhance from '../../lib/helper/enhanceBattle'

export default function handler(req, res) {
    if (req.method === 'POST') {
      let battle = parseBattle(req.body)
      let enhanced = enhance(battle['data']['rounds'])
      battle['data']['players'] = enhanced['players']
      battle['data']['extensions'] = enhanced['extensions']
      battle['data']['events'] = enhanced['events']
      res.status(200).json(battle)
    } 
  }