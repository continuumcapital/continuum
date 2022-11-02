import React, { useEffect } from 'react'
import type { AppProps } from 'next/app'
import { ThemeProvider } from 'next-themes'
import { globalStyles, lightTheme, darkTheme } from '@theme'
import { SiteHeader, Footer, StageBg } from '@components'

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => { globalStyles() }, [])

  return (
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
      
    </ThemeProvider>
  )
}

export default MyApp