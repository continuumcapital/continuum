import React from 'react'
import { styled } from '@theme'

// For the master container of the em html tag
// This allows for empahized text to be able to be changes, even under default styling

const Em = styled('em', {
  position: 'relative',
  display: 'inline-block',
  font: 'inherit',

  // Here we account for the different colors that the em can have 
  // As of now, we only support danger text, such as for the Job Application form

  variants: {
    color: {
      danger: { color: 'red' }
    }
  }
})

// -------------- Typescript declarations -------------- //

interface EmProps {
  children: React.ReactNode
  color?: 'danger'
}

// ---------- This is the end of declarations ---------- //

export const TextEm = ({ children, color }:EmProps) => {
  return(

    <Em {...{ color }}>{ children }</Em>

  )
}

