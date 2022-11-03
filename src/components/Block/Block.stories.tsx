import React from 'react'
import { SiteContainer, Block } from '@components'

const story = {
  title: 'foundation/Block',
  component: Block,
  argTypes: {},
}
export default story

export const Primary = () => (
  <SiteContainer>
    <Block width="medium"><div style={{ width: '100%', height: 200, background: '#000' }}>This is something</div></Block>
  </SiteContainer>
)

