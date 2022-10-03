import React, { useState } from 'react'
import * as CheckboxPrimitive from '@radix-ui/react-checkbox'
import { List, Icon } from '@components'
import { styled } from '@theme'

const CheckboxWrap = styled('div', {
  display: 'flex',
  flexDirection: 'row-reverse',
  justifyContent: 'flex-end',
  alignItems: 'center',
  position: 'relative',
  width: '100%',
  fontFamily: '$sansSerif',
  cursor: 'pointer',

  // For the spacing and styling of the label to the checkbox
  
  label: {
    position: 'relative',
    marginLeft: 8,
    userSelect: 'none'
  },

  a: {
    color: '$white',
    textDecoration: 'underline',
    textUnderlineOffset: 2,
    textDecorationThickness: 0.5,
    transition: '$s1',

    '&:hover': {
      color: '$electric'
    }
  }
})

const Checkbox = styled(CheckboxPrimitive.Root, {
  all: 'unset',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'relative',
  width: 24,
  height: 24,
  border: '1px solid $blueBorder',
  borderRadius: 8,
  transition: '$s1',

  '&:before': {
    content: '',
    position: 'absolute',
    width: '100%',
    height: '100%',
    background: '$lavender',
    borderRadius: 6,
    transition: '$s1',
    transform: 'scale( 0.2 )',
    opacity: 0
  },
  
  '&:hover': { 
    
    '&:before': {
      transform: 'scale( 0.7 )',
      opacity: 1
    }
  },

  '&:focus': { borderColor: '$white' },

  '&[aria-checked = true]': {
    borderColor: '$white !important',

    '&:before': {
      transform: 'scale( 1 ) !important',
      background: '$white',
      opacity: 1
    }
  },
})

const CheckboxIndicator = styled(CheckboxPrimitive.Indicator, {
  color: '$secondaryBlue'
});


 
// -------------- Typescript declarations -------------- //

interface CheckProps {
  defaultChecked?: boolean
  id?: any
  label?: string
  listItems?: {
    id: any
    label: any
    defaultChecked?: boolean
  }[]
}

// ---------- This is the end of declarations ---------- //

export const InputCheckbox = ({
    defaultChecked,
    id,
    label,
    listItems
  }: CheckProps ) => {
  
  return(

    <>
      { listItems ? (

        <List spacing="l0">
          { listItems.map(( item, i ) => (

            <li key={`item-${ i }`}>
              <CheckboxWrap>
                <label htmlFor={ item.id }>{ item.label }</label>
                <Checkbox 
                  id={ item.id }
                  defaultChecked={ item.defaultChecked }
                >
                  <CheckboxIndicator><Icon size="l0" icon="check" /></CheckboxIndicator>
                </Checkbox>
              </CheckboxWrap>
            </li>

          ))}
        </List>

      ) : (

        <CheckboxWrap>
          <label htmlFor={ id }>{ label }</label>
          <Checkbox defaultChecked={ defaultChecked } id={ id }>
            <CheckboxIndicator><Icon size="l0" icon="check" /></CheckboxIndicator>
          </Checkbox>
        </CheckboxWrap>

      )}
    </>

  )
}
