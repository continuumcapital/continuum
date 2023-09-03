import React from 'react'
import { useFormContext } from 'react-hook-form'
import { styled } from '@theme'
import { Heading, TextEm } from '@components'
import { InputStatus } from './InputStatus'

// For the master container of the Basic Input
// This contains all of the shared stying 

const InputWrap = styled('div', {
  position: 'relative',
  width: '100%',
  '> *:not(:last-child)': { marginBottom: 12 }
})

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
    transition: '$s1',
    pointerEvents: 'none',
    zIndex: 10
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
    fontSize: '$s1',
    zIndex: 9
  },

  // Here we are removing the default styling that comes with autofill from browser defaults

  'input:-webkit-autofill, input:-webkit-autofill:hover, input:-webkit-autofill:focus, textarea:-webkit-autofill, textarea:-webkit-autofill:hover, textarea:-webkit-autofill:focus, select:-webkit-autofill, select:-webkit-autofill:hover, select:-webkit-autofill:focus': {
    boxShadow: '0 0 0 1000px none inset',
    color: '#fff !important',
    borderRadius: '$r1',
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
  name: string
  onChange?: React.ChangeEventHandler<HTMLInputElement>
  rules?: any
}

// ---------- This is the end of declarations ---------- //

export const BasicInput = ({
    label,
    required,
    name,
    rules,
    onChange
  }: InputProps) => {

  const { register, formState: { errors }, watch, trigger } = useFormContext()
  const { onChange: rOnChange } = register( name, { ...rules } )
  const currentValue = watch( name )
  const hasError = errors[ name ]
  const errorMessage = errors[ name ]?.message as string | undefined

  const fieldRules = {
    ...rules,
    required: required ? 'This field is required.' : false
  }

  const combinedOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    rOnChange(e)
    onChange && onChange(e)
  }

  return (

    <InputWrap>
      <Input active={ !!currentValue }>
        <label htmlFor={ name }>
          <Heading title={ label } />
          {required && <TextEm color="danger">*</TextEm>}
        </label>

        <input 
          id={ name }
          type="text" 
          {...register( name, fieldRules )}
          onChange={ combinedOnChange }
          onBlur={() => trigger(name)}
          {...{ name, required }}
        />
      </Input>

      { hasError && <InputStatus status={ errorMessage || 'Error' } /> }
    </InputWrap>

  )
}
