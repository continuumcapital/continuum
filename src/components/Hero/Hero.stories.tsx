import React from 'react'
import { SiteContainer, Block, Hero } from '@components'

const story = {
  title: 'atoms/Hero',
  component: Hero,
  parameters: { layout: 'fullscreen' },
  argTypes: {}
}
export default story

export const Primary = () => (

  <SiteContainer>
    <Block width="small">
      <Hero 
        hairline="Continuum Capital"
        title="Alternative Investment Solutions at the intersection of Real Estate and Digital Assets" 
        chips={[
          { href: '#digital-assets', title: 'Digital Assets' },
          { href: '#real-estate', title: 'Real Estate' }
        ]}
      />
    </Block>
  </SiteContainer>
  
)
