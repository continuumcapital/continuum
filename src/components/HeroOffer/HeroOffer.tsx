import React from 'react'
import { styled } from '@theme'
import { OfferBase } from './Parts/Base'

const HeroWrap = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'relative',
  width: '100%',
  zIndex: 9999,

  variants: {
    hideOnTablet: {
      true: { '@desktop': { display: 'none' }}
    }
  }
})

const HeroContent = styled('div', {
  display: 'grid',
  gridColumnGap: '32px',
  justifyItems: 'center',
  position: 'relative',
  maxWidth: 1100,
  width: '90%',

  variants: {
    columns: {
      1: { gridTemplateColumns: 'repeat(1, 1fr)' },
      2: { gridTemplateColumns: 'repeat(2, 1fr)' }
    }
  }
})

interface OfferProps {
  title?: any
  calloutButtonTitle?: string
  descp?: any
  href?: any
  offers?: {
    title: string
    descp: string
    href: string
  }[]
  hideOnTablet?: boolean
}

export const HeroOffer = ({ 
    offers,
    title,
    calloutButtonTitle,
    descp,
    href,
    hideOnTablet
  }:OfferProps) => {

  return(

    <HeroWrap {...{ hideOnTablet }}>
      <HeroContent columns={ offers ? '2' : '1' }>
        { offers ? (

          <>
            { offers.map(( offer, i ) => (
              <OfferBase width="l0" key={`offer-${ i }`} title={ offer.title } descp={ offer.descp } linkUrl={ offer.href } />
            ))}
          </>

        ) : (

          <OfferBase width="l1" linkUrl={ href } {...{ title, calloutButtonTitle, descp }} />

        )}
      </HeroContent>
    </HeroWrap>
    
  )
}
