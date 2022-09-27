import React, { useEffect } from 'react'
import type { AppProps } from 'next/app'
import { globalStyles } from '@theme'
import '../theme/fonts/fonts.css'
import { SiteHeader, Footer } from '@components'

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    globalStyles()
  }, [])
  return (
    <>
      <SiteHeader />
      <Component {...pageProps} />
      <Footer />
    </>
  )
}

export default MyApp
