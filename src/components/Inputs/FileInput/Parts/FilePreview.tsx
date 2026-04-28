import React from 'react'
import { styled } from '@theme'
import { Heading, Button } from '@components'

// For the container of the file preview, one the file has been uploaded to the Dropzone
// This will take the place of the upload, titled with the name of the file uploaded

const FilePreviewWrap = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'relative',
  height: 60,
  padding: '0 12px 0 24px',
  background: '$bgSecondary',
  borderRadius: '$r2',
  '> *:not(:last-child)': { marginRight: 4 },
  '@tablet': { width: '100%', borderRadius: '$r1' }
})

// -------------- Typescript declarations -------------- //

interface PreviewProps {
  title: string
  onClick: any
}

// ---------- This is the end of declarations ---------- //

export const FilePreview = ({ title, onClick }:PreviewProps) => {
  return(
    
    <FilePreviewWrap>
      <Heading {...{ title }} />
      <Button icon="cross-2" {...{ onClick }} />
    </FilePreviewWrap>

  )
}