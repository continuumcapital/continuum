import React, { useState, useEffect, ReactNode, ReactElement, cloneElement } from 'react'
import ReactDOM from 'react-dom'
import { styled, keyframes } from '@theme'
import { Button } from '@components'

const contentShow = keyframes({
  '0%': { opacity: 0, transform: 'scale( .96 )' },
  '100%': { opacity: 1, transform: 'scale( 1 )' },
})

const modalShow = keyframes({
  '0%': { opacity: 0 },
  '100%': { opacity: 1 },
})

// For the master container of the modal container
// This is used when an appropriate trigger has been clicked that needs modal support

const ModalWrap = styled('div', {
  display: 'flex',
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100vw',
  height: '100vh',
  zIndex: 9999
})

// For the container of all of the main content within the master container
// This holds the main content within the center of the master container

const ModalContent = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  position: 'relative',
  maxWidth: 900,
  width: '90%',
  margin: '50px auto',
  padding: '50px 0 32px',
  background: '$bgPrimary',
  borderRadius: '$r2',
  transition: '$s1',
  overflow: 'scroll',
  animation: `${ contentShow } 300ms cubic-bezier(0.16, 1, 0.3, 1)`,
  zIndex: 1,

  // For changes on mobile for the contact 
  // Here we make sure the contnet of the modal takes up the full width and height of the container

  '@tablet': {
    width: '100%',
    height: '100vh',
    borderRadius: '0px'
  }
})

// For the close button on the top right of the main content container
// This button is used for the user to be able to close the modal

const ModalClose = styled('div', {
  position: 'absolute',
  top: 12,
  right: 12
})

// For the overlay that comes as the background for the modal
// This is the traditional dark overlay, where the main content sits on top of

const ModalOverlay = styled('div', {
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  background: 'rgba( 0,0,0, 0.9 )',
  zIndex: 0,
  transition: '$s1',
  animation: `${ modalShow } 300ms`
})

// -------------- Typescript declarations -------------- //

interface ModalProps {
  content: ReactNode
  trigger: ReactElement
}

// ---------- This is the end of declarations ---------- //

export const Modal = ({ 
    content, // Required - For the content within the modal
    trigger // Required - For the trigger to open the modal
  }:ModalProps) => {

  const [ isOpen, setIsOpen ] = useState(false)
  const [ modalRoot, setModalRoot ] = useState<HTMLElement | null>(null)

  useEffect(() => {
    setModalRoot(document.getElementById('modal-root'));
  }, []);

  const showModal = () => setIsOpen(!isOpen);
  const hideModal = () => setIsOpen(!isOpen);

  const triggerElement = cloneElement(trigger, {
    onClick: showModal,
    ...trigger.props
  });

  return (
    <>
      {triggerElement}

      {isOpen && modalRoot && (
        ReactDOM.createPortal(
          <>
            <ModalWrap onClick={ hideModal }>
              <ModalContent onClick={e => e.stopPropagation()}>  
                { content }
                <ModalClose><Button variant="icon" icon="cross-1" onClick={ hideModal } /></ModalClose>
              </ModalContent>
              <ModalOverlay />
            </ModalWrap>
          </>,
          modalRoot
        )
      )}
    </>
  );
}
