import React from 'react'
import { styled } from '@theme'

// For the container of the main input section
// This always holds the input but can have an icon, tooltip helper to the right of the field

const InputContent = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  position: 'relative',
  width: '100%',

  // For the two different states of the input field - agnostic of any feedback text
  // This is to accomidate if there is text within the input, and if so, the title stays shrunken, on the top left

  variants: {
    state: {
      active: { label: { transform: 'translateY( -12px ) scale( 0.8 )' } },
      inactive: { /* we keep this unstyled, but use this for semantics in logic on the parent component */ }
    },

    inputSize: {
      small: { width: '50%', '@tablet': { width: '100%' }}
    }
  },
})

// -------------- Typescript declarations -------------- //

interface InputWrapProps {
  inputSize?: 'small'
  state: 'active' | 'inactive'
  children: React.ReactNode
}

// ---------- This is the end of declarations ---------- //

export const InputWrap = ({ inputSize, state, children }:InputWrapProps) => {
  return(

    <InputContent {...{ inputSize, state }}>
      { children }
    </InputContent>

  )
}
