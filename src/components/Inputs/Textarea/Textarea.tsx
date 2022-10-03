import React, { useState } from 'react'
import { styled } from '@theme'

// For the master container of the textarea
// This holds the long for messages that lives within the form component

const TextContain = styled('div', {

})

// For the styling of the html component of the textarea

const TextArea = styled('textarea', {
  position: 'relative',
  width: '100%',
  padding: '22px 24px',
  border: '1px solid $blueBorder',
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

}

// ---------- This is the end of declarations ---------- //

export const Textarea = ({

  }: TextareaProps ) => {
  
  return(

    <TextContain>
      <TextArea placeholder="Message..."></TextArea>
    </TextContain>

  )
}
