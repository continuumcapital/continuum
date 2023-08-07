import React from 'react'
import { styled } from '@theme'

// For the master container of the headings used throughout the size
// This displays the heading as a block element, and allows for bolding and htags within it

const HeadingWrap = styled('div', {
  position: 'relative',
  fontFamily: '$sansSerif',

  // For the different font sizes supported within the headings of the site

  variants: {
    size: {
      l0: { fontSize: '$s0', lineHeight: 1.2 },
      l1: { fontSize: '$s1', lineHeight: 1.2 },
      l2: { fontSize: '$s2', lineHeight: 1.2 },
      l3: { fontSize: '$s3', lineHeight: 1.3, '@tablet': { fontSize: '$s1', lineHeight: 1.2 } },
      l4: { fontSize: '$s4', lineHeight: 1.2, '@tablet': { fontSize: '$s2', lineHeight: 1.2 } },
      l5: { fontSize: '$s5', lineHeight: 1.3, '@tablet': { fontSize: '$s3', lineHeight: 1.2 } },
      l6: { fontSize: '$s6', lineHeight: 1.2, '@tablet': { fontSize: '$s4', lineHeight: 1.2 } },
      l7: { fontSize: '$s7', lineHeight: 1.2, '@tablet': { fontSize: '$s5', lineHeight: 1.2 }}
    },

    // For the support of different colors that the heading can be

    color: {
      primary: { color: '$brandPrimary' },
      white: { color: '$white' },
      blue: { color: '$blue' }
    },

    // To change the font family of the heading to be the code font

    font: {
      code: { span: { fontFamily: '$code' }}
    },

    align: {
      center: { textAlign: 'center' },
      right: { textAlign: 'right' }
    },

    allCaps: {
      true: { textTransform: 'uppercase' }
    },

    letterSpacing: {
      'l0': { letterSpacing: 5 }
    }
  }
})

// For the different weights that the heading can be - bold or heavy

const Bold = styled('strong', { fontFamily: '$sansSerifBold' })
const Heavy = styled('strong', { fontFamily: '$sansSerifBlack' })

// -------------- Typescript declarations -------------- //

interface HeadingProps {
  size?: 'l0' | 'l1' | 'l2' | 'l3' | 'l4' | 'l5' | 'l6' | 'l7'
  color?: 'primary' | 'white' | 'blue'
  title?: string | number
  bold?: 'bold' | 'heavy'
  font?: 'code'
  children?: React.ReactNode 
  align?: 'center' | 'right'
  allCaps?: boolean
  letterSpacing?: 'l0'
}

// ---------- This is the end of declarations ---------- //

export const Heading = ({
    size, // Optional - for the font size of the heading
    font, // Optional - for the option to make the font code from the default font
    color, // Optional - To change the color of the text
    title, // Required - For the title of the heading
    bold, // Opitonal - the heading is regular by default but can be changed to bold or heavy weights
    children,
    align,
    allCaps,
    letterSpacing
  }:HeadingProps) => {
  
  return(
    
    <HeadingWrap {...{ size, color, font, align, allCaps, letterSpacing }}>
      { 
        font == 'code' ? ( <span>{ title }</span> ) 
        : title ? (
          <>
            { bold == 'heavy' ? ( <Heavy>{ title }</Heavy> ) 
            : bold == 'bold' ? ( <Bold>{ title }</Bold> ) 
            : ( <>{ title }</> )
            }
          </>
        ) 
        : ( <Bold>{ children }</Bold> )
      }
    </HeadingWrap>
    
  )
}
