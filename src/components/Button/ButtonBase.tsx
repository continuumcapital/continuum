import React from 'react'
import { styled } from '@theme'
import { Icon } from '@components'

// For the master container of the button
// This is needed for custom buttons, where a button needs to preserve alignment and other features

const ButtonWrap = styled('div', {
  display: 'inline-flex',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'relative',
  cursor: 'pointer',
  transition: '$s1',
  fontSize: '1rem',
  fontFamily: '$sansSerifBold',
  whiteSpace: 'nowrap',
  overflow: 'hidden',

  // For the font weight of the text wihin the button
  // By default, strong is bold font so we have to set it to heavy here

  strong: { fontFamily: '$sansSerifBlack' },

  // For the interaction when a button is clicked - provides a scale down until released
  // This is universal for all buttons to give the user feedback that they clicked the button

  '&:active': { transform: 'scale( 0.9 )' }
})

// For the container of the button itself
// This extra container perhaps seems like it is not needed, but preserves the interactions where the button scale on click
// If the parent container wasn't there, then the hit state would observe the scale, potentially creating a bug

const Button = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'relative',
  padding: '16px 20px',
  borderRadius: '$r1',
  transition: '$s1',
  userSelect: 'none',

  // For the default hover effect for the button
  // This is the hover effect when the variant is not present and is a stand-alone link
  // Meaning it doesn't look link a tradtional button

  '&:hover': { 
    background: '$buttonDefault'
  },

  // Here we auto mate the spacing for the contents within the button base
  // For example, this adds spacing between the icon on the left and the title on the right'
  // This also works in reverse where the title is on the left and an icon is on the right

  '> *:not(:last-child)': {
    marginRight: 8
  },

  // For the variants of the button
  // These can be three different types - either primary, outlined or only an icon

  variants: {
    variant: {

      // For the primary button of the container that is the main button used throughout the site
      // This contains the solid background color

      primary: {
        height: 56,
        minWidth: 120,
        padding: '0 32px',
        background: '$brandPrimary',
        color: '$black',
        borderRadius: '$pill',
      
        // For the hover effect of the primary button
        // This makes the button pure black and places a dropshadow

        '&:hover': {
          background: '$white',
          boxShadow: '0 2px 10px rgba( 0, 0, 0, 0.4 )'
        }
      },

      // For the secondary button that is used after the primary for heirarchy purposes

      secondary: {
        height: 56,
        minWidth: 120,
        padding: '0 32px',
        background: '$brandPrimary',
        color: '$black',
        borderRadius: '$pill',

        // For the hover effect of the secondary button
        // This makes the button pure black and places a dropshadow

        '&:hover': {
          background: '#231F20',
          color: '$white',
          boxShadow: '0 2px 10px rgba( 0, 0, 0, 0.4 )'
        }
      },

      // For the secondary button used throughout the site
      // This is the button that has the outline on the outside

      outline: {
        height: 56,
        minWidth: 120,
        padding: '0 32px',
        border: '2px solid $brandPrimary',
        borderRadius: '$pill',
        color: '$brandPrimary',

        // For the hover effect of the primary button
        // This makes the button contain a dropshadow

        '&:hover': {
          background: '$brandPrimary',
          color: '$black',
          boxShadow: '0 2px 10px rgba( 0, 0, 0, 0.4 )'
        }
      },

      // For the icon only button, where no text is present
      // This holds the icon in the center of the container, which is a outlined circle

      icon: {
        minWidth: 44,
        padding: 0,
        width: 44,
        height: 44,
        borderRadius: '50%',
      },

      // If the button is disabled
      // This is not currently used but should be used in a flow where an action needs to be preformed before continuing

      disabled: {
        background: '$gray700',
        pointerEvents: 'none'
      }
    },

    // For the placement of the icons within the button to be on the left or right of the text
    // Most icons will be on the left of the text, but icons such as arrows for a button to act as a dropdown will be on the right

    iconPlacement: {
      left: {},
      right: { 
        flexDirection: 'row-reverse',
        '> *:not(:last-child)': { margin: '0 0 0 8px' },
      }
    },

    // For the size changes for the button
    // At the moment, the component only supports a small version of the button

    size: {
      l0: { 
        fontSize: '$s0', 
        height: '44px !important',
        minWidth: 'auto !important',
        padding: '0 24px'
      },
    }
  }
})

// -------------- Typescript declarations -------------- //

interface ButtonProps {
  variant?: 'disabled' | 'primary' | 'secondary' | 'outline' | 'icon'
  size?: 'l0'
  title?: any
  icon?: any
  iconPlacement?: 'left' | 'right'
  children?: React.ReactNode
  notBold?: boolean
  type?: 'submit'
}

// ---------- This is the end of declarations ---------- //

export const ButtonBase = ({ 
    variant, // Optional - For the visual display of the button
    title, // Optional - For the title of the button
    icon, // Optional - for the icon within the button
    iconPlacement, // Optional - for the placement of the icon to be on the right or left side of the button
    size, // Optional - to support the smaller version of the button
    children, // Optional - if a custom button is needed
    notBold, // Optional - by default, the button is bolded and this will allow it to observe regular font
    type // Optional - allows the button to be more specific for it's function, such as submit, emial, text, number, ect
  }: ButtonProps ) => {

  return(

    <ButtonWrap style={{ pointerEvents: variant == 'disabled' ? 'none' : 'auto' }}>
      { title || icon ? (
        <Button {...{ variant, iconPlacement, size, type }}>
          { icon && ( <Icon icon={ icon } size="l0" /> )}
          { title && ( 
            <>
              { notBold 
                ? ( <span>{ title }</span> ) 
                : ( <span><strong>{ title }</strong></span> ) 
              } 
            </>
          )}
        </Button>
      ) : ( <Button {...{ variant, size }}>{ children }</Button> )}
    </ButtonWrap>

  )
}