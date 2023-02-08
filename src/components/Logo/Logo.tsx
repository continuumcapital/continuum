import React from 'react'
import Link from 'next/link'
import { styled } from '@theme'
import { Heading } from '@components'

// For the global treatment of the logo
// This component contains the dove icon and the FreeRossDAO text to the right of the dove
// This component can be used as just the required dove and the optional text

const LogoWrap = styled('figure', {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  position: 'relative',

  // Here we add support for the logo to be larger than the default size
  // Such as if it is needed to be over images, or some other unforseen scenerio

  variants: {
    size: {
      l1: {},
      l2: {}
    }
  }
})

// For the logo mark of the dove on the left side of the container
// This dictates it's default size, as used within the header and footer

const LogoMark = styled('img', {
  position: 'relative',
  width: 80,
})

// For the container of the word mark - FreeRossDAO
// This is optional, as the dov can stand alone, such as within the footer, but comes with the logo by default

const LogoWordMark = styled('figcaption', {
  position: 'relative',
  marginLeft: 4,
  color: 'inherit',
  letterSpacing: 0.5,
  fontSmoothing: 'antialiased'
})

// -------------- Typescript declarations -------------- //

interface LogoProps {
  size?: 'l1' | 'l2'
  noWordMark?: boolean
  linkToHome?: boolean
}

// ---------- This is the end of declarations ---------- //

export const Logo = ({
    size, // Supporting the size of the logo
    noWordMark, // Supporting if the logo mark is not needed and only the dove is present
    linkToHome // Optional - allow the logo to hold a link path, but this is mostly the homepage
  }: LogoProps ) => {
  
  return(

    <>
      { linkToHome ? (
        
        <Link href="/">
          <a>
            <LogoWrap {...{ size }}>
              <LogoMark src="/global/cd-logo.png" alt="Continuum Capital logo" />
              
              { noWordMark ? null : ( 
                <LogoWordMark>
                  <Heading title="Continuum" bold="bold" />
                  <Heading title="Capital" />
                </LogoWordMark> 
              )}
            </LogoWrap>
          </a>
        </Link>

      ) : (

        <LogoWrap {...{ size }}>
          <LogoMark src="/global/cd-logo.png" alt="Continuum Digital logo" />

          { noWordMark ? null : ( 
            <LogoWordMark>
              <Heading color="primary" title="Continuum" bold="bold" />
              <Heading color="primary" title="Capital" />
            </LogoWordMark> 
          )}
        </LogoWrap>

      )}
    </>

  )
}
