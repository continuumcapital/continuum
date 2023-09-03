import React from 'react'
import * as DialogPrimitive from '@radix-ui/react-dialog'
import { ModalTrigger, ModalWrap, ModalContent, ModalHeader, ModalActions } from './Parts'

// -------------- Typescript declarations -------------- //

interface ModalProps {
  width?: 'small' | 'medium' | 'large' | 'fullWidth'
  title?: string
  descp?: string | number | React.ReactNode
  triggerButtonVariant?: 'primary' | 'outline' | 'icon' 
  triggerTitle: string | number
  triggerTitleUnBold?: boolean
  triggerIcon?: string
  children: React.ReactNode
  actionButtonTitle?: string
  actionButtonHref?: string
  actionButtonPageLink?: string
  actionButtonOnClick?: React.MouseEventHandler<HTMLButtonElement>
}

// ---------- This is the end of declarations ---------- //

export const Modal = ({ 
    title, // Required - for the title of the modal on top
    width, // Optional - allows for small, medium, or large width variantions
    descp, // Optional - for the description below the title
    triggerButtonVariant, // Optional - matches button variations for the trigger
    triggerTitle, // Required - title of the button that opens the modal
    triggerTitleUnBold,
    triggerIcon,
    children, // Optional - for the main content inside othe modal
    actionButtonTitle, // Optional - for the action button on the bottom right of the modal
    actionButtonOnClick, // Optional - on click event for the action button on the bottom right of the modal
    actionButtonHref, // Optional - click to external site
    actionButtonPageLink // Optional - click to internal page link
  }:ModalProps ) => {

  return(

    <DialogPrimitive.Root>
      <ModalTrigger 
        variant={ triggerButtonVariant }
        title={ triggerTitle }
        titleUnBold={ triggerTitleUnBold }
        icon={ triggerIcon }
      />

      <ModalWrap {...{ width }}>
        { title || descp ? ( <ModalHeader {...{ title, descp }} /> ) : null }
        { children && ( <ModalContent>{ children }</ModalContent> )}
        { actionButtonTitle && ( 
          <ModalActions {...{ actionButtonTitle, actionButtonOnClick, actionButtonHref, actionButtonPageLink }} /> 
        )}
      </ModalWrap>
    </DialogPrimitive.Root>
    
  )
}
