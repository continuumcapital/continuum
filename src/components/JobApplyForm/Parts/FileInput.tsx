import React, { useState } from 'react'
import { styled } from '@theme'
import { useFormContext } from 'react-hook-form'
import Dropzone from 'react-dropzone'
import { Heading, Button, TextEm } from '@components'
import { InputStatus } from './'

// For the master container of the FileInput component
// This allows the user to upload their resume or cover letter to be able to submit to the job application

const InputWrap = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  position: 'relative',
  width: '100%',

  // For the container of the lable on the left side of the container
  // This holds the title of the input, where it describes the content the user is uploading
  
  label: {
    display: 'flex',
    flexDirection: 'row',
    whiteSpace: 'nowrap',
    width: 120,
    pointerEvent: 'none'
  },

  // Changes on tablet breakpoints, we change the layout to vertical 

  '@tablet': {
    flexDirection: 'column',
    alignItems: 'flex-start',
    '> *:not(:last-child)': { marginBottom: 12 }
  }
})

const UploadOptions = styled('div', {
  position: 'relative',
  
  '@mobile': { width: '100%' }
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
  overflow: 'hidden',
  label: { pointerEvents: 'none' },

  '&:hover, &:active, &:focus': {
    background: '$bgSecondary',
    borderColor: '$white',
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

  // const onFileUpload = (acceptedFiles: any) => {
  //   setValue(name, acceptedFiles[0]);
  //   if (onChange) {
  //     onChange(acceptedFiles);
  //   }
  // };

  const [ uploadedFile, setUploadedFile ] = useState<File | null>(null);

  const onFileUpload = ( acceptedFiles: any ) => {
    setValue( name, acceptedFiles[ 0 ] )
    setUploadedFile( acceptedFiles[ 0 ] )

    if ( onChange ) {
      onChange( acceptedFiles );
    }
  }

  const removeUploadedFile = () => {
    setUploadedFile( null )
    setValue( name, null )
  }

  return (

    <InputWrap>
      <label htmlFor={name}>
        <Heading title={label} />
        {required && <TextEm color="danger">*</TextEm>}
      </label>

      <UploadOptions>
        <InputWrap>
          <Dropzone onDrop={onFileUpload}>
            {({ getRootProps, getInputProps }) => (
              <div {...getRootProps()}>
                {/* Display Dropzone UI only if there is no uploaded file */}
                {!uploadedFile && <DragAndDrop>
                  <Heading title="Drag and drop file or click to select" />
                </DragAndDrop>}
                <input
                  id={name}
                  type="file"
                  {...register(name, fieldRules)}
                  onBlur={() => trigger(name)}
                  {...{ name, required }}
                  {...getInputProps()}
                  accept=".pdf, .doc, .docx, .txt, .rtf"
                  style={{ display: 'none' }}  // This will hide the actual input but keep it in the DOM
                />
              </div>
            )}
          </Dropzone>
        </InputWrap>

        {/* Display the file preview if there's an uploaded file */}
        {uploadedFile && (
          <FilePreview>
            <Heading title={uploadedFile.name} />
            <Button variant="icon" icon="cross-2" onClick={removeUploadedFile} />
          </FilePreview>
        )}
      </UploadOptions>

      {hasError && <InputStatus status={errorMessage || 'Error'} />}
    </InputWrap>

  )
}
