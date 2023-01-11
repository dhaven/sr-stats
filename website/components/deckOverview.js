import 'chart.js/auto';
import DeckDetail from './deckDetail'
import Rocket from '../public/svg/rocket.svg'
import Base from '../public/svg/base_new.svg'
import CardStack from '../public/svg/card_stack.svg'
import card_list from '../lib/card_data/cards.js'
import { Fragment, useState } from 'react'
import { Listbox, Transition, Switch } from '@headlessui/react'
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid'

function DeckOverview({ isWinner, deck }) {
    const factions = [
        { id: 1, name: 'Trade Federation' },
        { id: 2, name: 'Blob' },
        { id: 3, name: 'Star Empire' },
        { id: 4, name: 'Machine Cult' },
        { id: 5, name: 'Unaligned' },
    ]
    const sortingOrder = [
        { id: 1, name: "Purchase order (first -> last)" },
        { id: 2, name: "Cost (low -> high)" },
        { id: 3, name: "Alphabetical (A -> Z)" }
    ]
    const [selectedFactions, setSelectedFactions] = useState([factions[0], factions[1], factions[2], factions[3], factions[4]])
    const [selectedSorting, setSelectedSorting] = useState(sortingOrder[0])
    const [hideScrappedCards, setHideScrappedCards] = useState(true)
    let cardCount = 0
    let shipCount = 0
    let baseCount = 0
    Object.keys(deck).forEach(card => {
        cardCount += deck[card]["purchaseCount"] - deck[card]["scrapCount"]
        if (card_list[card]['type'] == 'ship') {
            shipCount += deck[card]["purchaseCount"] - deck[card]["scrapCount"]
        } else {
            baseCount += deck[card]["purchaseCount"] - deck[card]["scrapCount"]
        }
    })
    function getNameList(selectedItems) {
        return selectedItems.map(item => {
            return item.name
        })
    }
    return (
        <div className={`${isWinner ? 'md:border-winner' : 'md:border-loser'} md:border-8 flex flex-col bg-scifi1 sm:rounded-md w-full`}>
            <div className="flex flex-row justify-around gap-2">
                <div className="flex flex-col sm:flex-row m-4 gap-2 sm:gap-6 items-center">
                    <div className="flex flex-row gap-1 items-center">
                        <Rocket className="w-8 h-8 sm:w-10 sm:h-10" />
                        /
                        <Base className="w-14 h-14 sm:w-16 sm:h-16" />
                    </div>
                    <div className="text-lg sm:text-xl">{shipCount} / {baseCount}</div>
                </div>
                <div className="flex flex-col sm:flex-row m-4 gap-2 sm:gap-4 items-center">
                    <CardStack className="w-8 h-8 sm:w-10 sm:h-10" />
                    <div className="text-lg sm:text-xl">{cardCount}</div>
                </div>
            </div>
            <div className="flex flex-row justify-center">
                <div className="flex flex-row flex-wrap bg-scifi4 rounded-lg">
                    <Listbox value={selectedFactions} onChange={setSelectedFactions} by={(a, b) => { return a.id == b.id }} multiple>
                        <div className="relative p-2">
                            <Listbox.Button className="relative w-full cursor-pointer rounded-lg bg-white p-1 pl-2 pr-8 sm:py-2 sm:pl-3 sm:pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
                                <span className="block truncate">Select factions</span>
                                <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                                    <ChevronUpDownIcon
                                        className="h-5 w-5 text-gray-400"
                                        aria-hidden="true"
                                    />
                                </span>
                            </Listbox.Button>
                            <Transition
                                as={Fragment}
                                leave="transition ease-in duration-100"
                                leaveFrom="opacity-100"
                                leaveTo="opacity-0"
                            >
                                <Listbox.Options className="z-20 w-56 absolute mt-1 max-h-60 overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                                    {factions.map((faction) => (
                                        <Listbox.Option
                                            key={faction.id}
                                            className={({ active }) =>
                                                `z-30 relative cursor-pointer select-none py-2 pl-10 pr-4 ${active ? 'bg-scifi1 text-scifi4' : ' text-gray-900'
                                                }`
                                            }
                                            value={faction}
                                        >
                                            {({ selected }) => (
                                                <>
                                                    <span
                                                        className={`block truncate ${getNameList(selectedFactions).includes(faction.name) ? 'font-medium' : 'font-normal'
                                                            }`}
                                                    >
                                                        {faction.name}
                                                    </span>
                                                    {getNameList(selectedFactions).includes(faction.name) ? (
                                                        <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-scifi3">
                                                            <CheckIcon className="h-5 w-5" aria-hidden="true" />
                                                        </span>
                                                    ) : null}
                                                </>
                                            )}
                                        </Listbox.Option>
                                    ))}
                                </Listbox.Options>
                            </Transition>
                        </div>
                    </Listbox>
                    <Listbox value={selectedSorting} onChange={setSelectedSorting} by={(a, b) => { return a.id == b.id }}>
                        <div className="relative p-2">
                            <Listbox.Button className="relative w-full cursor-pointer rounded-lg bg-white p-1 pl-2 pr-8 sm:py-2 sm:pl-3 sm:pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
                                <span className="block truncate">Sort</span>
                                <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                                    <ChevronUpDownIcon
                                        className="h-5 w-5 text-gray-400"
                                        aria-hidden="true"
                                    />
                                </span>
                            </Listbox.Button>
                            <Transition
                                as={Fragment}
                                leave="transition ease-in duration-100"
                                leaveFrom="opacity-100"
                                leaveTo="opacity-0"
                            >
                                <Listbox.Options className="z-20 absolute mt-1 max-h-60 overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                                    {sortingOrder.map((sort) => (
                                        <Listbox.Option
                                            key={sort.id}
                                            className={({ active }) =>
                                                `z-30 relative cursor-pointer select-none py-2 pl-10 pr-4 ${active ? 'bg-scifi1 text-scifi4' : ' text-gray-900'
                                                }`
                                            }
                                            value={sort}
                                        >
                                            {({ selected }) => (
                                                <>
                                                    <span
                                                        className={`block truncate ${selectedSorting.name == sort.name ? 'font-medium' : 'font-normal'
                                                            }`}
                                                    >
                                                        {sort.name}
                                                    </span>
                                                    {selectedSorting.name == sort.name ? (
                                                        <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-scifi3">
                                                            <CheckIcon className="h-5 w-5" aria-hidden="true" />
                                                        </span>
                                                    ) : null}
                                                </>
                                            )}
                                        </Listbox.Option>
                                    ))}
                                </Listbox.Options>
                            </Transition>
                        </div>
                    </Listbox>
                    <div className="flex bg-white items-center rounded-lg m-2">
                        <div className="p-1">
                            Hide scrapped cards
                        </div>
                        <Switch
                            checked={hideScrappedCards}
                            onChange={setHideScrappedCards}
                            className={`${hideScrappedCards ? 'bg-green-700' : 'bg-red-700'}
          relative inline-flex h-4 w-8 m-1 shrink-0 cursor-pointer rounded-full transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75`}
                        >
                            <span className="sr-only">Use setting</span>
                            <span
                                aria-hidden="true"
                                className={`${hideScrappedCards ? 'translate-x-4' : 'translate-x-0'}
            pointer-events-none inline-block h-4 w-4 transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out border border-2 border-scifi4`}
                            />
                        </Switch>
                    </div>
                </div>
            </div>
            <DeckDetail className="z-10" deck={deck} filters={getNameList(selectedFactions)} sorting={selectedSorting} hideScrappedCards={hideScrappedCards}></DeckDetail>
        </div>
    )
}

export default DeckOverview