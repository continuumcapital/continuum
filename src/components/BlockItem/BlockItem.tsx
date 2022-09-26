import React from 'react'
import { styled } from '@theme'

const BlockItemWrap = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  position: 'relative',
  width: '100%',

  // For the automated spacing between each of the content wrappers within the BlockItem component
  // This automates the spacing on the bottom of the container, minus the last child

  '> *:not(:last-child)': {
    marginBottom: 32
  },

  variants: {
    alignment: {
      center: {
        alignItems: 'center'
      }
    }
  }
})

const BlockItemContent = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  position: 'relative',

  variants: {
    width: {
      medium: { 
        maxWidth: 'calc(800px - 10%)',
        width: '90%'
      }
    }
  }
})

// -------------- Typescript declarations -------------- //

interface BlockItemProps {
  alignment?: 'center'
  width?: 'medium'
  children: React.ReactNode
}

// ---------- This is the end of declarations ---------- //

export const BlockItem = ({ children, width, alignment }: BlockItemProps ) => {
  
  return(

    <BlockItemWrap {...{ alignment }}>
      <BlockItemContent {...{ width }}>
        { children }
      </BlockItemContent>
    </BlockItemWrap>
    
  )
}
