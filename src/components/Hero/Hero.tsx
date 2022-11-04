import React from 'react'
import { styled } from '@theme'
import { Heading, Chip } from '@components'
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
  width: '100%'
})

// For the text that is in the center of the container
// This contains the hairline text on the top, with the main title below and the chips below that

const HeroText = styled('div', {
  position: 'relative',
  maxWidth: 1200,
  width: '90%',
  textAlign:'center',

  // To automate the spacing of the text blocks within the container

  '> *:not(:last-child)': {
    marginBottom: 16
  }
})

// -------------- Typescript declarations -------------- //

interface HeroProps {
  hairline?: string
  title: string
  chips?: {
    title: string
    href?: string
  }[]
}

// ---------- This is the end of declarations ---------- //

export const Hero = ({ 
    hairline, // Optional - For the hairline on top of the main text - currently the name of Continuum Capital
    title, // Required - For the main title of the hero section
    chips // Optional - For the chips to callout key parts of the page below
  }: HeroProps ) => {
  
  return(

    <XyzTransition xyz="fade" appearVisible>
      <HeroContainer>
        <HeroContent>
          <HeroText>
            { hairline ? ( <Heading font="code" size="l3" bold="heavy" color="blue" title={ hairline } /> ) : null }
            <Heading size="l7" bold="heavy" {...{ title }} />
          </HeroText>

          { chips ? ( <Chip {...{ chips }} /> ) : null }     
        </HeroContent>
      </HeroContainer>
    </XyzTransition>
    
  )
}
