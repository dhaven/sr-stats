import FinalAuthority from './finalAuthority'
import FactionPie from './factionPie'
import MissionCard from './missionCard'
import card_list from '../lib/card_data/cards.js'

function PlayerOverview({name, deck, authority, missions}) {
    let factions = {
        'Machine Cult': 0,
        'Trade Federation': 0,
        'Star Empire': 0,
        'Blob': 0,
        'Unaligned': 0
    }
    Object.keys(deck).forEach(card => {
        card_list[card]['faction'].forEach(faction =>{
            factions[faction] += deck[card]["purchaseCount"] - deck[card]["scrapCount"]
        })
    })
    return (
        <div className="flex items-stretch justify-between 2xl:gap-4">
            <div className="flex grow-0 flex-col">
                <div className="text-center">
                    <p className="sm:p-2 text-xl md:text-3xl text-scifi5 font-bold whitespace-nowrap">{name}</p>
                </div>
                <div className="flex justify-center">
                    <FinalAuthority authority={authority}></FinalAuthority>
                </div>
                <div className="flex flex-row gap-2 p-2">
                    {
                        missions.map((value, index) => {
                            return (
                                <div key={index} className="group relative">
                                    <MissionCard key={index} mission={value}></MissionCard>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
            <div className="flex h-32 w-32 sm:h-48 sm:w-48 md:h-36 md:w-36 lg:h-40 lg:w-40 xl:w-48 wl:h-48 2xl:h-56 2xl:w-56">
                <FactionPie factions={factions}></FactionPie>
            </div>
        </div>
    )
  }
  
  export default PlayerOverview