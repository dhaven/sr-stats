import { ChevronDownIcon, CheckIcon } from '@heroicons/react/20/solid'
import { Dialog, Transition, Listbox, Switch } from '@headlessui/react'
import { Fragment, useState } from 'react'

function FiltersMobile({ isOpen, setIsOpen, selectedFactions, selectedSorting, hideScrappedCards, setSelectedFactions, setSelectedSorting, setHideScrappedCards }) {
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
    function getNameList(selectedItems) {
        return selectedItems.map(item => {
            return item.name
        })
    }
    const [selectedFactionsTemp, setSelectedFactionsTemp] = useState(selectedFactions)
    const [selectedSortingTemp, setSelectedSortingTemp] = useState(selectedSorting)
    const [hideScrappedCardsTemp, setHideScrappedCardsTemp] = useState(hideScrappedCards)
    function updateFilters(){
        //update parent filters with value of tmp filters
        setSelectedFactions(selectedFactionsTemp)
        setSelectedSorting(selectedSortingTemp)
        setHideScrappedCards(hideScrappedCardsTemp)
    }
    function clearFilters(){
        setSelectedFactionsTemp(selectedFactions)
        setSelectedSortingTemp(selectedSorting)
        setHideScrappedCardsTemp(hideScrappedCards)
    }
    return (
        <>
            <Transition appear show={isOpen} as={Fragment}>
                <Dialog as="div" className="relative z-20" onClose={() => { setIsOpen(false) }}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-black bg-opacity-25" />
                    </Transition.Child>

                    <div className="fixed inset-0 overflow-y-auto">
                        <div className="flex h-full items-center justify-center text-center">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >
                                <Dialog.Panel className="w-full h-full max-h-screen transform overflow-hidden bg-white text-left align-middle shadow-xl transition-all">
                                    <div className="flex flex-row justify-between px-2 shadow-lg">
                                        <div className="flex flex-row items-center">
                                            <p className="text-xl">Filter and sort deck</p>
                                        </div>
                                        <div className="my-2">
                                            <button
                                                type="button"
                                                className="font-medium text-sm text-bold px-2 py-2 border drop-shadow-md border-scifi4 ring-scifi-2 hover:ring rounded-full"
                                                onClick={() => { setIsOpen(false); clearFilters() }}
                                            >
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                                </svg>
                                            </button>
                                        </div>
                                    </div>
                                    <div className="flex flex-col divide-y-2">
                                        <div className="flex flex-col m-2">
                                            <p className="text-medium font-medium text-scifi5">Select factions</p>
                                            <Listbox value={selectedFactionsTemp} onChange={setSelectedFactionsTemp} by={(a, b) => { return a.id == b.id }} multiple>
                                                <Listbox.Options className="w-full text-base focus:outline-none px-4" static>
                                                    {factions.map((faction) => (
                                                        <Listbox.Option
                                                            key={faction.id}
                                                            className={({ active }) =>
                                                                `cursor-pointer select-none py-2 text-gray-900'
                                                            }`
                                                            }
                                                            value={faction}
                                                        >
                                                            {({ selected }) => (
                                                                <div className="flex flex-row justify-between">
                                                                    <p className='font-normal'>
                                                                        {faction.name}
                                                                    </p>
                                                                    {getNameList(selectedFactionsTemp).includes(faction.name) ? (
                                                                        <div className="flex items-center text-scifi3">
                                                                            <CheckIcon className="h-5 w-5" aria-hidden="true" />
                                                                        </div>
                                                                    ) : null}
                                                                </div>
                                                            )}
                                                        </Listbox.Option>
                                                    ))}
                                                </Listbox.Options>
                                            </Listbox>
                                        </div>
                                        <div className="flex flex-col m-2">
                                            <p className="text-medium py-2 font-medium text-scifi5">Order cards in deck</p>
                                            <Listbox value={selectedSortingTemp} onChange={setSelectedSortingTemp} by={(a, b) => { return a.id == b.id }}>
                                                <Listbox.Options className="w-full text-base focus:outline-none px-4" static>
                                                    {sortingOrder.map((sort) => (
                                                        <Listbox.Option
                                                            key={sort.id}
                                                            className={({ active }) =>
                                                                `cursor-pointer select-none py-2 text-gray-900'
                                                            }`
                                                            }
                                                            value={sort}
                                                        >
                                                            {({ selected }) => (
                                                                <div className="flex flex-row justify-between">
                                                                    <p className='font-normal'>
                                                                        {sort.name}
                                                                    </p>
                                                                    {selectedSortingTemp.name == sort.name ? (
                                                                        <span className="flex items-center text-scifi3">
                                                                            <CheckIcon className="h-5 w-5" aria-hidden="true" />
                                                                        </span>
                                                                    ) : null}
                                                                </div>
                                                            )}
                                                        </Listbox.Option>
                                                    ))}
                                                </Listbox.Options>
                                            </Listbox>
                                        </div>
                                        <div className="flex flex-row justify-between m-2 items-center">
                                            <p className="text-medium py-2 font-medium text-scifi5">Hide scrapped cards</p>
                                            <Switch
                                                checked={hideScrappedCardsTemp}
                                                onChange={setHideScrappedCardsTemp}
                                                className={`${hideScrappedCardsTemp ? 'bg-green-700' : 'bg-red-700'}
          relative inline-flex h-4 w-8 m-1 shrink-0 cursor-pointer rounded-full transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75`}
                                            >
                                                <span className="sr-only">Use setting</span>
                                                <span
                                                    aria-hidden="true"
                                                    className={`${hideScrappedCardsTemp ? 'translate-x-4' : 'translate-x-0'}
            pointer-events-none inline-block h-4 w-4 transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out border border-2 border-scifi4`}
                                                />
                                            </Switch>
                                        </div>
                                    </div>

                                    <div className="absolute inset-x-0 bottom-0 w-full p-2">
                                        <button
                                            type="button"
                                            className="inline-flex w-full justify-center rounded-md text-white bg-scifi4 px-4 py-2 text-sm font-medium"
                                            onClick={() => { updateFilters(); setIsOpen(false) }}
                                        >
                                            Apply
                                        </button>
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </>
    )
}

export default FiltersMobile