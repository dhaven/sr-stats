import DeckOverviewV2 from '../../components/deckOverviewV2'
import DeckDetailV2 from '../../components/deckDetailV2'
import PlayerOverviewV2 from '../../components/playerOverviewV2'
import Head from 'next/head'
import Layout from '../../components/layout'
import AddGameModal from '../../components/dialogs/addGameModal.js'
import { useState } from 'react'
import EventCard from '../../components/eventCard'
import GameSummary from '../../components/gameSummary'
import GameStats from '../../components/gameStats'
import { useRouter } from 'next/router'
import Image from 'next/image'
import discord_img from '../../public/images/discord.png'
import { getExtensionsAndEvents } from '../../lib/helper/enhanceBattle'
import { getAuthorityChart } from '../../lib/helper/enhanceBattle'
import { getChart } from '../../lib/helper/enhanceBattle'
import { getDiscardChart } from '../../lib/helper/enhanceBattle'
import { getTemporalDeck } from '../../lib/helper/enhanceBattle'
import { getDeckSizeChart } from '../../lib/helper/enhanceBattle'
import Link from 'next/link'

//mobile UIs
import GameResult from '../../components/mobile/gameResult'
import PlayerCard from '../../components/mobile/playerCard'
import PlayerDetail from '../../components/mobile/playerDetail'
import GameStatsMobile from '../../components/mobile/gameStatsMobile'

const { MongoClient, ObjectId } = require('mongodb');

