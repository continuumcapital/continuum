import React from 'react'
import { styled } from '@theme'
import { Heading, Chip, HeroOffer, Text } from '@components'
import { XyzTransition } from '@animxyz/react'

// For the master container of the hero section
// This the the section that appears on the top of the page with the site title text in the center and the Chips below

const HeroContainer = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'relative',
  width: '100vw',
  height: '100vh',
  minHeight: 600
})

// For the container of all of the content within the master container
// This sets the container in the center, holding the hairline, title, and chips

const HeroContent = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  position: 'relative',
  width: '100%',
  paddingTop: 50,
  zIndex: 1,
  '> *:not(:last-child)': { marginBottom: 32 }
})

// For the text that is in the center of the container
// This contains the hairline text on the top, with the main title below and the chips below that

const HeroText = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'relative',
  maxWidth: 900,
  width: '90%',
  margin: '0 auto',
  textAlign:'center',
  '> *:not(:last-child)': { marginBottom: 8 },

  variants: {
    leftAlignOnMobile: {
      true: { textAlign: 'left' }
    }
  }
})

const HeroDescp = styled('div', {
  position: 'relative',
  maxWidth: 800,
  width: '100%',
  marginTop: 12
})

// Here we add support for breakpoints if needed ot be hidden 
// This is used if there are callouts - where the text is too long and is replaced by chips

const ShowOnTablet = styled('div', {
  display: 'none',
  '@desktop': { display: 'block' }
})

// -------------- Typescript declarations -------------- //

interface HeroProps {
  hairline?: string
  title: string
  descp?: string | React.ReactNode
  leftAlignOnMobile?: boolean
  calloutTitle?: string
  calloutButtonTitle?: string
  calloutDescp?: string
  calloutHref?: string
  offers?: {
    title: string
    descp: string
    href: string
  }[]
  chips?: {
    title: string
    href?: string
  }[]
}

// ---------- This is the end of declarations ---------- //

export const Hero = ({ 
    hairline, // Optional - For the hairline on top of the main text - currently the name of Continuum Capital
    title, // Required - For the main title of the hero section
    descp, // Optional - For a basic text description, below the main title
    calloutTitle, // Optional - For a featured callout, contained within a background
    calloutDescp, // Optional - For the description below the callout title
    calloutButtonTitle, // Optional - If the callout needs a button
    calloutHref, // Optional - for the href where the interaction goes after the user clicks the callout Button
    offers, // Optional - This will show the cards with the background side-by-side, if more than one callout is needed
    chips, // Optional - For the chips to callout key parts of the page below
    leftAlignOnMobile // Optional - For the support to align the text to the left on mobile
  }: HeroProps ) => {
  
  return(

    <HeroContainer>
      <XyzTransition xyz="fade down delay-15 duration-15" appear>
        <HeroContent>
          <HeroText {...{ leftAlignOnMobile }}>
            { hairline && ( <h1><Heading allCaps size="l2" bold="bold" color="primary" letterSpacing="l0" title={ hairline } /></h1> )}
            <h2><Heading size="l6" bold="heavy" {...{ title }} /></h2>
            { descp && ( <HeroDescp><h3><Text color="textSecondary"><p>{ descp }</p></Text></h3></HeroDescp> ) }
          </HeroText>

          { calloutTitle && ( 
            <HeroOffer 
              title={ calloutTitle } 
              descp={ calloutDescp } 
              href={ calloutHref } 
              {...{ calloutButtonTitle }} 
            /> 
          )} 

          { offers && <HeroOffer hideOnTablet {...{ offers }} /> }   
          <ShowOnTablet>{ chips && ( <Chip {...{ chips }} /> ) }</ShowOnTablet>
        </HeroContent>
      </XyzTransition>
    </HeroContainer>

    
  )
}
