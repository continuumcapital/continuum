import React from 'react'
import { styled } from '@theme'

// For the master container of the list component
// This container supports the list for custom, bullets, numbers, and alphabetical list layouts 

const ListWrap = styled('div', {
  position: 'relative',
  width: '100%',
  lineHeight: 1.3,

  // For the container of the list itself, with the li being held within the container
  // Here automates a few things such as the horizontal direction, list style, and the spacing between the li

  ul: {
    display: 'flex',
    flexDirection: 'column',
    position: 'relative',
    padding: 0,
    listStyle: 'none'
  },

  // The variants supported for the component
  // These contains support for direction, list style, and spacing

  variants: {

    alignment: {
      center: { '> ul': { justifyContent: 'center' }}
    },

    // Here we are adding support for fonct sizes of the list 
    // As of now, this allows for a large font size than what is declard by default

    fontSize: {
      l1: { fontSize: '$s1' }
    },

    // Supporting the horizontal layout of lists
    // This lays out the li in a horizontal orientation, instead of vertical by default

    direction: {
      vertical: {},
      horizontal: { ul: { flexDirection: 'row' }}
    },

    // Supporting the different list style if needed
    // This will create the list to be bulleted, numbered, or alphabetcal

    listStyle: {
      bulleted: { ul: { listStyle: 'disc', paddingLeft: 20 }},
      numbered: { ol: {listStyle: 'numbered', paddingLeft: 20 }},
      alphabetical: { ol: { listStyle: 'lower-alpha', paddingLeft: 20 }}
    },

    // Supporting the spacing between the li within a list

    spacing: {
      l0: { li: { padding: '4px 0' }},
      l1: { li: { padding: '8px 0' }},
      l1r: { 'li:not(:last-child)': { marginRight: 12 }},
      l2: { li: { padding: '12px 0' }},
      l2r: { 'li:not(:last-child)': { marginRight: 20 }},
      l3: { li: { padding: '20px 0' } },
      l4: { li: { padding: '32px 0' } }
    },

    // Here we are adding support for the divider decoration within the list component
    // This will add a border to the bottom of each of the li elements

    withDividers: {
      true: { 'ul > li:not(:last-child)': { borderBottom: '1px solid $border' } }
    }
  }
})

// -------------- Typescript declarations -------------- //

export interface ListProps {
  listItems?: { title: string }[]
  alignment?: 'center'
  direction?: 'vertical' | 'horizontal'
  listStyle?: 'numbered' | 'bulleted' | 'alphabetical'
  spacing?: 'l0' | 'l1' | 'l1r' | 'l2' | 'l2r' | 'l3' | 'l4'
  children?: React.ReactNode
  fontSize?: 'l1'
  withDividers?: boolean
}

// ---------- This is the end of declarations ---------- //

export const List = ({
    alignment, // Optional - for the content wihtin the list to be centered
    listItems, // Automated the list within a json format
    direction, // Supporting the horizontal layout of a list 
    listStyle, // Supporting bulleted, numbered, or alphabetical
    spacing, // For the spacing of the lis within the list
    children, // For the children content within the list container
    fontSize, // Optional - Support for various font sizes
    withDividers // Optional - Adding borders to the bottom of lis within the list
  }: ListProps ) => {
  
  return(

    <ListWrap {...{ direction, listStyle, spacing, alignment, fontSize, withDividers }}>
      { listItems ? (

        <>
          { listStyle == 'numbered' || listStyle == 'alphabetical' ? (

            <ol>
              { listItems.map(( item: any, i ) => (
                <li key={ `item${ i }` }>{ item.title }</li>
              ))}
            </ol>

          ) : (

            <ul>
              { listItems.map(( item: any, i ) => (
                <li key={ `item${ i }` }>{ item.title }</li>
              ))}
            </ul>

          )}
          
        </>

      ) : listStyle == 'numbered' || listStyle == 'alphabetical' ? (
        <ol>{ children }</ol>
      ) : (
        <ul>{ children }</ul>
      )}
    </ListWrap>
    
  )
}
