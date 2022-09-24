import React from 'react'
import { SiteContainer, Block, Blob } from '@components'

const story = {
  title: 'atoms/Blob',
  component: Blob,
  argTypes: {}
}
export default story

export const Primary = () => ( 

  <SiteContainer>
    <Block width="small" alignment="center">
      <Blob zoom={ 2 } />
    </Block>
  </SiteContainer>

)
