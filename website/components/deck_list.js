import styles from './form.module.css'

export default function DeckList({deckData, player}) {
    return (
        <div className="text-lg w-screen md:w-2/5 lg:w-2/5">
            <h1>{player}</h1>
            <div className="text-gray-900 bg-white rounded-lg border border-gray-200 overflow-auto h-80">
                {deckData &&
                    <div className="flex flex-col">
                        {deckData.map((card)=>{
                            return Object.keys(card).map((cardName,i)=>{
                                return (
                                <button key={i} type="button" className="py-2 px-4 text-left text-sm border-b border-gray-200 cursor-pointer hover:bg-gray-100 hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-700 focus:text-blue-700">
                                    {cardName} {card[cardName]}x
                                </button>
                                )
                            })
                        })}
                    </div>    
                }
        </div>
        </div>
    )
  }