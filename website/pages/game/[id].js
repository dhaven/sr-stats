import { fetchBattle } from '../../lib/visitor'
import { getFinalDecks } from '../../lib/helper.js'
import Head from 'next/head'
import Layout, { siteTitle } from '../../components/layout'
import DeckOverview from '../../components/deckOverview.js'
import GameChart from '../../components/gameChart.js'
import GameSummary from '../../components/gameSummary.js'
import { useState } from 'react'

export default function Game({firstPlayer, winner, rounds}) {
    console.log(firstPlayer)
    console.log(winner)
    console.log(rounds)
    let decksData = getFinalDecks({firstPlayer, winner, rounds})
    let [isOpen, setIsOpen] = useState(false)
    console.log(rounds)
    function openModal() {
        setIsOpen(true)
    }
    return (
        <Layout>
            <Head>
                <title>Game review | {siteTitle}</title>
            </Head>
            <div className="flex flex-row flex-wrap p-1 m-1 justify-center w-screen sm:w-4/5 md:w-4/5 lg:w-2/3">
                <GameSummary winner={winner} decksData={decksData} lastRound={rounds[rounds.length -1]}></GameSummary>
            </div>
            <div className="flex flex-row flex-wrap p-1 m-1 justify-center w-screen sm:w-4/5 md:w-4/5 lg:w-2/3">
                { 
                    Object.keys(decksData).map((oneKey,i)=>{
                        let subDict = {}
                        subDict[oneKey] = decksData[oneKey]
                        return (
                        <DeckOverview key={i} deckData={decksData[oneKey]} player={oneKey} winner={winner}></DeckOverview>
                        )
                    })
                }
            </div>
            <div className="flex flex-row flex-wrap p-1 m-1 justify-center gap-5 w-screen md:w-3/4 lg:w-1/2">
                <GameChart winner={winner} firstPlayer={firstPlayer} rounds={rounds}></GameChart>
            </div>
        </Layout>
    )
}

export async function getServerSideProps(context) {
    let { data } = await fetchBattle(context.params['id'])
    if(data == null){
        console.log("enable to fetch data object from mongodb")
    }
    return {
      props: {
          ...data
        }
    }
  }