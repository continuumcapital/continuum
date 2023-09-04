import React from 'react'
import { styled } from '@theme'

// For the master container of the component set up for the mobile menu
// This will hide the global menu and show up on tablet breakpoints, once the hamburger menu is clicked

const Menu = styled('div', {
  '@tablet': {
    display: 'flex',
    justifyContent: 'center !important',
    alignItems: 'center',
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100vw',
    height: '100vh',
    background: '$bgPrimary',
    zIndex: 0,
    transition: '$s1',
    transform: 'scale( 0.8 )',
    opacity: 0,
    visibility: 'hidden',
    pointerEvents: 'none',

    // For changing the defaults of the ButtonContainer component to handle the one-off changes for the mobile menu
    // This isn't needed as a variant on the ButtonContainer itself because it only happens here

    '> div': {
      display: 'flex',
      justifyContent: 'center',
      height: '100%',
      flexDirection: 'column',
      '*': { fontSize: '$s4' }
    }
  },

  // Here we add support for the click events on mobile
  // By default, the menu is closed and this event is triggered once the menu button is clicked on tablet and under breakpoints

  variants: {
    active: {
      true: {
        '@tablet': {
          visibility: 'visible',
          transform: 'scale( 1 )',
          pointerEvents: 'auto',
          opacity: 1
        }
      }
    }
  }
})

// -------------- Typescript declarations -------------- //

interface MenuProps {
  active: boolean
  children: React.ReactNode
}

// ---------- This is the end of declarations ---------- //

export const MobileMenu = ({ active, children }:MenuProps) => {
  return(

    <Menu {...{ active }}>{ children }</Menu>

  )
}
