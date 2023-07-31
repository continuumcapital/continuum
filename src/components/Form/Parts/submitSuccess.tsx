import React from 'react'
import { styled } from '@theme'
import { Icon, Heading } from '@components'

const SuccessWrap = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'relative',
  width: '100%',
  background: '$grayBg',
  borderRadius: '$r1'
})

const SuccessContent = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
  position: 'relative',
  maxWidth: 1100,
  width: '95%',
  margin: '0 auto',
  padding: '16px 0',
  textAlign: 'center',
  '> *:not(:last-child)': { marginRight: 8 }
})

interface SuccessProps {
  status?: any
}

export const SubmitSuccess = ({ status }:SuccessProps) => {
  return(

    <SuccessWrap>
      <SuccessContent>
        <Icon size="l0" icon="check" />
        <Heading bold="bold" size="l0" title={ status } />
      </SuccessContent>
    </SuccessWrap>

  )
}