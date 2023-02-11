import Image from 'next/image'
import { visibility } from './ui/toast.js'
import { atom, useAtom } from 'jotai'
import { Popup } from 'semantic-ui-react'

function GameSummary({winner, loser, winCondition, extensions}){
    let width = 0
    let height = 0
    const [visi, setVisi] = useAtom(visibility)
    let getSummaryMessage = function(winCondition, winner, loser){
        if(winCondition == "completed missions"){
            return winner + " won by completing 3 missions"
        }else if(winCondition == "resignation"){
            return winner + " won by resignation"
        }else if(winCondition == "defeat"){
            return winner + " won by defeating " + loser
        }else if(winCondition == "timeout"){
            return winner + " won by timeout"
        }
    }
    let shareGame = async function(){
        if(navigator.canShare({
            url: window.location.href,
            title: "Share game"
        })){
            navigator.share({
                url: window.location.href,
                title: "Share game"
            }).then(() =>{
                return true
            })
        }else{
            navigator.clipboard.writeText(window.location.href).then(() => {
                setVisi(true)
                return false
            })
        }

    }
    return ( 
        <div className="flex flex-col md:flex-row md:items-center gap-4 2xl:gap-8 my-2 p-2 md:m-4 md:p-4 bg-scifi1 md:rounded-md border-2 border-scifi4 drop-shadow-scifi5 outline outline-offset-2 outline-double outline-scifi1">
            <button onClick={(e) => {navigator.clipboard.writeText(window.location.href).then(() => setVisi(true))}} className="inline-flex w-min font-medium bg-white text-scifi5 text-md text-bold p-1 lg:px-4 lg:py-2 border items-center drop-shadow-md border-scifi4 ring-scifi-2 hover:ring rounded-lg active:bg-white/40" type="button">
                <svg className="w-6 h-6 mr-2 -ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"></path>
                </svg>
                 Share
            </button>
            <p className="text-scifi5 text-xl md:text-3xl font-medium">{getSummaryMessage(winCondition, winner, loser)}</p>
            <div className="flex flex-wrap items-center gap-1 md:gap-2">
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
                        }else if(value == "assault" || value == "command" || value == "united_heroes" || value == "comdic" || value == "gambits" || value == "missions"){
                            width = 158
                            height = 78
                        }else if(value == "stellar_allies"){
                            width = 114
                            height = 107
                        }
                        return (
                            <div key={index} className="w-5 w-10 group relative">
                                <Popup 
                                    content={value}
                                    className="bg-white p-2 rounded-md m-2 border-solid border-2 border-scifi4"
                                    position='top center'
                                    trigger={
                                        <Image
                                            src={"/images/extensions/" + value + ".png"} // Route of the image file
                                            height={height} // Desired size with correct aspect ratio
                                            width={width} // Desired size with correct aspect ratio
                                            alt="Step 1"/>
                                    } 
                                />
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default GameSummary