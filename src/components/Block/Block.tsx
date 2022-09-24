import React from 'react'
import { styled } from '../../../stitches.config'

// For the master container of the foundational Block component
// This component is used to automate spacing, sizes, widths, ect for components wrapped within this components

const BlockWrap = styled('div', {
  display: 'flex',
  position: 'relative',
  width: '100%'
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
      large: { maxWidth: 1300, width: '90%' }
    },

    outline: {
      true: {
        padding: 20,
        borderRadius: '$r3',
        border: '1px solid $border'
      }
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

          '> *:not(:last-child)': {
            marginTop: 32
          }
        }
      }
    },

    // For the columns supported within a block component
    // This is needed if content within the block needs to be side-by-side 

    columns: {
      2: { 
        flexDirection: 'row',

        '> *': {
          width: '50%',
          '&:not(:last-child)': { marginRight: '5%' }
        },

        '@media( max-width: 767px )': {
          flexDirection: 'column',
          '> *': { width: '100%', marginRight: '0px !important' },
        }
      },
      3: {},
      4: {},
      5: {}
    }
  }
})

// -------------- Typescript declarations -------------- //

interface BlockProps {
  width?: 'tiny' | 'small' | 'medium' | 'large'
  alignment?: 'left' | 'center' | 'right'
  verticalAlignment?: 'center'
  mobileContent?: 'reverse'
  columns?: 2 | 3 | 4 | 5
  children: React.ReactNode
  outline?: boolean
  blockItemSpacing?: 'l0' | 'l1' | 'l2' | 'l3'
}

// ---------- This is the end of declarations ---------- //

export const Block = ({
    width, // Optional - For the supported widths of the block component
    alignment, // Optional - For the ability to align the content left, center, or right
    verticalAlignment, // Optional - For the ability to align the content centered within the container 
    columns, // Optional - Supporting side-by-side content to sit inline 
    mobileContent, // Optional - Reformats the content on mobile breakpoints
    children, // Required - Holds all of the content within the block component
    outline,
    blockItemSpacing
  }: BlockProps ) => {
  
  return(

    <BlockWrap>
      <BlockContent {...{ width, alignment, verticalAlignment, columns, mobileContent, outline, blockItemSpacing }}>
        { children }
      </BlockContent>
    </BlockWrap>
    
  )
}
