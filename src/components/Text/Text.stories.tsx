import React from 'react'
import { SiteContainer, Block, Text } from '@components'

const story = {
  title: 'atoms/Text',
  component: Text,
  layout: 'fullscreen',
  argTypes: {}
}
export default story

export const Primary = () => (

  <SiteContainer blockSpacing="l3">
    <Block width="small">
      <Text fontSize="l1">
        <p>
          Since the inception of smart contracts, on-chain applications have never been more than a whitepaper. However, in recent 
          years, with the emergence of decentralized finance DeFi, there now exists a diverse and growing suite of working on 
          chain applications setting the primitive foundation for a parallel financial system.
        </p>

        <p>
          Leveraging the security of blue chip base layer protocols, we believe the opportunity set exists to utilize this growing 
          suite of applications to achieve delta neutral passive income solutions using both open and permissioned environments.
        </p>
      </Text>
    </Block>
  </SiteContainer>
  
)
