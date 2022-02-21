import { parseBattle, getDecks, getAuthority, getTrade } from '../lib/test'
import AuthorityChart from '../components/authorityChart.js'
import TradeChart from '../components/tradeChart.js'
import Basic from '../components/form.js'
import {countryAtom} from '../components/form.js'
import { useAtom} from 'jotai'

export async function getServerSideProps(context) {
    let battle = parseBattle()
    let playerDecks = getDecks(battle)
    let authorityData = getAuthority(battle)
    let tradeData = getTrade(battle)
    return {
      props: {
        playerDecks: playerDecks,
        authorityData: authorityData,
        tradeData: tradeData
      }
    }
  }

export default function FirstPost({ playerDecks, authorityData, tradeData }) {
    const [mydata, setText] = useAtom(countryAtom)
    return (
      <div>
        {
          Object.keys(playerDecks).map((oneKey,i)=>{
            return (
              <div key={i}>
                <h2 key={i}>{oneKey}</h2>
                {playerDecks[oneKey].map((card)=>{
                  return Object.keys(card).map((cardName,i)=>{
                    return (
                    <li key={i}>
                      {cardName} {card[cardName]}x
                    </li>
                    )
                  })
                })}
              </div>
            )
          })
        }
        <div>
          {
            Object.keys(authorityData).map((list,i)=>{
              return (
                <p key={i}>{JSON.stringify(authorityData[list])}</p>
              )
            })
          }
        </div>
        <Basic></Basic>
        <h1>{mydata}</h1>
        <AuthorityChart authorityData={authorityData}></AuthorityChart>
        <TradeChart tradeData={tradeData}></TradeChart>
      </div>
    )
  }