import React from 'react'
import { XyzTransition } from '@animxyz/react'
import DOMPurify from 'dompurify'
import { styled } from '@theme'
import { Heading, Text } from '@components'
import { Details } from './Parts/Details'
import { decodeHTML, processLines } from '@lib'

// For the master containers of the job details
// This holds all the information and the form to apply for the open position

const DetailsWrap = styled('div', {
  position: 'relative',
  width: '100%',
  background: '$bgSecondary'
})

// For the container of the all of the content within the master container
// This positions all of the content in the center of the master container - has the title on the left and bullets on the right

const DetailsContent = styled('div', {
  position: 'relative',
  maxWidth: 800,
  width: '90%',
  margin: '0 auto',
  padding: '100px 0',
  '> *:not(:last-child)': { 
    marginBottom: 75,
    '@tablet': { marginBottom: 50 }
  }
})

const DetailsIntro = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  position: 'relative',
  width: '100%',
  paddingBottom: 75,
  '> *:not(:last-child)': { marginBottom: 20 },

  '&:after': { 
    content: '',
    position: 'absolute',
    bottom: 0,
    width: 100,
    height: 2,
    background: 'rgba( 255, 255, 255, 0.2 )'
  }
})

// For the container of the different sections of bullet points
// This has the title on the left and the bullets on the right of the container
// This is needed to automate the spacing between each of the sections

const DetailsDescp = styled('div', {
  position: 'relative',
  width: '100%',
  '> *:not(:last-child)': { marginBottom: 50 }
})

// -------------- Typescript declarations -------------- //

interface DetailProps {
  descp?: string
  responsibilities?: string
  requirements?: string
}

// ---------- This is the end of declarations ---------- //

export const JobDetails = ({ descp, responsibilities, requirements }:DetailProps) => {
  const decodedHTML = decodeHTML( descp || "" )
  const cleanHTML = DOMPurify.sanitize( decodedHTML )
  const responsibilitiesText = responsibilities || ""
  const requirementText = requirements || ""
  const listItems = processLines( responsibilitiesText )
  const reqListItems = processLines( requirementText )

  return(

    <DetailsWrap>
      <XyzTransition xyz="fade down delay-15 duration-15" appear>

        <DetailsContent>
          <DetailsIntro>
            <Heading size="l4" bold="heavy" title="Position Overview" />
            <Text fontSize="l0" dangerouslySetInnerHTML={{ __html: cleanHTML }}></Text>
          </DetailsIntro>

          <DetailsDescp>
            <Details title="Responsibilities" listItems={ listItems } />
            <Details title="Requirements" listItems={ reqListItems } />
          </DetailsDescp>
        </DetailsContent>

      </XyzTransition>
    </DetailsWrap>

  )
}
