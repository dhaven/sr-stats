import Image from 'next/image'
import SRLogInput from './SRLogInput.js'
import AddGameModal from './dialogs/addGameModal.js'
import { useState } from 'react'
import { QuestionMarkCircleIcon } from '@heroicons/react/24/outline'
import HelperModal from './dialogs/helperModal.js'
import RecentGameItem from './recentGameItem.js'
import card_list from '../lib/card_data/cards.js'
import HorizontalCard from './horizontalCard.js'
import VerticalCard from './verticalCard.js'
import StarEmpire from '../public/svg/star_empire.svg'
import Blob from '../public/svg/blob.svg'
import TradeFederation from '../public/svg/trade_federation.svg'
import MachineCult from '../public/svg/machine_cult.svg'

export default function LandingPage({ recentGames, popularCards, tips }) {
    let [isAddGameOpen, setAddGameIsOpen] = useState(false)
    let [isHelperOpen, setHelperIsOpen] = useState(false)
    function openAddGameModal() {
        setAddGameIsOpen(true)
    }
    tips['sortedFactions'] = tips['sortedFactions'].filter(faction => {
        return faction !== 'Unaligned';
    });
    tips['cardCosts'] = tips['cardCosts'].filter(cost => {
        return cost !== 0;
    });
    let getFactionIcon = faction => {
        if(faction == "Blob"){
            return <Blob className="bg-blob border-2 border-black rounded-full m-1 w-7 h-7" />
        }else if (faction == "Trade Federation") {
            return <TradeFederation className="bg-tradefederation border-2 border-black rounded-full m-1 w-7 h-7" />
        } else if (faction == "Star Empire") {
            return <StarEmpire className="bg-starempire border-2 border-black rounded-full m-1 w-7 h-7" />
        } else if (faction == "Machine Cult") {
            return <MachineCult className="bg-machinecult border-2 border-black rounded-full m-1 w-7 h-7" />
        }
    }
    return (
        <div className="flex flex-col items-center w-full h-full m-1 p-1 lg:px-2">
            <div className="flex flex-row flex-wrap m-6 lg:flex-nowrap justify-center md:px-12 md:py-6 items-center">
                <div className="m-6 md:mx-12 md:my-6 md:w-1/2 rounded-lg drop-shadow-scifi5">
                    <p className="md:tracking-widest md:leading-10 font-bold md:text-3xl text-xl text-white text-center md:text-left">
                        With SR stats, enhance your Star Realms experience by unlocking in depth statistics for all your  games.
                    </p>
                </div>
                <div className="flex flex-col w-full bg-white rounded-lg p-4 md:mx-12 md:my-6 md:w-1/2 h-full drop-shadow-scifi5">
                    <div className="flex flex-row gap-2 items-center">
                        <p className="text-xl md:text-3xl text-scifi5 text-left">
                            Add your own game!
                        </p>
                        <QuestionMarkCircleIcon className="w-6 cursor-pointer" onClick={() => { setHelperIsOpen(true) }}></QuestionMarkCircleIcon>
                    </div>
                    <SRLogInput></SRLogInput>
                </div>
            </div>
            <div className="p-4 m-6 md:mx-12 md:my-6 md:w-1/2 bg-white rounded-lg drop-shadow-scifi5">
                <p className="mb-4 text-xl md:mb-4 md:text-3xl text-scifi5 text-left">
                    Strategy tips
                </p>
                <div className="flex flex-col gap-2">
                    <div>
                        Based on <b>{tips['gamesCount']}</b> Games analyzed. The most popular faction is
                        <div className="align-middle inline-flex items-center">
                            {getFactionIcon(tips['sortedFactions'][0])}
                        </div>
                        followed by
                        <div className="align-middle inline-flex items-center">
                            {getFactionIcon(tips['sortedFactions'][1])}
                        </div>
                        , 
                        <div className="align-middle inline-flex items-center">
                            {getFactionIcon(tips['sortedFactions'][2])}
                        </div> 
                        and 
                        <div className="align-middle inline-flex items-center">
                            {getFactionIcon(tips['sortedFactions'][3])}
                        </div>.
                    </div>
                    <div>
                        On average a winning deck will contain <b>{tips['shipCount'] + tips['baseCount']}</b> cards. <b>{tips['shipCount']}</b> ships and <b>{tips['baseCount']}</b> bases.
                    </div>
                    <div>
                        When deciding which card to purchase, players favor cards that cost <b>{tips['cardCosts'][0]}</b> coins or <b>{tips['cardCosts'][1]}</b> coins. 
                        Cards that cost <b>{tips['cardCosts'][2]}</b> or <b>{tips['cardCosts'][3]}</b> coins are purchased less often.
                    </div>
                </div>
            </div>
            <div className="flex flex-row w-full m-6 md:px-12 flex-wrap lg:flex-nowrap gap-4">
                <div className="p-4 mx-6 md:mx-12 md:my-6 w-full bg-white rounded-lg drop-shadow-scifi5">
                    <p className="mb-4 text-xl md:mb-4 md:text-3xl text-scifi5 text-left">
                        Recent games
                    </p>
                    <div className="flex flex-col divide-y-2">
                        {
                            recentGames.map((value, index) => {
                                return (
                                    <RecentGameItem key={index} gameInfo={value}></RecentGameItem>
                                )
                            })
                        }
                    </div>
                </div>
                <div className="p-4 mx-6 md:mx-12 md:my-6 w-full bg-white rounded-lg drop-shadow-scifi5">
                    <p className="mb-4 text-xl md:text-3xl text-scifi5 text-left">
                        Popular cards
                    </p>
                    <div className="flex flex-row justify-between">
                        {
                            Object.keys(popularCards).map((phase, index) => {
                                return (
                                    <div key={index} className="flex flex-col items-center border-2 border-scifi3 rounded-md shadow-md">
                                        <p className="p-1 md:p-2 text-lg m-1 md:m-2">{phase == "earlyGame" ? "Early Game" : phase == "midGame" ? "Mid Game" : "Late Game"}</p>
                                        <div className="flex flex-col items-center gap-2 m-2">
                                            {
                                                popularCards[phase].map((card, index) => {
                                                    return Object.keys(card).map((name, index) => {
                                                        return (
                                                            card_list[name]['type'] == 'ship' ?
                                                                <VerticalCard key={index} cardName={name} category={card_list[name]['metadata']['extension']}></VerticalCard> :
                                                                <HorizontalCard key={index} cardName={name} category={card_list[name]['metadata']['extension']}></HorizontalCard>
                                                        )
                                                    })
                                                })
                                            }
                                        </div>
                                    </div>

                                )
                            })
                        }
                    </div>
                </div>
            </div>
            {!isAddGameOpen &&
                <div className="md:hidden">
                    <div className="z-20 fixed bottom-0 right-0">
                        <div className="flex justify-end">
                            <button type="button" onClick={openAddGameModal} className="m-3 bg-scifi3 border border-scifi4 ring-scifi-2 drop-shadow-md hover:ring font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center">
                                <svg className="w-8 h-8" fill="none" stroke="white" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path></svg>
                            </button>
                        </div>
                    </div>
                </div>
            }
            <AddGameModal isOpen={isAddGameOpen} setIsOpen={setAddGameIsOpen}></AddGameModal>
            <HelperModal isOpen={isHelperOpen} setIsOpen={setHelperIsOpen}></HelperModal>
        </div >
    )
}