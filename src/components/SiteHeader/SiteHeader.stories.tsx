import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { SiteHeader, Image } from '@components'

const story = {
  title: 'foundation/SiteHeader',
  component: SiteHeader,
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {}
}
export default story

export const Primary = () => (
  <SiteHeader />
)
