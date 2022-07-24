import type { NextPage } from 'next'
import Head from 'next/head'
import Header from '../components/Header'
import Feed from '../components/Feed'

const Home: NextPage = () => {
  return (
    <div className="bg-gray-50 h-screen 
    overflow-y-scroll scrollbar-hide ">
      <Head>
        <title>Instagram 2.0</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

     {/* header */}
      <Header/>

     {/* feed */}
     <Feed/>


     {/* modal */}
    </div>
  )
}

export default Home
