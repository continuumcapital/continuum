import React from 'react'
import { styled } from '@theme'
import { Heading } from '@components'

// For the master container of the title of the job department category
// This is positioned on the left of the Job list container, containing one word, with the white dash to the right

const ListBlockTitle = styled('div', {
  position: 'relative',
  width: 300
})

// For the container of the actual word and the line on the right of the container
// We need this container to be able to position the content on the flex end of the container - for alignment purposes

const ListBlockTitleContent = styled('div', {
  display: 'flex',
  flexDirection: 'row-reverse',
  position: 'relative',
  width: '100%',
  
  // For the alignment on the word within the container
  // THis sets the spacing on the top and to the right of the container, and positions the text and line vertically centered

  '> *': { 
    display: 'flex',
    alignItems: 'center',
    marginTop: 28,
    paddingRight: 50,

    // For the white line on the right side of the container
    // This looks like the '––––'

    '&:after': {
      content: '',
      position: 'relative',
      width: 32,
      minWidth: 32,
      height: 2,
      marginLeft: 12,
      background: '$white'
    }
  },

  // On the desktop breakpoint we remove all of the spacing attributes
  // As well as the line on the right side of the container, and make sure the titles are aligned to the left

  '@desktop': {
    flexDirection: 'row !important',

    // Remove the spacing for the word and remove the line on the right

    '> *': {
      marginTop: 0,
      paddingRight: 0,
      '&:after': { display: 'none' }
    }
  }
})

// -------------- Typescript declarations -------------- //

interface TitleProps {
  title: any
} 

// ---------- This is the end of declarations ---------- //

export const BlockTitle = ({ title }:TitleProps) => {

  // Here we add the function to only use the first word from the title coming in from the API
  // For example, if a department says 'Finance and Accounting', this function shortens it to only say 'Finance'

  const getFirstWord = (string: string): string => {
    const words = string.split(' ')
    return words[ 0 ]
  }

  return(

    <ListBlockTitle>
      <ListBlockTitleContent>

        <Heading 
          bold="heavy" 
          size="l1" 
          title={ getFirstWord( title ) } 
        />

      </ListBlockTitleContent>
    </ListBlockTitle>

  )
}