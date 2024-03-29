import SRLogo from '../public/svg/star_realms_logo.svg'
import { useState } from 'react'
import SRCard from './SRCard.js'
import { Popup } from 'semantic-ui-react'

function MissionCard({ mission }) {
    let [isOpen, setIsOpen] = useState(false)
    let filename = "/images/missions/" + mission.toLowerCase() + ".jpg"
    return (
        <Popup
            content={mission}
            className="bg-white p-2 rounded-md m-2 border-solid border-2 border-scifi4"
            position='top center'
            trigger={
                <div>
                    <div onClick={() => setIsOpen(true)} className="relative w-11 h-16 sm:w-16 sm:h-24 bg-white hover:ring ring-scifi2">
                        <div className="absolute top-0 left-0">
                            <SRLogo className="fill-machinecult border-2 border-scifi4 w-12 h-16 sm:w-16 sm:h-24"></SRLogo>
                        </div>
                        <div className="flex h-full flex-col justify-center">
                            <p className="z-10 font-bold bg-white/70 text-sm text-center">mission</p>
                        </div>
                    </div>
                    <SRCard type="ship" filename={filename} isOpen={isOpen} setIsOpen={setIsOpen}></SRCard>
                </div>
            }
        />
    )
}

export default MissionCard