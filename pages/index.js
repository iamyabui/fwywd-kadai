import Head from 'next/head'
import Footer from '../components/Footer'
import HeaderMenu from '../components/HeaderMenu'
import Main from '../components/Main'
import MainTitle from '../components/MainTitle'

export default function Home() {
  return (
    <>
      <Head>
        <title>fwywd</title>
        <meta name='viewport' content='width=device-width,initial-scale=1.0' />
      </Head>

      <div className='min-w-[365px]'>
        <HeaderMenu />
        <MainTitle />
        <Main />
        <Footer />
      </div>
    </>
  )
}
