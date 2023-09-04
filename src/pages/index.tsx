import React, { useState, useEffect } from 'react'
import type { NextPage } from 'next'
import { styled } from '@theme'
import { Preloader, SiteContainer, Block, Hero, Stage, Heading } from '@components'

const ShowOnMobile = styled('div', {
  display: 'none',
  '@desktop': { display: 'block' }
})

const Home: NextPage = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000); // This ensures that the preloader will show for at least 2 seconds

    return () => {
      clearTimeout(timer); // Cleanup timer to prevent memory leaks
    };
  }, []);

  if (isLoading) return <Preloader />

  return (
    
    <SiteContainer hasContactForm>
      <Block>
        <Hero 
          hairline="Continuum Capital"
          title="Alternative Investment Solutions at the intersection of Real Estate and Digital Assets"
          offers={[
            { href: '#digital-assets', title: 'Continuum Digital', descp: 'Continuum Digital is a US-based investment manager specializing in digital assets, offering institutional-grade investment solutions. Our focus lies in providing investors with enhanced liquidity, robust risk management, and access to diversified strategies of high conviction opportunities within this asset class.' },
            { href: '#real-estate', title: 'Continuum Real Estate', descp: 'Continuum Real Estate offers investment opportunities in mid-rise luxury multifamily developments. Our focus on high-quality developments and conviction in the growing demand for rental properties drives the thesis of being a long-term holder and asset manager.' }
          ]}
          chips={[
            { href: '#digital-assets', title: 'Continuum Digital' },
            { href: '#real-estate', title: 'Continuum Real Estate' }
          ]}
        />
      </Block>

      <Block alignment="center" id="digital-assets">
        <Stage background="gray" title="Digital Assets">
          <ShowOnMobile>
            <p>
              Continuum Digital is a US-based investment manager specializing in digital assets, offering institutional-grade 
              investment solutions. Our focus lies in providing investors with enhanced liquidity, robust risk management, and 
              access to diversified strategies of high conviction opportunities within this asset class.
            </p>
          </ShowOnMobile>

          <Heading size="l6" bold="heavy" title="Managed Directional Strategies" />
          <p>
            Continuum Digital&apos;s flagship strategy offers an actively managed and highly liquid investment solution. It provides 
            diversified exposure to various sectors of Web3, including base layer protocols, layer 2 scaling solutions, interoperability 
            protocols, infrastructure, decentralized finance, and gaming. While maintaining a fundamental long-term focus on core 
            investment holdings, the strategy incorporates an options overlay to capitalize on inherent volatility while effectively 
            managing spot risk. Furthermore, a smaller portion of the portfolio actively engages in premium generating options 
            strategies and passive yield strategies within permissioned on-chain environments.
          </p>

          <Heading size="l6" bold="heavy" title="Non-Directional Strategies" />
          <p>
            At the inception of smart contracts, many on-chain applications were never more than a whitepaper. However, in recent 
            years, with the emergence of decentralized finance (DeFi), there now exists a diverse and growing suite of working on-chain 
            applications setting the primitive foundation for a parallel financial system. Leveraging the security of blue chip base 
            layer protocols, Continuum utilizes this suite of DeFi applications to achieve liquid passive yield within both open and 
            permissioned environments. This strategy also implements a variety of delta neutral volatility and premium generating 
            options strategies with the ultimate goal of providing diversified exposure to those looking for a solution without a 
            directional bias. 
          </p>
        </Stage>
      </Block>

      <Block alignment="center" id="real-estate">
        <Stage title="Real Estate">
          <ShowOnMobile>
            <p>
              Continuum Real Estate offers investment opportunities in mid-rise luxury multifamily developments. Our focus on 
              high-quality developments and conviction in the growing demand for rental properties drives the thesis of being a 
              long-term holder and asset manager.
            </p>  
          </ShowOnMobile>

          <Heading size="l6" bold="heavy" title="Ground Up Development" />
          <p>
            Continuum Real Estate offers investment opportunities in mid-rise luxury multifamily developments. Our investment 
            mandate prioritizes superior construction quality, large unit sizes, high-end finishes, and prime site locations 
            with long-term growth potential. We emphasize cost-effective development processes and optimize lease-up phases 
            through strategic partnerships with trusted leasing brokers. Continuum&apos;s focus on high-quality developments and 
            conviction in the growing demand for rental properties drives the thesis of being a long-term holder and asset manager.
          </p>

          <Heading size="l6" bold="heavy" title="Venture & RWAs" />
          <p>
            Continuum Capital envisions a future where Real Estate and digital assets intersect, offering unique opportunities. 
            Our commitment is to incubate innovative solutions that address challenges and inefficiencies within real estate, 
            leveraging this nascent parallel financial system. With expertise in both verticals, the team is positioned to unlock 
            the potential of this intersection as real-world assets (RWAs) gradually transition onto the blockchain.
          </p>
        </Stage>
      </Block>
    </SiteContainer>

  )
}

export default Home
