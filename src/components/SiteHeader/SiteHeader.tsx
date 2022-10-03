import React from 'react'
import { styled } from '@theme'
import { useScrollPosition } from '@lib'
import { Logo, Button, List, ButtonTheme } from '@components'
import { MenuDrawer } from './Parts/Drawer'

// For the master container of the header
// This holds a relative position 

const Header = styled('header', {
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100vw',
  zIndex: 9010,

   // For the frosted glass behind the header
   // By default no one will notice the effect, but will see whne the user starts to hover

  '&:before': {
    content: '',
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backdropFilter: 'blur( 6px )'
  },

  '&:after': {
    content: '',
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    background: '$siteBg',
    opacity: 0.7,
    zIndex: 1
  }
})

// For the container of the objects on the side of the nav container
// This holds the items to be equal width, so that the Avatars can be placed dead center of the container

const Side = styled('div', {
  display: 'inline-flex',
  position: 'relative',
  width: '20%',

  '*:not(:last-child)': { marginRight: 12 }
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
  padding: '24px 0',
  transition: '$s1',
  zIndex: 10,

  '> div:nth-child( 2 )': {
    maxWidth: 930,
    width: '100%',
  },

  // Here we align the menu button to the right of the container

  '> div:last-child': {
    justifyContent: 'flex-end'
  }
})

// ---------- This is the end of declarations ---------- //

export const SiteHeader = () => {
  const scrollPos = useScrollPosition()

  return(
    
    <Header>
      <Nav style={{ padding: scrollPos <= 100 ? '24px 0' : '12px 0' }}>
        <Side><Logo linkToHome /></Side>

        <Middle>
          <List direction="horizontal">
            <li><Button notBold size="l0" title="Research" /></li>
            <li>
              <MenuDrawer 
                trigger="Invstment Solutions"
                links={[
                  { 
                    href: '/', 
                    title: 'Digital Assets', 
                    subTitle: 'Leveraging the security of blue chip base layer protocols to achieve an institutional grade delta neutral passive income.' 
                  },
                  { 
                    href: '/', 
                    title: 'Real Estate', 
                    subTitle: 'Growing set of opportunities as real world assets (RWAs) begin to move on-chain.' 
                  }
                ]}
              />
            </li>
            <li><Button notBold size="l0" title="Contact" /></li>
          </List>
        </Middle>

        <Side>
          <Button size="l0" variant="secondary" title="Client Portal" />
          <ButtonTheme />
        </Side>
      </Nav>
    </Header>

  )
}
