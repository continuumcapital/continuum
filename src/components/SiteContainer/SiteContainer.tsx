import React from 'react'
import Head from 'next/head'
import { styled } from '@theme'

// For the master container of the foundational SiteContainer component
// This component is used to automate spacing, sizes, widths, ect for components wrapped within this components

const SiteWrap = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'relative',
  width: '100vw',
  minHeight: '100vh'
})

// For all of the content within the site
// This positions the content centered horizontally within the container

const SiteContent = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  position: 'relative',
  width: '100%',
  margin: '0 auto',

  // The only variant option for this component is to automate the spacing between content blocks within the site
  // This will eventally space out all of the content for consistancy between blocks

  variants: {
    spacing: {
      l0: {},
      l1: { padding: '75px 0' },
      l2: { padding: '150px 0'}
    },

    blockSpacing: {
      l0: { '> *': { marginBottom: 32 }},
      l1: { '> *': { marginBottom: 50 }},
      l2: { '> *': { marginBottom: 100 }},
      l3: { '> *': { marginBottom: 150, '@media(max-width: 767px)': { marginBottom: 75 }}},
    }
  }
})

// -------------- Typescript declarations -------------- //

interface SiteContainerProps {
  spacing?: 'l0' | 'l1' | 'l2'
  content?: string
  shareURL?: string
  pageTitle?: string
  blockSpacing?: 'l0' | 'l1' | 'l2' | 'l3'
  children: React.ReactNode
}

// ---------- This is the end of declarations ---------- //

export const SiteContainer = ({
    spacing,
    content, // For the page content to be used within SEO and social Sharing
    shareURL, // For the page to be shared within social media links
    pageTitle, // For the title of the page
    blockSpacing, // Optional - For the uniform spacing between each of the blocks that make up the page
    children // Required - For all of the content within a page
  }: SiteContainerProps ) => {
  
  return(

    <SiteWrap>
      <Head>
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
        <meta key="description" property="description" content={ content } />
        <meta key="ogUrl" property="og:url" content={ shareURL } />
        <meta key="ogType" property="og:type" content="website" />
        <meta key="ogTitle" property="og:title" content={ pageTitle } />
        <meta key="ogDescription" property="og:description" content={ content } />
        <meta
          key="ogImage"
          property="og:image"
          content="/ross/rossSocial.jpg"
        />
        <meta key="twitterUrl" property="twitter:url" content={ shareURL } />
        <meta
          key="twitterCard"
          name="twitter:card"
          content="/ross/rossSocial.jpg"
        />
        <meta key="twitterTitle" name="twitter:title" content={ pageTitle } />
        <meta
          key="twitterDescription"
          name="twitter:description"
          content={ content }
        />
        <meta
          key="twitterImage"
          name="twitter:image"
          content="/ross/rossSocial.jpg"
        />
        <meta key="twitterSite" name="twitter:site" content="@FreeRossDAO" />
        <meta
          content="minimum-scale=1, maximum-scale=1, initial-scale=1, width=device-width"
          name="viewport"
        />
        <title>{pageTitle}</title>
      </Head>

      <SiteContent {...{ spacing, blockSpacing }}>
        { children }
      </SiteContent>
    </SiteWrap>
    
  )
}
