import PlayerOverview from '../../components/playerOverview'
import DeckOverview from '../../components/deckOverview'
import Head from 'next/head'
import Layout, { siteTitle } from '../../components/layout'
import { Tab } from '@headlessui/react'
import { Fragment, useState } from 'react'
import AuthorityChart from '../../components/authorityChart'
import OtherCharts from '../../components/otherCharts'
import { ChevronUpIcon } from '@heroicons/react/solid'
import EventCard from '../../components/eventCard'
import Tooltip from '../../components/ui/tooltip.js'
import GameSummary from '../../components/gameSummary'
import { useRouter } from 'next/router'

const { MongoClient, ObjectId } = require('mongodb');

export default function Game({ winner, extensions, events, players, winCondition, authorityData, otherData, otherAggrData }) {
    const router = useRouter()
    let [activePlayer, setActivePlayer] = useState(winner)
    let [statsTab, setStatsTab] = useState("player") //can be either player or game
    let [open, setOpen] = useState(true)
    let updatVisibleDeck = function (player) {
        if (player == activePlayer) {
            setOpen(!open)
        }
        if (!open) {
            setOpen(true)
        }
        setActivePlayer(player)
    }
    return (
        <Layout>
            <Head>
                <title>Game review | {siteTitle}</title>
            </Head>
            <div className="flex flex-col gap-2 w-screen sm:w-full lg:w-5/6 2xl:w-2/3">
                <GameSummary winCondition={winCondition} extensions={extensions}></GameSummary>
                <div className="hidden sm:flex flex-row">
                    <button className={
                        statsTab == "player" ?
                            "bg-scifi3 text-white text-md border-2 border-scifi4 font-medium py-2 px-6 m-1 sm:rounded-lg" :
                            "bg-white text-scifi5 hover:ring ring-scifi2 text-md font-medium px-6 py-2 m-1 border-2 border-scifi4 sm:rounded-lg"}
                    >
                        Player stats
                    </button>
                    <button className={
                        statsTab == "game" ?
                            "bg-scifi3 text-white text-md border-2 border-scifi4 font-medium px-6 py-2 m-1 sm:rounded-lg" :
                            "bg-white text-scifi5 hover:ring ring-scifi2 text-md font-medium px-6 py-2 m-1 border-2 border-scifi4 sm:rounded-lg"}
                    >
                        Game stats
                    </button>
                </div>
                <div className="flex flex-row flex-wrap md:flex-nowrap sm:px-4 gap-4">
                    {statsTab == "player" &&
                        Object.keys(players).map((oneKey, i) => {
                            return (
                                <div key={i} className={`${activePlayer == oneKey && open ? 'bg-scifi4 sm:rounded-t-xl' : ''} flex flex-col w-full`}>
                                    <div className="md:m-2 lg:m-4 flex flex-col justify-between p-2 sm:p-4 bg-scifi1 sm:rounded-md sm:drop-shadow-scifi5 gap-2 sm:gap-4">
                                        <PlayerOverview name={oneKey} deckData={players[oneKey]['deck']} authority={players[oneKey]['finalAuthority']} missions={players[oneKey]['completedMissions']}></PlayerOverview>
                                        <div className="hidden sm:flex justify-center px-2">
                                            <button onClick={() => updatVisibleDeck(oneKey)}
                                                className={activePlayer == oneKey && open ?
                                                    "rounded-full bg-scifi3 ring-scifi2 text-white hover:ring border-2 border-scifi4 p-2 text-left text-sm font-medium" :
                                                    "rounded-full bg-scifi1 ring-scifi2 hover:ring border-2 border-scifi4 p-2 text-left text-sm font-medium"
                                                }
                                            >
                                                <ChevronUpIcon className={`${activePlayer == oneKey && open ? 'rotate-180 transform' : ''
                                                    } h-5 w-5`}
                                                />
                                            </button>
                                        </div>
                                    </div>
                                    {
                                        <div className="sm:hidden bg-scifi4 sm:rounded-b-xl">
                                            <DeckOverview deckData={players[activePlayer]['deck']} ></DeckOverview>
                                        </div>
                                    }
                                </div>
                            )
                        })
                    }
                </div>
                {statsTab == "player" && open &&
                    <div className="hidden sm:flex bg-scifi4 sm:py-4 lg:py-6 sm:px-2 lg:px-4 sm:mx-4 lg:p-2 rounded-b-xl">
                        <DeckOverview deckData={players[activePlayer]['deck']} ></DeckOverview>
                    </div>
                }
                {
                    statsTab == "game" &&
                    <div className="flex flex-col gap-4 md:mx-4">
                        {
                            events.length != 0 &&
                            <div className="flex flex-row gap-2 md:p-2">
                                {
                                    events.map((value, index) => {
                                        return (
                                            <div key={index} className="group relative">
                                                <EventCard event={value}></EventCard>
                                                <Tooltip hint={value}></Tooltip>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        }
                        <div className="flex h-40 sm:h-80 w-full">
                            <AuthorityChart winner={winner} authorityData={authorityData}></AuthorityChart>
                        </div>
                        <div className="flex w-full">
                            <OtherCharts winner={winner} otherData={otherData} otherAggrData={otherAggrData}></OtherCharts>
                        </div>
                    </div>
                }
                <div className="z-20 sm:hidden sticky bottom-0 left-0 right-0">
                    <div className="flex justify-end">
                        <button type="button" className="m-3 bg-scifi3 border border-scifi4 ring-scifi-2 drop-shadow-md hover:ring font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center">
                            <svg className="w-8 h-8" fill="none" stroke="white" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path></svg>
                        </button>
                    </div>
                    <div className="flex justify-around bg-white">
                        <button onClick={() => setStatsTab("player")} className={
                            statsTab == "player" ? "bg-scifi3 text-white text-md border-2 border-scifi4 font-medium py-2 px-6 m-1 sm:rounded-lg"
                                : "bg-scifi1 ring-scifi2 hover:ring border-2 border-scifi4 text-scifi4 text-md border-2 border-scifi4 font-medium py-2 px-6 m-1 sm:rounded-lg"
                        }>
                            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"></path></svg>
                        </button>
                        <button onClick={() => setStatsTab("game")} className={
                            statsTab == "game" ? "bg-scifi3 text-white text-md border-2 border-scifi4 font-medium py-2 px-6 m-1 sm:rounded-lg"
                                : "bg-scifi1 ring-scifi2 hover:ring border-2 border-scifi4 text-scifi4 text-md border-2 border-scifi4 font-medium py-2 px-6 m-1 sm:rounded-lg"
                        }>
                            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path></svg>
                        </button>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export async function getServerSideProps(context) {
    const DBclient = await new MongoClient(process.env.MONGODB_URI, { useNewUrlParser: true }).connect();
    const db = DBclient.db("starrealms")
    const cursor = db.collection('battle')
        .find({ _id: ObjectId(context.params['id']) })
        .project({ 'data.winner': 1, 'data.winCondition': 1, 'data.extensions': 1, 'data.events': 1, 'data.players': 1, 'data.rounds': 1 })
    if (await cursor.hasNext()) {
        let { data } = await cursor.next()
        let winCondition = ""
        if (data['players'][data['winner']]['completedMissions'].length == 3) {
            winCondition = data['winner'] + "won by completing 3 missions"
        } else {
            let playersNames = Object.keys(data['players'])
            playersNames.splice(playersNames.indexOf(data['winner']), 1)
            let loserName = playersNames[0]
            if (data['winCondition'] == "resignation") {
                winCondition = data['winner'] + " won by resignation"
            } else {
                winCondition = data['winner'] + " won by defeating " + loserName
            }
        }
        let authorityData = {}
        let combatData = {}
        let combatAggrData = {}
        let tradeData = {}
        let tradeAggrData = {}
        let discardData = {}
        let discardAggrData = {}
        let drawData = {}
        let drawAggrData = {}
        let firstPlayer = data['rounds'][0]['player']
        let secondPlayer = data['rounds'][1]['player']
        let indivTurns = Math.ceil(data['rounds'].length / 2)
        authorityData[firstPlayer] = Array(indivTurns).fill(0)
        authorityData[secondPlayer] = Array(indivTurns).fill(0)
        combatData[firstPlayer] = Array(indivTurns).fill(0)
        combatData[secondPlayer] = Array(indivTurns).fill(0)
        combatAggrData[firstPlayer] = 0
        combatAggrData[secondPlayer] = 0
        tradeData[firstPlayer] = Array(indivTurns).fill(0)
        tradeData[secondPlayer] = Array(indivTurns).fill(0)
        tradeAggrData[firstPlayer] = 0
        tradeAggrData[secondPlayer] = 0
        discardData[firstPlayer] = Array(indivTurns).fill(0)
        discardData[secondPlayer] = Array(indivTurns).fill(0)
        discardAggrData[firstPlayer] = 0
        discardAggrData[secondPlayer] = 0
        drawData[firstPlayer] = Array(indivTurns).fill(0)
        drawData[secondPlayer] = Array(indivTurns).fill(0)
        drawAggrData[firstPlayer] = 0
        drawAggrData[secondPlayer] = 0
        authorityData[firstPlayer][0] = data['players'][firstPlayer]['startAuthority']
        authorityData[secondPlayer][0] = data['players'][secondPlayer]['startAuthority']
        for (let i = 0; i < data['rounds'].length; i++) {
            if (i > 0) {
                if (firstPlayer in data['rounds'][i]['authority']) {
                    authorityData[firstPlayer][i] = authorityData[firstPlayer][i - 1] + parseInt(data['rounds'][i]['authority'][firstPlayer]['diff'])
                } else {
                    authorityData[firstPlayer][i] = authorityData[firstPlayer][i - 1]
                }
                if (secondPlayer in data['rounds'][i]['authority']) {
                    authorityData[secondPlayer][i] = authorityData[secondPlayer][i - 1] + parseInt(data['rounds'][i]['authority'][secondPlayer]['diff'])
                } else {
                    authorityData[secondPlayer][i] = authorityData[secondPlayer][i - 1]
                }
            }
            if (i % 2 == 0) {
                combatData[firstPlayer][i / 2] = data['rounds'][i]['combatPool']
                tradeData[firstPlayer][i / 2] = data['rounds'][i]['tradePool']
                discardData[firstPlayer][i / 2] = data['rounds'][i]['discardedCards'].length
                drawData[firstPlayer][i / 2] = data['rounds'][i]['drawCount']

                combatAggrData[firstPlayer] += data['rounds'][i]['combatPool']
                tradeAggrData[firstPlayer] += data['rounds'][i]['tradePool']
                discardAggrData[firstPlayer] += data['rounds'][i]['discardedCards'].length
                drawAggrData[firstPlayer] += data['rounds'][i]['drawCount']
            } else {
                combatData[secondPlayer][parseInt(i / 2)] = data['rounds'][i]['combatPool']
                tradeData[secondPlayer][parseInt(i / 2)] = data['rounds'][i]['tradePool']
                discardData[secondPlayer][parseInt(i / 2)] = data['rounds'][i]['discardedCards'].length
                drawData[secondPlayer][parseInt(i / 2)] = data['rounds'][i]['drawCount']

                combatAggrData[secondPlayer] += data['rounds'][i]['combatPool']
                tradeAggrData[secondPlayer] += data['rounds'][i]['tradePool']
                discardAggrData[secondPlayer] += data['rounds'][i]['discardedCards'].length
                drawAggrData[secondPlayer] += data['rounds'][i]['drawCount']
            }
        }
        return {
            props: {
                winner: data['winner'],
                extensions: data['extensions'],
                events: data['events'],
                players: data['players'],
                winCondition: winCondition,
                authorityData: authorityData,
                otherData: {
                    combatData: combatData,
                    tradeData: tradeData,
                    discardData: discardData,
                    drawData: drawData,
                },
                otherAggrData: {
                    combatData: combatAggrData,
                    tradeData: tradeAggrData,
                    discardData: discardAggrData,
                    drawData: drawAggrData
                }
            }
        }
    }
}