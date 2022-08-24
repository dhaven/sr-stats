import CardShip from './cardShip'
import CardBase from './cardBase'

function DeckDetailV2({cards}){
    return ( 
        <div className="grid grid-cols-3 sm:grid-cols-5 p-4 justify-items-center">
            {
                Object.keys(cards).map((card, index) => {
                        return (
                            cards[card]['type'] == 'ship' ?
                                <CardShip key={index} file={card} card={cards[card]}></CardShip>
                                :
                                <CardBase key={index} card={cards[card]}></CardBase>
                        )
                        
                })
            }
        </div>
    )
}

export default DeckDetailV2