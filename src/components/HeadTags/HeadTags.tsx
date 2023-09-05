import React from 'react'
import Head from 'next/head'

// -------------- Typescript declarations -------------- //

interface HeadProps {
  content?: string
  shareURL?: string
  pageTitle?: string
}

// ---------- This is the end of declarations ---------- //

export const HeadTags = ({
    content, // For the page content to be used within SEO and social Sharing
    shareURL, // For the page to be shared within social media links
    pageTitle, // For the title of the page
  }: HeadProps ) => {
  
  return(

      <Head>
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
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
          content="/global/social-hero.jpg"
        />
        <meta key="twitterUrl" property="twitter:url" content={ shareURL } />
        <meta
          key="twitterCard"
          name="twitter:card"
          content="/global/social-hero.jpg"
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
          content="/global/social-hero.jpg"
        />
        <meta key="twitterSite" name="twitter:site" content="@ContinuumCapital" />
        <meta
          content="minimum-scale=1, maximum-scale=1, initial-scale=1, width=device-width"
          name="viewport"
        />
        <title>{ pageTitle }</title>
      </Head>
    
  )
}
