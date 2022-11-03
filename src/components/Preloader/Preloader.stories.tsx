import React from 'react'
import { Preloader } from '@components'

const story = {
  title: 'foundation/Preloader',
  component: Preloader,
  parameters: { layout: 'fullscreen' },
  argTypes: {}
}
export default story

export const Primary = () => ( <Preloader /> )
