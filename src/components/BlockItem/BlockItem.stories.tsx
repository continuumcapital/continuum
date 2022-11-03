import React from 'react'
import { SiteContainer, BlockItem } from '@components'

const story = {
  title: 'foundation/BlockItem',
  component: BlockItem,
  argTypes: {},
}
export default story

export const Primary = () => (
  <SiteContainer>
    <BlockItem><div style={{ width: '100%', height: 200, background: '#000' }}>This is something</div></BlockItem>
  </SiteContainer>
)

