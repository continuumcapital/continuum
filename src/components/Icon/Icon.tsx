import React from 'react'
import { styled } from '../../../stitches.config'

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
      l1: {},
      l2: { width: 50, height: 50 }
    },

    // For the changes of the background of the icon
    // Here the icon can sit in different types on containers, such as aa solid or outlined background

    background: {
      circle: {
        background: '$black',
        color: '$white',
        borderRadius: '50%',
        svg: { width: '50%' }
      },

      outline: {
        minWidth: 50,
        width: 50,
        minHeight: 50,
        height: 50,
        borderRadius: '50%',
        border: '2px solid $black'
      }
    }
  }
})

// -------------- Typescript declarations -------------- //

interface IconProps {
  size?: 'l0' | 'l1' | 'l2'
  background?: 'circle' | 'outline'
  icon?: string
  iconAlt?: string
}

// ---------- This is the end of declarations ---------- //

export const Icon = ({
    size,
    background,
    icon,
    iconAlt
  }: IconProps ) => {
  
    return(

     <IconWrap {...{ size, background }}>
        { iconAlt ? ( <img src={`/icons/${ iconAlt }.svg`} alt="FreeRossIcon" /> ) 
        : ( <svg><use xlinkHref={ `/global/icons/icons.svg#${ icon }` } xlinkTitle={ icon } /></svg> )
        }
      </IconWrap>
     
    )
}
