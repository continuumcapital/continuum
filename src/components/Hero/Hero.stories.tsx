import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { SiteContainer, Block, Hero } from '@components'

const story = {
  title: 'atoms/Hero',
  component: Hero,
  parameters: {
    layout: 'fullscreen',
  },
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

  <SiteContainer>
    <Block width="small">
      <Hero
        datePosted="05.29.2022" 
        title='This is the title' 
      />
    </Block>
  </SiteContainer>
  
)
