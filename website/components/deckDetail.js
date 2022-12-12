import CardShip from './cardShip'
import CardBase from './cardBase'
import card_list from '../lib/card_data/cards.js'

function DeckDetail({deck}){
    return ( 
        <div className="flex flex-row overflow-auto sm:grid sm:grid-cols-3 sm:grid-cols-5 p-4 justify-items-center">
            {
                Object.keys(deck).map((card, index) => {
                        let count = deck[card]["purchaseCount"] - deck[card]["scrapCount"]
                        if(count > 0){
                            return (
                                card_list[card]['type'] == 'ship' ?
                                    <CardShip key={index} file={card} card={card_list[card]} count={count}></CardShip>
                                    :
                                    <CardBase key={index} file={card} card={card_list[card]} count={count}></CardBase>
                            )
                        }
                })
            }
        </div>
    )
}

export default DeckDetail