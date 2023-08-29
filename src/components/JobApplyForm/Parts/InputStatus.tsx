import React from 'react'
import { styled } from '@theme'
import { TextEm } from '@components'

export const StatusWrap = styled('div', {
  position: 'relative',
  width: '100%',
  marginBottom: 20
})

const StatusContent = styled('div', {
  position: 'relative',
  padding: '0 20px'
})

interface StatusProps {
  status: string
}

export const InputStatus = ({ status }:StatusProps) => {
  return(

    <StatusWrap>
      <StatusContent>
        <TextEm color="danger">{ status }</TextEm>
      </StatusContent>
    </StatusWrap>

  )
}
