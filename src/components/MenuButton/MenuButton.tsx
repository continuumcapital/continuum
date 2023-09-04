import React from 'react'
import { styled } from '@theme' 

// For the master container of the menu button
// This holds the hamburger icon on the left and the Menu text on the right

const MenuWrap = styled('button', {
  display: 'flex',
  alignItems: 'center',
  position: 'relative',
  padding: '10px 16px',
  borderRadius: '$r1',
  border: '1px solid $bgSecondary',
  fontFamily: '$sansSerif'
})

// For the styling of the hamburger icon on the left of the container
// This holds the three lines on the top, middle, and bottom

const Hamburger = styled('span', {
  display: 'inline-flex',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'relative',
  width: 16,
  height: 12,

  // For the styling of the individual lines on the top, middle, and bottom
  // These lines animate when the menu button is clicked

  '&:before, span:before, span:after': {
    content: '',
    position: 'absolute',
    width: '100%',
    height: 2,
    left: 0,
    right: 0,
    background: '$white',
    transformOrigin: 'center',
    transition: '$s1'
  },

  // For the positioning of the lines on the top and bottom of the container
  // The middle line autmoatically sits in the middle with no additional code - based on the flex alignment

  span: {
    width: 16,
    height: 12,
    '&:before': { top: 0 },
    '&:after': { bottom: 0 }
  },

  // If the Menu text is present, then here we autmoate the spacing on the left of the container
  // If no Menu text is there, then the spacing does not exist

  '+ span': {
    marginLeft: 8
  },

  variants: {
    active: {
      true: {
        '&:before': { display: 'none' },
        'span:before': { transform: 'rotate( 45deg ) translateY( 3px ) translateX( 4px )' },
        'span:after': { transform: 'rotate( -45deg ) translateY( -3px ) translateX( 4px )' }
      }
    }
  }
})

interface MenuProps {
  active: boolean
  onClick: any
}

// ---------- This is the end of declarations ---------- //

export const MenuButton = ({ active, onClick }:MenuProps) => {
  return(

    <MenuWrap {...{ onClick }}>
      <Hamburger active={ active }><span></span></Hamburger>
      <span>Menu</span>
    </MenuWrap>
    
  )
}
