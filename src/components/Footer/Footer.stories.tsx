import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Footer } from '@components'

const story = {
  title: 'foundation/Footer',
  component: Footer,
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

  <Footer />
  
)
