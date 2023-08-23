import React from 'react'
import { styled } from '@theme'
import { Heading, Icon } from '@components'
import { useFormContext } from 'react-hook-form'

// For the container of the Select Input
// This is always visible, containing an option icon and text of the selection, and the arrow down icon on the right

const SelectWrap = styled('div', {
  position: 'relative',
  width: '100%',
  padding: '0 16px 0 12px',
  borderRadius: '$r1',
  border: '1px solid $borderAlt',
  cursor: 'pointer',
  transition: '$s1',

  // For the active effect when the user clicks on the button
  // This will scale the button down when clicked and back o normal when released

  '&:active': {
    transform: 'scale( 0.95 )'
  },

  // For the sizes of the input heights

  variants: {
    size: {
      l0: { label: { height: 40 }}
    },

    width: {
      half: { 
        width: '50%',
        '@mobile': { width: '100%' }
      }
    }
  },

  // For the required label of the select dropdown
  // This explains the purpose and selection item of the select component

  label: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    position: 'relative',
    width: '100%',
    height: 48,
    cursor: 'pointer'
  },

  // For the input of Select component - this is always hidden from the user
  // This is meant to collect the data of the selection the user chose

  input: {
    outline: 'none',
    border: 'none',
    background: 'none',
    appearance: 'none',
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    userSelect: 'none',
    pointerEvents: 'none',
    visibility: 'hidden'
  },

  // Change the background on hover 
  // This gives the afforance that the input is clickable like a button

  '&:hover': {
    background: '$bgSecondary'
  }
})

// This component lives in the label block, and it visually displays what the user has selected
// This will have the optional icon on the left and the text by itself, or to the right of the icon

const Selected = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  position: 'relative',
  width: '100%',

  // Here we automate the spacing between the icon on the left and the text to the right
  // If there is no Icon then no item will get spacing, as th text is the last child 

  '> *:not(:last-child)': {
    marginRight: 8
  }
})

// If there is an image present, instead of an icon, on the left of the container
// This styles the image to be in a circle with background cover

const SelectImage = styled('div', {

})

// -------------- Typescript declarations -------------- //

interface InputProps {
  size?: 'l0'
  name: any
  icon: any
  image: any
  title: any
  value: any
  width?: 'half'
  rules?: any
}

// ---------- This is the end of declarations ---------- //

export const InputBase = ({ 
    size, // Optional - for the size of the input fields
    width, // Opitional - for the width of the input button
    name, // Required - for the name of the input
    icon, // Optional - for the icon on the left of the container
    image, // Optional - for the image on the left side of the container
    title, // Required - for the title of the input
    rules, // Optional - for the value of the input
    value
  }:InputProps) => {

  const { register, formState: { errors }, watch } = useFormContext();
  
  return(

    <SelectWrap {...{ size, width }}>
      <label htmlFor={ name }>
        <Heading bold="bold" size="l1" {...{ title }} />
        <Icon size="l0" icon="chevron-down" />
      </label>

      <input 
        readOnly
        type="text" 
        id={ name }
        {...register( name ), { ...rules }}  
        value={ value }
      />
    </SelectWrap>

  )
}