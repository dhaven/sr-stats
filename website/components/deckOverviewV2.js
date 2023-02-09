
import HorizontalCard from './horizontalCard'
import card_list from '../lib/card_data/cards.js'
import FactionPie from './factionPie'

function DeckOverviewV2({ missions, gambit, deck }) {
    let factions = {
        'Machine Cult': 0,
        'Trade Federation': 0,
        'Star Empire': 0,
        'Blob': 0,
        'Unaligned': 0
    }
    Object.keys(deck).forEach(card => {
        card_list[card]['faction'].forEach(faction => {
            factions[faction] += deck[card]["purchaseCount"] - deck[card]["scrapCount"]
        })
    })
    return (
        <div className="flex flex-row items-stretch rounded-bl-md rounded-br-md bg-scifi1 mx-2 p-2">
            <div className="">
                <div className="flex flex-col p-2">
                    <p className="mx-2 text-lg font-medium">Factions</p>
                    <hr className="border-2 border-scifi5 rounded-full m-2 w-1/2"></hr>
                    <div className="flex h-32 w-32 md:h-48 md:w-48 lg:h-36 lg:w-36 xl:h-40 xl:w-40 2xl:w-48 2xl:h-48">
                        <FactionPie factions={factions}></FactionPie>
                    </div>
                </div>
            </div>
            <div className="flex flex-col">
                <div className="flex flex-col p-2 grow">
                    <p className="mx-2 text-lg font-medium">Gambits</p>
                    <hr className="border-2 border-scifi5 rounded-full m-2 w-1/2"></hr>
                    <div className="flex flex-row gap-2 p-2">
                        {
                            Object.keys(gambit).map((value, index) => {
                                return (
                                    <HorizontalCard key={index} cardName={value} category={"gambits"}></HorizontalCard>
                                )
                            })
                        }
                    </div>
                </div>
                <div className="flex flex-col p-2 grow">
                    <p className="mx-2 text-lg font-medium">Missions</p>
                    <hr className="border-2 border-scifi5 rounded-full m-2 w-1/2"></hr>
                    <div className="flex flex-row gap-2 p-2">
                        {
                            missions.map((value, index) => {
                                return (
                                    <HorizontalCard key={index} cardName={value} category={"missions"}></HorizontalCard>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </div >
    )
}
export default DeckOverviewV2