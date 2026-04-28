import React from 'react'
import { styled } from '@theme'
// import { LogoAnimation } from '@components'
import { WordMark, LogoMark } from './Parts'

// For the global treatment of the logo
// This component contains the dove icon and the FreeRossDAO text to the right of the dove
// This component can be used as just the required dove and the optional text

const LogoWrap = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  alginItems: 'center',
  position: 'relative',
  '> *:not(:last-child)': { marginRight: 20 },

  variants: {
    size: {
      'l0': { '> *:not(:last-child)': { marginRight: 12 }}
    }
  }
})

// -------------- Typescript declarations -------------- //

interface LogoProps {
  noWordmark?: boolean
  size?: 'l0'
  animated?: boolean
}

// ---------- This is the end of declarations ---------- //

export const Logo = ({ 
    noWordmark,
    size,
    animated
  }: LogoProps ) => {
  
  return(

    <LogoWrap {...{ size }}>
      { animated ? (

        <>
          {/* <LogoAnimation /> */}
          { noWordmark ?? ( <WordMark {...{ size }} /> )}
        </>

      ) : (

        <>
          <LogoMark />
          { noWordmark ?? ( <WordMark {...{ size }} /> )}
        </>

      )}
      
    </LogoWrap>

  )
}
