import React from 'react'
import Link from 'next/link'
import { styled } from '@theme'
import { Heading, Button } from '@components'
import { XyzTransition } from '@animxyz/react'

const TitleWrap = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  position: 'relative',
  width: '100%',
  padding: '200px 0 100px'
})

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

const TitleMain = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  position: 'relative',
  '> *:not(:last-child)': { marginBottom: 8 }
})

const Buttons = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  position: 'relative',
  width: '100%',
  '> *:not(:last-child)': { marginBottom: 12 }
})

interface HeroProps {
  title?: string
  location?: string
  buttonTitle?: string
  buttonLink?: string
  backLink?: string
}

export const HeroTitle = ({ title, location, buttonTitle, buttonLink, backLink }:HeroProps) => {
  return(

    <TitleWrap>
      <XyzTransition xyz="fade down delay-15 duration-15" appear>
        <TitleContent>
          <TitleMain>
            <Heading align="center" bold="heavy" size="l6" {...{ title }} />
            <Heading align="center" size="l3" title={ location } />
          </TitleMain>

          <Buttons>
            { buttonTitle && ( <Button variant="primary" title={ buttonTitle } linkUrl={ buttonLink } /> )}
            { backLink && ( <Link href={ backLink }><Button icon="arrow-left" title="Back to all jobs" /></Link> )}
          </Buttons>
        </TitleContent>
      </XyzTransition>
    </TitleWrap>

  )
}