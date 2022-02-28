import Basic from '../components/form.js'
import FinalDecks from '../components/finalDecks.js'
import AuthorityChart from '../components/authorityChart.js'
import TradeChart from '../components/tradeChart.js'

export default function FirstPost() {
    return (
      <>
        <Basic></Basic>
        <FinalDecks></FinalDecks>
        <AuthorityChart></AuthorityChart>
        <TradeChart></TradeChart>
      </>
    )
  }