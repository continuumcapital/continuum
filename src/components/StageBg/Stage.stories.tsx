import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { StageBg } from '@components'

const story = {
  title: 'foundation/StageBg',
  component: StageBg,
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {}
}
export default story

export const Primary = () => (

  <StageBg />

)
