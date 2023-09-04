import React, { useState, useEffect } from 'react'
import type { AppProps } from 'next/app'
import { ThemeProvider } from 'next-themes'
import { globalStyles, lightTheme, darkTheme } from '@theme'
import { Preloader, SiteHeader } from '@components'

function MyApp({ Component, pageProps }: AppProps) {
  const [ isLoading, setLoading ] = useState( true )
  const [ isHidden, setHidden ] = useState( true )

  useEffect(() => { 
    globalStyles()
    setTimeout(() => { setHidden( false ) }, 1000);
    setTimeout(() => { setLoading( false ) }, 2000);
  }, [])

  return (
      
    <ThemeProvider
      disableTransitionOnChange
      attribute="class"
      value={{ light: lightTheme, dark: darkTheme }}
      enableSystem={ true }
      defaultTheme="dark"
    > 
      { isLoading ? <Preloader /> : null }
      { isHidden ? null : (
        <>
          <Component {...pageProps} />
        </>
      )}
    </ThemeProvider>

  )
}

export default MyApp