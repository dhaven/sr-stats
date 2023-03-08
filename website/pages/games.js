import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import { getServerSession } from "next-auth/next"
import { authOptions } from "./api/auth/[...nextauth]"
import { useSession } from "next-auth/react"
const { MongoClient } = require('mongodb');
import GameCard from '../components/gameCard.js'
import AddGameModal from '../components/dialogs/addGameModal.js'
import { useState } from 'react'

const Games = ({ games, user }) => {
    const { data: session } = useSession()
    const [isAddGameOpen, setIsAddGameOpen] = useState(false)
    // If no session exists, display access denied message
    if (!session) {
        return (
            <Layout>
                <Head>
                    <title>SR Stats - games</title>
                </Head>
                <p className="p-4 bg-white rounded-lg border-2 border-scifi4">Nothing to see here...</p>
            </Layout>
        )
    }
    return (
        <Layout>
            <Head>
                <title>SR Stats - games</title>
            </Head>
            <div className="flex flex-col gap-1 w-full md:w-2/3">
                <div className="flex flex-row flex-wrap md:bg-scifi3 rounded-md gap-2 p-4">
                    {
                        games.map((game, index) => {
                            return (
                                <GameCard key={index} game={game} user={user}></GameCard>
                            )
                        })
                    }
                    {
                        games.length == 0 && (
                            <p className="text-sm font-medium bg-scifi1 border-2 border-scifi5 p-4 rounded-md">
                                No games found. Try uploading a game first
                            </p>
                        )
                    }
                </div>
            </div>
            {!isAddGameOpen &&
                <div className="md:hidden">
                    <div className="z-20 fixed bottom-0 left-0 right-0">
                        <div className="flex justify-end">
                            <button type="button" onClick={() => setIsAddGameOpen(true)} className="m-3 bg-scifi3 border border-scifi4 ring-scifi-2 drop-shadow-md hover:ring font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center">
                                <svg className="w-8 h-8" fill="none" stroke="white" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path></svg>
                            </button>
                        </div>
                    </div>
                </div>
            }
            <AddGameModal isOpen={isAddGameOpen} setIsOpen={setIsAddGameOpen}></AddGameModal>
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
        let games = val.games || []
        let user = session.user.ign || session.user.email
        console.log(games)
        return {
            props: { games, user: user },
        }
    }
}

export default Games