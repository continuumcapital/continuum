import React from 'react'
import { styled } from '@theme'
import { List, Heading } from '@components'

// For the master container of the leaderboard chip
// This contains the rank of the person on the left, with their name and image to the right,
// And the dontaion amount to the far right. This card is currently a static component

const ChipWrap = styled('div', {
  position: 'relative',
  width: '100%',
  padding: '12px 24px 12px 20px',
  background: '#334858',
  borderRadius: '$r2',
  fontFamily: '$sansSerif',
  fontSize: '$s0',
  marginTop: 24
})

// For the content to be centered within the master container
// This holds the rank, image, and name on the left, and the donation amount on the right

const ChipContent = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
  position: 'relative',
  width: '100%',
})

// -------------- Typescript declarations -------------- //

interface ChipProps {
  title?: string
  chips?: {
    title: string
  }[]
}

// ---------- This is the end of declarations ---------- //

export const Chip = ({
    title,
    chips
  }: ChipProps ) => {
  
  return(

    <>
      { chips ? (

        <List direction="horizontal" spacing="l1r" alignment="center">
          { chips.map(( chip, i ) => (
            <li key={`chip-${ i }`}>
              <ChipWrap><ChipContent><Heading bold="heavy" size="l0" title={ chip.title } /></ChipContent></ChipWrap>
            </li>
          ))}
        </List>

      ) : (

        <ChipWrap>
          <ChipContent><strong>{ title }</strong></ChipContent>
        </ChipWrap>

      )}
    </>
    
  )
}
