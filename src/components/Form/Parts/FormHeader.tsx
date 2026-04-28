import React from 'react'
import { styled } from '@theme'
import { Heading, TextEm } from '@components'

// For the master container of the form header
// This contains the title on the left and the 'required' on the right

const Header = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  position: 'relative',
  width: '100%'
})

const FormHeaderContent = styled('div', {
  position: 'relative',
  maxWidth: 1000,
  width: '100%',
  '> *:not(:last-child)': { marginBottom: 12 }
})

// -------------- Typescript declarations -------------- //

interface HeaderProps {
  title: string
  titleSize?: 'l0'
}

// ---------- This is the end of declarations ---------- //

export const FormHeader = ({ 
    title, // Required - For the title of the form
    titleSize, // Optional - Supporting different font sizes for the title
  }:HeaderProps) => {

  return(

    <Header>
      <FormHeaderContent>
        <Heading color="gray" title="CONTACT US" />
        <Heading 
          size="l6"
          {...{ title }} 
        />
      </FormHeaderContent>
    </Header>

  )
}
