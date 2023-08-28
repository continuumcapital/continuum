import React from 'react'
import { styled } from '@theme'
import { AnimatedBlob } from '@components'
import { useTheme } from 'next-themes'

// For the master container of the stage backgrond
// This contains the blog that remains in a fixed position as the user scrolls down the page

const StageContainer = styled('section', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100vw',
  height: '100vh',
  paddingTop: 32,
  zIndex: 10,

  // For the sizing of the canvas within the container
  // The canvas is what contains the WebGl blob

  canvas: {
    transform: 'scale( 0.4 )',
    opacity: 0,
    transition: '$s3 cubic-bezier(.18,.79,.34,1)'
  },

  // Here we remove all the interaction to the webGl background
  // This is so the user can not rotate or interact with the background

  '&, *': {
    pointerEvents: 'none !important',
    userSelect: 'none !important',
  },

  // For the blend mode of the blon depending on the backgrond of the site
  // This will change to show the blob on light or dark backgrounds

  variants: {
    variant: {
      lightMode: { mixBlendMode: 'none' },
      darkMode: { mixBlendMode: 'screen' }
    },

    // Here we add the animation of the blob to scale in and fade in

    showBlob: { 
      true: { canvas: { transform: 'scale( 1 )', opacity: 1 }},
      false: {}
    }
  }
})

// For the container of the blob to sit in the center of the master container
// This will hold the blob in the center of the container, where it changes shape when the user scrolls

const StageContent = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'relative',
  width: '100%',
  height: '100%',
  maxHeight: 750,
  opacity: 1,
  transition: '1000ms',
  '@tablet': { opacity: 0.4 }
})

// -------------- Typescript declarations -------------- //

interface BlobProps {
  showBlob?: 'true' | 'false'
}

// ---------- This is the end of declarations ---------- //

export const StageBg = ({ showBlob }:BlobProps) => {
  const { theme, setTheme } = useTheme()

  return(
    
    <StageContainer {...{ showBlob }} variant={ theme == 'dark' ? 'darkMode' : theme == 'light' ? 'lightMode' : undefined }>
      <StageContent><AnimatedBlob /></StageContent>
    </StageContainer>

  )
}
