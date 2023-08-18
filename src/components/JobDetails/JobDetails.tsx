import React from 'react'
import { styled } from '@theme'
import { Heading, Text, List, Form } from '@components'
import { Details } from './Parts/Details'
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
          <Details title="Responsibilities" listItems={ listItems } />
          <Details title="Requirements" listItems={ reqListItems } />
        </DetailsDescp>
      </DetailsContent>
    </DetailsWrap>

  )
}
