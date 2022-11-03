import React from 'react'
import { SiteContainer, Block, AnimatedBlob } from '@components'

const story = {
  title: 'atoms/AnimatedBlob',
  component: AnimatedBlob,
  argTypes: {}
}
export default story

export const Primary = () => ( 

  <SiteContainer>
    <Block width="small" alignment="center"><AnimatedBlob /></Block>
  </SiteContainer>

)
