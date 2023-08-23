import React from 'react'
import { styled } from '@theme'
import { Heading, TextEm } from '@components'

const InputWrap = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  position: 'relative',
  width: '100%',
  
  label: {
    display: 'flex',
    flexDirection: 'row'
  }
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
  return(

    <InputWrap>
      <label htmlFor={ name }>
        <Heading title={ label } />
        { required && <TextEm color="danger">*</TextEm> }
      </label>

      <input type="file" {...{ key, name, required }} />
    </InputWrap>

  )
}