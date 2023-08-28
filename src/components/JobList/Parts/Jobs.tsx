import React from 'react'
import { List } from '@components'
import { Job } from './'

// -------------- Typescript declarations -------------- //

interface JobProps{
  jobs: {
    absolute_url: string
    id: number
    title: string
    departments: { name: string }[]
    location: { name: string }
  }[]
}

// ---------- This is the end of declarations ---------- //

export const Jobs = ({ jobs }:JobProps) => {
  return( 

    <List withDividers spacing="l3">
      { jobs.map( job => (
        <Job 
          key={ job.id } 
          id={ job.id } 
          title={ job.title } 
          location={ job.location.name } 
        />
      ))}
    </List>
    
  )
}
