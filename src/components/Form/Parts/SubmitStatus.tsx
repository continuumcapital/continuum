import React from 'react'
import { styled } from '@theme'
import { Icon, Heading } from '@components'

// For the master container of the submit status within the form
// This is for when the user submits a form, such as the Contact Form, and it verifies to the user if it has been submitted

const SuccessWrap = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'relative',
  width: '100%',
  background: '$grayBg',
  borderRadius: '$r1'
})

// For the container of all of the content within the master container
// This is used to position the content within the center of the container

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

// -------------- Typescript declarations -------------- //

interface SuccessProps {
  status?: any
}

// ---------- This is the end of declarations ---------- //

export const SubmitStatus = ({ status }:SuccessProps) => {
  return(

    <SuccessWrap>
      <SuccessContent>
        <Icon size="l0" icon="check" />
        <Heading bold="bold" size="l0" title={ status } />
      </SuccessContent>
    </SuccessWrap>

  )
}