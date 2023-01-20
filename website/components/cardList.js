import CardShip from './cardShip'
import CardBase from './cardBase'
import card_list from '../lib/card_data/cards.js'

function CardList({ deck, deckType, filters, sorting, hideScrappedCards }) {
    function filterDeck(deck, deckType, filters) {
        //Ignore filters if deckType is heroes or tech
        let filteredDeck = {}
        if (deckType == "heroes") {
            for (let card in deck) {
                if (card_list[card]['type'] == "hero") {
                    filteredDeck[card] = deck[card]
                }
            }
        } else if (deckType == "tech") {
            for (let card in deck) {
                if (card_list[card]['type'] == "tech") {
                    filteredDeck[card] = deck[card]
                }
            }
        } else {
            for (let card in deck) {
                if ((card_list[card]['type'] != "hero") && (card_list[card]['type'] != "tech")) {
                    for (let i = 0; i < card_list[card]['faction'].length; i++) {
                        if (filters.includes(card_list[card]['faction'][i])) {
                            filteredDeck[card] = deck[card]
                        }
                    }
                }
            }
        }
        return filteredDeck
    }
    function sortDeck(keyList, sorting) {
        let cardNames = keyList.slice();
        if (sorting["id"] == 1) { //"Purchase order (first -> last)"
            cardNames.sort((a, b) => {
                return deck[a]["purchaseTurn"] - deck[b]["purchaseTurn"]
            })
        } else if (sorting["id"] == 2) { // "Cost (low -> high)"
            cardNames.sort((a, b) => {
                if (card_list[a]["cost"] < card_list[b]["cost"]) {
                    return -1;
                }
                if (card_list[a]["cost"] > card_list[b]["cost"]) {
                    return 1;
                }
                return 0;
            })
        } else if (sorting["id"] == 3) { //"Alphabetical (A -> Z)"
            cardNames.sort((a, b) => {
                if (a < b) {
                    return -1;
                }
                if (a > b) {
                    return 1;
                }
                return 0;
            })
        }
        return cardNames
    }
    return (
        <div className="flex flex-row flex-wrap p-4 justify-items-center bg-white mx-2 mb-2 rounded-bl-lg rounded-br-lg border border-2 border-black">
            {
                sortDeck(Object.keys(filterDeck(deck, deckType, filters)), sorting).map((card, index) => {
                    let count = deck[card]["purchaseCount"] - deck[card]["scrapCount"]
                    if (card == "mobilemarket") { //when this card is scrapped it goes to the discard pile
                        return <CardBase key={index} file={card} card={card_list[card]} count={deck[card]["purchaseCount"]} isScrapped={false}></CardBase>
                    }
                    if (count > 0) {
                        return (
                            card_list[card]['type'] == 'ship' ?
                                <CardShip key={index} file={card} card={card_list[card]} count={count} isScrapped={false}></CardShip>
                                :
                                <CardBase key={index} file={card} card={card_list[card]} count={count} isScrapped={false}></CardBase>
                        )
                    } else if (!hideScrappedCards) {
                        return (
                            card_list[card]['type'] == 'ship' ?
                                <CardShip key={index} file={card} card={card_list[card]} count={count} isScrapped={true}></CardShip>
                                :
                                <CardBase key={index} file={card} card={card_list[card]} count={count} isScrapped={true}></CardBase>
                        )
                    }
                })
            }
        </div>
    )
}

export default CardList