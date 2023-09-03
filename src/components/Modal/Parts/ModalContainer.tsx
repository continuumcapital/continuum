import React from 'react'
import { styled, keyframes } from '@theme'
import { Overlay } from './Overlay';
import { Button } from '@components'
import * as DialogPrimitive from '@radix-ui/react-dialog'

// For the animation of the modal to subtly scale in when the trigger is clicked

const contentShow = keyframes({
  '0%': { opacity: 0, transform: 'translate(-50%, -48%) scale(.96)' },
  '100%': { opacity: 1, transform: 'translate(-50%, -50%) scale(1)' },
})

// For the master container of all of the content within the modal
// This positions the modal fixed, taking up the full width and height- contains the content and the overlay

const ModalMaster = styled(DialogPrimitive.Portal, {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100vw',
  height: '100vh'
})

// For the main wrapper of the modal
// This is within the center of the container with the overlay in the background

const ModalMain = styled( DialogPrimitive.Content, {
  position: 'fixed',
  top: '50%',
  left: '50%',
  width: '90vw',
  maxWidth: 610,
  maxHeight: '85vh',
  backgroundColor: 'white',
  borderRadius: '$r2',
  boxShadow: '( 0 2px 10px rgba( 0, 0, 0, 0.5 ))',
  transform: 'translate(-50%, -50%)',
  zIndex: 9999,
  '&:focus': { outline: 'none' },

  // For the animation of the modal when it comes into view
  // This will subtly scale in the modal from small to big
  
  '@media (prefers-reduced-motion: no-preference)': {
    animation: `${ contentShow } 300ms cubic-bezier(0.16, 1, 0.3, 1)`,
  },
  
  // For the different variations of the width for the modal wrap
  // This has a default but these variants allow for different widths depending on the context

  variants: {
    width: {
      small: { maxWidth: 400 },
      medium: { maxWidth: 800 },
      large: { maxWidth: 1100 },
      fullWidth: { width: '100vw', height: '100vh' }
    }
  }
})

// For the master container of all of the content witin the modal
// This includes the header on the top, content in the middle, and the action buttons on the bottom

const ModalContent = styled('div', {
  position: 'realitive',
  width: '88%',
  margin: '0 auto',
  padding: '60px 0 50px'
})

// For the container of the close button on the top right of the modal
// This positions the icon to inset a bit - clicking removes the modal from the dom

const CloseModal = styled('div', {
  position: 'absolute',
  top: 20,
  right: 20
})

// -------------- Typescript declarations -------------- //

interface ModalProps {
  width?: 'small' | 'medium' | 'large' | 'fullWidth'
  children: React.ReactNode
}

// ---------- This is the end of declarations ---------- //

export const ModalWrap = ({
    width, // Optional - will change the width of the modal content depending on context
    children // Required - for the main content within the modal
  }:ModalProps ) => {
  
  return(

    <ModalMaster>
      <ModalMain {...{ width }}>
        <ModalContent>{ children }</ModalContent>
        <DialogPrimitive.Close asChild>
          <CloseModal><Button size="l0" icon="x" /></CloseModal>
        </DialogPrimitive.Close>
      </ModalMain>

      <Overlay />
    </ModalMaster>

  )
}
