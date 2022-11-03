import React from 'react'
import { Button } from './Button'
import { ButtonTheme } from '@components'

const story = {
  title: 'atoms/Button',
  parameters: { layout: 'centered' },
  component: Button,
  argTypes: {},
}
export default story

export const Default = () => ( <Button title="Action" /> )
export const DefaultWithIcon = () => ( <Button icon="discord-logo" title="Action" /> )
export const Primary = () => ( <Button variant="primary" title="Action" /> )
export const PrimaryWithIcon = () => ( <Button variant="primary" icon="discord-logo" title="Action" /> )
export const Secondary = () => ( <Button variant="outline" title="Action" /> )
export const Theme = () => ( <ButtonTheme /> )
