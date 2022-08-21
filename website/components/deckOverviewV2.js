import { Pie } from 'react-chartjs-2';
import 'chart.js/auto';
import DeckDetailV2 from './deckDetailV2'
import { getDeckSummary } from '../lib/helper.js'
import Rocket from '../public/svg/rocket.svg'
import Base from '../public/svg/base_station.svg'
import CardStack from '../public/svg/card_stack.svg'
import Coin from '../public/svg/coin.svg'

function DeckOverviewV2({deckData}) {
    let deckSummary = getDeckSummary(deckData)
    return (
        <div className="flex flex-col bg-scifi1 rounded-md w-full">
            <div className="flex flex-row justify-around gap-2">
                    <div className="group inline-block relative flex flex-col sm:flex-row m-4 gap-2 sm:gap-4 items-center">
                        <Coin className="w-8 h-8 sm:w-10 sm:h-10"/>
                        <div className="text-lg sm:text-xl">{deckSummary['total_cost']}</div>
                    </div>
                    <div className="flex flex-col sm:flex-row m-4 gap-2 sm:gap-6 items-center">
                        <div className="flex flex-row gap-1 items-center">
                                <Rocket className="w-8 h-8 sm:w-10 sm:h-10"/>
                            /
                                <Base className="w-8 h-8 sm:w-10 sm:h-10"/>
                        </div>
                        <div className="text-lg sm:text-xl">{deckSummary['total_ship_count']} / {deckSummary['total_base_count']}</div>
                    </div>
                    <div className="flex flex-col sm:flex-row m-4 gap-2 sm:gap-4 items-center">
                        <CardStack className="w-8 h-8 sm:w-10 sm:h-10"/>
                        <div className="text-lg sm:text-xl">{deckSummary['total_count']}</div>
                    </div>
            </div>
            <div className="border-2 border-scifi4 mx-16">
            </div>
            <DeckDetailV2 deckData={deckData}></DeckDetailV2>
        </div>
    )
  }
  
  export default DeckOverviewV2