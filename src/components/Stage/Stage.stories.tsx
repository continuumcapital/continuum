import React from 'react'
import { Stage } from '@components'

const story = {
  title: 'foundation/Stage',
  component: Stage,
  parameters: { layout: 'fullscreen' },
  argTypes: {}
}

export default story

export const Primary = () => (

  <Stage title="Digital Assets">
    <p>
      Since the inception of smart contracts, on-chain applications have never been more than a whitepaper. However, 
      in recent years, with the emergence of decentralized finance (DeFi), there now exists a diverse and growing 
      suite of working on chain products.
    </p>

    <p>
      Leveraging the security of blue chip base layer protocols, we believe the opportunity set to utilize this growing 
      suite of applications to achieve an institutional grade delta neutral passive income solution exists using both 
      open and permissioned environments.
    </p>
  </Stage>

)
