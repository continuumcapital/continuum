import React from 'react'
import { useFormContext } from 'react-hook-form'
import Dropzone from 'react-dropzone'
import { styled } from '@theme'
import { Heading, Button, TextEm } from '@components'
import { InputStatus } from './'

const InputWrap = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  position: 'relative',
  width: '100%',
  
  label: {
    display: 'flex',
    flexDirection: 'row',
    whiteSpace: 'nowrap',
    width: 120,
    pointerEvent: 'none'
  },

  '@mobile': {
    flexDirection: 'column',
    alignItems: 'flex-start',
    '> *:not(:last-child)': { marginBottom: 12 }
  }
})

const UploadOptions = styled('div', {
  position: 'relative',
  
  '@mobile': { width: '100%' },

  '&:hover, &:active, &:focus': {
    '> *': {
      background: '$bgSecondary',
      borderColor: '$white'
    }
  },
})

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
  label: { pointerEvents: 'none' },

  '&:hover, &:active, &:focus': {
    background: '$bgSecondary',
    borderColor: '$white'
  },

  '@mobile': {
    width: '100%',
    borderRadius: '$r1'
  }
})

const FilePreview = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'relative',
  height: 60,
  padding: '0 12px 0 24px',
  background: '$bgSecondary',
  borderRadius: '$r2',
  '> *:not(:last-child)': { marginRight: 4 },
  '@mobile': { width: '100%', borderRadius: '$r1' }
})


// -------------- Typescript declarations -------------- //

interface FileProps {
  key?: any
  name: string
  label: string
  required?: boolean
  rules?: any
  onChange?: any
}

// ---------- This is the end of declarations ---------- //

export const FileInput = ({ label, name, required, rules, onChange }:FileProps) => {
  const { register, setValue, formState: { errors }, watch, trigger } = useFormContext();

  const hasError = errors[name];
  const errorMessage = hasError?.message;
  

  const fieldRules = {
    ...rules,
    required: required ? 'This field is required.' : false
  }

  const onFileUpload = (acceptedFiles: any) => {
    setValue(name, acceptedFiles[0]);
    if (onChange) {
      onChange(acceptedFiles);
    }
  };

  return (

    <InputWrap>
      <label htmlFor={ name }>
        <Heading title={ label } />
        { required && <TextEm color="danger">*</TextEm> }
      </label>

      <UploadOptions>

        <InputWrap>
          <Dropzone onDrop={ onFileUpload}>
            {({ getRootProps, getInputProps }) => (
              <DragAndDrop {...getRootProps()}>
                <Heading title="Drag and drop file or click to select" />
                <input
                  id={name}
                  type="file"
                  {...register(name, fieldRules)}
                  onBlur={() => trigger(name)}
                  {...{ name, required }}
                  {...getInputProps()}
                  accept=".pdf, .doc, .docx, .txt, .rtf"
                />
              </DragAndDrop>
            )}
          </Dropzone>
        </InputWrap>
      </UploadOptions>

      { hasError && <InputStatus status={ errorMessage || 'Error' } /> }
    </InputWrap>

  )
}
