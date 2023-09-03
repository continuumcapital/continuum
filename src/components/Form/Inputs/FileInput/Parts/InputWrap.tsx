import React from 'react'
import { styled } from '@theme'
import { Heading, TextEm } from '@components'

// For the master container of the FileInput component
// This allows the user to upload their resume or cover letter to be able to submit to the job application

const InputContainer = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  position: 'relative',
  width: '100%',

  // For the container of the lable on the left side of the container
  // This holds the title of the input, where it describes the content the user is uploading
  
  label: {
    display: 'flex',
    flexDirection: 'row',
    whiteSpace: 'nowrap',
    width: 120,
    marginTop: 20,
    pointerEvent: 'none'
  },

  // Changes on tablet breakpoints, we change the layout to vertical aand make sure the content is left aligned

  '@tablet': {
    flexDirection: 'column',
    alignItems: 'flex-start',
    '> *:not(:last-child)': { marginBottom: 12 }
  }
})

// For the master container of the all of the content to the right of the label 
// This holds he actual input field for the user to upload a file

const UploadContent = styled('div', {
  position: 'relative',
  '@tablet': { width: '100%' }
})

// -------------- Typescript declarations -------------- //

interface WrapperProps {
  name: string
  label: string
  required?: boolean
  children: React.ReactNode
}

// ---------- This is the end of declarations ---------- //

export const InputWrap = ({ 
    name, // Required - For the name of the input
    label, // Required - For the label of the input
    required, // Optional - If the file upload is required
    children // Requried - For all of the main content within the input
  }:WrapperProps) => {

  return(

    <InputContainer>
      <label htmlFor={ name }>
        <Heading title={ label } />
        { required && <TextEm color="danger">*</TextEm> }
      </label>

      <UploadContent>{ children }</UploadContent>
    </InputContainer>

  )
}
