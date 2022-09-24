import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { ButtonContainer } from '@components'

const story = {
  title: 'modules/ButtonContainer',
  component: ButtonContainer,
  layout: 'centered',
  argTypes: {}
}
export default story

export const DefaultHorizontal = () => (

  <ButtonContainer 
    buttons={[
      { variant: 'primary', title: 'Action' },
      { variant: 'outline', title: 'Secondary action' }
    ]}
  />
  
)

export const Vertical = () => (

  <ButtonContainer 
    direction="vertical"
    buttons={[
      { variant: 'primary', title: 'Action' },
      { variant: 'outline', title: 'Secondary action' }
    ]}
  />
  
)
