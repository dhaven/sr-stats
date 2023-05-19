import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import { getServerSession } from "next-auth/next"
import { authOptions } from "./api/auth/[...nextauth]"
import { useSession } from "next-auth/react"
const { MongoClient, ObjectId } = require('mongodb');
import GameCard from '../components/gameCard.js'
import AddGameModal from '../components/dialogs/addGameModal.js'
import SearchPlayer from '../components/ui/searchPlayer.js'
import BarChartWinLoss from '../components/charts/barChartWinLoss'
import BarChartAverageFaction from '../components/charts/barChartAverageFaction'
import { getTemporalDeck } from '../lib/helper/enhanceBattle'
import card_list from '../lib/card_data/cards.js'
import { useState, Fragment } from 'react'
import { Listbox, Transition } from '@headlessui/react'
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid'
import { Chart as ChartJS } from 'chart.js/auto';
import { Bar } from 'react-chartjs-2';

const Games = ({ games, user, factions }) => {
    const { data: session } = useSession()
    const [isAddGameOpen, setIsAddGameOpen] = useState(false)
    const [selectedSorting, setSelectedSorting] = useState("newest -> oldest")
    let sortOrder = ["newest -> oldest", "oldest -> newest"]
    const winCondition = [
        { id: 1, name: "defeat" },
        { id: 2, name: "completed missions" },
        { id: 3, name: "resignation" },
        { id: 4, name: "timeout" }
    ]
    const [selectedWinCondition, setSelectedWinCondition] = useState([winCondition[0], winCondition[1], winCondition[2], winCondition[3]])
    const victoryOrDefeat = [
        { id: 1, name: "victory" },
        { id: 2, name: "defeat" }
    ]
    const [selectVictoryOrDefeat, setSelectVictoryOrDefeat] = useState([victoryOrDefeat[0], victoryOrDefeat[1]])
    const [selectedPlayer, setSelectedPlayer] = useState("")
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
    let sortGames = (games, order) => {
        if (order == "newest -> oldest") {
            return games.sort((a, b) => {
                return new Date(b["createdAt"]).getTime() - new Date(a["createdAt"]).getTime()
            })
        } else {
            return games.sort((a, b) => {
                return new Date(a["createdAt"]).getTime() - new Date(b["createdAt"]).getTime()
            })
        }
    }
    let filteredGames = (games, filter, victoryOrDefeat, user, selectedPlayer) => {
        console.log(selectedPlayer)
        let winConditions = getNameList(filter)
        let filteredGames = []
        for (let i = 0; i < games.length; i++) {
            if (selectedPlayer == "" || (games[i]["winner"] == selectedPlayer || games[i]["loser"] == selectedPlayer)) {
                if (winConditions.includes(games[i]['winCondition'])) {
                    if (isWinner(games[i], user) && getNameList(victoryOrDefeat).includes("victory")) {
                        filteredGames.push(games[i])
                    }
                    if (!isWinner(games[i], user) && getNameList(victoryOrDefeat).includes("defeat")) {
                        filteredGames.push(games[i])
                    }
                }
            }
        }
        return filteredGames
    }
    function getNameList(selectedItems) {
        return selectedItems.map(item => {
            return item.name
        })
    }
    let isWinner = (game, user) => {
        return (user == game['winner']) || ("Player" == game['winner'])
    }
    let isLoser = (game, user) => {
        return (user == game['loser']) || ("Player" == game['loser'])
    }
    let getListOpponents = (games, user) => {
        let opponents = {}
        for (let i = 0; i < games.length; i++) {
            if (games[i]['winner'] != user) {
                opponents[games[i]['winner']] = 1
            } else if (games[i]['loser'] != user) {
                opponents[games[i]['loser']] = 1
            }
        }
        opponents["EasyAI"] = 1
        opponents["MediumAI"] = 1
        opponents["HardAI"] = 1
        return Object.keys(opponents)
    }
    let getWinLossCount = (games, user) => {
        let winCount = 0
        let loseCount = 0
        for (let i = 0; i < games.length; i++) {
            if (isWinner(games[i], user)) {
                winCount += 1
            }
            if (isLoser(games[i], user)) {
                loseCount += 1
            }
        }
        return {winCount, loseCount}
    }
    let { winCount, loseCount} = getWinLossCount(games, user)
    return (
        <Layout>
            <Head>
                <title>SR Stats - games</title>
            </Head>
            <div className="bg-scifi1 md:w-1/2 rounded-md p-2 drop-shadow-scifi5">
                <BarChartWinLoss data={[winCount, loseCount]}></BarChartWinLoss>
            </div>
            <div className="flex justify-center bg-scifi1 md:w-1/2 rounded-md p-2 h-20 drop-shadow-scifi5">
                <BarChartAverageFaction factions={factions}></BarChartAverageFaction>
            </div>
            <div className="flex flex-col items-center w-full md:w-2/3">
                <div className="bg-scifi4 rounded-tl-md rounded-tr-md flex flex-row w-full p-1">
                    <div className="flex w-full flex-row justify-start">
                        <Listbox value={selectedSorting} onChange={setSelectedSorting} by={(a, b) => { return a == b }}>
                            <div className="relative p-2">
                                <Listbox.Button className="relative w-full cursor-pointer rounded-lg bg-white p-1 pl-2 pr-8 sm:py-2 sm:pl-3 sm:pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
                                    <span className="block truncate">Sort by</span>
                                    <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                                        <ChevronUpDownIcon
                                            className="h-5 w-5 text-gray-400"
                                            aria-hidden="true"
                                        />
                                    </span>
                                </Listbox.Button>
                                <Transition
                                    as={Fragment}
                                    leave="transition ease-in duration-100"
                                    leaveFrom="opacity-100"
                                    leaveTo="opacity-0"
                                >
                                    <Listbox.Options className="z-20 w-56 absolute mt-1 max-h-60 overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                                        {sortOrder.map((order, index) => (
                                            <Listbox.Option
                                                key={index}
                                                className={({ active }) =>
                                                    `z-30 relative cursor-pointer select-none py-2 pl-10 pr-4 ${active ? 'bg-scifi1 text-scifi4' : ' text-gray-900'
                                                    }`
                                                }
                                                value={order}
                                            >
                                                {({ selected }) => (
                                                    <>
                                                        <span
                                                            className={`block truncate ${selectedSorting == order ? 'font-medium' : 'font-normal'
                                                                }`}
                                                        >
                                                            {order}
                                                        </span>
                                                        {selectedSorting == order ? (
                                                            <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-scifi3">
                                                                <CheckIcon className="h-5 w-5" aria-hidden="true" />
                                                            </span>
                                                        ) : null}
                                                    </>
                                                )}
                                            </Listbox.Option>
                                        ))}
                                    </Listbox.Options>
                                </Transition>
                            </div>
                        </Listbox>
                        <Listbox value={selectedWinCondition} onChange={setSelectedWinCondition} by={(a, b) => { return a.id == b.id }} multiple>
                            <div className="relative p-2">
                                <Listbox.Button className="relative w-full cursor-pointer rounded-lg bg-white p-1 pl-2 pr-8 sm:py-2 sm:pl-3 sm:pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
                                    <span className="block truncate">Select win condition</span>
                                    <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                                        <ChevronUpDownIcon
                                            className="h-5 w-5 text-gray-400"
                                            aria-hidden="true"
                                        />
                                    </span>
                                </Listbox.Button>
                                <Transition
                                    as={Fragment}
                                    leave="transition ease-in duration-100"
                                    leaveFrom="opacity-100"
                                    leaveTo="opacity-0"
                                >
                                    <Listbox.Options className="z-20 w-56 absolute mt-1 max-h-60 overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                                        {winCondition.map((condition) => (
                                            <Listbox.Option
                                                key={condition.id}
                                                className={({ active }) =>
                                                    `z-30 relative cursor-pointer select-none py-2 pl-10 pr-4 ${active ? 'bg-scifi1 text-scifi4' : ' text-gray-900'
                                                    }`
                                                }
                                                value={condition}
                                            >
                                                {({ selected }) => (
                                                    <>
                                                        <span
                                                            className={`block truncate ${getNameList(selectedWinCondition).includes(condition.name) ? 'font-medium' : 'font-normal'
                                                                }`}
                                                        >
                                                            {condition.name}
                                                        </span>
                                                        {getNameList(selectedWinCondition).includes(condition.name) ? (
                                                            <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-scifi3">
                                                                <CheckIcon className="h-5 w-5" aria-hidden="true" />
                                                            </span>
                                                        ) : null}
                                                    </>
                                                )}
                                            </Listbox.Option>
                                        ))}
                                    </Listbox.Options>
                                </Transition>
                            </div>
                        </Listbox>
                        <Listbox value={selectVictoryOrDefeat} onChange={setSelectVictoryOrDefeat} by={(a, b) => { return a.id == b.id }} multiple>
                            <div className="relative p-2">
                                <Listbox.Button className="relative w-full cursor-pointer rounded-lg bg-white p-1 pl-2 pr-8 sm:py-2 sm:pl-3 sm:pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
                                    <span className="block truncate">Select victory/loss</span>
                                    <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                                        <ChevronUpDownIcon
                                            className="h-5 w-5 text-gray-400"
                                            aria-hidden="true"
                                        />
                                    </span>
                                </Listbox.Button>
                                <Transition
                                    as={Fragment}
                                    leave="transition ease-in duration-100"
                                    leaveFrom="opacity-100"
                                    leaveTo="opacity-0"
                                >
                                    <Listbox.Options className="z-20 w-56 absolute mt-1 max-h-60 overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                                        {victoryOrDefeat.map((result) => (
                                            <Listbox.Option
                                                key={result.id}
                                                className={({ active }) =>
                                                    `z-30 relative cursor-pointer select-none py-2 pl-10 pr-4 ${active ? 'bg-scifi1 text-scifi4' : ' text-gray-900'
                                                    }`
                                                }
                                                value={result}
                                            >
                                                {({ selected }) => (
                                                    <>
                                                        <span
                                                            className={`block truncate ${getNameList(selectVictoryOrDefeat).includes(result.name) ? 'font-medium' : 'font-normal'
                                                                }`}
                                                        >
                                                            {result.name}
                                                        </span>
                                                        {getNameList(selectVictoryOrDefeat).includes(result.name) ? (
                                                            <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-scifi3">
                                                                <CheckIcon className="h-5 w-5" aria-hidden="true" />
                                                            </span>
                                                        ) : null}
                                                    </>
                                                )}
                                            </Listbox.Option>
                                        ))}
                                    </Listbox.Options>
                                </Transition>
                            </div>
                        </Listbox>
                    </div>
                    <div className="flex w-full flex-row justify-end items-center">
                        <SearchPlayer opponents={getListOpponents(games, user)} selectedPlayer={selectedPlayer} setSelectedPlayer={setSelectedPlayer}></SearchPlayer>
                    </div>
                </div>
                <div className="flex flex-col md:bg-scifi3 rounded-bl-md rounded-br-md gap-1 w-full">
                    <div className="flex flex-row flex-wrap gap-2 p-4">
                        {
                            sortGames(filteredGames(games, selectedWinCondition, selectVictoryOrDefeat, user, selectedPlayer), selectedSorting).map((game, index) => {
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
    let user = session.user.ign || session.user.email
    if (!session) {
        return {
            props: {},
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
        let { games } = await cursor.next()
        let factions = {
            'Machine Cult': 0,
            'Trade Federation': 0,
            'Star Empire': 0,
            'Blob': 0,
            'Unaligned': 0
        }
        if(games == undefined || games == null){
            games = []
        }
        for (let i = 0; i < games.length; i++) {
            games[i]['createdAt'] = games[i]['createdAt'].toString()
            //fetch the game data
            const cursor2 = db.collection('battle')
                .find({ _id: ObjectId(games[i]['id']) })
                .project({ 'data.rounds': 1, 'data.winner': 1 })
            if (await cursor2.hasNext()) {
                let { data } = await cursor2.next()
                let turnDecks = getTemporalDeck(data['rounds'])
                let lastRoundDecks = turnDecks[turnDecks.length - 1]
                if (data["winner"] == user || data["winner"] == "Player") {
                    //Only account decks that were winning
                    let deck = lastRoundDecks['players'][data["winner"]]['deck']
                    Object.keys(deck).forEach(card => {
                        card_list[card]['faction'].forEach(faction => {
                            if (faction != "Unaligned") {
                                factions[faction] += deck[card]["purchaseCount"] - deck[card]["scrapCount"]
                            }
                        })
                    })
                }
            }
            //get final deck faction proportion
            //tally count for each faction
        }
        return {
            props: {
                games,
                user,
                factions
            },
        }
    }
}

export default Games