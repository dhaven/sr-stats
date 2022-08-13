import CardShip from './cardShip'
import CardBase from './cardBase'

function DeckDetailV2({deckData}){
    console.log(deckData)
    return ( 
        <div className="grid grid-cols-5 bg-scifi1 rounded-md border-2 border-scifi4 drop-shadow-scifi5">
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