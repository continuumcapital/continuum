import React from 'react'
import { SiteContainer, Block, Form } from '@components'

const story = {
  title: 'forms/Form',
  component: Form,
  layout: 'fullscreen',
  argTypes: {
    
    // outline: { control: 'boolean' },
    // disabled: { control: 'boolean' },
    // level: {
    //   options: [0, 1, 2],
    //   control: { type: 'select' },
    // },
    // glyph: {
    //   options: { '— none —': undefined, ...glyphKey },
    //   control: { type: 'select' },
    // },
  }
}
export default story

export const Primary = () => (
  
  <SiteContainer>
    <Block width="small">
      <Form />
    </Block>
  </SiteContainer>
  
)
