import { XMarkIcon } from '@heroicons/react/24/outline'
import { signOut, useSession } from "next-auth/react"
import Image from 'next/image'
import Link from 'next/link'
import { UserCircleIcon, TrophyIcon, WrenchScrewdriverIcon, ArrowRightOnRectangleIcon } from '@heroicons/react/24/outline'

const Drawer = ({ setIsOpen, loginDialog }) => {
    const { data: session, status } = useSession()
    return (
        <div className="z-20 bg-scifi1 border-r-2 border-scifi5 h-full flex flex-col">
            <div className="flex flex-row justify-end m-4">
                <XMarkIcon
                    className="h-10 w-10 font-medium text-sm text-bold px-2 py-2 border drop-shadow-md border-scifi4 ring-scifi-2 hover:ring rounded-full"
                    aria-hidden="true"
                    onClick={(e) => { setIsOpen(false) }}
                />
            </div>
            {
                !session &&
                <button onClick={() => { setIsOpen(false); loginDialog(true) }} className="m-4 text-scifi5 font-medium bg-white text-sm px-2 sm:px-4 py-2 border border-scifi4 ring-scifi2 drop-shadow-md hover:ring rounded-full" type="button">
                    Sign in
                </button>
            }
            {
                session &&
                <div>
                    <div className="flex flex-col items-center gap-2 mb-4">
                        {session?.user.image ? (
                            <Image
                                alt="profile_picture"
                                src={session.user.image}
                                className="rounded-full mr-1 border-2 border-scifi3"
                                width={64}
                                height={64}
                                style={{
                                    maxWidth: '100%',
                                    height: 'auto',
                                }}
                            />
                        ) : (
                            <UserCircleIcon
                                className="mr-1 h-16 w-16"
                                aria-hidden="true"
                            />
                        )}
                        <p className="text-lg font-medium text-scifi5">
                            {session.user.ign ?? session.user.email}
                        </p>
                    </div>
                    <Link
                        href="/games"
                        className="bg-scifi1 border-t-2 border-scifi5 text-scifi5 font-medium inline-flex group flex w-full justify-center items-center px-2 py-4 text-sm"
                    >
                        <TrophyIcon
                            className="text-scifi3 mr-2 h-5 w-5"
                            aria-hidden="true"
                        />
                        My Games
                    </Link>
                    <Link
                        href="/settings"
                        className="bg-scifi1 border-t-2 border-scifi5 text-scifi5 font-medium inline-flex group flex w-full justify-center items-center px-2 py-4 text-sm"
                    >
                        <WrenchScrewdriverIcon
                            className="text-scifi3 mr-2 h-5 w-5"
                            aria-hidden="true"
                        />
                        Settings
                    </Link>
                    <button
                        onClick={(e) => {
                            e.preventDefault()
                            signOut({ callbackUrl: `${process.env.NEXT_PUBLIC_BASE_URL}` })
                        }}
                        className="bg-scifi1 border-t-2 border-b-2 border-scifi5 text-scifi5 font-medium inline-flex group flex w-full justify-center items-center px-2 py-4 text-sm"
                    >
                        <ArrowRightOnRectangleIcon
                            className="text-scifi3 mr-2 h-5 w-5"
                            aria-hidden="true"
                        />
                        Sign out
                    </button>
                </div>
            }
        </div>
    )
}

export default Drawer