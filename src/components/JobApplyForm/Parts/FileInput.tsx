import React, { useState } from 'react'
import Dropzone from 'react-dropzone'
import { styled } from '@theme'
import { Heading, Button, TextEm } from '@components'

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
    width: 120
  }
})

const UploadOptions = styled('div', {
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
  '> *:not(:last-child)': { marginRight: 4 }
})


// -------------- Typescript declarations -------------- //

interface FileProps {
  key?: any
  name: string
  label: string
  required?: boolean
}

// ---------- This is the end of declarations ---------- //

export const FileInput = ({ key, name, label, required }:FileProps) => {
  const [ files, setFiles ] = useState<File[]>([]);
  const onUpload = (acceptedFiles: File[]) => { setFiles(acceptedFiles) }
  const removeFile = () => { setFiles([]) }

  return (

    <InputWrap>
      <label htmlFor={ name }>
        <Heading title={ label } />
        { required && <TextEm color="danger">*</TextEm> }
      </label>

      <UploadOptions>
        { files.length === 0 ? (

          <Dropzone onDrop={ onUpload }>
            {({ getRootProps, getInputProps }) => (
              <DragAndDrop {...getRootProps()}>
                <Heading title="Drag and drop file or click to select" />
                <input hidden type="file" {...getInputProps()} {...{ key, name, required }} />
              </DragAndDrop>
            )}
          </Dropzone>

        ) : (

          files.map(file => (
            <FilePreview key={file.name}>
              <Heading title={file.name} />
              <Button variant="icon" icon="cross-2" onClick={ removeFile } />
            </FilePreview>
          ))

        )}
      </UploadOptions>
    </InputWrap>

  )
}
