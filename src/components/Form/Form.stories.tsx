import React from 'react'
import { SiteContainer, Block, Form } from '@components'

const story = {
  title: 'forms/Form',
  component: Form,
  layout: 'fullscreen',
  argTypes: {}
}
export default story

export const Primary = () => (
  
  <SiteContainer>
    <Block width="small">
      <Form />
    </Block>
  </SiteContainer>
  
)
