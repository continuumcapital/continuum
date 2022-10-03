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

  variants: {
    background: {
      blue: { backgroundColor: '$majorelleBlue', color: '$white', }
    }
  }
})

const StageContent = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  position: 'relative',

  variants: {
    width: {
      small: {},
      medium: { maxWidth: 1080, width: '90%' },
      large: {}
    }
  }
})

// For the title of the stage - this is on the left side of the container

const StageTitle = styled('div', {
  display: 'flex',
  alignItems: 'center',
  alignSelf: 'flex-start',
  position: 'relative',
  margin: '4px 50px 0 0',
  paddingRight: 70,
  whiteSpace: 'nowrap',

  // For the line after the text

  '&:after': {
    content: '',
    position: 'absolute',
    top: 16,
    right: 0,
    width: 50,
    height: 3,
    background: "$white"
  }
})

const StageText = styled('div', {
  maxWidth: 767
})

// ---------- Typescript declarations ---------- //

interface StageProps {
  background?: 'blue'
  title: string
  children: React.ReactNode
}

// ---------- This is the end of declarations ---------- //

export const Stage = ({ background, title, children }:StageProps) => {

  return(
    
    <StageWrap {...{ background }}>
      <StageContent width="medium">
        <StageTitle><Heading bold="bold" size="l3" {...{ title }} /></StageTitle>
        <StageText><Text fontSize="l1">{ children }</Text></StageText>
      </StageContent>
    </StageWrap>

  )
}
