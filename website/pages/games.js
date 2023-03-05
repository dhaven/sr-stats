import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import { getServerSession } from "next-auth/next"
import { authOptions } from "./api/auth/[...nextauth]"
const { MongoClient } = require('mongodb');
import { useState } from 'react'
import AddGameModal from '../components/dialogs/addGameModal.js'
import GameCard from '../components/gameCard.js'
import { PlusIcon } from '@heroicons/react/24/outline'

const Games = ({ games, user }) => {
    let [isAddGameOpen, setAddGameIsOpen] = useState(false)
    return (
        <Layout>
            <Head>
                <title>{siteTitle}</title>
            </Head>
            <div className="flex flex-col gap-1 w-2/3">
                <div className="flex flex-row justify-end">
                    <button onClick={(e) => setAddGameIsOpen(true)} className="inline-flex items-center bg-white text-sm text-scifi5 p-1 lg:p-2 border drop-shadow-md border-scifi4 ring-scifi2 hover:ring rounded-lg">
                        <PlusIcon
                            className="mr-2 h-5 w-5 border-2 rounded-full border-scifi5"
                            aria-hidden="true"
                        />
                        add game
                    </button>
                </div>
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
            <AddGameModal isOpen={isAddGameOpen} setIsOpen={setAddGameIsOpen}></AddGameModal>
        </Layout>
    )
}

export async function getServerSideProps(context) {
    const session = await getServerSession(context.req, context.res, authOptions)
    //if user is not logged in redirect him to homepage. This page should not be visible
    //if you are not signed in.
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