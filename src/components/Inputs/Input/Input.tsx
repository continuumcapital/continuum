import React, { useState } from 'react'
import { InputStatus } from '@components' 
import { InputWrap, InputBase } from './Parts'
import { useController, UseControllerProps } from "react-hook-form"

// -------------- Typescript declarations -------------- //

interface InputProps {
  label: string
  width?: 'small'
  value: any
  errorMessage?: any
  type?: 'email' | 'text' | 'number'
  initialValue: any
  required?: boolean
}

// ---------- This is the end of declarations ---------- //

export const Input = ( props: UseControllerProps&InputProps ) => {
  const { field, fieldState } = useController( props )
  const [ active, setActive ] = useState( field.value )
  const [ value, setValue ] = useState( props.value || props.initialValue)

  return(

    <InputWrap
      inputSize={ props.width }
      state={ value ? 'active' : 'inactive' }
    >
      <InputBase>

        <input 
          { ...field }
          required={ props.required }
          id={ props.name } 
          type={ props.type ? props.type : 'text' }
          value={ field.value || props.initialValue }
          onBlur={( event ) => event.preventDefault()}
          onChange={( event ) => {
            field.onChange( event.target.value ) 
            setValue( event.target.value ) 
          }}
        />

        <label htmlFor={ props.name }>{ props.label }</label>
      </InputBase>
      
      { fieldState.error
        ? ( <InputStatus status="negative" title={ props.errorMessage } /> ) 
        : null
      }
    </InputWrap>

  )
}