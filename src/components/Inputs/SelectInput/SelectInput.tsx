import React, { useState } from 'react'
import { styled } from '@theme'
import { InputBase } from './Parts/Input'
import { List, Heading, Dropdown } from '@components'

// For the master container of the select container within the Form component

const SelectWrap = styled('div', {
  position: 'relative',
  width: '100%',
  marginTop: 50,
  '> *:not(:last-child)': { marginBottom: 20 }
})

// For the container of the Select Dropdown, that shows up once the user clicks the select button
// This is hidden by default and holds all of the options within select

const SelectDropdown = styled('div', {
  position: 'relative',
  width: '100%',
  padding: '16px 0',
  background: '$bgSecondary',
  borderRadius: '$r1',
  boxShadow: '0 2px 30px rgba( 0,0,0, 0.2 )',
  transition: '$s1'
})

// For the cotainer of the individual items within the select dropdown
// This holds the content with the icon on the left and the text on the right

const SelectItem = styled('button', {
  display: 'flex',
  flexDriection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
  position: 'relative',
  width: '100%',
  padding: '6px 20px',
  transition: '$s1',
  '&:hover:after': { opacity: 1 },

  // For the styling of the background of the link, while also making the full width clickable
  // This contains the gray background that shows up on hover

  '&:after': {
    content: '',
    position: 'absolute',
    width: '98%',
    height: '130%',
    background: '$bgPrimary',
    borderRadius: '$r1',
    opacity: 0,
    transition: '$s1',
    zIndex: 0
  },

  // For the link container within the button - sits above the gray background
  // This contains the optional image or icon on the left and the required title

  '> div': {
    display: 'flex',
    flexDriection: 'row',
    alignItems: 'center',
    position: 'relative',
    width: '100%',
    zIndex: 1,

    // Here we automate the spacing between the icon on the left and the text to the right
    // If there is no Icon then no item will get spacing, as th text is the last child 

    '> *:not(:last-child)': {
      marginRight: 8
    }
  },

  // Here we automate the spacing between the icon and the text
  // If there is no Icon then no item will get spacing, as th text is the last child 

  '> *:not(:last-child)': {
    marginRight: 8
  }
})

// -------------- Typescript declarations -------------- //

interface SelectProps {
  size?: 'l0'
  name: any
  label?: any
  defaultValue?: string | number
  width?: 'half'
  onChange?: any
  options: {
    icon?: string
    title: string
  }[]
}

// ---------- This is the end of declarations ---------- //

export const SelectInput = ({ 
    name, // Required - For the name of the input
    defaultValue, // Optional - If the input has a default value
    options, // Required - For the selection list of the input
    size, // Optional - For the size of the input
    width, // Optional - Supporting the select dropdown to be full width
    onChange, // Required - Changes the value of the input once an option is clicked
    label // Required - For the label of the input
  }: SelectProps) => {

  // For all of the varibles needed to change the input value of the select component
  // This also sets the default value, icon, or image and reflected in the input value

  const [ value, setValue ] = useState<string | number | undefined>( defaultValue )
  const [ dropdownOpen, setDropdownOpen ] = useState( false )

  // Here we use this function to change the value of the input filed to read the selection
  // As well, change the info ( icon & title ) in the input to reflect the chosen option

  const handleChange = ( selectedValue: any ) => {
    setValue( selectedValue )
    if ( onChange ) {
      onChange( selectedValue )
    }
    setDropdownOpen( false )
  }

  return(
    <SelectWrap>
      <Heading size="l1" bold title={ label } />

      <Dropdown 
        removeArrow
        contentFullWidth
        triggerWidth="half"
        isOpen={ dropdownOpen }
        onOpenChange={ setDropdownOpen }    
        trigger={
          <InputBase 
            {...{ name, size, width, label }}
            title={ value || defaultValue }
            value={ value || defaultValue }
          />
        }
        content={
          <SelectDropdown>
            <List spacing="l0">
              { options.map(( option, i ) => (

                <li key={`option-${ i }`}>
                  <SelectItem onClick={() => handleChange( option.title )}>
                    <Heading size="l1" title={ option.title } />
                  </SelectItem>
                </li>

              ))}
            </List>
          </SelectDropdown>
        }
      />
    </SelectWrap>
  )
}

