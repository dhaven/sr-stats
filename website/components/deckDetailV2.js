import CardShip from './cardShip'
import CardBase from './cardBase'

function DeckDetailV2({deckData}){
    console.log(deckData)
    return ( 
        <div className="grid m-4 grid-cols-5">
            {
                Object.keys(deckData).map((card, index) => {
                        return (
                            deckData[card]['type'] == 'ship' ?
                                <CardShip key={index} name={deckData[card]['name']}></CardShip>
                                :
                                <CardBase key={index} name={deckData[card]['name']}></CardBase>
                        )
                        
                })
            }
        </div>
    )
}

export default DeckDetailV2