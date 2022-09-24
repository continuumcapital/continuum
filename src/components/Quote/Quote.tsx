import React from 'react'
import { styled } from '../../../stitches.config'

// For the master container of the quote
// This is visually represented by the vertical line on the left of the container and the text to the left

const QuoteWrap = styled('div', {
  position: 'relative',
  width: '100%',
  padding: '8px 0 8px 24px',
  fontSize: '$s1',

  // Remove the default padding on the p container

  p: { margin: 0 },

  // For the vertical line on the left of the container
  // This is meant to serve as a callout of information, standard convention seen across other sites

  '&:after': {
    content: '',
    position: 'absolute',
    top: 0,
    left: 0,
    width: 2,
    height: '100%',
    background: '$green'
  }
})

// For the container of all of the content within the quote
// This holds the quoted text, and the optional credit block on the bottom, attributed to the author

const QuoteContent = styled('div', {
  position: 'relative',
  lineHeight: 1.4
})

// For the container of the source of the quote, on the bottom of the container
// This holds the reference of who said the quote, where it came from, ect

const Source = styled('div', {
  position: 'relative',
  maxWidth: '85%',
  marginTop: 16,
  fontFamily: '$sansSerif',
  fontSize: '$s0'
})

// -------------- Typescript declarations -------------- //

interface QuoteProps {
  quote: string
  source?: string
  sourceLink?: string
}

// ---------- This is the end of declarations ---------- //

export const Quote = ({
    quote,
    source,
    sourceLink
  }: QuoteProps ) => {
  
  return(

    <QuoteWrap>
      <QuoteContent>
        <p>{ quote }</p>

        { source ? (
          <Source>
            { sourceLink ? ( <a href={ sourceLink } target="_blank">{ source }</a> ) 
            : ( <strong>{ source }</strong> )
            }
          </Source>
        ) : null}
      </QuoteContent>
    </QuoteWrap>
    
  )
}
