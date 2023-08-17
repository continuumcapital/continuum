import React from 'react'
import { styled } from '@theme'
import { Heading, Text, List, Form } from '@components'

// For the master containers of the job details
// This holds all the information and the form to apply for the open position

const DetailsWrap = styled('div', {
  position: 'relative',
  width: '100%',
  background: '$bgSecondary'
})

const DetailsContent = styled('div', {
  position: 'relative',
  maxWidth: 800,
  width: '90%',
  margin: '0 auto',
  padding: '100px 0',
  '> *:not(:last-child)': { marginBottom: 100 }
})

const DetailsDescp = styled('div', {
  position: 'relative',
  width: '100%',
  '> *:not(:last-child)': { marginBottom: 50 }
})

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


interface DetailProps {
  jobDescp?: string
}

export const JobDetails = ({ jobDescp }:DetailProps) => {
  return(

    <DetailsWrap>
      <DetailsContent>
        <Text fontSize="l1">
          <p>
            { jobDescp }
          </p>
        </Text>

        <DetailsDescp>
          <DescpBlock>
            <DescpBlockHeading>
              <Heading size="l1" bold="heavy" title="Responsibilities" />
            </DescpBlockHeading>

            <List 
              spacing="l0"
              fontSize="l1"
              listStyle="bulleted"
              listItems={[
                { title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
                { title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
                { title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
                { title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
                { title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
                { title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
                { title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
                { title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' }
              ]}
            />
          </DescpBlock>

          <DescpBlock>
            <DescpBlockHeading>
              <Heading size="l1" bold="heavy" title="Requirements" />
            </DescpBlockHeading>

            <List 
              spacing="l0"
              fontSize="l1"
              listStyle="bulleted"
              listItems={[
                { title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
                { title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
                { title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
                { title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
                { title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
                { title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
                { title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
                { title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' }
              ]}
            />
          </DescpBlock>
        </DetailsDescp>
      </DetailsContent>
    </DetailsWrap>

  )
}
