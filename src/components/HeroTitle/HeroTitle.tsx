import React from 'react'
import Link from 'next/link'
import { styled } from '@theme'
import { Heading, Button } from '@components'
import { XyzTransition } from '@animxyz/react'
import { smoothScrollTo } from '@lib'

// For the master container of the Hero Title component
// THis is different from the hero - and only shows a header with a title and other text, without the blob background

const TitleWrap = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  position: 'relative',
  width: '100%',
  padding: '200px 0 100px'
})

// For the container of all of the content within the master container
// This holds the title on the top, subtitle below, action button, and the back button on the bottom of the container

const TitleContent = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  position: 'relative',
  maxWidth: 800,
  width: '90%',
  margin: '0 auto',
  '> *:not(:last-child)': { marginBottom: 28 }
})

// For the container of the main title on the top of the container
// This holds the main title and the subtitle

const TitleMain = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  position: 'relative',
  '> *:not(:last-child)': { marginBottom: 8 }
})

// For the container of the buttons on the bottom of the container
// This holds the main button on the top and the back button on the bottom of the container

const Buttons = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  position: 'relative',
  width: '100%',
  '> *:not(:last-child)': { marginBottom: 12 }
})

// -------------- Typescript declarations -------------- //

interface HeroProps {
  title?: string
  location?: string
  buttonTitle?: string
  buttonLink?: string
  backLink?: string
}

// ---------- This is the end of declarations ---------- //

export const HeroTitle = ({ 
    title, // Required - For the title of the page
    location, // Required - For the location of the job posting
    buttonTitle, // Optional - For the title of the main action button
    buttonLink, // Optional - If has an action button, will take to the correct location
    backLink // Optional - For the back link that takes the user to the previous page
  }:HeroProps) => {

  return(

    <TitleWrap>
      <XyzTransition xyz="fade down delay-15 duration-15" appear>
        <TitleContent>
          <TitleMain>
            <Heading align="center" bold="heavy" size="l6" {...{ title }} />
            <Heading align="center" size="l3" title={ location } />
          </TitleMain>

          <Buttons>
            { buttonTitle && ( <Button variant="primary" onClick={() => smoothScrollTo( buttonLink )} title={ buttonTitle } /> )}
            { backLink && ( <Link href={ backLink }><Button icon="arrow-left" title="Back to all jobs" /></Link> )}
          </Buttons>
        </TitleContent>
      </XyzTransition>
    </TitleWrap>

  )
}
