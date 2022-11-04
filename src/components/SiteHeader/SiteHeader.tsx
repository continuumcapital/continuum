import React from 'react'
import Link from 'next/link'
import { styled } from '@theme'
import { useScrollPosition, useScrollDirection } from '@lib'
import { Logo, Button, ButtonTheme } from '@components'
import "@animxyz/core"
import { XyzTransition } from '@animxyz/react'

// For the master container of the header that sits in a fixed position on the top of the page
// The action of the header hides as the user scrolls down and then shows when the user scrolls up on the page

const Header = styled('header', {
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100vw',
  transition: '$s1',
  zIndex: 9010,

  // For the frosted glass behind the header
  // By default no one will notice the effect, but will see whne the user starts to hover

  '&:before, &:after': {
    content: '',
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%'
  },

  // This is the styling of the background of the header
  // Simple line to allow the blur to act as a "frosted glass" feel for the background
  // Will show the background items blurred out

  '&:before': {
    backdropFilter: 'blur( 6px )',
    zIndex: 0
  },

  // For the top layer of the background of the header
  // This allows the header to stay true to the background color and dulls out the backgrond to keep the header readable

  '&:after': {
    background: '$siteBg',
    opacity: 0.7,
    zIndex: 1
  }
})

// For the container for all of the content within the nav container
// This holds the logo on the left, headshots in the center, and the menu button on the right

const Nav = styled('nav', {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  position: 'relative',
  width: '92%',
  margin: '0 auto',
  padding: '24px 0',
  transition: '$s1',
  zIndex: 10,

  // Here we align the menu button to the right of the container
  // This is adjusting the Side component on the right side of the container

  '> div:last-child': {
    justifyContent: 'flex-end'
  }
})

// For the container of the objects on the side of the nav container
// This holds the items to be equal width, so that the Avatars can be placed dead center of the container

const Side = styled('div', {
  display: 'inline-flex',
  position: 'relative',
  width: '20%',

  // This creates automated spacing between each of the div items within the container execpt for the last one
  // For example, this automates the spacing on right side of the header for the contact button and the theme button

  '*:not(:last-child)': { marginRight: 12 }
})

// For the container of the links in the center of the container
// This shows all of the links within the center of the screen and allows even distrubution from the sides

const Middle = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  position: 'relative',
  maxWidth: 930,
  width: '100%',

  // Remove the center on mobile breakpoints
  // As more links are built out, these will be contained within a hamburger menu

  '@tablet': { display: 'none' }
})

// ---------- This is the end of declarations ---------- //

export const SiteHeader = () => {
  const scrollPos = useScrollPosition()
  const scrollDirection = useScrollDirection()

  return(
    
    <XyzTransition xyz="fade" appearVisible>
      <Header style={{ transform: `translateY( ${ scrollDirection == 'down' ? '-100%' : '0' })` }}>
        <Nav style={{ padding: scrollPos <= 100 ? '24px 0' : '12px 0' }}>
          <Side><Logo linkToHome /></Side>

          {/* <Middle>
            <List direction="horizontal">
              <li><a href="https://medium.com/" target="_blank"><Button notBold size="l0" title="Research" /></a></li>
              <li><Link href="#digital-assets"><Button notBold size="l0" title="Digital Assets" /></Link></li>
              <li><Link href="#real-estate"><Button notBold size="l0" title="Real Estate" /></Link></li>
            </List>
          </Middle> */}

          <Side>
            <Link href="#contact"><Button size="l0" variant="secondary" title="Contact Us" /></Link>
            {/* <ButtonTheme /> */}
          </Side>
        </Nav>
      </Header>
    </XyzTransition>

  )
}
