import Head from 'next/head'
import Toast from './ui/toast.js'
import Image from 'next/image'
import discord_img from '../public/images/discord.png'
import Header from './header.js'
import Loading from './loading.js'

export const siteTitle = 'Star Realms stats'
export const appVersion = '1.0.0'

export default function Layout({ children }) {
  return (
    <div className="bg-scifi w-full h-full flex flex-col bg-repeat-y bg-center">
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Statistics about your Star Realms games"
        />
        <meta name="og:title" content={siteTitle} />
      </Head>
      <Header></Header>
      <main className="grow flex flex-col h-full items-center gap-3 md:py-5 sm:py-2">
        {children}
        <Loading></Loading>
      </main>
      <Toast />
      <footer className="hidden md:flex">
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