import Head from 'next/head'
import AddGameModal from './addGameModal.js'
import dynamic from 'next/dynamic'
const NewFeatureModal = dynamic(() => import('./newFeatureModal'),{ ssr: false })
import { useState } from 'react'
import { useRouter } from 'next/router'

export const siteTitle = 'Star Realms stats'
export const appVersion = '0.5.0'

export default function Layout({ children }) {
  let [isAddGameOpen, setAddGameIsOpen] = useState(false)
  function openAddGameModal() {
    setAddGameIsOpen(true)
  }
  let [isHelperOpen, setIsHelperOpen] = useState(false)
  function openHelperModal() {
    setIsHelperOpen(true)
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
      <header className="bg-white/90 flex flex-row drop-shadow-scifi5 justify-center p-4 gap-1">
        <p onClick={()=>{router.push('/')}} className="text-2xl text-scifi5 font-semibold tracking-widest hover:ring ring-scifi-2 rounded-md">
          <span className="bg-scifi5 text-white mx-2 text-2xl px-1">
            SR
          </span>
           stats
        </p>
        {
          pathname == "/game/[id]" &&
          <button onClick={openAddGameModal} className="hidden md:block absolute top-0 right-0 m-3 bg-scifi3 text-white font-medium bg-white text-sm px-2 py-2 border border-scifi4 ring-scifi-2 drop-shadow-md hover:ring rounded-lg" type="button">
            New Game
          </button>
        }
      </header>
      <main className="bg-emoji-pattern bg-repeat grow flex flex-col justify-center items-center gap-3 md:py-10 sm:py-4">
        {children}
      </main>
      <div className="md:hidden fixed bottom-0 right-0">
        <button type="button" className=" m-3 bg-scifi3 border border-scifi4 ring-scifi-2 drop-shadow-md hover:ring font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center" onClick={openAddGameModal}>
            <svg className="w-12 h-12" fill="none" stroke="white" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path></svg>
        </button>
      </div>
      <AddGameModal isOpen={isAddGameOpen} setIsOpen={setAddGameIsOpen}></AddGameModal>
      <NewFeatureModal isOpen={isNewFeatureOpen} setIsOpen={setIsNewFeatureOpen}></NewFeatureModal>
      <AddGameModal isOpen={isAddGameOpen} setIsOpen={setAddGameIsOpen}></AddGameModal>
    </div>
  )
}