export default function Game({ winner, loser, extensions, events, players, winCondition, decks, chartData }) {
    console.log(decks)
    const router = useRouter()
    const { id } = router.query
    let [statsTab, setStatsTab] = useState("player") //can be either player or game
    let [isAddGameOpen, setAddGameIsOpen] = useState(false)
    let [turnA, setTurnA] = useState(decks.length - 1)
    let [turnB, setTurnB] = useState(decks.length - 1)

    //keep state of which UI we need to display on mobile
    let [srScreen, setSrScreen] = useState(0) //0 is home screen, 1 is game stats screen, 2 is player detail screen
    let [isWinner, setIsWinner] = useState(true) //if we are on the winner detail page
    function openAddGameModal() {
        setAddGameIsOpen(true)
    }
    function updateScreen(player) {
        setSrScreen(2)
        setIsWinner(player == winner)
    }
    let sortWinnerFirst = function (players, chartData) {
        //0console.log(players)
        let sortedPlayers = players.sort((x, y) => {
            let lastTurnX = chartData["authorityData"][x].length - 1
            let lastTurnY = chartData["authorityData"][y].length - 1
            return chartData["authorityData"][y][lastTurnY] - chartData["authorityData"][x][lastTurnX]
        })
        return sortedPlayers
    }
    return (
        <Layout>
            <Head>
                <title>SR Stats</title>
                <meta name="og:title" content={`${winner} vs ${loser}`} />
                <meta name="og:image" content={`${process.env.NEXT_PUBLIC_BASE_URL}/api/og?id=${id}`} />
                <meta name="og:image:width" content="1200" />
                <meta name="og:image:height" content="600" />
            </Head>
            <div className="hidden lg:flex flex-col gap-2 w-screen lg:w-5/6">
                <GameSummary winner={winner} loser={loser} winCondition={winCondition} extensions={extensions}></GameSummary>
                <div className="flex flex-col">
                    <div className="flex flex-row justify-center items-center mx-2 p-2 bg-scifi4/80 rounded-tl-lg rounded-tr-lg">
                        <div className="flex flex-col">
                            <div className="flex flex-row">
                                <button
                                    onClick={() => setSrScreen(0)}
                                    className="text-scifi1 text-md font-medium px-2 mx-2 hover:bg-scifi5 rounded-md"
                                >
                                    Player stats
                                </button>
                                <button
                                    onClick={() => setSrScreen(1)}
                                    className="text-scifi1 text-md font-medium px-2 mx-2 hover:bg-scifi5 rounded-md"
                                >
                                    Game stats
                                </button>
                            </div>
                            <div className={`${srScreen == 1 ? "translate-x-full" : ""} transition duration-500 w-1/2 px-8 mt-1`}>
                                <hr className="border-2 border-scifi1 rounded-full w-full"></hr>
                            </div>
                        </div>
                    </div>
                    {srScreen == 0 &&
                        <div className="flex flex-row mx-2 px-4 gap-5 bg-scifi4/80 pb-2 rounded-bl-lg rounded-br-lg">
                            {
                                sortWinnerFirst(players, chartData).map((oneKey, i) => {
                                    let currentTurn = i == 0 ? turnA : turnB
                                    return (
                                        <div key={i} className="flex flex-col bg-scifi1 w-1/2 rounded-md border-2 border-scifi5">
                                            <PlayerOverviewV2 decks={decks} name={oneKey} authority={chartData["authorityData"][oneKey][currentTurn]} setTurn={i == 0 ? setTurnA : setTurnB} turn={currentTurn}></PlayerOverviewV2>
                                            <DeckOverviewV2 missions={decks[currentTurn]['players'][oneKey]['missions']} gambit={decks[currentTurn]['players'][oneKey]['gambit']} deck={decks[currentTurn]['players'][oneKey]['deck']}></DeckOverviewV2>
                                            <DeckDetailV2 deck={decks[currentTurn]['players'][oneKey]['deck']}></DeckDetailV2>
                                        </div>
                                    )
                                })
                            }
                        </div>

                    }
                    {
                        srScreen == 1 &&
                        <div className="flex flex-col items-center gap-4 bg-scifi4/80 pb-2 mx-2 rounded-bl-lg rounded-br-lg">
                            {
                                events.length != 0 &&
                                <div className="flex flex-row gap-2 md:p-2">
                                    {
                                        events.map((value, index) => {
                                            return (
                                                <div key={index}>
                                                    <EventCard event={value}></EventCard>
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                            }
                            <div className="flex w-full h-full justify-center">
                                <GameStats winner={winner} chartData={chartData} turnDecks={decks} events={events}></GameStats>
                            </div>
                        </div>
                    }
                </div>
            </div>
            <div className="flex relative md:hidden flex-col w-screen gap-4">
                {
                    srScreen == 0 && (
                        <GameResult
                            players={players}
                            chartData={chartData}
                            winCondition={winCondition}
                            winner={winner}
                            loser={loser}
                            extensions={extensions}
                        ></GameResult>
                    )
                }
                {
                    srScreen == 0 && sortWinnerFirst(players, chartData).map((oneKey, i) => {
                        let lastTurn = decks.length - 1
                        return (
                            <div key={i} onClick={(e) => { updateScreen(oneKey) }}>
                                <PlayerCard
                                    player={oneKey}
                                    deck={decks[lastTurn]['players'][oneKey]['deck']}
                                    gambit={decks[lastTurn]['players'][oneKey]['gambit']}
                                    missions={decks[lastTurn]['players'][oneKey]['missions']}
                                ></PlayerCard>
                            </div>
                        )
                    })
                }
                {
                    srScreen == 1 &&
                    <GameStatsMobile winner={winner} chartData={chartData} events={events}></GameStatsMobile>
                }
                {
                    (srScreen == 2 && isWinner) && (
                        <PlayerDetail
                            name={winner}
                            authority={chartData["authorityData"][winner][decks.length - 1]}
                            setSrScreen={setSrScreen}
                            decks={decks}
                        ></PlayerDetail>
                    )
                }
                {
                    (srScreen == 2 && !isWinner) && (
                        <PlayerDetail
                            name={loser}
                            authority={chartData["authorityData"][loser][decks.length - 1]}
                            setSrScreen={setSrScreen}
                            decks={decks}
                        ></PlayerDetail>
                    )
                }
                <div className="flex flex-row w-3/4">
                    <div className="flex m-2">
                        <a href="https://discord.gg/q4kqH775FA" target="_blank">
                            <div className="flex px-1 py-2 bg-white rounded-lg border-black border">
                                <div className="flex items-center mx-1">
                                    <Image
                                        src={discord_img}
                                        height="24"
                                        width="24"
                                    />
                                </div>
                                <p className="text-sm font-medium text-scifi5">Join the community! </p>
                            </div>
                        </a>
                    </div>
                </div>
                <div className="z-20 absolute sticky bottom-0 left-0 right-0">
                    {!isAddGameOpen &&
                        <div className="flex justify-end">
                            <button type="button" onClick={openAddGameModal} className="m-3 bg-scifi3 border border-scifi4 ring-scifi-2 drop-shadow-md hover:ring font-medium rounded-full text-md p-2.5 text-center inline-flex items-center">
                                <svg className="w-8 h-8" fill="none" stroke="white" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path></svg>
                            </button>
                        </div>
                    }
                    {
                        !isAddGameOpen &&
                        <div className="flex justify-around bg-white">
                            <button onClick={() => setSrScreen(0)} className={
                                srScreen == 0 || srScreen == 2 ? "flex justify-center grow bg-scifi3 text-white text-md border-2 border-scifi4 font-medium py-2 px-6 m-1 rounded-lg"
                                    : "flex justify-center grow bg-scifi1 ring-scifi2 hover:ring border-2 border-scifi4 text-scifi4 text-md border-2 border-scifi4 rounded-lg font-medium py-2 px-6 m-1 md:rounded-lg"
                            }>
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"></path></svg>
                            </button>
                            <button onClick={() => setSrScreen(1)} className={
                                srScreen == 1 ? "flex justify-center grow bg-scifi3 text-white text-md border-2 border-scifi4 font-medium py-2 px-6 m-1 rounded-lg"
                                    : "flex justify-center grow bg-scifi1 ring-scifi2 hover:ring border-2 border-scifi4 text-scifi4 text-md border-2 border-scifi4 rounded-lg font-medium py-2 px-6 m-1 md:rounded-lg"
                            }>
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path></svg>
                            </button>
                        </div>
                    }
                </div>
            </div>
            <AddGameModal isOpen={isAddGameOpen} setIsOpen={setAddGameIsOpen}></AddGameModal>
        </Layout>
    )
}

export async function getServerSideProps(context) {
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
        .find({ _id: ObjectId(context.params['id']) })
        .project({ 'data.winner': 1, 'data.winCondition': 1, 'data.rounds': 1 })
    if (await cursor.hasNext()) {
        let { data } = await cursor.next()
        let winCondition = ""
        let playersNames = []
        playersNames[0] = data['rounds'][0]['player']
        playersNames[1] = data['rounds'][1]['player']
        playersNames.splice(playersNames.indexOf(data['winner']), 1)
        let loserName = playersNames[0]
        let authorityData = getAuthorityChart(data['rounds'])
        let combatData = getChart(data['rounds'], 'combatPool')
        let tradeData = getChart(data['rounds'], 'tradePool')
        let discardData = getDiscardChart(data['rounds'])
        let drawData = getChart(data['rounds'], 'drawCount')
        let shuffleData = getChart(data['rounds'], 'shuffleCount')

        let turnDecks = getTemporalDeck(data['rounds'])
        let { extensions, events } = getExtensionsAndEvents(data['rounds'])
        if (turnDecks[turnDecks.length - 1]['players'][data['winner']]['missions'].length == 3) {
            winCondition = "completed missions" //data['winner'] + "won by completing 3 missions"
        } else {
            if (data['winCondition'] == "resignation") {
                winCondition = "resignation" //data['winner'] + " won by resignation"
            } else if (data['winCondition'] == "timeout") {
                winCondition = "timeout"
            } else {
                winCondition = "defeat" //data['winner'] + " won by defeating " + loserName
            }
        }
        let deckSizeData = getDeckSizeChart(turnDecks)
        return {
            props: {
                winner: data['winner'],
                loser: loserName,
                extensions: extensions,
                events: events,
                players: [
                    data['rounds'][0]['player'],
                    data['rounds'][1]['player']
                ],
                winCondition: winCondition,
                decks: turnDecks,
                chartData: {
                    combatData: combatData,
                    tradeData: tradeData,
                    discardData: discardData,
                    drawData: drawData,
                    deckSizeData: deckSizeData,
                    shuffleData: shuffleData,
                    authorityData: authorityData,
                }
            }
        }
    }
}