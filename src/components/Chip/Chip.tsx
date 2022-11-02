import React from 'react'
import Link from 'next/link'
import { styled } from '@theme'
import { List, Heading } from '@components'

// For the master container of the leaderboard chip
// This contains the rank of the person on the left, with their name and image to the right,
// And the dontaion amount to the far right. This card is currently a static component

const ChipWrap = styled('div', {
  position: 'relative',
  width: '100%',
  padding: '20px 32px',
  background: '#334858',
  borderRadius: '$pill',
  fontFamily: '$sansSerif',
  marginTop: 24,
  letterSpacing: '1',

  '@mobile': {
    padding: '16px 20px',

    '*': { fontSize: '1rem' }
  }
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
    href?: string
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
              { chip.href ? (

                <Link href={ chip.href }>
                  <a>
                    <ChipWrap>
                      <ChipContent><Heading bold="bold" title={ chip.title } /></ChipContent>
                    </ChipWrap>
                  </a>
                </Link>

              ) : (
                <ChipWrap><ChipContent><Heading bold="bold" title={ chip.title } /></ChipContent></ChipWrap>
              )}
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
