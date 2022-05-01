import { fetchBattle } from '../../lib/visitor'
import { getFinalDecks } from '../../lib/helper.js'
import Head from 'next/head'
import Layout, { siteTitle } from '../../components/layout'
import DeckOverview from '../../components/deckOverview.js'
import GameChart from '../../components/gameChart.js'
import WinnerMessage from '../../components/winnerMessage.js'
import AddGameModal from '../../components/addGameModal.js'
import { useState } from 'react'

export default function Game({firstPlayer, winner, rounds}) {
    let decksData = getFinalDecks({firstPlayer, winner, rounds})
    let [isOpen, setIsOpen] = useState(false)
    function openModal() {
        setIsOpen(true)
    }
    return (
        <Layout>
            <Head>
                <title>{siteTitle}</title>
            </Head>
            <div>
            <button className="bg-white text-sm px-2 py-2 border border-gray-300 hover:bg-gray-100 rounded-lg" type="button" onClick={openModal}>
                New Game
            </button>
            <AddGameModal isOpen={isOpen} setIsOpen={setIsOpen}></AddGameModal>
            </div>
            <WinnerMessage winner={winner}></WinnerMessage>
            <div className="flex flex-row flex-wrap p-1 m-1 justify-center gap-10 w-screen sm:w-4/5 md:w-4/5 lg:w-2/3">
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
            <div className="flex flex-row flex-wrap p-1 m-1 justify-center gap-5 w-screen md:w-3/4 lg:w-3/4">
                <GameChart winner={winner} firstPlayer={firstPlayer} rounds={rounds}>
                </GameChart>
            </div>
        </Layout>
    )
}

export async function getServerSideProps(context) {
    let { data } = await fetchBattle(context.params['id'])
    return {
      props: {
          ...data
        }
    }
  }