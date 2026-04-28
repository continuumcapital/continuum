import React from 'react'
import { Button } from './Button'

const story = {
  title: 'atoms/Button',
  parameters: { layout: 'centered' },
  component: Button,
  argTypes: {},
}
export default story

export const Default = () => ( <Button title="Action" /> )
