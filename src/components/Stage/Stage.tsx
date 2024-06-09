import React from 'react'
import { styled } from '@theme'
import { Heading } from '@components'
import ScrollAnimationItem from 'react-scroll-fade-animation'

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
  flexDirection: 'column',
  position: 'relative',
  maxWidth: 1250,
  width: '90%',
  '> *:not(:last-child)': { marginBottom: 32 },

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
  width: '100%',
  margin: '9px 50px 0 0',
  paddingRight: 70,
  whiteSpace: 'nowrap',
  paddingBottom: 20,
  borderBottom: '2px solid $white'
})

// For the width of the text within the container
// The child component will hold the width at 100% and this containers sets it

const StageText = styled('div', {
  display: 'grid',
  gridTemplateColumns: 'repeat(2, 1fr)',
  gridTemplateRows: '1fr',
  gridColumnGap: '100px',
  gridRowGap: '50px',
  position: 'relative',
  width: '100%',
  '@tablet': { gridTemplateColumns: 'repeat(1, 1fr)' }
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
    
    <section style={{ width: '100%' }}>
      <ScrollAnimationItem path={'top'}>
        <StageWrap {...{ background }}>
          <StageContent>
            <StageTitle><Heading bold="bold" size="l7" {...{ title }} /></StageTitle>
            <StageText>{ children }</StageText>
          </StageContent>
        </StageWrap>
      </ScrollAnimationItem>
    </section>

  )
}
