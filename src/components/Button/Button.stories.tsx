import React from 'react';
import { Button } from './Button';
import { ButtonTheme } from '@components'

const story = {
  title: 'atoms/Button',
  parameters: { layout: 'centered' },
  component: Button,
  argTypes: {
    icon: { control: 'boolean' },
    // disabled: { control: 'boolean' },
    // level: {
    //   options: [0, 1, 2],
    //   control: { type: 'select' },
    // },
    // glyph: {
    //   options: { '— none —': undefined, ...glyphKey },
    //   control: { type: 'select' },
    // },
  },
}
export default story

export const Default = () => (
  <Button 
    title="Action"
  />
)

export const DefaultWithIcon = () => (
  <Button 
    icon="discord-logo"
    title="Action"
  />
)

export const Primary = () => (
  <Button 
    variant="primary"
    title="Action"
  />
)

export const PrimaryWithIcon = () => (
  <Button 
    variant="primary"
    icon="discord-logo"
    title="Action"
  />
)

export const Secondary = () => (
  <Button 
    variant="outline"
    title="Action"
  />
)

export const Theme = () => (
  <ButtonTheme />
)
