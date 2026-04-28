import React from 'react'
import { styled } from '@theme'
import { ContactForm } from '@components'
import "@animxyz/core"
import { XyzTransition } from '@animxyz/react'

// For the master container of the global footer
// This holds all of the universal links that a user can click through to the page
// This also holds the disclaimer, socials, and contact info

const FooterWrap = styled('footer', {
  position: 'relative',
  width: '100vw',
  color: '$white',
  fontFamily: '$sansSerif',
  zIndex: 8000,
  '@tablet': { background: 'none' }
})

// For the container of all of the content within the footer
// This holds the page links, social links, disclaimers, and newsletter

const FooterContain = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  position: 'relative',
  width: '100%',
  margin: '0 auto 12px',
  padding: '75px 0 50px',
  background: '$siteBg',
  borderRadius: '$r2',
  '@mobile': { paddingTop: '0px !important' },

  // Here we add the support to remove the default contact from the footer
  // This is needed for other pages such as the Job posting page, where there is the application form on the bottom

  variants: {
    removeContact: {
      true: { padding: '50px 0' }
    }
  },

  // Change the alignment for all of the items within the footer on the mobile breakpoint
  // Here we align all of the content on the left of the container

  '@tablet': {
    width: '100%',
    marginBottom: 0,
    alignItems: 'flex-start',
    borderRadius: '$r2 $r2 0 0'
  }
})

// For the container of all of the content within the footer component
// This holds the contact form on the top and the copywrite text on the bottom

const MainContent = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  position: 'relative',
  width: '100%',
  margin: '0 auto'
})

// For the container of all of the content within the footer
// This contains the logo, links, disclaimer, and legal section on the bottom of the container

const FooterContent = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  position: 'relative',
  width: '100%',
  marginTop: 50,
  '> *:not(:last-child)': { marginBottom: 8 },
  '@tablet': { marginTop: 20 },

  // Change the default color of the paragraph to be a bit darker

  p: {
    color: '$gray200'
  },

  // Here we adjust the soacing to account for the removal of the contact form
  // This will move the copywrite information up

  variants: {
    removeContact: {
      true: { marginTop: 0 }
    }
  }
})

const FooterSocial = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  alginItmes: 'center',
  position: 'relative',
  width: '100%'
})

// -------------- Typescript declarations -------------- //

interface FooterProps {
  removeContact?: boolean
}

// ---------- This is the end of declarations ---------- //

export const Footer = ({ removeContact }:FooterProps) => {
  return(

    <FooterWrap id="contact">
      <FooterContain {...{ removeContact }}>
        <XyzTransition xyz="fade" appearVisible>

          <MainContent>
            { removeContact ?? ( <ContactForm /> )}

            <FooterContent {...{ removeContact }}>
              {/* <FooterSocial>
                <ButtonContainer
                  align="center" 
                  variant="icon"
                  spacing="l0"
                  buttons={[
                    { linkUrl: 'https://instagram.com/mxmlcreative', icon: 'instagram' },
                    { linkUrl: 'https://www.linkedin.com/company/mxml-creative', icon: 'linkedin' }
                  ]}
                />
              </FooterSocial> */}
              
              <div>&copy; {new Date().getFullYear()} CONTINUUM CAPITAL</div>
            </FooterContent>
          </MainContent>
        
        </XyzTransition>
      </FooterContain>
    </FooterWrap>

  )
}
