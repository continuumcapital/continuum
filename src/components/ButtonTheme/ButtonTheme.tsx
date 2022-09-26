import React, { useState } from 'react'
import { styled } from '@theme'
import { Button, Icon } from '@components'

// For the master container of the light and dark mode button
// By default, the button will be on white mode, and will change to the moon dominated when the button is clicked
// Clicking this button will put the sun behind the moon, and vice versa

const ButtonWrap = styled('button', {
	display: 'flex',
	justifyContent: 'center',
	alignItems: 'center',
	position: 'realtive',
	width: 50,
	height: 50,
	borderRadius: '50%',
	border: '1px solid $black',

  variants: {
    variant: {
      active: { 
        '> span:first-child': { },
        '> span:last-child': { display: 'none' }
      },
      inactive: { 
        '> span:first-child': { display: 'none' },
        '> span:last-child': { display: 'flex' }
      },
    }
  }
})

// For the container of the icons
// This 

const IconContainer = styled('span', {
	position: 'absolute',

  // For the sizing of the svgs within the container
	// This sets the default, but the moon will be scaled more on default

	svg: { width: '60%' }
})

// ---------- This is the end of declarations ---------- //

export const ButtonTheme = () => {
  const [ active, setActive ] = useState( false )
  const handleClick = () => { setActive( !active ) }
  
  return(

    <Button 
      variant="icon"
      icon={ active ? 'moon' : 'sun' }
      onClick={ handleClick }
    />

  )
}
