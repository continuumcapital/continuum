import React, { useState } from 'react'
import { styled } from '@theme'
import { InputStatus } from '@components'
import { useController, UseControllerProps } from "react-hook-form"

// For the master container of the textarea
// This holds the long for messages that lives within the form component

const TextContain = styled('div', {

})

// For the styling of the html component of the textarea

const TextArea = styled('textarea', {
  position: 'relative',
  width: '100%',
  padding: '22px 24px',
  border: '1px solid $border',
  borderRadius: '$r2',
  resize: 'none',
  fontFamily: '$sansSerif',
  fontSize: '1rem',
  minHeight: 215,
  background: 'none',
  transition: '$s1',
  outline: 'none',

  '&:focus': {
    borderColor: '$white'
  }
})

// -------------- Typescript declarations -------------- //

interface TextareaProps {
  name: string
  errorMessage?: any
  placeholder?: string
}

// ---------- This is the end of declarations ---------- //

export const Textarea = ( props: UseControllerProps&TextareaProps ) => {
  const { field, fieldState } = useController( props )
  
  return(

    <TextContain>
      <TextArea 
        { ...field } 
        name={ props.name } 
        placeholder={ props.placeholder ? props.placeholder : 'Message...' }
      >
      </TextArea>

      { fieldState.error
        ? ( <InputStatus status="negative" title={ props.errorMessage } /> ) 
        : null
      }
    </TextContain>

  )
}
