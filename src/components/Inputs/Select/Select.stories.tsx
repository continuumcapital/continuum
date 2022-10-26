import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { SiteContainer, Block, InputSelect } from '@components'

const story = {
  title: 'forms/InputSelect',
  component: InputSelect,
  layout: 'fullscreen',
  argTypes: {
    
    // outline: { control: 'boolean' },
    // disabled: { control: 'boolean' },
    // level: {
    //   options: [0, 1, 2],
    //   control: { type: 'Inputselect' },
    // },
    // glyph: {
    //   options: { '— none —': undefined, ...glyphKey },
    //   control: { type: 'Inputselect' },
    // },
  }
}
export default story

export const Primary = () => (

  <SiteContainer>
    <Block width="tiny">
      <InputSelect 
        category="Contact reason"
        placeholder="I want to ..."
        options={[
          { title: 'Lend' },
          { title: 'Borrow' },
          { title: 'Launch a pool' },
          { title: 'Make a press enquiry' },
          { title: 'Other' }
        ]}
      />
    </Block>
  </SiteContainer>

)
