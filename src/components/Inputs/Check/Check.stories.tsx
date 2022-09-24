import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { InputCheck } from '@components'

const story = {
  title: 'forms/Check',
  component: InputCheck,
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

  <InputCheck />
  
)
