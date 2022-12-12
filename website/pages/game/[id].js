import PlayerOverview from '../../components/playerOverview'
import DeckOverview from '../../components/deckOverview'
import Head from 'next/head'
import Layout from '../../components/layout'
import AddGameModal from '../../components/addGameModal.js'
import { useState } from 'react'
import AuthorityChart from '../../components/authorityChart'
import OtherCharts from '../../components/otherCharts'
import { ArrowDownIcon } from '@heroicons/react/24/solid'
import EventCard from '../../components/eventCard'
import GameSummary from '../../components/gameSummary'
import { useRouter } from 'next/router'
import Image from 'next/image'
import discord_img from '../../public/images/discord.png'

// import dynamic method from next
import dynamic from 'next/dynamic';
// import your component with dynamic and disable SSR
const ReactSlider = dynamic(
    () => import('react-slider'),
    { ssr: false }
);

const { MongoClient, ObjectId } = require('mongodb');

function initializeDecks(rounds, player) {
    let nextRound = {}
    for (let i = 0; i < rounds.length; i++) {
        nextRound = rounds[i]
        if (player in nextRound['authority']) {
            let startAuthority = nextRound['authority'][player]['new'] - nextRound['authority'][player]['diff']
            return {
                deck: getInitialDeck(startAuthority)
            }
        }
    }
}

function getInitialDeck(startAuthority) {
    if (startAuthority == 50) {
        //initialize deck with standard game
        return {
            scout: {
                purchaseCount: 8,
                scrapCount: 0
            },
            viper: {
                purchaseCount: 2,
                scrapCount: 0
            }
        }
    }
}

export default function Game({ winner, loser, extensions, events, players, winCondition, authorityData, decks, otherData, otherAggrData }) {
    const router = useRouter()
    const { id } = router.query
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
                        Object.keys(players).map((oneKey, i) => {
                            return (
                                <div key={i}
                                    onClick={() => setActivePlayer(oneKey)}
                                    className="flex flex-col w-full">
                                    <div className={`${displayPlayerCard(oneKey == activePlayer, oneKey)} md:p-2 flex flex-col grow justify-between hover:bg-slate-300 p-2 md:p-4 bg-scifi1 md:rounded-md gap-2 md:gap-4`}>
                                        <PlayerOverview name={oneKey} deck={decks[getTurnState(i)]['players'][oneKey]['deck']} authority={authorityData[oneKey][getTurnState(i)]} missions={players[oneKey]['completedMissions']}></PlayerOverview>
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
                                        <DeckOverview deck={decks[getTurnState(i)]['players'][activePlayer]['deck']}></DeckOverview>
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
                                defaultValue={decks.length - 1}
                                onChange={(value, index) => {
                                    updateTurn(-1,value)
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
                        <div className="flex h-40 md:h-80 w-full">
                            <AuthorityChart winner={winner} authorityData={authorityData}></AuthorityChart>
                        </div>
                        <div className="flex w-full">
                            <OtherCharts winner={winner} otherData={otherData} otherAggrData={otherAggrData}></OtherCharts>
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
        .project({ 'data.winner': 1, 'data.winCondition': 1, 'data.extensions': 1, 'data.events': 1, 'data.players': 1, 'data.rounds': 1 })
    if (await cursor.hasNext()) {
        let { data } = await cursor.next()
        let winCondition = ""
        let playersNames = Object.keys(data['players'])
        playersNames.splice(playersNames.indexOf(data['winner']), 1)
        let loserName = playersNames[0]
        if (data['players'][data['winner']]['completedMissions'].length == 3) {
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

        let firstPlayerInit = initializeDecks(data['rounds'], data['rounds'][0]['player'])
        let secondPlayerInit = initializeDecks(data['rounds'], data['rounds'][1]['player'])
        let turnDecks = []
        let lastTurnDeck = {
            players: {}
        }
        lastTurnDeck['players'][firstPlayer] = firstPlayerInit
        lastTurnDeck['players'][secondPlayer] = secondPlayerInit
        for (let i = 0; i < data['rounds'].length; i++) {
            let currentRound = data['rounds'][i]
            let nextTurnDecks = JSON.parse(JSON.stringify(lastTurnDeck));
            let currentPlayer = ""
            if (i % 2 == 0) {
                currentPlayer = firstPlayer
            } else {
                currentPlayer = secondPlayer
            }
            for (let j = 0; j < currentRound['purchasedCards'].length; j++) {
                let purchasedCard = currentRound['purchasedCards'][j]
                if (!(purchasedCard in nextTurnDecks['players'][currentPlayer]['deck'])) {
                    nextTurnDecks['players'][currentPlayer]['deck'][purchasedCard] = {
                        purchaseCount: 1,
                        scrapCount: 0
                    }
                } else {
                    nextTurnDecks['players'][currentPlayer]['deck'][purchasedCard]['purchaseCount'] += 1
                }
            }
            for (let j = 0; j < currentRound['scrappedCards'].length; j++) {
                let scrappedCard = currentRound['scrappedCards'][j]
                //check if scrapped card is a gambit
                if (!(scrappedCard in nextTurnDecks['players'][currentPlayer]['deck'])) {
                    //normally this should not happen because all scrapped cards
                    //were previously purchased
                    console.log(`found a scrapped card ${scrappedCard} not in deck`)
                } else {
                    nextTurnDecks['players'][currentPlayer]['deck'][scrappedCard]['scrapCount'] += 1
                }
            }
            lastTurnDeck = nextTurnDecks
            turnDecks.push(nextTurnDecks)
        }
        return {
            props: {
                winner: data['winner'],
                loser: loserName,
                extensions: data['extensions'],
                events: data['events'],
                players: data['players'],
                winCondition: winCondition,
                authorityData: authorityData,
                decks: turnDecks,
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