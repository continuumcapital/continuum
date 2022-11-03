import React from 'react'
import Link from 'next/link'
import { styled } from '@theme'
import { Form, Logo, Text, List } from '@components'
import ScrollAnimate from 'react-scroll-fade-animation'

// For the master container of the global footer
// This holds all of the universal links that a user can click through to the page
// This also holds the disclaimer, socials, and contact info

const FooterWrap = styled('footer', {
  position: 'relative',
  width: '100vw',
  color: '$white',
  fontFamily: '$sansSerif',
  zIndex: 9000
})

// For the container of all of the content within the footer
// This holds the page links, social links, disclaimers, and newsletter

const FooterContain = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  position: 'relative',
  maxWidth: 1300,
  width: '90%',
  margin: '0 auto 12px',
  padding: '75px 0 50px',
  background: '$siteBg',
  borderRadius: '$r2',

  // Change the alignment for all of the items within the footer on the mobile breakpoint
  // Here we align all of the content on the left of the container

  '@tablet': {
    width: '100%',
    marginBottom: 0,
    alignItems: 'flex-start',
    borderRadius: '$r2 $r2 0 0'
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

const MainContent = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  position: 'relative',
  width: '90%',
  margin: '0 auto'
})

const FooterLinkWrap = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  position: 'relative',
  width: '100%',
  marginTop: 32,

  // For the orientation changes on mobile

  '@tablet': {
    flexDirection: 'column',
    padding: '25px 0',

    '> *:not(:last-child)': {
      marginBottom: 32
    }
  }
})

// For the container of all of the content within the footer
// This contains the logo, links, disclaimer, and legal section on the bottom of the container

const FooterContent = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  position: 'relative',
  width: '100%',
  padding: '50px 0 0',
  marginTop: 100,
  borderTop: '1px solid rgba( 79, 79, 79, 0.2 )',
  // borderBottom: '1px solid rgba( 79, 79, 79, 0.2 )',

  // Change the default color of the paragraph to be a bit darker

  p: {
    color: '$gray200'
  }
})

// For the container of the legal section on the bottom of the container

const Legal = styled('div', {
  marginTop: 32,
  fontSize: '$s0'
})

// ---------- This is the end of declarations ---------- //

export const Footer = () => {
  return(

    <FooterWrap id="contact">
      <FooterContain>
        <section style={{ width: '100%' }}>
          <ScrollAnimate path={'top'}>

            <MainContent>
              <Form 
                title="Contact Us"
              />

              <FooterContent>
                <div>&copy; 2022 Continuum Capital</div>

                {/* <FooterLinkWrap>
                  <FooterLinks>
                    <List spacing="l1">
                      <li><Link href="#digital-assets"><a><strong>Digital Assets</strong></a></Link></li>
                      <li><Link href="#real-estate"><a><strong>Real Estate</strong></a></Link></li>
                      <li><a href="https://www.medium.com" target="_blank" rel="noreferrer"><strong>Blog</strong></a></li>
                      <li><a href="https://www.facebook.com" target="_blank" rel="noreferrer"><strong>Facebook</strong></a></li>
                      <li><a href="https://twitter.com" target="_blank" rel="noreferrer"><strong>Twitter</strong></a></li>
                      <li><a href="https://www.instagram.com" target="_blank" rel="noreferrer"><strong>Instagram</strong></a></li>
                    </List>
                  </FooterLinks>

                  <Text width="small">
                    <p>
                      <strong>Disclaimer</strong>: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce gravida vel libero 
                      eget tincidunt. Mauris et malesuada purus. Integer et orci nibh. Duis suscipit congue purus eu facilisis. Proin 
                      eu placerat dolor.
                    </p>

                    <p>
                      Nam hendrerit gravida pretium. Aliquam vehicula, risus at dignissim accumsan, lorem urna pretium dui, quis 
                      lacinia est sapien a dolor. Fusce eget urna nec justo egestas tincidunt vitae et odio.
                    </p>
                  </Text>
                </FooterLinkWrap> */}
              </FooterContent>

              {/* <Legal>
                <List direction="horizontal" spacing="l1r">
                  <li><a href="/" target="_blank" rel="noreferrer"><strong>Privacy policy</strong></a></li>
                  <li><Link href="/legal/terms-and-conditions"><a><strong>Terms &amp; conditions</strong></a></Link></li>
                </List>
              </Legal> */}
            </MainContent>
          
          </ScrollAnimate>
        </section>
      </FooterContain>
    </FooterWrap>

  )
}
