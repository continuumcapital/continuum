import React from 'react'
import Dropzone from 'react-dropzone'
import { styled } from '@theme'
import { Heading } from '@components'
import { InputStatus } from '../../InputStatus'

// For the master container of the file upload field
// This contains the drag and drop feature where the file is uploaded to be ready for the form submit

const InputContent = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  position: 'relative',
  '> *:not(:last-child)': { marginBottom: 12 }
})

// For the container of the drag and drop ui - this shows the input for the file select
// Here we are adjusting the default browser file input, where the user can drag and drop file - uses a third party

const DragAndDrop = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'relative',
  height: 60,
  padding: '0 32px',
  border: '1px dashed $border',
  borderRadius: '$r2',
  cursor: 'pointer',
  transition: '$s1',
  overflow: 'hidden',
  label: { pointerEvents: 'none' },

  // Here we give the file imput affordace
  // This will give the button hover effects - change the background and the border color once a user hovers

  '&:hover, &:active, &:focus': {
    background: '$bgSecondary',
    borderColor: '$white',
  },

  // Here we change the orientation on tablet breakpoints
  // This will make the button go full width and change the border radius to match the other inputs

  '@tablet': {
    width: '100%',
    borderRadius: '$r1'
  }
})

// Here are the responsive settings we need to use for the title of the file input
// This sill show and remove some text once we hit the tablet breakpoint, because we cannot drag-and-drop on devices

const RemoveOnTablet = styled('div', {
  '@tablet': { display: 'none' }
})

// Here are the responsive settings we need to use for the title of the file input
// This sill show and remove some text once we hit the tablet breakpoint, because we cannot drag-and-drop on devices

const ShowOnTablet = styled('div', {
  display: 'none',
  '@tablet': { display: 'flex' }
})

// -------------- Typescript declarations -------------- //

interface InputProps {
  onDrop: (acceptedFiles: any) => void
  uploadedFile: File | null
  name: string
  required?: boolean
  fieldRules: any
  trigger: (name: string) => void
  hasError: any
  errorMessage: any
}

// ---------- This is the end of declarations ---------- //

export const Input = ({ 
    onDrop, // Required - Upload function once an file is chose or dropped
    uploadedFile, // Required - This provides the state support if a file has been uploaded
    name,  // Required - For the name of the input
    required, // Optional - If the field should be required or not for the Form
    fieldRules, // Required if required - Support for error states
    trigger, // Required if required - Support for the error states
    hasError, // Required if required - Support for the error states
    errorMessage // Required if required - This describes that the input needs to be filled in if required
  }:InputProps) => {

  return(

    <InputContent>
      <Dropzone {...{ onDrop }}>
        {({ getRootProps, getInputProps }) => (
          <div {...getRootProps()}>
            { !uploadedFile && ( 

              <DragAndDrop>
                <RemoveOnTablet><Heading title="Drag and drop file or click to select" /></RemoveOnTablet>
                <ShowOnTablet><Heading title="Upload file" /></ShowOnTablet>
              </DragAndDrop>
              
            )}

            <input
              id={ name }
              type="file"
              {...fieldRules}
              onBlur={() => trigger( name )}
              {...{ name, required }}
              {...getInputProps()}
              accept=".pdf, .doc, .docx, .txt, .rtf"
              style={{ display: 'none' }}
            />
          </div>
        )}
      </Dropzone>

      { hasError && <InputStatus status={ errorMessage || 'Error' } /> }
    </InputContent>

  )
}
