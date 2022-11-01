import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import LandingPage from '../components/landingPage.js'

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <LandingPage></LandingPage>
    </Layout>
  )
}