import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Input } from '@components'

const story = {
  title: 'forms/Input',
  component: Input,
  layout: 'fullscreen',
  argTypes: {
    
    // outline: { control: 'boolean' },
    // disabled: { control: 'boolean' },
    // level: {
    //   options: [0, 1, 2],
    //   control: { type: 'select' },
    // },
    // glyph: {
    //   options: { '— none —': undefined, ...glyphKey },
    //   control: { type: 'select' },
    // },
  }
}
export default story

export const Primary = () => (

  <Input 
    name="name"
    type="text"
    value="value"
    initialValue="initial Value"
    label="Full name"
  />
  
)
