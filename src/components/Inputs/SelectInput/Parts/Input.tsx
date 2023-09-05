import React from 'react'
import { styled } from '@theme'
import { Heading, Icon, InputStatus } from '@components'
import { useFormContext } from 'react-hook-form'

// For the container of the Select Input
// This is always visible, containing an option icon and text of the selection, and the arrow down icon on the right

const SelectContent = styled('div', {
  display: 'flex',
  alignItems: 'center',
  position: 'relative',
  width: '100%',
  minHeight: 60,
  padding: '0 20px',
  borderRadius: '$r1',
  border: '1px solid $border',
  cursor: 'pointer',
  transition: '$s1',

  // For the sizes of the input heights

  variants: {
    size: {
      l0: { label: { height: 40 }}
    },

    // Here we allow for the select dropdown to be half the size of the default input

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

// -------------- Typescript declarations -------------- //

interface InputProps {
  size?: 'l0'
  name: any
  title: any
  value: any
  width?: 'half'
  rules?: any
  label?: string
  required?: boolean
}

// ---------- This is the end of declarations ---------- //

export const InputBase = ({ 
    size, // Optional - For the size of the input fields
    width, // Opitional - For the width of the input button
    name, // Required - For the name of the input
    title, // Required - For the title of the input
    rules, // Required - For the rules of the input if it is required
    required, // Optional - Support if the input is required
    value // Required - For the value of the input
  }:InputProps) => {

  const { register, formState: { errors }, watch, trigger } = useFormContext()
  const currentValue = watch( name )
  const hasError = errors[ name ]
  const errorMessage = errors[ name ]?.message as string | undefined

  const fieldRules = {
    ...rules,
    required: required ? 'This field is required.' : false
  }
  
  return(

    <SelectContent {...{ size, width }}>
      <label htmlFor={ name }>
        <Selected><Heading size="l1" {...{ title }} /></Selected>
        <Icon size="l0" icon="chevron-down" />
      </label>

      <input 
        id={ name }
        type="text" 
        {...register( name, fieldRules )}
        onBlur={() => trigger( name )}
        {...{ name, required, value }}
      />
      
      { hasError && <InputStatus status={ errorMessage || 'Error' } /> }
    </SelectContent>

  )
}