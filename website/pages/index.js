import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import InputLog, { logDataAtom } from '../components/form.js'
import DeckList from '../components/deck_list.js'
import AuthorityChart from '../components/authorityChart.js'
import TradeChart from '../components/tradeChart.js'
import { useAtom } from 'jotai'
import { getDecks } from '../lib/classes'

export default function Home() {
  const [battle, setBattle] = useAtom(logDataAtom)
  let decksData = {}
  if(Object.keys(battle).length != 0){
    decksData = getDecks(battle)
    console.log(decksData)
  }
  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <InputLog className="child"></InputLog>
      <div className="finalDecks">
        { 
          Object.keys(decksData).map((oneKey,i)=>{
            let subDict = {}
            subDict[oneKey] = decksData[oneKey]
            return (
              <DeckList key={i} deckData={subDict}></DeckList>
            )
          })
        }
      </div>
      <div className="chartContainer">
        <AuthorityChart></AuthorityChart>
        <TradeChart></TradeChart>
      </div>
      <style jsx>{`
        .finalDecks {
          display: flex;
          flex-direction: row;
          justify-content: center;
          align-items: center;
          margin: 0.5rem;
        }
        .chartContainer {
          display: flex;
          flex-direction: row;
          justify-content: center;
          align-items: center;
          margin: 0.5rem;
        }
      `}</style>
    </Layout>
  )
}