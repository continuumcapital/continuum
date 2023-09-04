import React from 'react'
import { styled } from '@theme'
import { Button } from '@components'

// For the master container of the button container
// This holds all the buttons needed so that the buttons are automated to format in a horizontal or vertical layout

const ButtonWrap = styled('div', {
  display: 'inline-flex',
  flexDirection: 'row',
  alignItems: 'center',
  position: 'relative',
  width: '100%',

  // Here we automate the spcaing between the buttons, excluding the last button in the container
  // By defualt, the layout is horizontal, and the spacing is automated to the right of the button

  '> div:not(:last-child)': {
    marginRight: 8
  },

  // Here we use variants to support two conditions - one for vertical layouts and one for full width
  // Veritcal layout should be self-explanitory but full-width is used for places needing symmetry in a comp
  // Such as to align to the content above that goes full-width of and buttons needs to fit the width

  variants: {

    // For the vertical layout of the button
    // The vertical layout, the buttons will always be the same width, 100% of the parent container

    direction: {
      vertical: { 
        flexDirection: 'column',
        '> div': { '&, > div': { width: '100%' },
        '&:not(:last-child)': { margin: '0 0 12px 0' }
        }
      }
    },

    // For the ability to adjust the default spacing between the buttons

    spacing: {
      l0: { '> div:not(:last-child)': { marginRight: 0 } }
    },

    // Because the button container displays buttons inline by default, we add support here
    // For instances where buttons need to extend the full width of the container
    // An example of this is the button container used in the leaderboard card
    // Where the donate and share button extend to the end of the container

    width: {
      fullWidth: {
        '> div': { '&, > div': { width: '100%' } }
      }
    },

    // Here we support the alignment of the button container 
    // As of now, this only supports the right alignments of the buttons

    align: {
      right: { justifyContent: 'flex-end' }
    }
  }
})

// -------------- Typescript declarations -------------- //

interface ButtonContainerProps {
  direction?: 'vertical'
  width?: 'fullWidth'
  align?: 'right'
  children?: React.ReactNode
  spacing?: 'l0'
  buttons?: {
    variant?: 'primary' | 'outline' | 'icon' 
    title?: string
    icon?: string
    iconPlacement?: 'left' | 'right'
    linkUrl?: string
    pageLink?: string
    onClick?: React.MouseEventHandler<HTMLButtonElement>
  }[]
}

// ---------- This is the end of declarations ---------- //

export const ButtonContainer = ({
    buttons, // Required - Buttons to be delcared within the container
    direction, // Optional - Supports the vertical layout of buttons
    width, // Optional - Make the horizontal buttons full-width if the design supports one
    children, // Optional - For custom implementation of buttons if the above doesn't fit the needs
    spacing, // Optional - Supporting spacing convention between buttons
    align // Optional - Supporting the alignment of the buttons within the container
  }: ButtonContainerProps ) => {
  
  return(

    <ButtonWrap {...{ direction, width, spacing, align }}>
      { buttons ? (
        <>
          { buttons.map(( button:any, i ) => (

            <Button 
              key={`button-${ i }`}
              variant={ button.variant }
              title={ button.title }
              icon={ button.icon }
              iconPlacement={ button.iconPlacement }
              linkUrl={ button.linkUrl }
              onClick={ button.onClick }
            />

          ))}
        </>
      ) : <>{ children }</> }
    </ButtonWrap>
    
  )
}
