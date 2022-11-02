import type { NextPage } from 'next'
import { SiteContainer, Block, Heading, Text, List, ReadingBar } from '@components'

const Page: NextPage = () => {
  return (
    
    <SiteContainer spacing="l2" blockSpacing="l1">
      <ReadingBar />

      <Block width="small">
        <Text>
          <h1><Heading size="l6" bold="heavy" title="PRIVACY NOTICE" /></h1>
          <Heading title="Last updated: November 02, 2022" />
        </Text>
      </Block>

      <Block width="small">
        <Text>
          <p>
            This privacy notice for Continuum Capital &#40;
            <strong>&quot;Company,&quot;</strong> 
            <strong>&quot;we,&quot;</strong> 
            <strong>&quot;us,&quot;</strong> or 
            <strong>&quot;our&quot;</strong>
            &#41;, describes how and why
          </p>
        </Text>
      </Block>

      
    


    </SiteContainer>

  )
}

export default Page
