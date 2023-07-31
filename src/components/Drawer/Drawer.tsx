import React from 'react'
import { styled } from '@theme'
import { Button, Text, Heading } from '@components'

const DrawerWrap = styled('div', {
  display: 'none',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'fixed',
  top: 0,
  right: 0,
  width: '50vw',
  height: '100vh',
  zIndex: 9999,
})

const DrawerContain = styled('div', {
  position: 'relative',
  width: '100%',
  height: '100%',
  background: '#000',
  overflow: 'scroll'
})

const DrawerContent = styled('div', {
  position: 'relative',
  maxWidth: 600,
  width: '85%',
  margin: '0 auto',
  padding: '80px 0'
})

const DrawerClose = styled('div', {
  position: 'absolute',
  top: 20,
  right: 20
})

interface DrawerProps {

}

export const Drawer = ({}:DrawerProps) => {
  return(

    <DrawerWrap>
      <DrawerContain>
        <DrawerContent>
          <Text>
            <Heading size="l5" bold="heavy" title="Delta neutral yield strategies" />
            <p>
              Delta neutral yield strategies are investment techniques that are designed to neutralize the impact of price movements in 
              the underlying asset on the investment&apos;s overall performance. The term &quot;delta&quot; is derived from options 
              trading and refers to the degree to which an option price moves in response to a change in the underlying asset&apos;s 
              price. If an investment is delta neutral, it implies that the strategy is designed to be unaffected by small price 
              fluctuations in the underlying asset. This concept is prevalent in options trading, but it can be applied to other types 
              of investment strategies as well.
            </p>

            <p>
              One of the primary objectives of delta neutral yield strategies is to provide a stable return that is largely 
              independent of the broader market movements. This is typically achieved by combining positions in such a way that the 
              overall delta of the portfolio is zero, or neutral. For example, a trader might buy an option with a positive delta and 
              sell another option with a negative delta on the same underlying asset. This way, an increase in the price of the 
              underlying asset would increase the value of the long position and decrease the value of the short position by roughly 
              the same amount, and vice versa.
            </p>

            <p>
              This approach can provide several benefits. First, it can reduce the risk associated with price fluctuations in the 
              underlying asset, making the strategy more predictable and less volatile. This can be particularly beneficial in uncertain
              or volatile market environments. Additionally, by focusing on generating yield rather than capital appreciation, delta 
              neutral strategies can provide a steady income stream. This can be an attractive feature for investors who need regular 
              income, such as retirees.
            </p>

            <p>
              However, like all investment strategies, delta neutral yield strategies also come with their own set of risks and 
              challenges. One of the primary challenges is that maintaining a delta neutral position often requires frequent rebalancing, 
              which can incur significant transaction costs. Additionally, while these strategies can mitigate the impact of small price 
              movements in the underlying asset, they can still be vulnerable to large price swings. It is also worth noting that 
              the potential returns from delta neutral yield strategies are typically lower than those from strategies that take on more 
              risk.
            </p>

            <p>
              Overall, delta neutral yield strategies can be an effective tool for managing risk and generating steady returns in a
              variety of market conditions. However, they require careful management and a thorough understanding of options pricing and 
              risk dynamics. As such, they are typically best suited for more experienced investors and traders. Whether these strategies 
              are appropriate for a particular investor will depend on their risk tolerance, investment goals, and level of expertise.
            </p>
          </Text>
        </DrawerContent>
        <DrawerClose><Button icon="cross-2" /></DrawerClose>
      </DrawerContain>
    </DrawerWrap>

  )
}