import React from 'react'
import { styled } from '@theme'
import { Heading, Icon, Chip } from '@components'

const HeroContainer = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'relative',
  width: '100vw',
  height: '100vh',

  svg: {
    color: '$white'
  }
})

const HeroText = styled('div', {
  position: 'relative',
  maxWidth: 1200,
  width: '90%',
  textAlign:'center',

  '> div': {
    width: '100%'
  }
})

const CompanyName = styled('div', {
  position: 'relative',
  marginBottom: 16,
})

// -------------- Typescript declarations -------------- //

interface HeroProps {
}

// ---------- This is the end of declarations ---------- //

export const Hero = ({ 
  }: HeroProps ) => {
  
  return(

    <HeroContainer>
      <HeroText>
        <CompanyName>
          <Heading 
            font="code" 
            size="l3" 
            bold="heavy"
            color="blue" 
            title="Continuum Capital" 
          />
        </CompanyName>

        <Heading 
          size="l7" 
          bold="heavy" 
          title="Alternative Investment Solutions at the intersection of Real Estate and Digital Assets" 
        />

        <Chip 
          chips={[
            { href: '#digital-assets', title: 'Digital Assets' },
            { href: '#real-estate', title: 'Real Estate' }
          ]}
        />
      </HeroText>
    </HeroContainer>
    
  )
}
