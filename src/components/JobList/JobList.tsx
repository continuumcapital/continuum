import React from 'react'
import Link from 'next/link'
import { styled } from '@theme'
import { Heading, List, Icon } from '@components'

const ListWrap = styled('div', {
  position: 'relative',
  width: '100%',
  background: '$bgSecondary'
})

const ListContent = styled('div', {
  position: 'relative',
  maxWidth: 1000,
  width: '90%',
  margin: '0 auto',
  padding: '150px 0',
  '> *:not(:last-child)': { marginBottom: 50 },
  '@desktop': { 
    width: '88%',
    padding: '75px 0' 
  }
})

const ListBlock = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  position: 'relative',
  width: '100%',
  '@desktop': { flexDirection: 'column' }
})

const ListBlockTitle = styled('div', {
  position: 'relative',
  marginRight: 100,

  '> *': { 
    display: 'flex',
    alignItems: 'center',
    marginTop: 28,
    paddingRight: 50,

    '&:after': {
      content: '',
      position: 'absolute',
      right: 0,
      width: 32,
      height: 2,
      background: '$white'
    },

    '@desktop': {
      marginTop: 0,
      paddingRight: 0,
      '&:after': { display: 'none' }
    }
  }
})

const JobItem = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  position: 'relative',
  width: '100%',
  cursor: 'pointer',

  '&:hover': {
    '> *:last-child': { transform: 'translateX( 10px )'}
  }
})

const JobTitle = styled('div', {

})

interface ListProps {
  jobs: {
    title: string;
    job: {
      href: string;
      title: string;
      location?: string;
    }[];
  }[];
}


export const JobList = ({ jobs }:ListProps) => {
  return(

    <ListWrap>
      <ListContent id="jobs">
        <Heading size="l5" bold="heavy" align="center" title="Current Openings" />
        
        { jobs.map(( jobList, i ) => (

          <ListBlock key={`job-${ i }`}>
            <ListBlockTitle>
              <Heading bold="heavy" size="l1" title={ jobList.title } />
            </ListBlockTitle>
            
            <List withDividers spacing="l3">
              { jobList.job.map(( jobItem, j ) => (

                <li key={`job-${ j }`}>
                  <Link href={ jobItem.href }>
                    <JobItem>
                      <JobTitle>
                        <Heading size="l5" bold="heavy" title={ jobItem.title } />
                        <Heading title={ jobItem.location } />
                      </JobTitle>
                      <Icon icon="arrow-right" />
                    </JobItem>
                  </Link>
                </li>

              ))}
            </List>
          </ListBlock>

        ))}
      </ListContent>
    </ListWrap>

  )
}
