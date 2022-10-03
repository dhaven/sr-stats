import Image from 'next/image'
import Tooltip from './tooltip.js'

function GameSummaryV2({winCondition, extensions}){
    let width = 0
    let height = 0
    return ( 
        <div className="flex flex-col sm:flex-row sm:items-center gap-4 2xl:gap-8 m-4 p-4 bg-scifi1 rounded-md border-2 border-scifi4 drop-shadow-scifi5 outline outline-offset-2 outline-double outline-scifi1">
            <p className="text-scifi5 text-lg md:text-3xl font-medium">{winCondition}</p>
            <div className="flex flex-wrap items-center gap-2">
                {
                    extensions.map((value, index)=>{
                        if(value == "core_set" || value == "promo1" || value == "promo2"){
                            width = 107
                            height = 107
                        }else if(value == "colony_wars" || value == "command_decks" || value == "tech"){
                            width = 110
                            height = 110
                        }else if(value == "frontiers"){
                            width = 118
                            height = 107
                        }else if(value == "bases_battleships" || value == "fleets_fortresses" || value == "crisis_heroes" || value == "events"){
                            width = 180
                            height = 84
                        }else if(value == "frontiers_promos" || value == "frontiers_events"){
                            width = 98
                            height = 107
                        }else if(value == "assault" || value == "command" || value == "united_heroes" || value == "cosmic" || value == "gambits" || value == "missions"){
                            width = 158
                            height = 78
                        }else if(value == "stellar_allies"){
                            width = 114
                            height = 107
                        }
                        return (
                            <div key={index} className="w-10 2xl:w-16 group relative">
                                <Image
                                    src={"/images/extensions/" + value + ".png"} // Route of the image file
                                    height={height} // Desired size with correct aspect ratio
                                    width={width} // Desired size with correct aspect ratio
                                    alt="Step 1"/>
                                <span className="overflow-visible border-2 border-scifi4 my-1 w-max p-2 absolute bottom-full -translate-x-[calc(50%_+_2rem)] rounded text-center font-medium invisible group-hover:visible bg-slate-200/80 z-40 after:content-[' '] after:absolute after:left-1/2 after:top-full after:-ml-2 after:border-8 after:border-t-black after:border-l-transparent after:border-r-transparent after:border-b-transparent">{value}</span>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default GameSummaryV2