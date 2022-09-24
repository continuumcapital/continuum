import React from 'react'
import { styled } from '../../../stitches.config'
import { Logo, Text, List } from '@components'

// For the master container of the global footer
// This holds all of the universal links that a user can click through to the page
// This also holds the disclaimer, socials, and contact info

const FooterWrap = styled('footer', {
  position: 'relative',
  fontFamily: '$sansSerif',
  background: '$lavender',
})

// For the container of all of the content within the footer
// THis holds the page links, social links, disclaimers, and newsletter

const FooterContain = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  position: 'relative',
  maxWidth: 1200,
  width: '90%',
  margin: '0 auto',
  padding: '75px 0',

  // Change the alignment for all of the items within the footer on the mobile breakpoint
  // Here we align all of the content on the left of the container

  '@media(max-width: 767px)': {
    alignItems: 'flex-start'
  }
})

// For the container of the footer links
// This holds the logo and all the other links, where they direct the user back to the FreeRossDAO.org site

const FooterLinks = styled('div', {
  position: 'relative',
  marginRight: 100,

  // Remove the default margin on mobile breakpoint

  '@media(max-width: 767px)': {
    marginRight: 0,
  }
})

// For the container of all of the content within the footer
// This contains the logo, links, disclaimer, and legal section on the bottom of the container

const FooterContent = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  position: 'relative',
  width: '100%',
  padding: '50px 0',
  marginTop: 16,
  borderRadius: '$r2',

  // Change the default color of the paragraph to be a bit darker

  p: {
    color: '$gray200'
  },

  // For the orientation changes on mobile

  '@media(max-width: 767px)': {
    flexDirection: 'column',
    padding: '25px 0',

    '> *:not(:last-child)': {
      marginBottom: 32
    }
  }
})

// For the container of the legal section on the bottom of the container

const Legal = styled('div', {
  marginTop: 32
})

// ---------- This is the end of declarations ---------- //

export const Footer = () => {
  
  return(

    <FooterWrap>
      <FooterContain>
        <Logo />
        
        <Legal>
          <List direction="horizontal" spacing="l1r">
            <li><a href="/" target="_blank"><strong>Privacy policy</strong></a></li>
            <li><a href="/" target="_blank"><strong>Terms and conditions</strong></a></li>
          </List>
        </Legal>
      </FooterContain>
    </FooterWrap>
    
  )
}
