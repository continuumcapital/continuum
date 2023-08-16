import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { styled } from '@theme'
import type { NextPage } from 'next'
import { SiteContainer, Hero, ReadingBar, Heading, List, Icon, JobList } from '@components'


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

type Job = {
  id: number;
  title: string;
  departments: {
    name: string
  }[];
  location: {
    name: string;
  };
  absolute_url: string;
};

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


const Careers: NextPage = () => {
  const [jobs, setJobs] = useState<Job[]>([])
  const [groupedJobs, setGroupedJobs] = useState<{ [key: string]: Job[] }>({});
  const [error, setError] = useState<string | null>(null);

  const groupJobsByDepartment = (jobs: Job[]) => {
    const groupedJobs: { [key: string]: Job[] } = {};
  
    jobs.forEach((job) => {
      job.departments.forEach((department) => {
        if (!groupedJobs[department.name]) {
          groupedJobs[department.name] = [];
        }
        groupedJobs[department.name].push(job);
      });
    });
  
    return groupedJobs;
  };

  const getFirstWord = (string: string): string => {
    const words = string.split(' ');
    return words[0];
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('/api/greenhouse');
        const result = await res.json();
  
        if (res.ok) {
          setJobs(result.jobs);
          setGroupedJobs(groupJobsByDepartment(result.jobs));
        } else {
          setError(result.message || 'An error occurred');
        }
      } catch (error) {
        if (error instanceof Error) {
          setError(error.message);
        } else {
          setError('An error occurred');
        }
      }
    };
  
    fetchData();
  }, [])

  return (
    
    <SiteContainer>
      <ReadingBar />
      <Hero 
        title="Continuum Careers"
        calloutTitle="Understand a Career with Continuum"
        calloutDescp="What powers Continuum's mission to offer next generation investment solutions is passion and relentless dedication to results. The firm views it's roadmap of innovation and responsibility to investors as a lifestyle, not a job. If current openings are not applicable to your skillset, it's still encouraged that you reach out if you would like to connect with the Continuum team."
        calloutButtonTitle="Apply now"
        calloutHref="#jobs"
      />

      <ListWrap>
        <ListContent>
          <Heading size="l5" bold="heavy" align="center" title="Current Openings" />

          { Object.keys( groupedJobs ).map(( departmentName ) => (
            <ListBlock key={ departmentName }>
              <ListBlockTitle>
                <Heading bold="heavy" size="l1" title={ getFirstWord( departmentName ) } />
              </ListBlockTitle>

              <List withDividers spacing="l3">
                {groupedJobs[ departmentName ].map(( job ) => (
                  <li key={ job.id }>
                    <a href={ job.absolute_url } target="_blank" rel="noopener noreferrer">
                      <JobItem>
                        <div>
                          <Heading size="l5" bold="heavy" title={ job.title } />
                          <Heading title={ job.location.name } />
                        </div>
                        <Icon icon="arrow-right" />
                      </JobItem>
                    </a>
                  </li>
                ))}
              </List>
            </ListBlock>
          ))}

        </ListContent>
      </ListWrap>

      {/* <JobList jobs={ jobs } /> */}

      {/* <JobList 
        jobs={[
          { 
            title: 'Accounts',
            job: [
              { href: '/', title: 'Account Analyst - New Business', location: 'Chicago IL' },
              { href: '/', title: 'Account Analyst - Stable Coins', location: 'Chicago IL' },
              { href: '/', title: 'Portfolio Analyst - High Risk Coins', location: 'Chicago IL' },
              { href: '/', title: 'Data Analyst - Fund Reporting', location: 'Chicago IL' }
            ]
          },
          { 
            title: 'Business',
            job: [
              { href: '/', title: 'New Business Sales Lead', location: 'Chicago IL' },
              { href: '/', title: 'New Business Sales Lead', location: 'Chicago IL' }
            ]
          }
        ]}
      /> */}
    </SiteContainer>

  )
}

export default Careers
