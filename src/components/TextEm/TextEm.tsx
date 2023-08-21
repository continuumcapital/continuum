import React from 'react'
import { styled } from '@theme'

const Em = styled('em', {
  position: 'relative',
  display: 'inline-block',

  variants: {
    color: {
      danger: { color: 'red' }
    }
  }
})

interface EmProps {
  children: React.ReactNode
  color?: 'danger'
}

export const TextEm = ({ children, color }:EmProps) => {
  return(

    <Em {...{ color }}>{ children }</Em>

  )
}

