import { getDeckSummary } from '../lib/helper'
import { Disclosure } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/solid'

export default function DeckOverview({deckData, player, winner}) {
    let deckSummary = getDeckSummary(deckData)
    let bgColor = ""
    if(player == winner){
        bgColor = "bg-winner"
    }else{
        bgColor = "bg-loser"
    }
    let playerTextClass = bgColor + " text-white text-xl text-center rounded-t-lg"
    return (
            <div className="block m-2 h-min">
                <div className={playerTextClass}>
                    {player} deck summary
                </div>
                <div className="flex flex-col gap-2 p-2 sm:p-4 drop-shadow-scifi5 bg-white rounded-b-lg">
                    <div className="flex flex-row gap-1 justify-between">
                        <p className="basis-1/2 text-gray-900 text-lg leading-tight font-medium mb-2">Blob / Trade Federation / Star Empire / Machine cult / Unaligned</p>
                        <p className="basis-1/2 text-right text-gray-900 text-xl font-medium mb-2">{deckSummary['blob_count']} / {deckSummary['trade_federation_count']} / {deckSummary['star_empire_count']} / {deckSummary['machine_cult_count']} / {deckSummary['unaligned_count']}</p>
                    </div>
                    <div className="flex flex-row gap-1 justify-between">
                        <p className="text-gray-900 text-lg leading-tight font-medium mb-2">ships / bases</p>
                        <h5 className="text-gray-900 text-xl leading-tight font-medium mb-2">{deckSummary['total_ship_count']} / {deckSummary['total_base_count']}</h5>
                    </div>
                    <div className="flex flex-row gap-1 justify-between">
                        <p className="text-gray-900 text-lg leading-tight font-medium mb-2">Cost</p>
                        <h5 className="text-gray-900 text-xl leading-tight font-medium mb-2">{deckSummary['total_cost']}</h5>
                    </div>
                    <Disclosure>
                        {({ open }) => (
                            <>
                            <Disclosure.Button className=" flex flex-col items-center w-full text-sm font-medium bg-white rounded-lg hover:ring ring-scifi-2">
                                <div className="flex flex-row gap-1 justify-between w-full">
                                    <p className="text-gray-900 text-lg leading-tight font-medium mb-2">Cards</p>
                                    <h5 className="text-gray-900 text-xl leading-tight font-medium mb-2">{deckSummary['total_count']}</h5>
                                </div>
                                <ChevronDownIcon
                                className={`${
                                    open ? 'transform rotate-180' : ''
                                } w-5 h-5 m-1`}
                                />
                            </Disclosure.Button>
                            <Disclosure.Panel className="pb-2">
                            <div className="text-gray-900 bg-white rounded-lg border border-gray-200 overflow-auto h-80">
                                <div className=" py-2 px-4 flex flex-row text-sm font-medium w-full">
                                    <p className="basis-1/3 text-center">name</p>
                                    <p className="basis-1/3 text-center">faction</p>
                                    <p className="basis-1/3 text-center">acquired/scrapped</p>
                                </div>
                                {deckData &&
                                    <div className="flex flex-col">
                                        {Object.keys(deckData).map((cardName,i)=>{
                                            return (
                                                <button key={i} type="button" className="py-2 px-4 text-left text-sm border-b border-gray-200 cursor-pointer hover:bg-gray-100 hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-700 focus:text-blue-700">
                                                    <div className="flex flex-row w-full">
                                                        <p className="basis-1/3 text-center">{deckData[cardName]['name']}</p>
                                                        <p className="basis-1/3 text-center">
                                                            {deckData[cardName]['faction'].map((faction,index) =>
                                                                index == 1 ? " / " + faction : faction
                                                            )}
                                                        </p>
                                                        <p className="basis-1/3 text-center">{deckData[cardName]['count']}/{deckData[cardName]['scrapCount']}</p>
                                                    </div>
                                                </button>
                                            )
                                        })}
                                    </div>    
                                }
                            </div>
                            </Disclosure.Panel>
                            </>
                        )}
                    </Disclosure>
                </div>
                
            </div>
    )
}