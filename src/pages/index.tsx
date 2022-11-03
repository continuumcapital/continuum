import type { NextPage } from 'next'
import { SiteContainer, Block, Hero, Stage, StageBg, ReadingBar } from '@components'

const Home: NextPage = () => {
  return (
    
    <SiteContainer>
      <ReadingBar />

      <Block>
        <Hero 
          hairline="Continuum Capital"
          title="Alternative Investment Solutions at the intersection of Real Estate and Digital Assets"
          chips={[
            { href: '#digital-assets', title: 'Digital Assets' },
            { href: '#real-estate', title: 'Real Estate' }
          ]}
        />
      </Block>

      <Block alignment="center" id="digital-assets">
        <Stage background="gray" title="Digital Assets">
          <p>
            Since the inception of smart contracts, on-chain applications have never been more than a whitepaper. However, 
            in recent years, with the emergence of decentralized finance (DeFi), there now exists a diverse and growing 
            suite of working on chain applications setting the primitive foundation for a parallel financial system. 
          </p>

          <p>
            Leveraging the security of blue chip base layer protocols, we believe the opportunity set exists to utilize this 
            growing suite of applications to achieve delta neutral passive income solutions using both open and permissioned 
            environments.
          </p>
        </Stage>
      </Block>

      <Block alignment="center" id="real-estate">
        <Stage title="Real Estate">
          <p>
            With vast experience in luxury multifamily development and a long track record in crypto native investment 
            management, we believe there is a growing set of opportunities as real world assets (RWAs) begin to move 
            on-chain.
          </p>

          <p>
            Whether it be traditional ground up development, proptech venture, or opportunities within virtual 
            worlds (metaverse), Continuum has a variety of solutions that sit at the intersection between Real Estate 
            and Digital Assets.
          </p>
        </Stage>
      </Block>

      <StageBg />
    </SiteContainer>

  )
}

export default Home
