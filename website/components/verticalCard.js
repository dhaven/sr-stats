import { useState } from 'react'
import SRCard from './dialogs/SRCard.js'
import Image from 'next/image'

function VerticalCard({ cardName, category }) {
    let [isOpen, setIsOpen] = useState(false)
    let filename = "/images/" + category + "/" + cardName.toLowerCase() + ".jpg"
    return (
        <div className="group relative">
            <div>
                <div onClick={(e) => {e.stopPropagation();setIsOpen(true)}} className="relative w-11 h-16 sm:w-20 sm:h-28 bg-white hover:ring ring-scifi2">
                    <Image
                        src={filename}
                        quality={100}
                        fill={true}
                        object-fit="scale-down"
                    />
                </div>
                <SRCard type="ship" filename={filename} isOpen={isOpen} setIsOpen={setIsOpen}></SRCard>
            </div>
        </div>
    )
}

export default VerticalCard