import React from 'react'
import { styled } from '@theme'

// For the master container of the icons
// Icons are used in various parts of the size, such as buttons, steps, static, ect

const IconWrap = styled('span', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'relative',
  width: 30,
  height: 30,

  // For the size of the svg to sit in the center of the container
  // This also changes the color to inheit the parent color 

  svg: {
    position: 'absolute',
    width: '118%',
    fill: 'CurrentColor'
  },

  // For the different variants supporting the icon component
  // This conains changes to the size and background of the icon

  variants: {
    size: {
      l0: { width: 16, height: 16},
      l1: { width: 32, height: 32 },
      l2: { width: 50, height: 50 }
    }
  }
})

// -------------- Typescript declarations -------------- //

interface IconProps {
  size?: 'l0' | 'l1' | 'l2'
  icon?: string
}

// ---------- This is the end of declarations ---------- //

export const Icon = ({
    size, // Optional - for the sifferent sizes of the icon
    icon, // Required - for the icon being called
  }: IconProps ) => {
  
    return(

      <IconWrap {...{ size }}>
        <svg><use xlinkHref={ `/global/icons/icons.svg#${ icon }` } xlinkTitle={ icon } /></svg> 
      </IconWrap>
     
    )
}
