import FinalAuthority from './finalAuthority'
import FactionPie from './factionPie'
import MissionCard from './missionCard'
import Tooltip from './ui/tooltip.js'

function PlayerOverview({name, deckData, authority, missions}) {
    return (
        <div className="flex items-stretch justify-between 2xl:gap-4">
            <div className="flex flex-col">
                <div className="text-center">
                    <p className="sm:p-2 text-3xl text-scifi5 font-bold whitespace-nowrap">{name}</p>
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
                                    <Tooltip hint={value}></Tooltip>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
            <div className="flex h-36 w-36 sm:h-48 sm:w-48 md:h-36 md:w-36 lg:h-40 lg:w-40 xl:w-48 wl:h-48 2xl:h-56 2xl:w-56">
                <FactionPie factions={deckData['factions']}></FactionPie>
            </div>
        </div>
    )
  }
  
  export default PlayerOverview