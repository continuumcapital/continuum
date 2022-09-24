import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { SiteContainer, Block, Heading, Image } from '@components'

const story = {
  title: 'atoms/Image',
  component: Image,
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

  <Image image='/art/gitd.png' alt="Grow in the dark by Ross Ulbritch" />
  
)
