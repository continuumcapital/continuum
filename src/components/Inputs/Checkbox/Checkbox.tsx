import React from 'react'
import * as CheckboxPrimitive from '@radix-ui/react-checkbox'
import { List, Icon } from '@components'
import { styled } from '@theme'

// For the master container of the checkbox container
// This holds the checkbox on the left and the label to the right of the checkbox

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
  // This adds the spacing on the left side of the label
  
  label: {
    position: 'relative',
    marginLeft: 8,
    userSelect: 'none'
  },

  // This is to support links within the a checkbox label
  // An example of this is something like agreeing to the terms and conditions where the link takes you to see them

  a: {
    color: '$white',
    textDecoration: 'underline',
    textUnderlineOffset: 2,
    textDecorationThickness: 0.5,
    transition: '$s1',

    // For the color to show the affordance of the link to be clickable

    '&:hover': { color: '$electric' }
  }
})

// For the container of the checkbox itself
// this holds the border, hover effect and the check when it has been clicked

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

  // For the box that shows up when the user hovers over the checkbox
  // This will animate in on hover and takes up about 70% of the container

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

  // This shows the background on hover and gives the afforance to click on the checkbox
  // This is not shown by default and only shows up on hover
  
  '&:hover': { 
    '&:before': {
      transform: 'scale( 0.7 )',
      opacity: 1
    }
  },

  // This will change the border color when the user uses the keyboard to focus within the checkbox
  // This is now only tailored to dark mode, se we need to revist this

  '&:focus': { borderColor: '$white' },

  // For the condition where the checkbox is clicked - this fills in the background and shows the check icon
  // This will changes the background to a dark color and the check icon animates in

  '&[aria-checked = true]': {
    borderColor: '$white !important',

    // Scale in the background color

    '&:before': {
      transform: 'scale( 1 ) !important',
      background: '$white',
      opacity: 1
    }
  },
})

// For the color of the checkbox indicator

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
    defaultChecked, // Optional - check box is selected and can be unchecked
    id, // Required - needs to have an id to associate with the form submit
    label, // Required - for why the user is selecting the checkbox
    listItems // Optional - if there is more than one checkbox needed in the form
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
