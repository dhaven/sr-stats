import PlayerOverviewV2 from '../components/playerOverviewV2'
import DeckOverviewV2 from '../components/deckOverviewV2'
import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import { Tab } from '@headlessui/react'
import { Fragment, useState } from 'react'
import AuthorityChart from '../components/authorityChart'
import OtherCharts from '../components/otherCharts'
import { ChevronUpIcon } from '@heroicons/react/solid'
import EventCard from '../components/eventCard'
import Tooltip from '../components/tooltip.js'
import GameSummaryV2 from '../components/gameSummaryV2'

const { MongoClient, ObjectId } = require('mongodb');

function Test({winner, extensions, events, players, firstPlayer}) {
    let [activePlayer, setActivePlayer] = useState(winner)
    let [open, setOpen] = useState(true)
    let updatVisibleDeck = function(player){
        if(player == activePlayer){
            setOpen(!open)
        }
        if(!open){
            setOpen(true)
        }
        setActivePlayer(player)
    }
    return (
        <Layout>
            <Head>
                <title>{siteTitle}</title>
            </Head>
            <div className="flex flex-col gap-2 w-screen sm:w-full lg:w-5/6 2xl:w-2/3">
                <GameSummaryV2 winCondition={winner} extensions={extensions}></GameSummaryV2>
                <Tab.Group>
                    <div className="flex flex-row">
                    <Tab.List className="flex space-x-2 px-4">
                        <Tab as={Fragment}>
                            {({ selected }) => (
                                <button
                                    className={
                                        selected ? "bg-scifi3 text-white text-md border-2 border-scifi4 font-medium px-6 m-1 rounded-lg" :
                                               "bg-white text-scifi5 hover:ring ring-scifi2 text-md font-medium px-6 py-2 border-2 border-scifi4 rounded-lg"
                                    }
                                >
                                Player stats
                                </button>
                            )}
                        </Tab>
                        <Tab>
                            {({ selected }) => (
                                <button
                                    className={
                                        selected ? "bg-scifi3 text-white text-md border-2 border-scifi4 font-medium px-6 py-1 rounded-lg" :
                                               "bg-white text-scifi5 hover:ring ring-scifi2 text-md font-medium px-6 py-2 border-2 border-scifi4 rounded-lg"
                                    }
                                >
                                Game stats
                                </button>
                            )}
                        </Tab>
                    </Tab.List>
                    </div>
                    <Tab.Panels>
                        <Tab.Panel>
                            <div className="flex flex-row flex-wrap md:flex-nowrap px-4">
                            { 
                                    Object.keys(players).map((oneKey,i)=>{
                                        return (
                                            <div key={i} className={`${activePlayer == oneKey && open ? 'bg-scifi4 rounded-t-xl': ''} flex flex-col w-full`}>
                                                <div  className="md:m-2 lg:m-4 flex flex-col justify-between p-2 sm:p-4 bg-scifi1 rounded-md border-2 border-scifi4 drop-shadow-scifi5 gap-4">
                                                    <PlayerOverviewV2 name={oneKey} deckData={players[oneKey]['deck']} authority={players[oneKey]['finalAuthority']} missions={players[oneKey]['completedMissions']}></PlayerOverviewV2>
                                                    <div className="flex justify-center px-2">
                                                        <button onClick={() => updatVisibleDeck(oneKey)} 
                                                            className={ activePlayer == oneKey && open ?
                                                            "rounded-full bg-scifi3 ring-scifi2 text-white hover:ring border-2 border-scifi4 p-2 text-left text-sm font-medium" :
                                                            "rounded-full bg-scifi1 ring-scifi2 hover:ring border-2 border-scifi4 p-2 text-left text-sm font-medium"
                                                            }
                                                        >
                                                            <ChevronUpIcon
                                                                className={`${
                                                                    activePlayer == oneKey && open ? 'rotate-180 transform' : ''
                                                                } h-5 w-5`}
                                                            />
                                                        </button>
                                                    </div>
                                                </div>
                                                {
                                                    activePlayer == oneKey && open && 
                                                    <div className="md:hidden bg-scifi4 rounded-b-xl">
                                                        <DeckOverviewV2 deckData={players[activePlayer]['deck']} ></DeckOverviewV2>
                                                    </div>
                                                }
                                            </div>

                                        )
                                    })
                            }
                            </div>
                            {
                                open && 
                                <div className="hidden md:flex bg-scifi4 sm:py-4 lg:py-6 sm:px-2 lg:px-4 sm:mx-4 lg:p-2 rounded-b-xl">
                                    <DeckOverviewV2 deckData={players[activePlayer]['deck']} ></DeckOverviewV2>
                                </div>
                            }
                        </Tab.Panel>
                        <Tab.Panel>
                            <div className="flex flex-col gap-4 mx-4">
                                <div className="flex flex-row gap-2 p-2">
                                    {
                                        events.map((value, index) => {
                                            return (
                                                <div key={index} className="group relative">
                                                    <EventCard mission={value}></EventCard>
                                                    <Tooltip hint={value}></Tooltip>
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                                <div className="flex h-40 sm:h-80 w-full">
                                    <AuthorityChart winner={winner} firstPlayer={firstPlayer} rounds={[]}></AuthorityChart>
                                </div>
                                <div className="flex w-full">
                                    <OtherCharts  winner={winner} firstPlayer={firstPlayer} rounds={[]}></OtherCharts>
                                </div>
                            </div>
                        </Tab.Panel>
                    </Tab.Panels>
                </Tab.Group>
            </div>
        </Layout>
    )
  }

  export async function getServerSideProps(context) {
    const DBclient = await new MongoClient(process.env.MONGODB_URI, { useNewUrlParser: true }).connect();
    const db = DBclient.db("starrealms")
    const cursor = db.collection('battle')
        .find({ _id: ObjectId("6306872c140e1f126822b4a6") })
        .project({ 'data.winner': 1, 'data.extensions': 1, 'data.events':1, 'data.players':1, 'data.firstPlayer':1, 'data.rounds': { $slice: -1 } })
    if(await cursor.hasNext()){
        let { data } = await cursor.next()
        console.log(data)
        return {
            props: {
                winner: data['winner'], 
                extensions: data['extensions'],
                events: data['events'],
                players: data['players'],
                firstPlayer: data['firstPlayer'],
              }
          }
    }
  }
  
  export default Test