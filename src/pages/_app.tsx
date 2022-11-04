import React, { useState, useEffect } from 'react'
import type { AppProps } from 'next/app'
import { ThemeProvider } from 'next-themes'
import { globalStyles, lightTheme, darkTheme } from '@theme'
import { Preloader, SiteHeader, Footer, StageBg } from '@components'

function MyApp({ Component, pageProps }: AppProps) {
  const [ isLoading, setLoading ] = useState( true )

  useEffect(() => { 
    globalStyles()
    setTimeout(() => {
      setLoading( false );
    }, 2000);
  }, [])

  return (
    <>
      { isLoading ? <Preloader /> : null }
      <ThemeProvider
        disableTransitionOnChange
        attribute="class"
        value={{ light: lightTheme, dark: darkTheme }}
        enableSystem={ true }
        defaultTheme="dark"
      > 
        <SiteHeader />
        <Component {...pageProps} />
        <Footer />
        <StageBg showBlob={ isLoading ? 'false' : 'true' } />
      </ThemeProvider>
    </>
  )
}

export default MyApp