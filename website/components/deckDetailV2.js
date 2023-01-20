import { useState } from 'react'
import card_list from '../lib/card_data/cards.js'
import CardList from './cardList'
import FiltersMenu from './filtersMenu.js'

function DeckDetailV2({ deck }) {
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
    const [deckType, setDeckType] = useState("deck");
    let cardCount = 0
    let shipCount = 0
    let baseCount = 0
    Object.keys(deck).forEach(card => {
        cardCount += deck[card]["purchaseCount"] - deck[card]["scrapCount"]
        if (card_list[card]['type'] == 'ship') {
            shipCount += deck[card]["purchaseCount"] - deck[card]["scrapCount"]
        } else if (card_list[card]['type'] == 'base') {
            baseCount += deck[card]["purchaseCount"] - deck[card]["scrapCount"]
        }
    })
    function getNameList(selectedItems) {
        return selectedItems.map(item => {
            return item.name
        })
    }
    return (
        <div>
            <div>
                <button type="button"
                    onClick={(e) => { setDeckType("deck") }}
                    className={`${deckType == "deck" ? 'bg-scifi4 text-white pt-4' : 'bg-white text-scifi5 transition-all duration-200'} border border-scifi4 ml-2 font-medium rounded-tl-md rounded-tr-md text-sm px-4 py-2 text-center inline-flex items-center`}>
                    Deck
                </button>
                <button type="button"
                    onClick={(e) => { setDeckType("heroes") }}
                    className={`${deckType == "heroes" ? 'bg-scifi4 text-white pt-4' : 'bg-white text-scifi5 transition-all duration-200'} border border-scifi4 ml-2 font-medium rounded-tl-md rounded-tr-md text-sm px-4 py-2 text-center inline-flex items-center`}>
                    Heroes
                </button>
                <button type="button"
                    onClick={(e) => { setDeckType("tech") }}
                    className={`${deckType == "tech" ? 'bg-scifi4 text-white pt-4' : 'bg-white text-scifi5 transition-all duration-200'} border border-scifi4 ml-2 font-medium rounded-tl-md rounded-tr-md text-sm px-4 py-2 text-center inline-flex items-center`}>
                    Tech
                </button>
            </div>
            <div className="flex flex-row bg-scifi4 rounded-tr-lg mx-2 border border-2 border-black">
                <FiltersMenu
                    deckType={deckType}
                    selectedFactions={selectedFactions}
                    selectedSorting={selectedSorting}
                    setSelectedFactions={setSelectedFactions}
                    setSelectedSorting={setSelectedSorting}
                    hideScrappedCards={hideScrappedCards}
                    setHideScrappedCards={setHideScrappedCards}
                >
                </FiltersMenu>
            </div>
            <CardList className="z-10" deck={deck} deckType={deckType} filters={getNameList(selectedFactions)} sorting={selectedSorting} hideScrappedCards={hideScrappedCards}></CardList>
        </div>
    )
}

export default DeckDetailV2