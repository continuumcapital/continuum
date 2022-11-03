import React from 'react'
import { SiteHeader } from '@components'

const story = {
  title: 'foundation/SiteHeader',
  component: SiteHeader,
  parameters: { layout: 'fullscreen' },
  argTypes: {}
}
export default story

export const Primary = () => (
  <SiteHeader />
)
