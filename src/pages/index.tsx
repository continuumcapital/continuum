import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { SiteContainer, Block, Hero } from '@components'

const Home: NextPage = () => {
  return (
    
    <SiteContainer>
      <Block><Hero /></Block>
      <Block width="medium" blockItemSpacing="l1">
        
      </Block>
    </SiteContainer>

  )
}

export default Home
