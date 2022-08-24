import Image from 'next/image'

function GameSummaryV2({winCondition, extensions}){
    let width = 0
    let height = 0
    for(let i = 0; i < extensions.length; i++){
        if(extensions[i] == "core_set" || extensions[i] == "promo1" || extensions[i] == "promo2"){
            width = 107
            height = 107
        }else if(extensions[i] == "colony_wars" || extensions[i] == "command_decks" || extensions[i] == "tech"){
            width = 110
            height = 110
        }else if(extensions[i] == "frontiers"){
            width = 118
            height = 107
        }else if(extensions[i] == "bases_battleships" || extensions[i] == "fleets_fortresses" || extensions[i] == "crisis_heroes"){
            width = 180
            height = 84
        }else if(extensions[i] == "frontiers_promos"){
            width = 98
            height = 107
        }else if(extensions[i] == "assault" || extensions[i] == "command" || extensions[i] == "united_heroes"){
            width = 158
            height = 78
        }else if(extensions[i] == "stellar_allies"){
            width = 114
            height = 107
        }
    }
    return ( 
        <div className="flex flex-col sm:flex-row sm:items-center gap-4 2xl:gap-8 m-4 p-4 bg-scifi1 rounded-md border-2 border-scifi4 drop-shadow-scifi5 outline outline-offset-2 outline-double outline-scifi1">
            <p className="text-scifi5 text-lg md:text-3xl font-medium">{winCondition}</p>
            <div className="flex flex-wrap items-center gap-2">
                {
                    extensions.map((value, index)=>{
                        return (
                            <div key={index} className="flex w-10 2xl:w-16">
                                <Image
                                    src={"/images/extensions/" + value + ".png"} // Route of the image file
                                    height={height} // Desired size with correct aspect ratio
                                    width={width} // Desired size with correct aspect ratio
                                    alt="Step 1"/>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default GameSummaryV2