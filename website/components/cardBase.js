import Base from '../public/svg/base_station.svg'
import StarEmpire from '../public/svg/star_empire.svg'
import Blob from '../public/svg/blob.svg'
import TradeFederation from '../public/svg/trade_federation.svg'
import MachineCult from '../public/svg/machine_cult.svg'

function CardBase({card}) {
    let factionIcon = function(card){
        if(card['faction'][0] == "Blob"){
            return <Blob className="bg-blob border-2 border-black rounded-full m-1 p-0.5 w-7 h-7"/>
        }else if(card['faction'][0] == "Trade Federation"){
            return <TradeFederation className="bg-tradefederation border-2 border-black rounded-full m-1 p-0.5 w-7 h-7"/>
        }else if(card['faction'][0] == "Star Empire"){
            return <StarEmpire className="bg-starempire border-2 border-black rounded-full m-1 p-0.5 w-7 h-7"/>
        }else if(card['faction'][0] == "Machine Cult"){
            return <MachineCult className="bg-machinecult border-2 border-black rounded-full m-1 p-0.5 w-7 h-7"/>
        }
    }
    return (
        <div className="relative flex flex-col w-32 h-24 bg-slate-300 m-2 border-2 border-black border-double rounded-sm bg-gradient-to-t from-scifi2 to-scifi3 hover:ring ring-scifi3">
            <p className="z-10 bg-white/70 text-md text-center rounded-t-sm leading-snug">{card['name']}</p>
            <div className="absolute inset-0 flex items-center justify-center">
                <Base/>
            </div>
            <div className="absolute inset-0 flex items-end justify-center">
                {
                    factionIcon(card)
                }
            </div>
        </div>
    )
  }
  
  export default CardBase