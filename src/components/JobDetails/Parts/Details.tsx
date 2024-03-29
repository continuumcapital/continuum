import React from 'react'
import { styled } from '@theme'
import { Heading, List } from '@components'

// For the master container of the Description blocks within the job details page
// This holds the various segments, such as 'Roles and Responsibilities, Requirements'

const DescpBlock = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'flex-start',
  position: 'relative',
  width: '100%',
  '> *:not(:last-child)': { marginRight: 50 },

  // Here we change the alignment from horizontal to vertical on tablet breakpoints

  '@tablet': {
    flexDirection: 'column'
  }
})

// For the Heading container on the left side of the container
// This holds the title of the section, with the '–' next to the title

const DescpBlockHeading = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  position: 'relative',
  minWidth: 170,
  marginTop: 8,

  // For the styling of the line to the right of the title

  '&:after': {
    content: '',
    position: 'relative',
    minWidth: 20,
    width: 20,
    height: 2,
    margin: '3px 0 0 12px',
    background: '$white'
  },

  // Changes on tablet breakpoints - here we remove the line to the right 
  // As well as make the title full width and adjust the spacing on the bottom between the title and the text

  '@tablet': {
    width: '100%',
    marginBottom: 20,
    '&:after': { display: 'none' }
  }
})

// -------------- Typescript declarations -------------- //

interface BlockProps {
  title: string
  listItems?: any
}

// ---------- This is the end of declarations ---------- //

export const Details = ({ 
    title, // Required - for the title of the section
    listItems // Required - for the bulleted list explaining the stuff
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
