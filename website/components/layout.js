import Head from 'next/head'
import AddGameModal from './addGameModal.js'
import dynamic from 'next/dynamic'
const NewFeatureModal = dynamic(() => import('./newFeatureModal'),{ ssr: false })
import { useState } from 'react'
import { useRouter } from 'next/router'

export const siteTitle = 'Star Realms stats'
export const appVersion = '0.3.1'

export default function Layout({ children }) {
  let [isAddGameOpen, setAddGameIsOpen] = useState(false)
  function openAddGameModal() {
    setAddGameIsOpen(true)
  }
  let [isNewFeatureOpen, setIsNewFeatureOpen] = useState(true)
  const {pathname} = useRouter()
  const router = useRouter()
  console.log(pathname)
  return (
    <div>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Statistics about your Star Realms games"
        />
        <meta name="og:title" content={siteTitle} />
      </Head>
      <header className="bg-white flex flex-row drop-shadow-lg justify-center p-4 gap-1">
        <p onClick={()=>{router.push('/')}} className="text-2xl text-scifi5 font-semibold tracking-widest">
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
      </header>
      <main className="bg-white flex flex-col justify-center items-center gap-3 md:py-10 sm:py-4">
        {children}
      </main>
      <NewFeatureModal isOpen={isNewFeatureOpen} setIsOpen={setIsNewFeatureOpen}></NewFeatureModal>
      <AddGameModal isOpen={isAddGameOpen} setIsOpen={setAddGameIsOpen}></AddGameModal>
    </div>
  )
}