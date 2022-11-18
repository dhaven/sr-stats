const { MongoClient, ObjectId } = require('mongodb');

export default async function handler(req, res) {
    const { id } = req.query
    const DBclient = await new MongoClient(process.env.MONGODB_URI, { useNewUrlParser: true }).connect();
    const db = DBclient.db("starrealms")
    const cursor = db.collection('battle')
        .find({ _id: ObjectId(id) })
        .project({ 'data.winner': 1, 'data.extensions': 1, 'data.players': 1})
    if (await cursor.hasNext()) {
        let { data } = await cursor.next()
        let playersNames = Object.keys(data['players'])
        playersNames.splice(playersNames.indexOf(data['winner']), 1)
        let loserName = playersNames[0] 
        res.status(200).json({
            id: id,
            status: "success",
            data: {
                winner: {
                    name: data['winner'],
                    authority: data['players'][data['winner']]['finalAuthority']
                },
                loser: {
                    name: loserName,
                    authority: data['players'][loserName]['finalAuthority']
                },
                extensions: data['extensions']
            }
          })
    }
}