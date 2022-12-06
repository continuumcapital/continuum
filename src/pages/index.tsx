import type { NextPage } from 'next'
import { SiteContainer, Block, Hero, Stage, Heading, ReadingBar } from '@components'

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
          <Heading size="l4" bold="heavy" title="Delta Neutral Yield Strategies" />
          <p>
            At the inception of smart contracts, many on-chain applications weren&apos;t much more than a whitepaper. However, 
            in recent years, with the emergence of decentralized finance (DeFi), there now exists a diverse and growing suite 
            of working on-chain applications setting the primitive foundation for a parallel financial system.
          </p>

          <p>
            Leveraging the security of blue chip base layer protocols, Continuum utilizes this suite of DeFi applications 
            to achieve highly liquid delta neutral passive yield solutions within both open and permissioned environments.
          </p>

          <Heading size="l4" bold="heavy" title="Managed Directional Strategies" />

          <p>
            Continuum&apos;s flagship digital asset strategy provides a highly liquid and actively managed investment 
            solution with diversified exposure among base layer protocols, layer 2 scaling solutions, interoperability, 
            decentralized finance, and gaming sectors of web 3. The firm&apos;s principals, who have a long track record in 
            crypto-native investment management, aim to produce superior risk adjusted returns and outperform major indices 
            like the CCI30 and DPI.
          </p>
        </Stage>
      </Block>

      <Block alignment="center" id="real-estate">
        <Stage title="Real Estate">
          <Heading size="l4" bold="heavy" title="Ground Up Development" />

          <p>
            At the core of Continuum&apos;s real estate program sits luxury multifamily mid-rise development. With a new 
            construction model that began in 2012, Continuum&apos;s luxury rental product has proven successful in both 
            suburban and metropolitan settings as well as within established and emerging cities.
          </p>

          <Heading size="l4" bold="heavy" title="Venture & RWAs" />

          <p>
            As real world assets (RWAs) begin to move on chain, Continuum is well positioned at the intersection of the 
            real estate and the digital asset ecosystems to capitalize on the growing set of venture and prop tech investment 
            opportunities. Additionally, Continuum implements “proof of concepts” using their own real estate assets and 
            project processes to incubate and refine proprietary ideas that integrate real estate with existing on-chain 
            infrastructure.
          </p>
        </Stage>
      </Block>
    </SiteContainer>

  )
}

export default Home
