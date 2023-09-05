import React from 'react'
import { styled } from '@theme'
import { Heading, Text, Button } from '@components'
import { smoothScrollTo } from '@lib'

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
  },

  variants: {
    width: { 
      l0: { maxWidth: 600 },
      l1: { maxWidth: 800 }
    }
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
  '> *:not(:last-child)': { marginBottom: 8 },
  '> *:last-child': { '@tablet': { fontSize: '$s0' }}
})

interface BaseProps {
  width?: 'l0' | 'l1'
  title: string
  calloutButtonTitle?: string
  descp: string
  linkUrl: any
}

export const OfferBase = ({
    width,
    title,
    calloutButtonTitle,
    descp,
    linkUrl
  }:BaseProps) => {
  
  return(

    <Offer {...{ width }}>
      <OfferContent>
        <OfferText>
          <Heading align="center" bold="heavy" size="l3" {...{ title }} /> 
          <Text textAlign="center"><p>{ descp }</p></Text>
        </OfferText>

        <Button 
          onClick={() => smoothScrollTo( linkUrl )}
          size="l0" 
          variant="primary" 
          title={ calloutButtonTitle ? calloutButtonTitle : "Learn more" } 
        />
      </OfferContent>
    </Offer>

  )
}
