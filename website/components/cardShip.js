import Rocket from '../public/svg/rocket.svg'
import StarEmpire from '../public/svg/star_empire.svg'
import Blob from '../public/svg/blob.svg'
import TradeFederation from '../public/svg/trade_federation.svg'
import MachineCult from '../public/svg/machine_cult.svg'
import SRCard from './dialogs/SRCard.js'
import { useState } from 'react'

function CardShip({ file, card, count, isScrapped }) {
    let [isOpen, setIsOpen] = useState(false)
    let filename = "/images/" + card['metadata']['extension'] + "/" + file + ".jpg"
    return (
        <div>
            <div onClick={() => setIsOpen(true)} className={`${isScrapped ? 'bg-red-600/70 hover:bg-red-700/70' : 'hover:bg-slate-300/70'} relative group flex flex-col w-16 h-24 sm:w-24 sm:h-32 m-2 border-2 border-scifi4 border-double hover:ring ring-scifi2`}>
                <div className="absolute inset-0 flex items-center justify-center">
                    <Rocket />
                </div>
                <div className="absolute inset-0 flex items-end justify-center">
                    {
                        card['faction'].map((faction,index) =>{
                            if(faction == "Blob"){
                                return <Blob key={index} className="bg-blob border-2 border-black rounded-full -mx-2 m-1 p-0.5 w-7 h-7" />
                            }else if (faction == "Trade Federation") {
                                return <TradeFederation key={index} className="bg-tradefederation border-2 border-black rounded-full -mx-2 m-1 p-0.5 w-7 h-7" />
                            } else if (faction == "Star Empire") {
                                return <StarEmpire key={index} className="bg-starempire border-2 border-black rounded-full -mx-2 m-1 p-0.5 w-7 h-7" />
                            } else if (faction == "Machine Cult") {
                                return <MachineCult key={index} className="bg-machinecult border-2 border-black rounded-full -mx-2 m-1 p-0.5 w-7 h-7" />
                            }
                        })
                    }
                </div>
                <p className="absolute inset-x-0 top-0 bg-white/70 text-md text-center rounded-t-sm leading-snug">{card['name']}</p>
            </div>
            <SRCard type="ship" filename={filename} isOpen={isOpen} setIsOpen={setIsOpen}></SRCard>
        </div>
    )
}

export default CardShip