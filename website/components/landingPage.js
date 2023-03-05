import Image from 'next/image'
import SRLogInput from './SRLogInput.js'
import AddGameModal from './dialogs/addGameModal.js'
import { useState } from 'react'
import step1 from '../public/images/1.png'
import step2 from '../public/images/2.png'
import step3 from '../public/images/3.png'
import discord_img from '../public/images/discord.png'

export default function LandingPage() {
    let [isAddGameOpen, setAddGameIsOpen] = useState(false)
    function openAddGameModal() {
        setAddGameIsOpen(true)
    }
    return (
        <div className="flex w-full h-full m-1 p-1 lg:px-2">
            <div className="flex flex-col h-full w-full gap-4 p-2">
                <div className="bg-white lg:p-4 p-2 w-full rounded-lg drop-shadow-scifi5">
                    <p className="text-2xl md:text-4xl font-light text-scifi5 text-center">
                        Statistics for all your Star Realms games in just 3 steps
                    </p>
                </div>
                <div className="bg-white rounded-lg flex flex-col w-full h-full grow gap-4 lg:p-4 p-2 drop-shadow-scifi5">
                    <div className="flex grow items-center justify-center">
                        <div>
                            <p className="text-xl font-medium text-scifi5 m-2 p-2">1.</p>
                        </div>
                        <div className="relative w-full lg:w-1/2 h-full m-2 p-2">
                            <Image
                                src={step1}
                                alt="Step 1"
                            />
                        </div>
                    </div>
                    <div className="flex grow items-center justify-center">
                        <div>
                            <p className="text-xl font-medium text-scifi5 m-2 p-2">2.</p>
                        </div>
                        <div className="relative w-full lg:w-1/2 h-full m-2 p-2">
                            <Image
                                src={step2}
                                alt="Step 2"
                            />
                        </div>
                    </div>
                    <div className="flex grow items-center justify-center">
                        <div>
                            <p className="text-xl font-medium text-scifi5 m-2 p-2">3.</p>
                        </div>
                        <div className="relative w-full lg:w-1/2 h-full m-2 p-2">
                            <Image
                                src={step3}
                                alt="Step 3"
                            />
                        </div>
                    </div>
                </div>
                <div className="flex md:hidden">
                    <a href="https://discord.gg/q4kqH775FA" target="_blank">
                        <div className="flex bg-white rounded-lg py-2 px-1 border-black border">
                            <div className="flex items-center mx-2">
                                <Image
                                    src={discord_img}
                                    height="24"
                                    width="24"
                                />
                            </div>
                            <p>Join the community! </p>
                        </div>
                    </a>
                </div>
            </div>
            <div className="hidden md:flex md:flex-col w-1/2 gap-4 p-2">
                <div className="bg-white rounded-lg lg:p-4 w-full drop-shadow-scifi5">
                    <p className="text-4xl font-light text-scifi5 text-center">
                        Add your game here 👇
                    </p>
                </div>
                <div className="bg-white flex rounded-lg flex-col w-full h-full grow gap-1 drop-shadow-scifi5">
                    <SRLogInput></SRLogInput>
                </div>
            </div>
            {!isAddGameOpen &&
                <div className="md:hidden">
                    <div className="z-20 fixed bottom-0 left-0 right-0">
                        <div className="flex justify-end">
                            <button type="button" onClick={openAddGameModal} className="m-3 bg-scifi3 border border-scifi4 ring-scifi-2 drop-shadow-md hover:ring font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center">
                                <svg className="w-8 h-8" fill="none" stroke="white" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path></svg>
                            </button>
                        </div>
                    </div>
                </div>
            }
            <AddGameModal isOpen={isAddGameOpen} setIsOpen={setAddGameIsOpen}></AddGameModal>
        </div >
    )
}