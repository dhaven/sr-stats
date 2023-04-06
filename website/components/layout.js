import Head from 'next/head'
import Toast from './ui/toast.js'
import Image from 'next/image'
import discord_img from '../public/images/discord.png'
import Header from './header.js'
import Loading from './loading.js'
import Link from 'next/link'
import { useRouter } from 'next/router'

export const siteTitle = 'Star Realms stats'
export const appVersion = '1.0.0'

export default function Layout({ children }) {
  const { pathname } = useRouter()
  return (
    <div className="bg-scifi w-full min-h-full flex flex-col bg-repeat-y bg-center">
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
      <footer className="flex">
        <div className="flex md:hidden">
          {
            pathname != "/game/[id]" &&
            <div className="flex flex-row w-3/4">
              <div className="flex m-2">
                <a href="https://discord.gg/q4kqH775FA" target="_blank">
                  <div className="flex bg-white rounded-lg border-black border">
                    <div className="flex items-center mx-1">
                      <Image
                        src={discord_img}
                        height="24"
                        width="24"
                      />
                    </div>
                    <p className="text-sm font-medium text-scifi5">Join the community! </p>
                  </div>
                </a>
              </div>
            </div>
          }
        </div>
        <div className="hidden md:flex w-full">
          <div className="flex flex-row w-full justify-between">
            <div className="flex justify-center m-2">
              <a href="https://discord.gg/q4kqH775FA" target="_blank">
                <div className="flex bg-white rounded-lg py-2 px-1 border-black border">
                  <div className="flex items-center mx-2">
                    <Image
                      src={discord_img}
                      height="24"
                      width="24"
                    />
                  </div>
                  <p className="text:md font-medium text-scifi5">Join the community! </p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}