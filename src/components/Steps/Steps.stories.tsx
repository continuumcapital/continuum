import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Steps } from '@components'

const story = {
  title: 'modules/Steps',
  component: Steps,
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

  <Steps 
    steps={[
      { icon: 'give', title: 'Donate to FreeRossDAO' },
      { icon: 'trend-up', title: 'Get amplified by the raffle' },
      { icon: 'celebrate', title: 'Win an NFT' }
    ]}
  />
  
)
