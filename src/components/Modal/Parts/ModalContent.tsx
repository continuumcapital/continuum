import React from 'react'
import { styled } from '@theme'

const MainContent = styled('div', {
  position: 'relative',
  width: '100%',
  '+ *': { marginTop: 32 }
})

// -------------- Typescript declarations -------------- //

interface ContentProps {
  children: React.ReactNode
}

// ---------- This is the end of declarations ---------- //

export const ModalContent = ({ children }:ContentProps ) => {
  return(

    <MainContent>{ children }</MainContent>
      
  )
}