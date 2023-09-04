import React from 'react'
import { styled } from '@theme'

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

    '> div': {
      display: 'flex',
      justifyContent: 'center',
      height: '100%',
      flexDirection: 'column',
      '*': { fontSize: '$s4' }
    }
  },

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
