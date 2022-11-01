import CardShip from './cardShip'
import CardBase from './cardBase'

function DeckDetail({cards}){
    return ( 
        <div className="grid grid-cols-3 sm:grid-cols-5 p-4 justify-items-center">
            {
                Object.keys(cards).map((card, index) => {
                        return (
                            cards[card]['type'] == 'ship' ?
                                <CardShip key={index} file={card} card={cards[card]}></CardShip>
                                :
                                <CardBase key={index} file={card} card={cards[card]}></CardBase>
                        )
                        
                })
            }
        </div>
    )
}

export default DeckDetail