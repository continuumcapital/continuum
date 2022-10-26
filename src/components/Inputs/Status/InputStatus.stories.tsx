import React from 'react'
import { InputStatus } from '@components'

const story = {
  title: 'forms/InputStatus',
  component: InputStatus,
  layout: 'fullscreen',
  argTypes: {}
}
export default story

export const Primary = () => (

  <InputStatus status="negative" title="This is the title" />

)
