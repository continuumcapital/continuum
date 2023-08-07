import React from 'react'
import { styled } from '@theme'
import { Heading, Text, Button } from '@components'

const HeroWrap = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'relative',
  width: '100%',
  zIndex: 9999,
  '@desktop': { display: 'none' }
})

const HeroContent = styled('div', {
  display: 'grid',
  gridTemplateColumns: 'repeat(2, 1fr)',
  gridColumnGap: '32px',
  justifyItems: 'center',
  position: 'relative',
  maxWidth: 1100,
  width: '90%'
})

const Offer = styled('div', {
  position: 'relative',
  maxWidth: 600,
  width: '100%',

  // For the background behind the content within the container
  // This is needed because the background needs to send slighly above the button on the bottom of the continer

  '&:before': {
    content: '',
    position: 'absolute',
    top: 0,
    left: 0,
    width: 'calc( 100% - 4px )',
    height: 'calc( 100% - 24px )',
    background: 'rgba( 176, 154, 147, 0.2 )',
    border: '2px solid $brandPrimary',
    borderRadius: '$r3'
  }
})

const OfferContent = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  alignItems: 'center',
  position: 'relative',
  width: '90%',
  height: '100%',
  margin: '0 auto',
  padding: '24px 0 0',
  '> *:first-child': { marginBottom: 8 },
  '> *:last-child': { marginTop: 16 }
})

const OfferText = styled('div', {
  position: 'relative',
  width: '100%',
  '> *:not(:last-child)': { marginBottom: 8 }
})

interface OfferProps {
  offers: {
    title: string
    descp: string
    href: string
  }[]
}

export const HeroOffer = ({ offers }:OfferProps) => {
  return(

    <HeroWrap>
      <HeroContent>
        { offers.map(( offer, i ) => (
           
          <Offer key={`offer-${ i }`}>
            <OfferContent>
              <OfferText>
                <Heading align="center" bold="heavy" size="l3" title={ offer.title } /> 
                <Text textAlign="center"><p>{ offer.descp }</p></Text>
              </OfferText>

              <Button linkUrl={ offer.href } size="l0" variant="primary" title="Learn more" />
            </OfferContent>
          </Offer>

        ))}
      </HeroContent>
    </HeroWrap>
    
  )
}
