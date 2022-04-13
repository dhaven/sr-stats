import Head from 'next/head'
import HelperModal from './helperModal.js'
import { useState } from 'react'

export const siteTitle = 'Star Realms stats'

export default function Layout({ children}) {
  let [isOpen, setIsOpen] = useState(false)
  function openModal() {
    setIsOpen(true)
  }
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
      <header className="flex flex-col items-end gap-1">
        <button type="button" className="bg-white hover:bg-gray-100 font-medium rounded-full text-sm p-2.5 m-3 text-center inline-flex items-center" onClick={openModal}>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
        </button>
      </header>
      <main className="flex flex-col justify-center items-center gap-3 md:py-10 sm:py-4">
        {children}
        <HelperModal isOpen={isOpen} setIsOpen={setIsOpen}>
        </HelperModal>
      </main>
    </div>
  )
}