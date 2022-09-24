import React from 'react'
import { styled } from '../../../stitches.config'
import { Image, Heading } from '@components'

// For the master container of the card
// The card can have many variantions, including a lot of custom ones
// Here we solve for all types, as well as use for customization

const CardWrap = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  position: 'relative',
  width: 300,
  padding: 16,
  borderRadius: '$r2',
  border: '1px solid $gray200',
  lineHeight: 1.3
})

// For the content of the card - for the instance of a premade card
// If a card is custom, such as in the case of SnapShot component, it will not be wrapped in this content div

const CardContent = styled('div', {
  position: 'relative'
})

// For the container of the text within a card
// This is for the title, description and optional content if needed

const CardText = styled('div', {
  position: 'relative',
  width: '90%',
  margin: '16px auto 12px'
})

// -------------- Typescript declarations -------------- //

interface CardProps {
  image?: string
  title?: any
  subTitle?: string
  children?: React.ReactNode
}

// ---------- This is the end of declarations ---------- //

export const CardBase = ({ 
    image,
    title,
    subTitle,
    children 
  }:CardProps) => {
  
  return(

    <CardWrap>
      { title ? ( 

        <CardContent>
          <Image 
            variant="thumb" 
            image={ image } 
            alt={ title } 
            borderRadius="r1" 
          />

          <CardText>
            <Heading {...{ title }} size="l3" bold="heavy" />
            { subTitle ? ( <div>{ subTitle }</div> ) : null }
            { children ? ( <div>{ children }</div> ) : null }
          </CardText>
        </CardContent>

      ) : ( 

        <>{ children }</> 

      )}
    </CardWrap>
      
  )
}
