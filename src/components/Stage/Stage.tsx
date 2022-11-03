import React from 'react'
import { styled } from '@theme'
import { Heading, Text } from '@components'

// For the master container of the stage component
// This component is meant for basic text, with the title on the left of the container and the text on the right

const StageWrap = styled('section', {
  display: 'flex',
  justifyContent: 'center',
  position: 'realtive',
  width: '100%',
  padding: '132px 0',
  marginBottom: 100,
  backgroundBlendMode: 'multiply',

  // Here we add variants to change the colors of the background
  // So far this is gray but can be expended the more the site develops

  variants: {
    background: {
      gray: { 
        backgroundColor: '$grayBg', 
        color: '$white', 
        '@tablet': { padding: '120px 0' }
      }
    }
  },

  // For spacing changes on the tablet and mobile breakpoints

  '@tablet': { padding: '50px 0' }
})

// For the content within the parent container
// This contains all of the content to sit in the center of the container - the title, border line, and text

const StageContent = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  position: 'relative',

  // For the options of the width of the content within the container
  // This sets the content to sit in the center of the parent container

  variants: {
    width: {
      small: {},
      medium: { maxWidth: 1080, width: '90%' },
      large: {}
    }
  },

  // Here we change the orientation of the content on tablet and mobile breakpoints
  // We change this from row to column and automate the spacing between the title and text

  '@tablet': {
    flexDirection: 'column',
    '> *:not(:last-child)': { marginBottom: 20 }
  }
})

// For the title of the stage - this is on the left side of the container
// This holds the title and the border line to the left of the text

const StageTitle = styled('div', {
  display: 'flex',
  alignItems: 'center',
  alignSelf: 'flex-start',
  position: 'relative',
  margin: '4px 50px 0 0',
  paddingRight: 70,
  whiteSpace: 'nowrap',

  // For the line after the text
  // This is on the right side of the container seperating the title and the text

  '&:after': {
    content: '',
    position: 'absolute',
    top: 16,
    right: 0,
    width: 50,
    height: 3,
    background: '$white',

    // Remove the border line on mobile and tablet breakpoints

    '@tablet': { display: 'none' }
  }
})

// For the width of the text within the container
// The child component will hold the width at 100% and this containers sets it

const StageText = styled('div', {
  maxWidth: 767
})

// ---------- Typescript declarations ---------- //

interface StageProps {
  background?: 'gray'
  title: string
  children: React.ReactNode
}

// ---------- This is the end of declarations ---------- //

export const Stage = ({ 
    background, // Optional - supporting vairants of the background color 
    title, // Requried - For the title of the section
    children // Required - For the children content wihtin the container
  }:StageProps ) => {

  return(
    
    <StageWrap {...{ background }}>
      <StageContent width="medium">
        <StageTitle><Heading bold="bold" size="l3" {...{ title }} /></StageTitle>
        <StageText><Text fontSize="l1">{ children }</Text></StageText>
      </StageContent>
    </StageWrap>

  )
}
