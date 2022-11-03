import React from 'react'
import { styled } from '@theme'

// For the master container of the the block items
// This parent allows for the width and alignment of children containers within it

const BlockItemWrap = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  position: 'relative',
  width: '100%',

  // For the automated spacing between each of the content wrappers within the BlockItem component
  // This automates the spacing on the bottom of the container, minus the last child

  '> *:not(:last-child)': { marginBottom: 32 },

  // For the ability to align the children content within the container to be centered

  variants: {
    alignment: {
      center: { alignItems: 'center' }
    }
  }
})

// For the container of the content within the BlockItem container
// This sets the layout within the container while the parent observes the structure of their parent container

const BlockItemContent = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  position: 'relative',

  // Set the changes of the width of the content to center in the center of the parent container

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

export const BlockItem = ({ 
    alignment, // Optional - allows the content to be centered within the container
    width, // Optional - allows to inset the content to be smaller than the master container
    children, // For all of the children content obseve the styling of Content container
  }: BlockItemProps ) => {

  return(

    <BlockItemWrap {...{ alignment }}>
      <BlockItemContent {...{ width }}>{ children }</BlockItemContent>
    </BlockItemWrap>
    
  )
}
