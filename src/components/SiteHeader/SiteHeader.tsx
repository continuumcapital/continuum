import React, { useState } from 'react'
import { styled } from '../../../stitches.config'
import { Logo, Button, List } from '@components'

// For the master container of the header
// This holds a relative position 

const Header = styled('header', {
  position: 'absolute',
  width: '100vw',
  zIndex: 9000
})

// For the container of the objects on the side of the nav container
// This holds the items to be equal width, so that the Avatars can be placed dead center of the container

const Side = styled('div', {
  display: 'inline-flex',
  position: 'relative',
  width: '20%'
})

const Middle = styled('div', {
  display: 'flex',
  justifyContent: 'center'
})

// For the container for all of the content within the nav container
// This holds the logo on the left, headshots in the center, and the menu button on the right

const Nav = styled('nav', {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  position: 'relative',
  width: '92%',
  margin: '0 auto',
  padding: '32px 0',

  '> div:nth-child( 2 )': {
    maxWidth: 930,
    width: '100%',
    overflow: 'scroll'
  },

  // Here we align the menu button to the right of the container

  '> div:last-child': {
    justifyContent: 'flex-end'
  }
})

// ---------- This is the end of declarations ---------- //

export const SiteHeader = () => {
  return(

    <Header>
      <Nav>
        <Side><Logo linkToHome /></Side>
        <Middle>
          <List direction="horizontal">
            <li><Button notBold size="l0" title="Research" /></li>
            <li><Button notBold size="l0" title="Investment solutions" /></li>
            <li><Button notBold size="l0" title="Contact" /></li>
          </List>
        </Middle>
        <Side>
          <Button size="l0" variant="tint" title="Client Portal" />
          <Button size="l0Icon" variant="iconOutline" icon="sun" />
          <Button size="l0Icon" variant="iconOutline" icon="moon" />
        </Side>
      </Nav>
    </Header>

  )
}
