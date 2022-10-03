import type { NextPage } from 'next'
import { SiteContainer, Block, Hero, Stage, StageBg, ReadingBar } from '@components'

const Home: NextPage = () => {
  return (
    
    <SiteContainer blockSpacing="l2">
      <ReadingBar />
      <Block><Hero /></Block>

      <Block alignment="center">
        <Stage background="blue" title="Digital Assets">
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
      </Block>

      <Block alignment="center">
        <Stage title="Real Estate">
          <p>
            With vast experience in luxury multifamily development and a long track record in crypto native investment 
            management, we believe there is a growing set of opportunities as real world assets (RWAs) begin to move 
            on-chain.
          </p>

          <p>
            Whether it be traditional development investment solutions, venture, or the next gen real estate development 
            opportunities within virtual worlds, Continuum Digital sits at the forefront of the intersection between Real 
            Estate and Digital Assets.
          </p>
        </Stage>
      </Block>

      <StageBg />
    </SiteContainer>

  )
}

export default Home
