import React, { useState } from 'react'
import { styled } from '../../../stitches.config'
import { List, Icon, Heading } from '@components'

/* 
  *** ReadMe ***

  The Steps component is always static but can be used in two different ways. First, in the Artizen protocol, it is used to
  shows which steps a user is in within the donation flow, meaning how far the are along from start to finish. The other
  way the component is used is for static, graphical representation to promote a CTA for usuing the donation serivce of the DAO.

  The steps come with two features:
  • Icon
  • Title

  *** End ReadMe ***
*/

// For the master container of the steps
// This holds the horizontal and vertical formats of the steps, both look a bit different than one another

const StepsWrap = styled('div', {
  position: 'relative',
  width: '100%',

  // For the container of each of the list items within the steps container
  // This holds the icon on the left and the title to the right

  li: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    position: 'relative'
  }
})

// For the container of the icons on the left of the container
// This contains the outlined circle with the icon in the center of the container

const GraphicWrap = styled('div', {
  display: 'inline-flex',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'relative',
  padding: '6px 0',
  background: '$white',

  // For the line that connects each of the steps together
  // This is shown on the top of the first icon circle, and continues to the bottom of the last one

  '&:before, &:after': {
    content: '',
    position: 'absolute',
    width: 2,
    height: 6,
    background: '$black',
    zIndex: 0
  },
  '&:before': { top: 0 },
  '&:after': { bottom: 0 },

  // If there is any text to the right of the icon than this is where we automate the spacing
  // If the icon is stand-alone, then there will be no spacing added

  '+ div': {
    marginLeft: 12
  }
})

// For the container of the icon on the right of the contianer
// This has the icon within a circle, placed in the center

const StepGraphic = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'realative',
  width: 44,
  minWidth: 44,
  height: 44,
  minHeight: 44,
  borderRadius: '50%',
  border: '2px solid $black'
})

// -------------- Typescript declarations -------------- //

interface StepsProps {
  steps: {
    title?: string
    icon?: string
  }[]
}

// ---------- This is the end of declarations ---------- //

export const Steps = ({ steps }: StepsProps ) => {
  return(

    <StepsWrap>
      <List>
        { steps.map(( step:any, i:number ) => (
          <li key={`step-${ i }`}>
            <GraphicWrap><StepGraphic><Icon size="l0" iconAlt={ step.icon } /></StepGraphic></GraphicWrap>
            <div><Heading size="l0" bold="heavy" title={ step.title } /></div>
          </li>
        ))}
      </List>
    </StepsWrap>
    
  )
}
