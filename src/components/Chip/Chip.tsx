import React from 'react'
import Link from 'next/link'
import { styled } from '@theme'
import { List, Heading } from '@components'

// For the master container of the Chips container
// This is a basic container that sets the width and centers the chips

const Chips = styled('div', {
  position: 'relative',
  width: '90%',
  margin: '0 auto'
})

// For the master container of Chip itself
// This holds text in the center of the container

const ChipWrap = styled('div', {
  position: 'relative',
  width: '100%',
  padding: '16px 20px',
  borderRadius: '$r2',
  border: '1px solid $brandPrimary',
  color: '$white',
  background: 'rgba( 176, 154, 147, 0.2 )',
  fontFamily: '$sansSerif',
  letterSpacing: '1',
  transition: '$s1',
  textAlign: 'center',

  // Here we change the color and background of the chip to give it afforance as a button

  '&:hover': {
    background: '$brandPrimary',
    color: '$black'
  },

  // For the changes to the spacing and the font sizes on mobile breakpoints

  '@mobile': {
    padding: '12px 20px',
    maxWidth: 180,
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
  width: '100%'
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
    title, // Required - for the title of the chip
    chips // Opitonal - allows for an array of chips
  }: ChipProps ) => {
  
  return(

    <Chips>
      { chips ? (

        <List direction="horizontal" spacing="l1r" alignment="center">
          { chips.map(( chip, i ) => (
            <li key={`chip-${ i }`}>
              { chip.href ? (

                <Link href={ chip.href }>
                  <a>
                    <ChipWrap>
                      <ChipContent>
                        <Heading bold="heavy" title={ chip.title } />
                      </ChipContent>
                    </ChipWrap>
                  </a>
                </Link>

              ) : (

                <ChipWrap>
                  <ChipContent>
                    <Heading bold="heavy" title={ chip.title } />
                  </ChipContent>
                </ChipWrap>

              )}
            </li>
          ))}
        </List>

      ) : (

        <ChipWrap>
          <ChipContent><strong>{ title }</strong></ChipContent>
        </ChipWrap>

      )}
    </Chips>
    
  )
}
