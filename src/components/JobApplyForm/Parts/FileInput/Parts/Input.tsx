import React, { useState } from 'react'
import Dropzone from 'react-dropzone'
import { useFormContext } from 'react-hook-form'
import { styled } from '@theme'
import { Heading } from '@components'
import { InputStatus } from '../../InputStatus'

const InputContent = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  position: 'relative',
  '> *:not(:last-child)': { marginBottom: 12 }
})

// For the container of 

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

  '&:hover, &:active, &:focus': {
    background: '$bgSecondary',
    borderColor: '$white',
  },

  '@tablet': {
    width: '100%',
    borderRadius: '$r1'
  }
})

// Here are simple 

const RemoveOnTablet = styled('div', {
  '@tablet': { display: 'none' }
})

const ShowOnTablet = styled('div', {
  display: 'none',
  '@tablet': { display: 'flex' }
})

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

export const Input = ({ 
    onDrop, 
    uploadedFile, 
    name, 
    required, 
    fieldRules, 
    trigger,
    hasError,
    errorMessage
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
