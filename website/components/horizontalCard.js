import { useState } from 'react'
import SRCard from './SRCard.js'
import Image from 'next/image'

function HorizontalCard({ cardName, category }) {
    let [isOpen, setIsOpen] = useState(false)
    let filename = "/images/" + category + "/" + cardName.toLowerCase() + ".jpg"
    return (
        <div className="group relative">
            <div>
                <div onClick={() => setIsOpen(true)} className="relative w-16 h-11 sm:w-28 sm:h-20 bg-white hover:ring ring-scifi2">
                    <Image
                        src={filename}
                        quality={100}
                        fill={true}
                        object-fit="scale-down"
                    />
                </div>
                <SRCard type="base" filename={filename} isOpen={isOpen} setIsOpen={setIsOpen}></SRCard>
            </div>
        </div>
    )
}

export default HorizontalCard