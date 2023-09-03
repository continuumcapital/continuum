import React from 'react'
import { styled } from '@theme'
import { TextEm } from '@components'

// For the master container of the input status
// This provides the errors or warnings for an input field within the Form of a given page

export const StatusWrap = styled('div', {
  position: 'relative',
  width: '100%',
  marginBottom: 20
})

// For the container of all of the content within the master container
// This holds the content to have spacing within the form on the top and bottom of the container

const StatusContent = styled('div', {
  position: 'relative',
  padding: '0 20px'
})

// -------------- Typescript declarations -------------- //

interface StatusProps {
  status: string | any
}

// ---------- This is the end of declarations ---------- //

export const InputStatus = ({ status }:StatusProps) => {
  return(

    <StatusWrap>
      <StatusContent>
        <TextEm color="danger">{ status }</TextEm>
      </StatusContent>
    </StatusWrap>

  )
}
