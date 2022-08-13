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
        <div className="flex flex-col gap-2 m-4">
                <div className="flex flex-row justify-between gap-2 bg-scifi1 rounded-md border-2 border-scifi4 drop-shadow-scifi5">
                    <div className="flex flex-row m-4 gap-4 items-center">
                        <div className="w-10 h-10">
                            <Coin/>
                        </div>
                        <div className="text-xl">{deckSummary['total_cost']}</div>
                    </div>
                    <div className="flex flex-row m-4 gap-6 items-center">
                        <div className="flex flex-row gap-1 items-center">
                            <div className="w-10 h-10">
                                <Rocket/>
                            </div>
                            /
                            <div className="w-10 h-10">
                                <Base/>
                            </div>
                        </div>
                        <div className="text-xl">{deckSummary['total_ship_count']} / {deckSummary['total_base_count']}</div>
                    </div>
                    <div className="flex flex-row m-4 gap-4 items-center">
                        <div className="w-10 h-10">
                            <CardStack/>
                        </div>
                        <div className="text-xl">{deckSummary['total_count']}</div>
                    </div>
                </div>
            <DeckDetailV2 deckData={deckData}></DeckDetailV2>
        </div>
    )
  }
  
  export default DeckOverviewV2