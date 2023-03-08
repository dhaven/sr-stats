import { useRouter } from 'next/router'
import Image from 'next/image'
import Link from 'next/link'
import { signOut, useSession } from "next-auth/react"
import AddGameModal from './dialogs/addGameModal.js'
import SRLogin from './dialogs/login.js'
import AddIGN from './dialogs/addIGN.js'
import Drawer from './ui/drawer.js'
import { useState, useEffect, Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import {
    ChevronDownIcon,
    WrenchScrewdriverIcon,
    TrophyIcon,
    ArrowRightOnRectangleIcon,
    UserCircleIcon,
    PlusIcon,
    Bars3Icon,
    XMarkIcon
} from '@heroicons/react/24/outline'

export default function Header() {
    const { data: session, status } = useSession()
    // loading = status === "loading"
    const router = useRouter()
    let [isLoginOpen, setIsLoginOpen] = useState(false)
    let [isAddGameOpen, setAddGameIsOpen] = useState(false)
    let [isAddIGNOpen, setIsAddIGNOpen] = useState(false)
    const [showSidebar, setShowSidebar] = useState(false)
    let isUpdatingUserGames = false
    useEffect(() => {
        //console.log(session)
        if (session && status != "loading" && session.user.ign === undefined) {
            setIsAddIGNOpen(true)
        } else {
            setIsAddIGNOpen(false)
        }
        if (session && status != "loading" && !isUpdatingUserGames) {
            //check for games in local storage.
            isUpdatingUserGames = true
            let games = localStorage.getItem('games')
            if (games != null) {
                console.log("updating user with list of games")
                fetch('/api/add_late_game', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(games),
                })
                    .then(response => response.json())
                    .then(data => {
                        if (data['status'] == 'success') {
                            localStorage.removeItem('games');
                        }
                    })
            }
            isUpdatingUserGames = false
        }
    }, [session, status])
    return (
        <>
            <header className="sticky top-0 z-10 bg-white flex flex-row drop-shadow-md lg:drop-shadow-scifi5 justify-center p-2 md:p-4 gap-1">
                <p onClick={() => { router.push('/') }} className="text-2xl text-scifi5 font-semibold tracking-widest hover:ring ring-scifi-2 rounded-md">
                    <span className="bg-scifi5 text-white mx-2 text-2xl px-1">
                        SR
                    </span>
                    stats
                </p>
                <button onClick={(e) => { setShowSidebar(true) }} className="md:hidden absolute top-0 left-0 m-2">
                    <Bars3Icon
                        className="h-8 w-8"
                        aria-hidden="true"
                    />
                </button>
                <div className={`${showSidebar ? "translate-x-0 " : "-translate-x-full"} z-20 ease-in-out duration-300 absolute top-0 left-0 h-full w-2/3 md:hidden min-h-screen`}>
                    <Drawer setIsOpen={setShowSidebar} loginDialog={setIsLoginOpen}/>
                </div>
                <div className="hidden md:block absolute top-0 right-0 m-3">
                    <div className="flex flex-row gap-2">
                        <button onClick={(e) => { setAddGameIsOpen(true) }} className="inline-flex items-center font-medium bg-scifi3 text-white text-sm text-bold px-2 sm:px-4 py-2 border border-scifi4 ring-scifi2 drop-shadow-md hover:ring rounded-lg" type="button">
                            <PlusIcon
                                className="mr-2 h-5 w-5 border-2 rounded-full border-white"
                                aria-hidden="true"
                            />
                            Add Game
                        </button>
                        {
                            !session &&
                            <button onClick={(e) => { setIsLoginOpen(true) }} className="text-scifi5 font-medium bg-white text-sm px-2 sm:px-4 py-2 border border-scifi4 ring-scifi2 drop-shadow-md hover:ring rounded-lg" type="button">
                                Sign in
                            </button>
                        }
                        {session?.user && (
                            <div className="">
                                <Menu as="div" className="">
                                    <div>
                                        <Menu.Button className="inline-flex items-center text-scifi5 font-medium bg-white text-sm px-2 sm:px-4 py-2 border border-scifi4 ring-scifi2 drop-shadow-md hover:ring rounded-2xl">
                                            {session.user.image ? (
                                                <Image
                                                    alt="profile_picture"
                                                    src={session.user.image}
                                                    className="rounded-full mr-1 border-2 border-scifi3"
                                                    width={32}
                                                    height={32}
                                                    style={{
                                                        maxWidth: '100%',
                                                        height: 'auto',
                                                    }}
                                                />
                                            ) : (
                                                <UserCircleIcon
                                                    className="mr-1 h-7 w-7"
                                                    aria-hidden="true"
                                                />
                                            )}
                                            {session.user.ign ?? session.user.email}
                                            <ChevronDownIcon
                                                className="ml-2 -mr-1 h-5 w-5"
                                                aria-hidden="true"
                                            />
                                        </Menu.Button>
                                    </div>
                                    <Transition
                                        as={Fragment}
                                        enter="transition ease-out duration-100"
                                        enterFrom="transform opacity-0 scale-95"
                                        enterTo="transform opacity-100 scale-100"
                                        leave="transition ease-in duration-75"
                                        leaveFrom="transform opacity-100 scale-100"
                                        leaveTo="transform opacity-0 scale-95"
                                    >
                                        <Menu.Items className="absolute right-0 mt-2 mr-3 w-56 origin-top-right divide-y divide-gray-300 rounded-md bg-white border-scifi4 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                            <div className="px-1 py-1">
                                                <Menu.Item>
                                                    {({ active }) => (
                                                        <Link
                                                            href="/games"
                                                            className={`${active ? 'bg-scifi3 text-white' : 'text-gray-900'
                                                                } inline-flex group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                                                        >
                                                            <TrophyIcon
                                                                className={`${active ? 'text-white' : 'text-scifi3'} mr-2 h-5 w-5`}
                                                                aria-hidden="true"
                                                            />
                                                            My Games
                                                        </Link>
                                                    )}
                                                </Menu.Item>
                                                <Menu.Item>
                                                    {({ active }) => (
                                                        <Link
                                                            href="/settings"
                                                            className={`${active ? 'bg-scifi3 text-white' : 'text-gray-900'
                                                                } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                                                        >
                                                            <WrenchScrewdriverIcon
                                                                className={`${active ? 'text-white' : 'text-scifi3'} mr-2 h-5 w-5`}
                                                                aria-hidden="true"
                                                            />
                                                            Settings
                                                        </Link>
                                                    )}
                                                </Menu.Item>
                                                <div className="px-1 py-1">
                                                    <Menu.Item>
                                                        {({ active }) => (
                                                            <button
                                                                onClick={(e) => {
                                                                    e.preventDefault()
                                                                    signOut({ callbackUrl: `${process.env.NEXT_PUBLIC_BASE_URL}` })
                                                                }}
                                                                className={`${active ? 'bg-scifi3 text-white' : 'text-gray-900'
                                                                    } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                                                            >
                                                                <ArrowRightOnRectangleIcon
                                                                    className={`${active ? 'text-white' : 'text-scifi3'} mr-2 h-5 w-5`}
                                                                    aria-hidden="true"
                                                                />
                                                                Sign out
                                                            </button>
                                                        )}
                                                    </Menu.Item>
                                                </div>
                                            </div>
                                        </Menu.Items>
                                    </Transition>
                                </Menu>
                            </div>
                        )}
                    </div>
                </div>
            </header>
            <AddGameModal isOpen={isAddGameOpen} setIsOpen={setAddGameIsOpen}></AddGameModal>
            <SRLogin isOpen={isLoginOpen} setIsOpen={setIsLoginOpen}></SRLogin>
            <AddIGN isOpen={isAddIGNOpen} setIsOpen={setIsAddIGNOpen} session={session}></AddIGN>
        </>
    )
}
