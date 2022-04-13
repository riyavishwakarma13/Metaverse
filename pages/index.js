import Login from './../components/Login'
import { useMoralis } from 'react-moralis'
import Header from './../components/Header'
import Head from 'next/head'

export default function Home() {
  const { isAuthenticated, logout } = useMoralis()
  // const isAuthenticated = false;
  if (!isAuthenticated) return <Login />
  return (
    <div className="h-screen overflow-y-scroll bg-gradient-to-b from-black to-fuchsia-800 overflow-hidden">
      <Head>
        <title>Metaverse</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="mx-auto max-w-screen-2xl">
        <Header />
        {/* messages */}
      </div>

      {/* <Login /> */}
      <button onClick={logout}>Logout</button>
    </div>
  )
}
