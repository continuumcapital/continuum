import React from 'react'
import { styled } from '@theme'

// For the master container of the foundational Image component
// This component is used to automate spacing, sizes, widths, ect for components wrapped within this components

const ImageWrap = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'relative',
  width: '100%',
  overflow: 'hidden',

  // This places the image to act as a traditional background image
  // The image takes up the full width and height of the container - holding the image in the center 

  img: {
    width: '100%',
    height: '100%',
    objectFit: 'cover'
  },

  // For the variants of the image that can change the size, border radius, and alignment of the image
  // These are all optional and are altered based on the design comps

  variants: {

    // For the different sizing of the images

    variant: {
      thumb: { height: 100, width: 150 },
      hero: { height: 500 }
    },

    // For the alignment of the image within the container
    // By default, the image is positioned in the center and can be altered to sit on the top, left, right, and bottom

    alignment: {
      top: { alignItems: 'flex-start' },
      bottom: { alignItems: 'flex-end' },
      left: {},
      right: {}
    },

    // Supporting the border radius that be used for the images
    // This will round of the corner in various radii 

    borderRadius: {
      r0: { borderRadius: '$r0' },
      r1: { borderRadius: '$r1' },
      r2: { borderRadius: '$r2' }
    }
  }
})

// -------------- Typescript declarations -------------- //

interface ImageProps {
  variant?: 'thumb' | 'hero'
  alignment?: 'top' | 'bottom' | 'left' | 'right'
  borderRadius?: 'r0' | 'r1' | 'r2'
  image?: any
  alt?: any
}

// ---------- This is the end of declarations ---------- //

export const Image = ({
    variant,
    alignment,
    borderRadius,
    image,
    alt
  }: ImageProps ) => {
  
  return(

    <ImageWrap {...{ variant, alignment, borderRadius }}>
      { image ? (
        <img src={ image } alt={ alt } />
      ) : ( 
        <img src="/locations/edinburugh.jpg" alt="Gather Platform" /> 
      )}
    </ImageWrap>
    
  )
}
