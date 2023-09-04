import React from 'react'
import { styled } from '@theme'
import { Heading } from '@components'

// For the master container of the Job List component
// This holds all of the live Job openings in a list format, with the 'Current Openings' text on the top of the container

const ListWrap = styled('div', {
  position: 'relative',
  width: '100%',
  background: '$bgSecondary'
})

// For the container of all of the content within the master container
// This container is used to set all of the content within the center of the master container

const ListContent = styled('div', {
  position: 'relative',
  maxWidth: 1000,
  width: '90%',
  margin: '0 auto',
  padding: '150px 0',
  '> *:not(:last-child)': { marginBottom: 50 },
  '@desktop': { width: '88%', padding: '75px 0' }
})

// -------------- Typescript declarations -------------- //

interface JobProps {
  title: string
  children: React.ReactNode
}

// ---------- This is the end of declarations ---------- //

export const JobWrap = ({ 
    title, // Required - For the title of the Job list
    children // Required - For the jobs offered
  }:JobProps) => {

  return(

    <ListWrap id="job-list">
      <ListContent>
        <Heading size="l5" bold="heavy" align="center" {...{ title }} />
        { children }
      </ListContent>
    </ListWrap>

  )
}