import Image from 'next/image'
import SRLogInput from './SRLogInput.js'

export default function LandingPage(){
    return (
        <div className="flex w-full h-full m-1 p-1 lg:p-4">
        <div className="flex flex-col h-full w-full lg:w-1/2 gap-4 p-2">
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
                            src="/images/1.png" // Route of the image file
                            alt="Step 1"
                            layout="fill"
                            objectFit="contain"
                        />
                    </div>
                </div>
                <div className="flex grow items-center justify-center">
                    <div>
                        <p className="text-xl font-medium text-scifi5 m-2 p-2">2.</p>
                    </div>
                    <div className="relative w-full lg:w-1/2 h-full m-2 p-2">
                        <Image
                            src="/images/2.png" // Route of the image file
                            alt="Step 1"
                            layout="fill"
                            objectFit="contain"
                        />
                    </div>
                </div>
                <div className="flex grow items-center justify-center">
                    <div>
                        <p className="text-xl font-medium text-scifi5 m-2 p-2">3.</p>
                    </div>
                    <div className="relative w-full lg:w-1/2 h-full m-2 p-2">
                        <Image
                            src="/images/3.png" // Route of the image file
                            alt="Step 1"
                            layout="fill"
                            objectFit="contain"
                        />
                    </div>
                </div>
            </div>
        </div>
        <div className="hidden md:flex md:flex-col w-full h-full w-1/2 gap-4 p-2">
            <div className="bg-white rounded-lg lg:p-4 w-full drop-shadow-scifi5">
                <p className="text-4xl font-light text-scifi5 text-center">
                    Add your game here 👇
                </p>
            </div>
            <div className="bg-white flex rounded-lg flex-col w-full h-full grow gap-1 drop-shadow-scifi5">
                <SRLogInput></SRLogInput>
            </div>
        </div>
        </div>
    )
}