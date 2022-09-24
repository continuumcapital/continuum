import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { SiteContainer, Block, Quote } from '@components'

const story = {
  title: 'atoms/Quote',
  component: Quote,
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
    <Block width="tiny">
      <Quote 
        quote="Organizing is both science and art. It is thinking through a vision, a strategy, and then 
        figuring out who your targets are, always being concerned about power, always being concerned about 
        how you&apos;re going to actually build power in order to be able to push your issues, in order to be 
        able to get the target to actually move in the way that you want to.” What if social transformation 
        and liberation isn&apos;t about waiting for someone else to come along and save us? What if ordinary 
        people have the power to collectively free ourselves? In this timely collection of essays and 
        interviews, Mariame Kaba reflects on the deep work of abolition and transformative political 
        struggle." 
        source="We Do This &apos;Til We Free Us: Abolitionist Organizing and Transformative Justice by 
        Mariame Kaba, Haymarket Books"
      />
    </Block>
  </SiteContainer>

)
