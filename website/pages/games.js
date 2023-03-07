import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import { getServerSession } from "next-auth/next"
import { authOptions } from "./api/auth/[...nextauth]"
import { useSession } from "next-auth/react"
const { MongoClient } = require('mongodb');
import GameCard from '../components/gameCard.js'

const Games = ({ games, user }) => {
    const { data: session } = useSession()
    // If no session exists, display access denied message
    if (!session) {
        return (
            <Layout>
                <Head>
                    <title>SR Stats - settings</title>
                </Head>
                <p className="p-4 bg-white rounded-lg border-2 border-scifi4">Nothing to see here...</p>
            </Layout>
        )
    }
    return (
        <Layout>
            <Head>
                <title>{siteTitle}</title>
            </Head>
            <div className="flex flex-col gap-1 w-2/3">
                <div className="flex flex-row flex-wrap bg-scifi3 rounded-md gap-2 p-4">
                    {
                        games.map((game, index) => {
                            return (
                                <GameCard key={index} game={game} user={user}></GameCard>
                            )
                        })
                    }
                    {
                        games.length == 0 && (
                            <div>
                                No games found. Try uploading a game first
                            </div>
                        )
                    }
                </div>
            </div>
        </Layout>
    )
}

export async function getServerSideProps(context) {
    const session = await getServerSession(context.req, context.res, authOptions)
    if(!session){
        return {
            props: { },
        }
    }
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
    const cursor = db.collection('users')
        .find({ email: session.user.email })
        .project({ 'games': 1 })
    if (await cursor.hasNext()) {
        let val = await cursor.next()
        console.log(val)
        let games = val.games || []
        return {
            props: { games, user: session.user.ign },
        }
    }
}

export default Games