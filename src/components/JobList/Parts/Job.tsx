import React from 'react'
import { styled } from '@theme'
import { Heading, Icon } from '@components'

// For the master container of the job postiong
// This contains the title on the top, the location on the bottom and the arrow icon on the right of the container

const JobItem = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  position: 'relative',
  width: '100%',
  cursor: 'pointer',

  // Here we add an animation effect when the user hovers over a job
  // This will animate the arrow on the right to move slightly to the right on hover

  '&:hover': {
    '> *:last-child': { transform: 'translateX( 10px )'}
  }
})

// For the container of the title text within the master container
// This groups the titles together, with the main title on the top and the location on the bottom

const JobTitle = styled('div', {
  maxWidth: '80%'
})

// -------------- Typescript declarations -------------- //

interface JobProps {
  id: string | number
  title: string
  location: string
}

// ---------- This is the end of declarations ---------- //

export const Job = ({ id, title, location }:JobProps) => {
  return(

    <li>
      <a href={`/career-details/${ id }`}>

        <JobItem>
          <JobTitle>
            <Heading size="l5" bold="heavy" {...{ title }} />
            <Heading title={ location } />
          </JobTitle>
          <Icon icon="arrow-right" />
        </JobItem>
        
      </a>
    </li>

  )
}