import React from 'react'
import { styled } from '@theme'
import { Heading } from '@components'
import * as DialogPrimitive from '@radix-ui/react-dialog'

const ModalTitle = styled( DialogPrimitive.Title, {
  margin: 0,
  fontSize: 17,
})

// For the container of the modal header that sits on top of the modal
// This contains the title, optional subtitle on the left and the close button on the right

const HeaderWrap = styled('header', {
  position: 'realative',
  width: '100%',
  marginBottom: 32,

  '> *:not(:last-child)': {
    marginBottom: 12
  },

  p: {
    fontSize: '$s2',
    lineHeight: 1.5
  }
})

// -------------- Typescript declarations -------------- //

interface HeaderProps {
  title?: string | number
  descp?: string | number | React.ReactNode
}

// ---------- This is the end of declarations ---------- //

export const ModalHeader = ({ 
  title,
  descp
  }:HeaderProps ) => {

  return(

    <HeaderWrap>
      <ModalTitle><Heading bold="bold" size="l4" {...{ title }} /></ModalTitle>
      { descp ? ( <DialogPrimitive.Description>{ descp }</DialogPrimitive.Description> ) : null }
    </HeaderWrap>

  )
}