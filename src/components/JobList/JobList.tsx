import React from 'react'
import { styled } from '@theme'
import { JobWrap, BlockTitle, Jobs } from './Parts'

// For the master container of the individual jobs within the jobList container
// This accounts for the department category text on the left and all of the open jobs within the category on the right of the container

const ListBlock = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  position: 'relative',
  width: '100%',
  '@desktop': { flexDirection: 'column' }
})

// -------------- Typescript declarations -------------- //

type Job = {
  absolute_url: string
  id: number
  title: string
  departments: { name: string }[]
  location: { name: string }
}

type DepartmentJobListProps = {
  title: string
  groupedJobs: {[ key: string ]: Job[]}
}

// ---------- This is the end of declarations ---------- //


export const JobList = ({ title, groupedJobs }:DepartmentJobListProps) => {
  return (

    <JobWrap {...{ title }}>
      { Object.keys( groupedJobs ).map(( departmentName ) => (

        <ListBlock key={ departmentName }>
          <BlockTitle title={ departmentName } />
          <Jobs jobs={ groupedJobs[ departmentName ] } />
        </ListBlock>

      ))}
    </JobWrap>

  )
}
