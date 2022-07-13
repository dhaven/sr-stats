import Head from 'next/head'
import AddGameModal from './addGameModal.js'
import HelperModal from './helperModal.js'
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
    <div className="flex flex-col h-screen bg-repeat bg-emoji-pattern">
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Statistics about your Star Realms games"
        />
        <meta name="og:title" content={siteTitle} />
      </Head>
      <header className="bg-white flex flex-row drop-shadow-lg justify-center p-4 gap-1">
        <p onClick={()=>{router.push('/')}} className="text-2xl text-scifi5 font-semibold tracking-widest hover:ring ring-scifi-2 rounded-md">
          <span className="bg-scifi5 text-white mx-2 text-2xl px-1">
            SR
          </span>
           stats
        </p>
        {
          pathname == "/game/[id]" &&
          <button onClick={openAddGameModal} className="absolute top-0 right-0 m-3 bg-scifi3 text-white font-medium bg-white text-sm px-2 py-2 border border-scifi4 ring-scifi-2 drop-shadow-md hover:ring rounded-lg" type="button">
            New Game
          </button>
        }
        {
          pathname == "/" &&
          <button type="button" className="absolute top-0 right-0 m-3 ring-scifi-2 drop-shadow-md hover:ring font-medium rounded-full text-sm p-2.5 m-3 text-center inline-flex items-center" onClick={openHelperModal}>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
          </button>
        }
      </header>
      <main className="bg-emoji-pattern grow flex flex-col justify-center items-center gap-3 md:py-10 sm:py-4">
        {children}
      </main>
      <NewFeatureModal isOpen={isNewFeatureOpen} setIsOpen={setIsNewFeatureOpen}></NewFeatureModal>
      <AddGameModal isOpen={isAddGameOpen} setIsOpen={setAddGameIsOpen}></AddGameModal>
      <HelperModal isOpen={isHelperOpen} setIsOpen={setIsHelperOpen}></HelperModal>
    </div>
  )
}