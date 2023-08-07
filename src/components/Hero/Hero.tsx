import React from 'react'
import { styled } from '@theme'
import { Heading, Chip, HeroOffer } from '@components'
import "@animxyz/core"
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
  '> *:not(:last-child)': { marginBottom: 32 }
})

// For the text that is in the center of the container
// This contains the hairline text on the top, with the main title below and the chips below that

const HeroText = styled('div', {
  position: 'relative',
  maxWidth: 900,
  width: '90%',
  margin: '0 auto',
  textAlign:'center',
  '> *:not(:last-child)': { marginBottom: 8 }
})

const ShowOnTablet = styled('div', {
  display: 'none',
  '@desktop': { display: 'block' }
})

// -------------- Typescript declarations -------------- //

interface HeroProps {
  hairline?: string
  title: string
  offers: {
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
    offers,
    chips // Optional - For the chips to callout key parts of the page below
  }: HeroProps ) => {

  let target:any;
  
  return(

    <HeroContainer>
      <XyzTransition xyz="fade down delay-15 duration-15" appear>
        <HeroContent>
          <HeroText>
            <h1>{ hairline ? ( <Heading allCaps size="l1" bold="bold" color="primary" letterSpacing="l0" title={ hairline } /> ) : null }</h1>
            <h2><Heading size="l6" bold="heavy" {...{ title }} /></h2>
          </HeroText>

          <HeroOffer {...{ offers }} />   
          <ShowOnTablet>{ chips && ( <Chip {...{ chips }} /> ) }</ShowOnTablet>
        </HeroContent>
      </XyzTransition>
    </HeroContainer>

    
  )
}
