import Head from 'next/head'
import AddGameModal from './addGameModal.js'
import dynamic from 'next/dynamic'
const NewFeatureModal = dynamic(() => import('./newFeatureModal'),{ ssr: false })
import { useState } from 'react'
import { useRouter } from 'next/router'
import Toast from './ui/toast.js'

export const siteTitle = 'Star Realms stats'
export const appVersion = '1.0.0'

export default function Layout({ children }) {
  let [isAddGameOpen, setAddGameIsOpen] = useState(false)
  function openAddGameModal() {
    setAddGameIsOpen(true)
  }
  let [isNewFeatureOpen, setIsNewFeatureOpen] = useState(true)
  const {pathname} = useRouter()
  const router = useRouter()
  return (
    <div className="bg-emoji-pattern flex flex-col h-screen bg-repeat-y bg-center">
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Statistics about your Star Realms games"
        />
        <meta name="og:title" content={siteTitle} />
      </Head>
      <header className="bg-white flex flex-row drop-shadow-scifi5 justify-center p-4 gap-1">
        <p onClick={()=>{router.push('/')}} className="text-2xl text-scifi5 font-semibold tracking-widest hover:ring ring-scifi-2 rounded-md">
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
      <main className="bg-emoji-pattern bg-repeat grow flex flex-col items-center gap-3 md:py-10 sm:py-4">
        {children}
      </main>
      <NewFeatureModal isOpen={isNewFeatureOpen} setIsOpen={setIsNewFeatureOpen}></NewFeatureModal>
      <AddGameModal isOpen={isAddGameOpen} setIsOpen={setAddGameIsOpen}></AddGameModal>
      <Toast />
    </div>
  )
}