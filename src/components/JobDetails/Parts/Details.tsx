import React from 'react'
import { styled } from '@theme'
import { Heading, List } from '@components'

const DescpBlock = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'flex-start',
  position: 'relative',
  width: '100%',
  '> *:not(:last-child)': { marginRight: 50 }
})

const DescpBlockHeading = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'flex-end',
  position: 'relative',
  minWidth: 200,
  marginTop: 8,
  paddingRight: 32,

  '&:after': {
    content: '',
    position: 'absolute',
    right: 0,
    width: 20,
    height: 2,
    background: '$white'
  }
})

interface BlockProps {
  title: string
  listItems?: any
}

export const Details = ({ 
    title,
    listItems
  }:BlockProps) => {
  
  return(

    <DescpBlock>
      <DescpBlockHeading>
        <Heading size="l1" bold="heavy" {...{ title }} />
      </DescpBlockHeading>

      <List 
        spacing="l1"
        fontSize="l1"
        listStyle="bulleted"
        listItems={ listItems }
      />
    </DescpBlock>

  )
}
