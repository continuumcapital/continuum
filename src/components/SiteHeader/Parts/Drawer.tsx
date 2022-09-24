import React from 'react'
import { styled } from '../../../../stitches.config'
import { Image, Heading, Button, Icon } from '@components'

// For the master container of the drawer
// This holds the menu trigger, and the links in the drawer that shows up on hover

const Drawer = styled('div', {
  '&:hover': {

    '> div:first-child': {

      // Here we rotate the chevron arrow to point up to give affordance that the dropdown menu is opened

      '> *:last-child': {
        transform: 'rotate( 180deg ) translateY( -2px )'
      }
    },

    // Show the menu once the link has been hovered

    '> div:last-child': {
      visibility: 'visible',
      opacity: 1
    }
  },
})

// For the container of the trigger that opens up the menu below
// Within the header this is used anywhere with the chevron arrow on the right of the link to indicate that there is a menu

const MenuTrigger = styled('div', {
  display: 'flex',
  alignItems: 'center',
  position: 'relative',
  padding: '28px 0',
  zIndex: 9999,
  cursor: 'pointer',
  fontFamily: '$sansSerifBold',

  // Automate the spacing between the text and the chevron dropdown on the right of the container
  // This adds spacing to the right of the text, if there is a chevron present

  '> span:last-child': {
    marginLeft: 6,
    transition: '$s1'
  }
})

// For the master container of the menu drawer
// This holds all of the links wtihin the dropdown - such as hovering over "How it works"

const MenuWrap = styled('div', {
  position: 'absolute',
  left: 0,
  width: '100%',
  background: '$white',
  color: '$black',
  transform: 'translateY( 0px )',
  zIndex: 0,
  visibility: 'hidden',
  opacity: 0,
  transition: '$s1',
  boxShadow: '2px 10px 10px rgba( 0,0,0,0.1 )',
})

// For the container of all of the content within the menu container
// This is centered within the master container

const MenuContent = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  position: 'relative',
  maxWidth: 1000,
  width: '90%',
  padding: '64px 0',
  margin: '0 auto',

  // For the size of each link within the container

  '> a': { width: '30%' },

  // For orientation and sizing changes on mobile breakpoints

  '@media( max-width: 767px )': {
    display: 'flex',
    flexDirection: 'column',
    padding: '32px 0',
    '> a': { width: '100%' },
  }
})

// For the styling of each individual link within the menu
// This holds the image on the top, title and subtitle below, and the button on the bottom

const MenuItem = styled('div', {
  width: '100%',
  '> *:first-child': { height: 150 },
  '> *:not(:last-child)': { marginBottom: 16 },

  // For orientation and sizing changes on mobile breakpoints

  '@media( max-width: 767px )': {
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    '> *:first-child': { height: 100, width: 300 },
  }
})

// For the container of all of the text within a link section - below the image
// This holds the title, subtitle, and the button - but for this container we use it to automate the spacing

const MenuItemText = styled('div', {

  '> div:not(:last-child)': {
    marginBottom: 12
  },

  '@media( max-width: 767px )': {
    marginLeft: 20,
    '> *:last-child': { display: 'none' }
  }
})

// For the styling of the subtile, below the title - optional
// A short description to give more content to the links

const SubTitle = styled('div', {
  fontFamily: '$serif',
  lineHeight: 1.3
})

// -------------- Typescript declarations -------------- //

interface DrawerProps {
  trigger: string
  links: {
    image: string
    title: string
    subTitle: string
    href: string
  }[]
}

// ---------- This is the end of declarations ---------- //

export const MenuDrawer = ({ trigger, links }:DrawerProps) => {
  return(

    <Drawer>
      <MenuTrigger>
        <span><strong>{ trigger }</strong></span>
        <Icon icon="chevron-down" size="l0" />
      </MenuTrigger>

      <MenuWrap>
        <MenuContent>
          { links.map(( link:any, i:number ) => (
            
            <a key={`link-${ i }`} href={ link.href }>
              <MenuItem>
                <Image borderRadius="r2" image={ link.image } />
                <MenuItemText>
                  <Heading size="l1" bold="heavy" title={ link.title } />
                  <SubTitle>{ link.subTitle }</SubTitle>
                  <Button variant="outline" size="l0" title="Read more" />
                </MenuItemText>
              </MenuItem>
            </a>

          ))}
        </MenuContent>
      </MenuWrap>
    </Drawer>
      
  )
}