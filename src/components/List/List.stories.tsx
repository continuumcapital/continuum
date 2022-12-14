import React from 'react'
import { List } from './List'

const story = {
  title: 'atoms/List',
  component: List,
  argTypes: {},
}
export default story

export const Bulleted = () => (
  <List 
    listStyle="bulleted"
    spacing="l0"
    listItems={[
      { id: 0, title: 'This is list item one' },
      { id: 1, title: 'This is list item two' },
      { id: 2, title: 'This is list item three' },
      { id: 3, title: 'This is list item four' },
      { id: 4, title: 'This is list item five' }
    ]}
  />
)

export const Numbered = () => (
  <List 
    listStyle="numbered"
    spacing="l0"
    listItems={[
      { id: 0, title: 'This is list item one' },
      { id: 1, title: 'This is list item two' },
      { id: 2, title: 'This is list item three' },
      { id: 3, title: 'This is list item four' },
      { id: 4, title: 'This is list item five' }
    ]}
  />
)

export const Alphabetical = () => (
  <List 
    listStyle="alphabetical"
    spacing="l0"
    listItems={[
      { id: 0, title: 'This is list item one' },
      { id: 1, title: 'This is list item two' },
      { id: 2, title: 'This is list item three' },
      { id: 3, title: 'This is list item four' },
      { id: 4, title: 'This is list item five' }
    ]}
  />
)

