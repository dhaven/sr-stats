import FinalAuthority from './finalAuthority'
import FactionPie from './factionPie'
import Card from './card'
import MissionCardBack from './missionCardBack'
import { getDeckSummary } from '../lib/helper.js'

function PlayerOverviewV2({setActivePlayer, name, deckData, authority, missions}) {
    let deckSummary = getDeckSummary(deckData)
    return (
        <div onClick={() => setActivePlayer(name)} className="flex flex-row gap-3">
            <div className="flex flex-col">
                <div className="text-center">
                    <p className="p-2 text-3xl text-scifi5 font-bold whitespace-nowrap">{name}</p>
                </div>
                <div className="flex justify-center">
                    <FinalAuthority authority={authority}></FinalAuthority>
                </div>
                <div className="flex flex-row gap-2 p-2">
                    {
                        Array(missions).fill(0).map((value, index) => {
                            return (
                                <MissionCardBack key={index}></MissionCardBack>
                            )
                        })
                    }
                </div>
            </div>
            <div className="">
                <FactionPie deckSummary={deckSummary}></FactionPie>
            </div>
        </div>
    )
  }
  
  export default PlayerOverviewV2