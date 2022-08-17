import SRLogo from '../public/svg/star_realms_logo.svg'
import { useState } from 'react'
import SRCard from './SRCard.js'

function EventCard({mission}) {
    let [isOpen, setIsOpen] = useState(false)
    let filename = "/images/events/" + mission + ".jpg"
    return (
        <>
            <div onClick={() => setIsOpen(true)} className="relative w-16 h-24 bg-slate-100">
                <div className="absolute top-0 left-0">
                    <SRLogo className="fill-machinecult border-2 border-black w-16 h-24"></SRLogo>
                </div>
                <div className="flex h-full flex-col justify-center">
                    <p className="z-10 font-bold bg-white/70 text-sm text-center m-2">Event</p>
                </div>
            </div>
            <SRCard filename={filename} isOpen={isOpen} setIsOpen={setIsOpen}></SRCard>
        </>
    )
  }
  
  export default EventCard