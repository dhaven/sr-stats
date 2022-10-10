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

function Test({winner, extensions, events, players, winCondition, authorityData, otherData, otherAggrData}) {
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
                <GameSummaryV2 winCondition={winCondition} extensions={extensions}></GameSummaryV2>
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
                                    <AuthorityChart winner={winner} authorityData={authorityData}></AuthorityChart>
                                </div>
                                <div className="flex w-full">
                                    <OtherCharts  winner={winner} otherData={otherData} otherAggrData={otherAggrData}></OtherCharts>
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
        .project({ 'data.winner': 1, 'data.extensions': 1, 'data.events':1, 'data.players':1, 'data.rounds':1 })
    if(await cursor.hasNext()){
        let { data } = await cursor.next()
        let winCondition = ""
        if(data['players'][data['winner']]['completedMissions'].length == 3){
            winCondition = data['winner'] + "won by completing 3 missions"
        }else{
            let playersNames = Object.keys(data['players'])
            playersNames.splice(playersNames.indexOf(data['winner']),1)
            let loserName = playersNames[0]
            console.log(data['players'][loserName]['finalAuthority'] )
            if(data['players'][loserName]['finalAuthority'] > 0){
                winCondition = data['winner'] + " won by resignation"
            }else{
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
        let indivTurns = Math.ceil(data['rounds'].length/2)
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
        for(let i = 0; i < data['rounds'].length; i++){
            if(i > 0){
                if(firstPlayer in data['rounds'][i]['authority']){
                    authorityData[firstPlayer][i] = authorityData[firstPlayer][i-1] + parseInt(data['rounds'][i]['authority'][firstPlayer]['diff'])
                }else{
                    authorityData[firstPlayer][i] = authorityData[firstPlayer][i-1]
                }
                if(secondPlayer in data['rounds'][i]['authority']){
                    authorityData[secondPlayer][i] = authorityData[secondPlayer][i-1] + parseInt(data['rounds'][i]['authority'][secondPlayer]['diff'])
                }else{
                    authorityData[secondPlayer][i] = authorityData[secondPlayer][i-1]
                }
            }
            if(i % 2 == 0){
                combatData[firstPlayer][i/2] = data['rounds'][i]['combatPool']
                tradeData[firstPlayer][i/2] = data['rounds'][i]['tradePool']
                discardData[firstPlayer][i/2] = data['rounds'][i]['discardedCards'].length
                drawData[firstPlayer][i/2] = data['rounds'][i]['drawCount']

                combatAggrData[firstPlayer] += data['rounds'][i]['combatPool']
                tradeAggrData[firstPlayer] += data['rounds'][i]['tradePool']
                discardAggrData[firstPlayer] += data['rounds'][i]['discardedCards'].length
                drawAggrData[firstPlayer] += data['rounds'][i]['drawCount']
            }else{
                combatData[secondPlayer][parseInt(i/2)] = data['rounds'][i]['combatPool']
                tradeData[secondPlayer][parseInt(i/2)] = data['rounds'][i]['tradePool']
                discardData[secondPlayer][parseInt(i/2)] = data['rounds'][i]['discardedCards'].length
                drawData[secondPlayer][parseInt(i/2)] = data['rounds'][i]['drawCount']

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
  
  export default Test