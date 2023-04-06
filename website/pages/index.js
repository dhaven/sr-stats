import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import LandingPage from '../components/landingPage.js'
import { getAuthorityChart } from '../lib/helper/enhanceBattle'

const { MongoClient } = require('mongodb');

export default function Home({ recentGames, popularCards }) {
  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <LandingPage recentGames={recentGames} popularCards={popularCards}></LandingPage>
    </Layout>
  )
}

export async function getServerSideProps(context) {
  let mySort = function (x, y) {
    return Object.values(y)[0] - Object.values(x)[0]
  }
  let topN = function (cards, n) {
    let topCards = cards
    topCards.sort(mySort)
    let spliceIndex = -1
    for(let i = 0; i < cards.length; i++){
      if(Object.keys(cards[i])[0] == "explorer"){
        spliceIndex = i
      }
    }
    if(spliceIndex != -1){
      topCards.splice(spliceIndex, 1)
    }
    return topCards.slice(0, n)
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
  const cursor = db.collection('battle')
    .find({
      $and: [
        { 'data.winner': { $ne: 'Player' } },
        { 'data.winner': { $ne: 'HardAI' } },
        { 'data.winner': { $ne: 'MediumAI' } },
        { 'data.winner': { $ne: 'EasyAI' } }
      ]
    })
    .sort({ createdAt: -1 })
    .limit(5)
    .project({ 'data.winner': 1, 'data.rounds': 1 })
  let recentGames = []
  while (await cursor.hasNext()) {
    let { data, _id } = await cursor.next()
    let nextGame = {}
    let playersNames = []
    playersNames[0] = data['rounds'][0]['player']
    playersNames[1] = data['rounds'][1]['player']
    playersNames.splice(playersNames.indexOf(data['winner']), 1)
    let loserName = playersNames[0]
    let authorityData = getAuthorityChart(data['rounds'])
    nextGame['_id'] = _id.toString()
    nextGame['winner'] = {
      name: data['winner'],
      authority: authorityData[data['winner']][authorityData[data['winner']].length - 1]
    }
    nextGame['loser'] = {
      name: loserName,
      authority: authorityData[loserName][authorityData[loserName].length - 1]
    }
    recentGames.push(nextGame)
  }
  //fetch top 5 most popular cards from each phase not including explorer
  const cursor2 = db.collection('popular_cards')
    .find()
    .sort({ createdAt: -1 })
    .limit(1)
    .project({ earlyGame: 1, midGame: 1, lateGame: 1 })
  let popularEarlyGameCards = []
  let popularMidGameCards = []
  let popularLateGameCards = []
  while (await cursor2.hasNext()) {
    let { earlyGame, midGame, lateGame } = await cursor2.next()
    popularEarlyGameCards = topN(earlyGame, 5)
    popularMidGameCards = topN(midGame, 5)
    popularLateGameCards = topN(lateGame, 5)
  }
  console.log(popularEarlyGameCards)
  return {
    props: {
      recentGames: recentGames,
      popularCards: {
        earlyGame: popularEarlyGameCards,
        midGame: popularMidGameCards,
        lateGame: popularLateGameCards
      }
    }
  }
}