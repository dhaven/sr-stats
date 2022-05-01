import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import InputLog from '../components/form.js'

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <InputLog></InputLog>
    </Layout>
  )
}