import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import InputLog, { logDataAtom } from '../components/form.js'
import DeckList from '../components/deck_list.js'
import DeckOverview from '../components/deckOverview.js'
import AuthorityChart from '../components/authorityChart.js'
import TradeChart from '../components/tradeChart.js'
import CombatChart from '../components/combatChart.js'
import WinnerMessage from '../components/winnerMessage.js'
import { useAtom } from 'jotai'
import { getFinalDecks } from '../lib/helper'

export default function Home() {
  const [battle, setBattle] = useAtom(logDataAtom)
  let decksData = {}
  if(Object.keys(battle).length != 0){
    decksData = getFinalDecks(battle)
  }
  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <InputLog></InputLog>
      <WinnerMessage></WinnerMessage>
      <div className="flex flex-row flex-wrap p-1 m-1 justify-center gap-10 w-screen sm:w-4/5 md:w-4/5 lg:w-2/3">
        { 
          Object.keys(decksData).map((oneKey,i)=>{
            let subDict = {}
            subDict[oneKey] = decksData[oneKey]
            return (
              <DeckOverview key={i} deckData={decksData[oneKey]} player={oneKey} winner={battle.winner}></DeckOverview>
            )
          })
        }
      </div>
      <div className="flex flex-row flex-wrap p-1 m-1 justify-center gap-5 w-screen md:w-3/4 lg:w-3/4">
        <AuthorityChart key={0} winner={battle.winner}></AuthorityChart>
        <TradeChart key={1} winner={battle.winner}></TradeChart>
        <CombatChart key={2} winner={battle.winner}></CombatChart>
      </div>
    </Layout>
  )
}