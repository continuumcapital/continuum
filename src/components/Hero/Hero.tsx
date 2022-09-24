import React from 'react'
import { styled } from '../../../stitches.config'
import { Blob, Heading } from '@components'

const HeroContainer = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'relative',
  width: '100vw',
  height: 'calc( 100vh - 150px )'
})

const HeroBg = styled('div', {
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  opacity: 0.6,
  pointerEvents: 'none'
})

const HeroImage = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'relative',
  width: '100%',
  height: 370,
  borderRadius: '$r2 $r2 0 0',
  overflow: 'hidden',

  // For the slanted background on the bottom of the container
  
  '&:after': {
    content: '',
    position: 'absolute',
    bottom: -200,
    width: '150%',
    height: 300,
    background: '$black',
    transform: 'rotate( -10deg )',
    zIndex: 0
  }
})

const HeroText = styled('div', {
  position: 'relative',
  maxWidth: 1080,
  width: '90%',

  '> div': {
    maxWidth: 960,
    width: '100%'
  }
})

const CompanyName = styled('div', {
  position: 'relative',
  marginBottom: 16,
  
  // For the smaller line on the bottom of the contianer

  // '&:after': {
  //   content: '',
  //   position: 'absolute',
  //   bottom: 0,
  //   left: 0,
  //   width: 100,
  //   height: 1,
  //   background: '$gray200'
  // }
})

// -------------- Typescript declarations -------------- //

interface HeroProps {
}

// ---------- This is the end of declarations ---------- //

export const Hero = ({ 
  }: HeroProps ) => {
  
  return(

    <HeroContainer>
      <HeroBg><Blob zoom={ 2.15 } /></HeroBg>
      
      <HeroText>
        <div>
          <CompanyName>
            <Heading 
              font="code" 
              size="l3" 
              bold="heavy"
              color="purple" 
              title="Continuum Digital" 
            />
          </CompanyName>

          <Heading 
            size="l7" 
            bold="heavy" 
            title="Alternative Passive Income Solutions Powered by web3" 
          />
        </div>
      </HeroText>
    </HeroContainer>
    
  )
}
