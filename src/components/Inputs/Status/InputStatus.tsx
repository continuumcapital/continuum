import React, { useState } from 'react'
import { styled } from '@theme'
import { Icon } from '@components'

// For the master container of the status
// This contains text that inform the user is something is wrong with the text input
// As well as show if a required field has not been filled

const StatusWrap = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  position: 'relative',
  width: '100%',
  margin: '8px 0',
  padding: '0 16px',
  fontSize: '$s1',
  color: '$textSecondary',

  // Here we automate the spacing between the icon on the left and the text to the right
  // This also allows for infinite text to be within the container and the spacing automated

  '> *:not(last-child)': {
    marginRight: 8
  },

  // For the different variants within the the status
  // This has three supported options - negaitive, warning and success - here we change the color of the font

  variants: {
    status: {
      negative: { color: '$textNegative' },
      positive: { color: '$textPositive' },
      warning: { color: '$textWarning' }
    }
  }
})

// -------------- Typescript declarations -------------- //

interface InputProps {
  title: string,
  status: 'positive' | 'negative' | 'warning'
}

// ---------- This is the end of declarations ---------- //

export const InputStatus = ({ 
    status, // Required - for the type of error that is displayed for the input field ( warning, error, or success )
    title // Required - for the text that is displaed to show the user of the error, warning or success 
  }:InputProps) => {

  return(
    
    <StatusWrap {...{ status }}>
      { 
          status == "negative" ? ( <><Icon size="l1" bgColor="negative" icon="close" /><span>{ title }</span></> )
        : status == 'positive' ? ( <><Icon size="l1" bgColor="positive" icon="check" /><span>{ title }</span></> )
        : status == 'warning'  ? ( <><Icon size="l1" bgColor="warning" icon="info-circled" /><span>{ title }</span></> )
        : null
      }
    </StatusWrap>

  )
}