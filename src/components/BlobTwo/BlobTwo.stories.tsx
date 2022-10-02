import React from 'react'
import { SiteContainer, Block, BlobTwo } from '@components'

const story = {
  title: 'atoms/BlobTwo',
  component: BlobTwo,
  argTypes: {}
}
export default story

export const Primary = () => ( 

  <SiteContainer>
    <Block width="small" alignment="center">
      <BlobTwo />
    </Block>
  </SiteContainer>

)
