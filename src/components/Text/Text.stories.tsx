import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { SiteContainer, Block, Heading, Text } from '@components'

const story = {
  title: 'atoms/Text',
  component: Text,
  layout: 'fullscreen',
  argTypes: {
    
    // outline: { control: 'boolean' },
    // disabled: { control: 'boolean' },
    // level: {
    //   options: [0, 1, 2],
    //   control: { type: 'select' },
    // },
    // glyph: {
    //   options: { '— none —': undefined, ...glyphKey },
    //   control: { type: 'select' },
    // },
  }
}
export default story

export const Primary = () => (

  <SiteContainer blockSpacing="l3">
    <Block width="small">
      <Text fontSize="l1">
        <Heading bold="heavy" size="l7" title="Ross Ulbricht&apos;s The Growth Collection" />
        <p>Earlier this year in April, we bought Ross Ulbricht&apos;s second collection “The Growth Collection” at auction.</p>

        <p>
          This collection featured three pieces out of Ross&apos;s Human Blockchain series, which is ongoing and we can expect 
          to see more installments over time, and What Happens to the Cages which features a ruined prison, overgrown 
          with plant life, depicting what a future could potentially look like without the need to imprison others, as well 
          as the animation Grow in the Dark, which is an incredibly moving piece made of 318 individual black-and-white 
          hand-drawn frames by Ross in prison. 
        </p>

        <p>
          Unfortunately, we didn&apos;t win every single piece, but we did win most of them! In doing so, we&apos;ve contributed an 
          additional $500,000 to his legal trust.
        </p>

        <p>
          With the art we purchased, we have created many exciting new projects. Including an immersive exhibit and an 
          NFT Mintpass collection. There are also plans to build a marketplace that will be available to our collectors 
          in the future.
        </p>

        <p>
          Our immersive VR experience just wrapped up its first appearance at NFT.NYC! Everyone who saw it wants you to 
          know that the experience is indescribable (we are struggling with the words ourselves). The hosts reported many 
          visceral reactions among the viewers. We will keep you posted, but It should be available for home viewing on 
          the Oculus soon. Tour dates for the experience are coming soon! If you got a chance to see the exhibit, you have 
          about a month to claim your POAP from Jess via the FreeRossDAO Twitter account DMs or Discord.
        </p>
      </Text>
    </Block>
  </SiteContainer>
  
)
