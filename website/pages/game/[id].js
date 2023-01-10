import PlayerOverview from '../../components/playerOverview'
import DeckOverview from '../../components/deckOverview'
import Head from 'next/head'
import Layout from '../../components/layout'
import AddGameModal from '../../components/addGameModal.js'
import { useState } from 'react'
import { ArrowDownIcon } from '@heroicons/react/24/solid'
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

// import dynamic method from next
import dynamic from 'next/dynamic';
// import your component with dynamic and disable SSR
const ReactSlider = dynamic(
    () => import('react-slider'),
    { ssr: false }
);

const { MongoClient, ObjectId } = require('mongodb');

export default function Game({ winner, loser, extensions, events, players, winCondition, decks, chartData }) {
    const router = useRouter()
    const { id } = router.query
    console.log(decks)
    let [activePlayer, setActivePlayer] = useState(winner)
    let [statsTab, setStatsTab] = useState("player") //can be either player or game
    let [isAddGameOpen, setAddGameIsOpen] = useState(false)
    let [turnA, setTurnA] = useState(decks.length - 1)
    let [turnB, setTurnB] = useState(decks.length - 1)
    function openAddGameModal() {
        setAddGameIsOpen(true)
    }
    function updateTurn(i, value) {
        if (i == 0) {
            setTurnA(value)
        } else if (i == 1) {
            setTurnB(value)
        } else {
            setTurnA(value)
            setTurnB(value)
        }
    }
    function getTurnState(i) {
        if (i == 0) {
            return turnA
        } else {
            return turnB
        }
    }
    let displayPlayerCard = function (isActive, player) {
        if (player == winner && isActive) {
            return 'md:rounded-lg md:scale-110 md:border-4 md:border-winner'
        } else if (player == winner && !isActive) {
            return 'md:rounded-lg md:border-4 md:border-winner'
        } else if (player != winner && isActive) {
            return 'md:rounded-lg md:scale-110 md:border-4 md:border-loser'
        } else if (player != winner && !isActive) {
            return 'md:rounded-lg md:border-4 md:border-loser'
        }
    }
    return (
        <Layout>
            <Head>
                <meta name="og:title" content={`${winner} vs ${loser}`} />
                <meta name="og:image" content={`${process.env.NEXT_PUBLIC_BASE_URL}/api/og?id=${id}`} />
                <meta name="og:image:width" content="1200" />
                <meta name="og:image:height" content="600" />
            </Head>
            <div className="flex flex-col gap-2 w-screen md:w-full lg:w-5/6 2xl:w-2/3">
                <GameSummary winner={winner} loser={loser} winCondition={winCondition} extensions={extensions}></GameSummary>
                <div className="hidden md:flex flex-row ml-2 mb-2">
                    <button onClick={() => setStatsTab("player")} className={
                        statsTab == "player" ?
                            "bg-scifi3 text-white text-md md:border-2 md:border-scifi4 font-medium py-2 px-6 m-1 md:rounded-lg" :
                            "bg-white text-scifi5 hover:ring ring-scifi2 text-md font-medium px-6 py-2 m-1 md:border-2 md:border-scifi4 md:rounded-lg"}
                    >
                        Player stats
                    </button>
                    <button onClick={() => setStatsTab("game")} className={
                        statsTab == "game" ?
                            "bg-scifi3 text-white text-md md:border-2 md:border-scifi4 font-medium px-6 py-2 m-1 md:rounded-lg" :
                            "bg-white text-scifi5 hover:ring ring-scifi2 text-md font-medium px-6 py-2 m-1 md:border-2 md:border-scifi4 md:rounded-lg"}
                    >
                        Game stats
                    </button>
                </div>
                <div className="flex flex-row flex-wrap md:flex-nowrap md:px-4 gap-2 md:gap-8">
                    {statsTab == "player" &&
                        players.map((oneKey, i) => {
                            return (
                                <div key={i}
                                    onClick={() => setActivePlayer(oneKey)}
                                    className="flex flex-col w-full">
                                    <div className={`${displayPlayerCard(oneKey == activePlayer, oneKey)} md:p-2 flex flex-col grow justify-between hover:bg-slate-300 p-2 md:p-4 bg-scifi1 md:rounded-md gap-2 md:gap-4`}>
                                        <PlayerOverview name={oneKey} deck={decks[getTurnState(i)]['players'][oneKey]['deck']} authority={chartData["authorityData"][oneKey][getTurnState(i)]} missions={decks[getTurnState(i)]['players'][oneKey]['missions']}></PlayerOverview>
                                        <div className="hidden md:flex justify-center px-2">
                                            <ArrowDownIcon className='h-5 w-5' />
                                        </div>
                                        <div className="flex md:hidden">
                                            <ReactSlider
                                                className="horizontal-slider w-full h-6"
                                                thumbClassName="example-thumb-mobile rounded-xl text-sm"
                                                trackClassName="example-track-mobile"
                                                max={decks.length - 1}
                                                defaultValue={decks.length - 1}
                                                onChange={(value, index) => {
                                                    updateTurn(i, value)
                                                }}
                                                renderThumb={(props, state) => <div {...props}>turn {state.valueNow}</div>}
                                            />
                                        </div>
                                    </div>
                                    <div className="md:hidden md:rounded-b-xl">
                                        <DeckOverview deck={decks[getTurnState(i)]['players'][oneKey]['deck']}></DeckOverview>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>

                {statsTab == "player" &&
                    <div>
                        <div className="hidden md:flex flex-row justify-center mt-6 p-2 rounded-md border-2 mx-12 border-scifi4 bg-scifi1">
                            <ReactSlider
                                className="horizontal-slider w-50 w-1/2 h-12"
                                thumbClassName="example-thumb rounded-xl text-lg"
                                trackClassName="example-track"
                                max={decks.length - 1}
                                defaultValue={getTurnState(-1)}
                                onChange={(value, index) => {
                                    updateTurn(-1, value)
                                }}
                                renderThumb={(props, state) => <div {...props}>turn {state.valueNow}</div>}
                            />
                        </div>
                        <div className="hidden md:flex md:py-4 lg:py-6 md:px-2 lg:px-4 md:mx-4 lg:p-2 rounded-b-xl">
                            <DeckOverview isWinner={activePlayer == winner} deck={decks[getTurnState(-1)]['players'][activePlayer]['deck']}></DeckOverview>
                        </div>
                    </div>
                }
                {
                    statsTab == "game" &&
                    <div className="flex flex-col gap-4 md:mx-4">
                        {
                            events.length != 0 &&
                            <div className="flex flex-row overflow-auto gap-2 md:p-2">
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
                        <div className="flex w-full h-full">
                            <GameStats winner={winner} chartData={chartData} turnDecks={decks} events={events}></GameStats>
                        </div>
                    </div>
                }
                <div className="flex sm:hidden justify-start mx-2">
                    <a href="https://discord.gg/q4kqH775FA" target="_blank">
                        <div className="flex bg-white rounded-lg py-2 px-1 border-black border">
                            <div className="flex items-center mx-2">
                                <Image
                                    src={discord_img}
                                    height="24"
                                    width="24"
                                />
                            </div>
                            <p>Join the community! </p>
                        </div>
                    </a>
                </div>
                <div className="z-20 md:hidden sticky bottom-0 left-0 right-0">
                    {!isAddGameOpen &&
                        <div className="flex justify-end">
                            <button type="button" onClick={openAddGameModal} className="m-3 bg-scifi3 border border-scifi4 ring-scifi-2 drop-shadow-md hover:ring font-medium rounded-full text-md p-2.5 text-center inline-flex items-center">
                                <svg className="w-8 h-8" fill="none" stroke="white" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path></svg>
                            </button>
                        </div>
                    }
                    <div className="flex justify-around bg-white">
                        <button onClick={() => setStatsTab("player")} className={
                            statsTab == "player" ? "flex justify-center grow bg-scifi3 text-white text-md border-2 border-scifi4 font-medium py-2 px-6 m-1 md:rounded-lg"
                                : "flex justify-center grow bg-scifi1 ring-scifi2 hover:ring border-2 border-scifi4 text-scifi4 text-md border-2 border-scifi4 font-medium py-2 px-6 m-1 md:rounded-lg"
                        }>
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"></path></svg>
                        </button>
                        <button onClick={() => setStatsTab("game")} className={
                            statsTab == "game" ? "flex justify-center grow bg-scifi3 text-white text-md border-2 border-scifi4 font-medium py-2 px-6 m-1 md:rounded-lg"
                                : "flex justify-center grow bg-scifi1 ring-scifi2 hover:ring border-2 border-scifi4 text-scifi4 text-md border-2 border-scifi4 font-medium py-2 px-6 m-1 md:rounded-lg"
                        }>
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path></svg>
                        </button>
                    </div>
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
        let combatData = getChart(data['rounds'],'combatPool')
        let tradeData = getChart(data['rounds'],'tradePool')
        let discardData = getDiscardChart(data['rounds'])
        let drawData = getChart(data['rounds'],'drawCount')
        let shuffleData = getChart(data['rounds'], 'shuffleCount')

        let turnDecks = getTemporalDeck(data['rounds'])
        let { extensions, events } = getExtensionsAndEvents(data['rounds'])
        if (turnDecks[turnDecks.length -1]['players'][data['winner']]['missions'].length == 3) {
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
        let deckSizeData  = getDeckSizeChart(turnDecks)
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