import React from 'react'
import { Input } from '@components'

const story = {
  title: 'forms/Input',
  component: Input,
  layout: 'fullscreen',
  argTypes: {}
}
export default story

export const Primary = () => (

  <Input 
    name="name"
    type="text"
    value="value"
    initialValue="initial Value"
    label="Full name"
  />
  
)
