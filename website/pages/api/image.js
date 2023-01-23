const { MongoClient, ObjectId } = require('mongodb');
import { getAuthorityChart, getExtensionsAndEvents } from '../../lib/helper/enhanceBattle'

export default async function handler(req, res) {
    const { id } = req.query
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
    const cursor = db.collection('battle')
        .find({ _id: ObjectId(id) })
        .project({ 'data.winner': 1, 'data.rounds': 1 })
    if (await cursor.hasNext()) {
        let { data } = await cursor.next()
        let playersNames = []
        playersNames[0] = data['rounds'][0]['player']
        playersNames[1] = data['rounds'][1]['player']
        playersNames.splice(playersNames.indexOf(data['winner']), 1)
        let loserName = playersNames[0]
        let authorityData = getAuthorityChart(data['rounds'])
        let { extensions, events } = getExtensionsAndEvents(data['rounds'])
        res.status(200).json({
            id: id,
            status: "success",
            data: {
                winner: {
                    name: data['winner'],
                    authority: authorityData[data['winner']][data['rounds'].length - 1]
                },
                loser: {
                    name: loserName,
                    authority: authorityData[loserName][data['rounds'].length - 1]
                },
                extensions: extensions
            }
        })
    }
}