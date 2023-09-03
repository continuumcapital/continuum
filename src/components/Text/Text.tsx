import React from 'react'
import { styled } from '@theme'

// For the master container of the foundational text component
// This component is used to automate spacing, sizes, widths, ect for components wrapped within this components

const TextWrap = styled('div', {
  position: 'relative',
  maxWidth: 800,
  width: '100%',
  fontSize: '$s1',

  // On tablet breakpoints we make sure all of the text in left aligned 
  // And the line height remains conistant between all of the text - here we are battling third parties, such as Greenhouse WYSIWYG

  '@tablet': {
    '*': { textAlign: 'left !important' },
    'span, p': { lineHeight: '1.3 !important' }
  },

  // For the spacing automation of text that lives within the container

  '> p:not(:last-child)': {
    margin: '0 auto 32px',
    '@tablet': { marginBottom: 16 }
  },

  // Here we adjust for cases, such as if an h, ul, or ol element is within the text container
  // This will make the spacing large between a p tag and the above mentioned

  '> *:not( p )': {
    marginBottom: 20
  },

  // For the automation of the links within the text component
  // This is A11y compliant by adding the underline decoration along with a color to indicate afforance

  a: {
    textDecoration: 'underline',
    color: '$green'
  },

  // For the line height of the text within long-form content
  // This is only specific to the text container and overrides the default line height needed for other components

  p: { lineHeight: 1.5 },
  strong: { fontFamily: '$sansSerifBlack' },

  // For the varients used within the text component
  // Here we address the font size, columns, alignment, and width

  variants: {

    // Supporting the different font sizes in the text container
    // By default the text is 16px and these change the text sizes to be larger

    fontSize: {
      l0: {  
        '*': {
          fontSize: '$s1 !important', 
          lineHeight: '1.5 !important',
          '@tablet': { fontSize: '$s3' }
        }
      },

      // Here is the larger font size within the container
      // We address the default and the font size changes on tablet breakpoints and below

      l1: { 
        '*': {
          fontSize: '$s3 !important', 
          lineHeight: '1.5 !important',
          '@tablet': { fontSize: '$s3' }
        }
      }
    },

    // For the alignment od the text within the container
    // By default, the text is aligned on the left. The center alignment displays the text in the center of the container

    alignment: {
      center: { margin: '0 auto' }
    },

    // For spporting the different widths within the container
    // By default, the text is 100% widt hand this allows for changes for the readability of the text

    width: {
      small: { maxWidth: 600 }
    },

    // Here we support the alignment of the text that varies from the left algin default
    // This only allows for center of alignment, which can be found in the Job Details - under the 'Position overview'

    textAlign: {
      center: { textAlign: 'center' }
    }
  }
})

// -------------- Typescript declarations -------------- //

interface TextProps {
  fontSize?: 'l0' | 'l1'
  width?: 'small'
  alignment?: 'center'
  children?: React.ReactNode
  textAlign?: 'center'
  dangerouslySetInnerHTML?: any
}

// ---------- This is the end of declarations ---------- //

export const Text = ({
    fontSize, // Supporting the changes in the default font size for the text
    children, // Supporting the text, quotes, bullets, ect within the text component
    width, // Supporting the width of the text within the container
    alignment, // Supporting the center alignment of the text within the container
    textAlign, // Supporting center alignment of the text
    dangerouslySetInnerHTML // Supporting API calls that come in from a third party WYSIWYG
  }: TextProps ) => {
  
  return(

    <TextWrap {...{ fontSize, width, alignment, textAlign, dangerouslySetInnerHTML }}>
      { children }
    </TextWrap>
    
  )
}
