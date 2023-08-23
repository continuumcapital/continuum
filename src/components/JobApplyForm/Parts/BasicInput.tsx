import React from 'react'
import { styled } from '@theme'
import { Heading, TextEm } from '@components'

// For the styling of the basic input field within the form
// This sets the position of the label, animation, and so the input itself takes up the full width and height of the container

const Input = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  position: 'relative',
  width: '100%',
  height: 60,
  padding: '0 20px',
  border: '1px solid $border',
  borderRadius: '$r1',
  transition: '$s1',

  // For the sryling of the label within the input
  // This will animate up and scale down once clicked into and typing inside of the input

  label: {
    display: 'flex',
    flexDirection: 'row',
    position: 'relative',
    width: '100%',
    transformOrigin: 'top left',
    transition: '$s1'
  },

  // For the actual input, where the user types the value
  // Visually is is made to appear with no styling, but takes up the full width and height of the container 

  input: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    padding: '14px 20px 0',
    outline: 'none',
    border: 'none',
    background: 'none',
    appearance: 'none',
    fontFamily: '$sansSerifBold',
    fontSize: '$s1'
  },

  // For the styling when the user clicks into the input and begins typing
  // This animates the label above anc scales it down, while turning the border color to pure white while the user is in the input

  '&:focus-within': {
    borderColor: '$contentColor',
    label: {
      '&, *': { color: '$textSecondary !important' },
      transform: 'translateY( -10px ) scale( 0.8 )'
    }
  },

  // Here we set the state for the state if there is a value within the input
  // This is the same code for the focus within, except the border is set back to the gray

  variants: {
    active: {
      true: {
        label: {
          '&, *': { color: '$textSecondary !important' },
          transform: 'translateY( -10px ) scale( 0.8 )'
        }
      }
    }
  }
})

// -------------- Typescript declarations -------------- //

interface InputProps {
  active?: boolean
  required?: boolean
  label: string
  name: any
  value: any
  onChange: any
}

// ---------- This is the end of declarations ---------- //

export const BasicInput = ({
    active,
    label,
    required,
    name,
    value,
    onChange
  }:InputProps) => {
  
  return(

    <Input {...{ active }}>
      <label htmlFor={ name }>
        <Heading title={ label } />
        { required && <TextEm color="danger">*</TextEm> }
      </label>

      <input type="text" {...{ name, required, value, onChange }} />
    </Input>

  )
}
