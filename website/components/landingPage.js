import Image from 'next/image'
import InputLog from './form.js'

export default function LandingPage(){
    return (
        <div className="flex w-full h-full p-4">
        <div className="flex flex-col h-full w-1/2 gap-4 m-4 p-4">
            <div className="bg-white/90 p-4 m-2 w-full rounded-lg drop-shadow-scifi2">
                <p className="text-4xl font-light text-scifi5 text-center">
                    Statistics for all your Star Realms games in just 3 steps
                </p>
            </div>
            <div className="bg-white/90 rounded-lg flex flex-col w-full h-full grow gap-1 p-4 m-2 drop-shadow-scifi2">
                <div className="flex grow items-center justify-center">
                    <div>
                        <p className="text-xl font-medium text-scifi5 m-2 p-2">1.</p>
                    </div>
                    <div className="relative w-1/2 h-full m-2 p-2">
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
                    <div className="relative w-1/2 h-full m-2 p-2">
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
                    <div className="relative w-1/2 h-full m-2 p-2">
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
        <div className="flex flex-col h-full w-1/2 gap-4 m-4 p-4">
            <div className="bg-white/90 rounded-lg p-4 m-2 w-full drop-shadow-scifi2">
                <p className="text-4xl font-light text-scifi5 text-center">
                    Add your game here 👇
                </p>
            </div>
            <div className="bg-white/90 flex rounded-lg flex-col w-full h-full grow gap-1 p-4 m-2 drop-shadow-scifi2">
                <InputLog></InputLog>
            </div>
        </div>
        </div>
    )
}