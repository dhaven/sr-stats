import 'chart.js/auto';
import DeckDetail from './deckDetail'
import Rocket from '../public/svg/rocket.svg'
import Base from '../public/svg/base_new.svg'
import CardStack from '../public/svg/card_stack.svg'
import Coin from '../public/svg/coin.svg'
import card_list from '../lib/card_data/cards.js'

function DeckOverview({isWinner, deck}) {
    let cardCount = 0
    let shipCount = 0
    let baseCount = 0
    Object.keys(deck).forEach(card => {
        cardCount += deck[card]["purchaseCount"] - deck[card]["scrapCount"]
        if(card_list[card]['type'] == 'ship'){
            shipCount += deck[card]["purchaseCount"] - deck[card]["scrapCount"]
        }else{
            baseCount += deck[card]["purchaseCount"] - deck[card]["scrapCount"]
        }
    })
    return (
        <div className={`${isWinner ? 'md:border-winner' : 'md:border-loser'} md:border-8 flex flex-col bg-scifi1 sm:rounded-md w-full`}>
            <div className="flex flex-row justify-around gap-2">
                    <div className="flex flex-col sm:flex-row m-4 gap-2 sm:gap-6 items-center">
                        <div className="flex flex-row gap-1 items-center">
                                <Rocket className="w-8 h-8 sm:w-10 sm:h-10"/>
                            /
                                <Base className="w-14 h-14 sm:w-16 sm:h-16"/>
                        </div>
                        <div className="text-lg sm:text-xl">{shipCount} / {baseCount}</div>
                    </div>
                    <div className="flex flex-col sm:flex-row m-4 gap-2 sm:gap-4 items-center">
                        <CardStack className="w-8 h-8 sm:w-10 sm:h-10"/>
                        <div className="text-lg sm:text-xl">{cardCount}</div>
                    </div>
            </div>
            <div className="border-2 border-scifi4 mx-16">
            </div>
            <DeckDetail deck={deck}></DeckDetail>
        </div>
    )
  }
  
  export default DeckOverview