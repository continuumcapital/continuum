import '../../styles/globals.css'
import type { AppProps } from 'next/app'
import { SiteHeader, Footer } from '@components'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <SiteHeader />
      <Component {...pageProps} />
      <Footer />
    </>
  )
}

export default MyApp
