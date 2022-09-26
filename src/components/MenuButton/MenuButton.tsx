import React from 'react'
import { styled } from '@theme'

/* 
  *** ReadMe ***

  The menu button is a global, always visible component that sits on the right of the header. The menu
  button is used to open the global menu, where is shows the core features of the product. When the menu button
  is hovered, the hamburger icon forms into an X to indicate that clicking the icon again, will close the menu.
  The menu also contains the "Menu" text to the left of the hamburger icon to futher indicate the affordance 
  of the menu.

  *** End ReadMe ***
*/

// For the master container of the menu button
// This holds the hamburger icon on the left and the Menu text on the right

const MenuWrap = styled('button', {
  display: 'flex',
  alignItems: 'center',
  position: 'relative',
  padding: '10px 16px',
  borderRadius: '$r1',
  border: '1px solid $gray700',
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
    left: 0,
    width: '100%',
    height: 2,
    borderRadius: 2,
    background: '$gray700'
  },

  // For the positioning of the lines on the top and bottom of the container
  // The middle line autmoatically sits in the middle with no additional code - based on the flex alignment

  span: {
    '&:before': { top: 0 },
    '&:after': { bottom: 0 }
  },

  // If the Menu text is present, then here we autmoate the spacing on the left of the container
  // If no Menu text is there, then the spacing does not exist

  '+ span': {
    marginLeft: 8
  }
})

// ---------- This is the end of declarations ---------- //

export const MenuButton = () => {
  return(

    <MenuWrap>
      <Hamburger><span></span></Hamburger>
      <span>Menu</span>
    </MenuWrap>
    
  )
}
