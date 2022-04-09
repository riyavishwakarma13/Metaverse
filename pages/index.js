import Head from 'next/head'
import Login from './../components/Login'

export default function Home() {
  return (
    <div className="h-screen">
      <Head>
        <title>Metaverse</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>LOlllll</h1>
      <Login />
    </div>
  )
}
