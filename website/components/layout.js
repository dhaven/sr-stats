import Head from 'next/head'
import AddGameModal from './addGameModal.js'
import dynamic from 'next/dynamic'
const NewFeatureModal = dynamic(() => import('./newFeatureModal'), { ssr: false })
import { useState } from 'react'
import { useRouter } from 'next/router'
import Toast from './ui/toast.js'
import Image from 'next/image'
import discord_img from '../public/images/discord.png'

export const siteTitle = 'Star Realms stats'
export const appVersion = '1.0.0'

export default function Layout({ children }) {
  let [isAddGameOpen, setAddGameIsOpen] = useState(false)
  function openAddGameModal() {
    setAddGameIsOpen(true)
  }
  let [isNewFeatureOpen, setIsNewFeatureOpen] = useState(true)
  const { pathname } = useRouter()
  const router = useRouter()
  return (
    <div className="bg-emoji-pattern flex flex-col bg-repeat-y bg-center">
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Statistics about your Star Realms games"
        />
        <meta name="og:title" content={siteTitle} />
      </Head>
      <header className="bg-white flex flex-row drop-shadow-scifi5 justify-center p-2 md:p-4 gap-1">
        <p onClick={() => { router.push('/') }} className="text-2xl text-scifi5 font-semibold tracking-widest hover:ring ring-scifi-2 rounded-md">
          <span className="bg-scifi5 text-white mx-2 text-2xl px-1">
            SR
          </span>
          stats
        </p>
        {
          pathname == "/game/[id]" &&
          <button onClick={openAddGameModal} className="hidden md:block absolute top-0 right-0 m-3 text-scifi5 font-medium bg-white text-sm px-2 sm:px-4 py-2 border border-scifi4 ring-scifi2 drop-shadow-md hover:ring rounded-lg" type="button">
            New Game
          </button>
        }
      </header>
      <main className="bg-repeat grow flex flex-col items-center gap-3 md:py-5 sm:py-2">
        {children}
      </main>
      <NewFeatureModal isOpen={isNewFeatureOpen} setIsOpen={setIsNewFeatureOpen}></NewFeatureModal>
      <AddGameModal isOpen={isAddGameOpen} setIsOpen={setAddGameIsOpen}></AddGameModal>
      <Toast />
      <footer>
        <div className="flex justify-center gap-2 m-2">
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
      </footer>
    </div>
  )
}