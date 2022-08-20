import CardShip from './cardShip'
import CardBase from './cardBase'

function DeckDetailV2({deckData}){
    return ( 
        <div className="grid grid-cols-3 sm:grid-cols-5 p-4 justify-items-center">
            {
                Object.keys(deckData).map((card, index) => {
                        return (
                            deckData[card]['type'] == 'ship' ?
                                <CardShip key={index} card={deckData[card]}></CardShip>
                                :
                                <CardBase key={index} card={deckData[card]}></CardBase>
                        )
                        
                })
            }
        </div>
    )
}

export default DeckDetailV2