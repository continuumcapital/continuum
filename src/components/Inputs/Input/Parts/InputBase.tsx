import React, { useState } from 'react'
import { styled } from '@theme'

// For the container of the input field
// This holds just the input field and the label - here we dictate the visual style for the input field

const InputContain = styled('div', {
  display: 'flex',
  alignItems: 'center',
  position: 'relative',
  width: '100%',
  height: 64,
  padding: '0 24px',
  border: '1px solid $border',
  borderRadius: '$r2',
  transition: '$s1',
  fontFamily: '$sansSerif',

  // For the different height structures that are supported for the input
  // This is based on the context that the input needs to be used in. For example, in the left nav, the search field
  // looks too weird when it has the normal height and needs to be reduced

  variants: {
    height: {
      small: { height: 44 }
    }
  },

  // For the label of the input field
  // This sits in the center of the container and then animates up and shrinks to the top of the container

  label: {
    position: 'relative',
    width: '100%',
    textAlign: 'left',
    transition: '$s1',
    transformOrigin: 'left center',
    pointerEvents: 'none',
    userSelect: 'none',
    zIndex: 1
  },

  // For the styling of the button on the right side og the input

  button: {
    height: '100%',

    // Set the height and the border radius of the button
    // This keeps the border radius styling off of the left side of the button

    '> div': {
      height: '100%',
      borderRadius: '0 $pill $pill 0',
    },
  },

  // When an input is focused into, we animate a few things
  // We need to change the border color as an active indicator, as well as move and shrink the label to the top left

  '&:focus-within': {
    borderColor: '$white',

    // Animate the label to the top left, shrink it, and change the color

    label: {
      color: '$textSecondary',
      transform: 'translateY( -12px ) scale( 0.8 )',
    },
  },

  // Here we reset the input field, and dictate the sizing, position, and spacing within it
  // This is so the whole container can be clicked and the user can start typing
  // This is because the <input /> semantic itself has no visible styling, and the parent container holds the styling
  // So that the label can visually work within the input field

  input: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    padding: '16px 24px 0',
    background: 'none',
    border: 'none',
    outline: 'none',
    color: 'inherit',
    fontSize: '$s2',
    fontWeight: 500
  }
})

// -------------- Typescript declarations -------------- //

interface InputBaseProps {
  children: React.ReactNode
}

// ---------- This is the end of declarations ---------- //

export const InputBase = ({ children }:InputBaseProps) => {
  return(

    <InputContain>{ children }</InputContain>

  )
}