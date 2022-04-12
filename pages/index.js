import Head from 'next/head'
import Login from './../components/Login'
import { useMoralis } from 'react-moralis';

export default function Home() {
  const { isAuthenticated, logout } = useMoralis();
  // const isAuthenticated = false;
  if(!isAuthenticated) return <Login />
  return (
    <div className="h-screen">
      <Head>
        <title>Metaverse</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>LOlllll</h1>
      <h1>Welcome to app</h1>
      {/* <Login /> */}
      <button onClick={logout}>Logout</button>
    </div>
  )
}
