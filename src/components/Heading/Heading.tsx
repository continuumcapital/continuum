import React from 'react'
import { styled } from '../../../stitches.config'

// For the master container of the headings used throughout the size
// This displays the heading as a block element, and allows for bolding and htags within it

const HeadingWrap = styled('div', {
  position: 'relative',
  fontFamily: '$sansSerif',

  // For the different font sizes supported within the headings of the site

  variants: {
    size: {
      l0: { fontSize: '$s0' },
      l1: { fontSize: '$s1' },
      l2: { fontSize: '$s2' },
      l3: { fontSize: '$s3', lineHeight: 1.3 },
      l4: { fontSize: '$s4' },
      l5: { fontSize: '$s5', lineHeight: 1.3 },
      l6: { fontSize: '$s6' },
      l7: { fontSize: '$s7', lineHeight: 1.1 }
    },

    // For the support of different colors that the heading can be

    color: {
      white: { color: '$white' },
      purple: { color: '$majorelleBlue' }
    },

    font: {
      code: { fontFamily: '$code' }
    }
  }
})

// -------------- Typescript declarations -------------- //

interface HeadingProps {
  size?: 'l0' | 'l1' | 'l2' | 'l3' | 'l4' | 'l5' | 'l6' | 'l7'
  color?: 'white' | 'purple'
  title: any
  bold?: 'bold' | 'heavy'
  font?: 'code'
}

// ---------- This is the end of declarations ---------- //

export const Heading = ({
    size,
    font,
    color,
    title,
    bold
  }:HeadingProps) => {
  
  return(
    
    <HeadingWrap {...{ size, color }}>
      <>
        { font == 'code' ? ( <span style={{ fontFamily: 'Source Code Pro' }}>{ title }</span> ) 
        : (
          <>
            { bold == 'heavy' ? ( <strong style={{ fontFamily: 'Satoshi-Black' }}>{ title }</strong> ) 
            : bold == 'bold' ? ( <strong style={{ fontFamily: 'Satoshi-Bold' }}>{ title }</strong> ) 
            : ( <>{ title }</> )
            }
          </>
          )
        }
      </>
    </HeadingWrap>
    
  )
}
