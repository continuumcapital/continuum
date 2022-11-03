import React from 'react'
import { styled } from '@theme'

// For the master container of the foundational Block component
// This component is used to automate spacing, sizes, widths, ect for components wrapped within this components

const BlockWrap = styled('section', {
  display: 'flex',
  position: 'relative',
  width: '100%',
  zIndex: 1
})

// For all of the content within the site
// This positions the content centered horizontally within the container

const BlockContent = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  position: 'relative',
  width: '100%',
  margin: '0 auto',

  // Support for the different variables that can be used within the component
  // This can vary the size and alignment of the content within the container

  variants: {

    // For the spacing of the children elements within the container 
    // This keeps the spacing consistant within extra work and adding spacing on a component itself

    blockItemSpacing: {
      l0: { '> *': { marginBottom: 32 }},
      l1: { '> *': { marginBottom: 50 }},
      l2: { '> *': { marginBottom: 100 }},
      l3: { '> *': { marginBottom: 150, '@media(max-width: 767px)': { marginBottom: 75 }}},
    },

    // For the different widths supported of the content within the site
    // This can be tiny, small, medium, or large

    width: {
      tiny: { maxWidth: 600, width: '90%' },
      small: { maxWidth: 800, width: '90%' },
      medium: { maxWidth: 1024, width: '90%' },
      large: { maxWidth: 1400, width: '90%' }
    },
    
    // For the alignment of the content within the container
    // This can align the children content to the left, center, or to the right

    alignment: {
      left: { justifyContent: 'flex-start' },
      center: { alignItems: 'center' },
      right: { justifyContent: 'flex-end' }
    },

    // For the vertical alignment of the content within the block component
    // This holds everything to be centered horizontally, such as the the illustration on the left and text on the right

    verticalAlignment: {
      center: { alignItems: 'center' }
    },

    // To reverse the mobile content on mobile breakpoints
    // For example if an image is on the right to text, then on mobile we need the image to be on top
    // This will correct for design consistancy on mobile

    mobileContent: {
      reverse: { 
        '@media(max-width: 767px)': { 
          flexDirection: 'column-reverse !important',
          '> *:not(:last-child)': { marginTop: 32 }
        }
      }
    }
  }
})

// -------------- Typescript declarations -------------- //

interface BlockProps {
  id?: string
  width?: 'tiny' | 'small' | 'medium' | 'large'
  alignment?: 'left' | 'center' | 'right'
  verticalAlignment?: 'center'
  mobileContent?: 'reverse'
  children: React.ReactNode
  blockItemSpacing?: 'l0' | 'l1' | 'l2' | 'l3'
  ref?: any
}

// ---------- This is the end of declarations ---------- //

export const Block = ({
    ref, // Optional - this is needed to add the anchor links for header links
    id, // Optional - this is needed to add the anchor links for header links
    width, // Optional - For the supported widths of the block component
    blockItemSpacing, // Optional - will automate the spacing of children items within the block container
    alignment, // Optional - For the ability to align the content left, center, or right
    verticalAlignment, // Optional - For the ability to align the content centered within the container 
    mobileContent, // Optional - Reformats the content on mobile breakpoints
    children // Required - Holds all of the content within the block component
  }: BlockProps ) => {
  
  return(

    <BlockWrap ref={ ref } id={ id }>
      <BlockContent {...{ width, alignment, verticalAlignment, mobileContent, blockItemSpacing }}>
        { children }
      </BlockContent>
    </BlockWrap>
    
  )
}
