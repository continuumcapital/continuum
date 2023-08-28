import React from 'react'
import * as DropdownMenu from '@radix-ui/react-dropdown-menu'
import { styled, keyframes } from '@theme'
import { Icon } from '@components'

// For the animation for the reveal of the dropdown, once the trigger is clicked
// This will animate the dropdown content in by subtly scaling in

const scaleIn = keyframes({
  '0%': { opacity: 0, transform: 'scale( 0.95 )' },
  '100%': { opacity: 1, transform: 'scale( 1 )' },
})

// For the master container of the Dropdown Trigger
// This trigger is used to launch the dropdown below, and is a button

const DropdownTrigger = styled(DropdownMenu.Trigger, {
  display: 'flex',
  alignItems: 'center',
  position: 'relative',

  // For the automated spacing for the content that is needed within the Trigger
  // This is conditional, so if there is only one item, this will not be applied

  '> *:not(:last-child)': {
    marginRight: 8
  },

  // For the customization of the Trigger depending on the context if they are needed
  // This would account for the size of the trgger and the width of the trigger - by default it's inline 

  variants: {

    // This variant isn't used often. Most of the time the <Button /> component should accomidate for visual
    // representation of the trigger button. But if this is needed inline, we can account for that circumstance

    triggerSize: {
      l0: { 
        '> *:not(:last-child)': { marginRight: 2 }, 
        svg: { width: 14, marginTop: 2, color: '$A11yAAborder' } 
      }
    },

    // Here we add the ability for the trigger to act as a block element
    // This will allow the width takes up the full width of the container

    triggerWidth: {
      half: { width: '50%', '@mobile': { width: '100%' }},
      full: { width: '100%' }
    }
  }
})

// For the master container of the dropdown content, which shows up when the user clicks the trigger
// This is a skeleton and doesn't hold any obvious visible styling - that will come from the actual component

const DropdownContent = styled(DropdownMenu.Content, {
  paddingTop: 4,
  margin: '0 12px',
  animationDuration: '400ms',
  animationTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
  willChange: 'transform, opacity',
  zIndex: 9999,
  '&[data-state="open"]': { animationName: scaleIn },
  '@mobile': { margin: '0 4px' },

  // Is is basically a variant for the component, but have to do it throguh a class because variants are
  // not supported with the primitives. This will make the trigger be full width of the container
  // This is achived, as seen below by the boolean attr 'contentFullWidth'

  '&.dropdown__width--full': {
    width: 'var(--radix-dropdown-menu-trigger-width)',
    maxHeight: 'var(--radix-dropdown-menu-content-available-height)'
  }
})

// -------------- Typescript declarations -------------- //

interface DropdownProps {
  removeArrow?: boolean
  trigger: string | React.ReactNode
  triggerWidth?: 'half' | 'full'
  content: React.ReactNode
  contentFullWidth?: boolean
  triggerSize?: 'l0'
}

// ---------- This is the end of declarations ---------- //

export const Dropdown = ({ 
    removeArrow, // Optional - This will remove the arrow on the right of the container
    trigger, // Required - For the trigger that will open the dropdown when it is clicked
    triggerWidth, // Optional - Supporting different widths of the dropdown trigger
    content, // Required - For the content that shows when the trigger is clciked
    contentFullWidth, // Optional - supporting the content to be the full width of it's parent container
    triggerSize // Optional - Supporting different sizes of the Trigger button
  }:DropdownProps) => {

  return(

    <DropdownMenu.Root>
      <DropdownTrigger {...{ triggerSize, triggerWidth }}>
        <>{ trigger }</>
        { removeArrow ? null : ( <Icon size="l0" icon="chevron-down" /> )}
      </DropdownTrigger>

      <DropdownMenu.Portal>
        <DropdownContent className={ contentFullWidth ? 'dropdown__width--full' : '' }>
          { content }
        </DropdownContent>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
      
  )
}