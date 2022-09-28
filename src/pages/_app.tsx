import { ThemeProvider } from 'next-themes'
import React, { useEffect } from 'react'
import type { AppProps } from 'next/app'
import { globalStyles, lightTheme, darkTheme } from '@theme'
import '../theme/fonts/fonts.css'
import { SiteHeader, Footer } from '@components'

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    globalStyles()
  }, [])
  return (
    <ThemeProvider
      disableTransitionOnChange
      attribute="class"
      value={{ light: lightTheme, dark: darkTheme }}
      defaultTheme={ lightTheme }
    >
      <SiteHeader />
      <Component {...pageProps} />
      <Footer />
    </ThemeProvider>
  )
}

export default MyApp