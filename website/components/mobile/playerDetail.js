import { ArrowLeftIcon } from '@heroicons/react/20/solid'
import FinalAuthority from '../finalAuthority'
import FactionPie from '../factionPie'
import card_list from '../../lib/card_data/cards.js'
import { useState } from 'react'
import DeckDetailV2 from '../deckDetailV2'
import Slider from '@mui/material/Slider';

function PlayerDetail({ name, authority, setSrScreen, decks }) {
    let [turn, setTurn] = useState(decks.length - 1)
    let factions = {
        'Machine Cult': 0,
        'Trade Federation': 0,
        'Star Empire': 0,
        'Blob': 0,
        'Unaligned': 0
    }
    Object.keys(decks[turn]['players'][name]['deck']).forEach(card => {
        card_list[card]['faction'].forEach(faction => {
            factions[faction] += decks[turn]['players'][name]['deck'][card]["purchaseCount"] - decks[turn]['players'][name]['deck'][card]["scrapCount"]
        })
    })
    return (
        <div className="flex flex-col">
            <div className="flex flex-row items-center bg-scifi3" onClick={(e) => { setSrScreen(0) }}>
                <div className="relative w-10 h-10 m-2">
                    <ArrowLeftIcon
                        className="absolute text-white inset-x-0 inset-y-0"
                        aria-hidden="true"
                    />
                </div>
                <p className="p-2 text-white  text-xl font-medium">
                    Back
                </p>
            </div>
            <div className="flex flex-col bg-scifi1">
                <div className="flex flex-row justify-around">
                    <div className="flex flex-col justify-center items-center">
                        <div className="flex flex-col justify-center text-center">
                            <p className="sm:p-2 text-2xl text-scifi5 font-bold whitespace-nowrap">{name}</p>
                        </div>
                        <div className="">
                            <FinalAuthority authority={authority}></FinalAuthority>
                        </div>
                    </div>
                    <div className="flex flex-col justify-center">
                        <p className="text-lg font-medium">Factions</p>
                        <hr className="border-2 border-scifi5 rounded-full w-3/4 mb-2"></hr>
                        <div className="flex h-32 w-32 md:h-48 md:w-48 lg:h-36 lg:w-36 xl:h-40 xl:w-40 2xl:w-48 2xl:h-48">
                            <FactionPie factions={factions}></FactionPie>
                        </div>
                    </div>
                </div>
                <div className="p-2 mx-4">
                    <Slider
                        defaultValue={turn}
                        className="text-scifi4"
                        valueLabelDisplay="auto"
                        valueLabelFormat={(value, index) => {return `turn ${value}`}}
                        step={1}
                        marks
                        min={0}
                        max={decks.length - 1}
                        onChange={(event, value) => {
                            setTurn(value)
                        }}
                    />
                </div>
            </div>
            <DeckDetailV2 deck={decks[turn]['players'][name]['deck']}>
            </DeckDetailV2>
        </div>
    )
}

export default PlayerDetail