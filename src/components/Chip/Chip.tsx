import React from 'react'
import { styled } from '@theme'

// For the master container of the leaderboard chip
// This contains the rank of the person on the left, with their name and image to the right,
// And the dontaion amount to the far right. This card is currently a static component

const ChipWrap = styled('div', {
  position: 'relative',
  width: '100%',
  padding: '12px 24px 12px 20px',
  background: '$orange100',
  borderRadius: '$r2',
  fontFamily: '$sansSerif',
  fontSize: '$s0'
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
  children: React.ReactNode
}

// ---------- This is the end of declarations ---------- //

export const Chip = ({
    children
  }: ChipProps ) => {
  
  return(

    <ChipWrap>
      <ChipContent>{ children }</ChipContent>
    </ChipWrap>
    
  )
}
