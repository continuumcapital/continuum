import React from 'react'
import { styled } from '@theme'
import { Heading, Text, List, Form } from '@components'
import DOMPurify from 'dompurify'

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

const decodeHTML = (html: string) => {
  const txt = document.createElement('textarea');
  txt.innerHTML = html;
  return txt.value;
};

interface DetailProps {
  descp?: string
  responsibilities?: string
  requirements?: string
}

export const JobDetails = ({ descp, responsibilities, requirements }:DetailProps) => {
  const decodedHTML = decodeHTML(descp || "");
  const cleanHTML = DOMPurify.sanitize(decodedHTML);
  const responsibilitiesText = responsibilities || "";
  const requirementText = requirements || "";

  const lines = responsibilitiesText.split('\n');
  const linesTwo = requirementText.split('\n');
  const nonEmptyLines = lines.filter(line => line.trim() !== '');
  const nonEmptyLinesTwo = linesTwo.filter(line => line.trim() !== '');

  const listItems = nonEmptyLines.map(line => ({ title: line.trim() }));
  const reqListItems = nonEmptyLinesTwo.map(line => ({ title: line.trim() }));

  return(

    <DetailsWrap>
      <DetailsContent>
        <Text fontSize="l1" dangerouslySetInnerHTML={{ __html: cleanHTML }}></Text>

        <DetailsDescp>
          <DescpBlock>
            <DescpBlockHeading>
              <Heading size="l1" bold="heavy" title="Responsibilities" />
            </DescpBlockHeading>

            <List 
              spacing="l0"
              fontSize="l1"
              listStyle="bulleted"
              listItems={ listItems }
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
              listItems={ reqListItems }
            />
          </DescpBlock>
        </DetailsDescp>
      </DetailsContent>
    </DetailsWrap>

  )
}
