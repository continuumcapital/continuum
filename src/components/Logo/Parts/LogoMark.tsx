import React from 'react'
import { styled } from '@theme'

const LogoWrap = styled('div', {
  position: 'relative',
  width: 60,
  height: 60
})

const Logo = styled('svg', {
  position: 'relative',
  width: '100%',
  fill: '$white'
})

interface LogoProps {

}

export const LogoMark = ({}:LogoProps) => {
  return(

    <LogoWrap>
      <Logo viewBox="0 0 119 110.3">
        <path d="M83.5,60.6c-2,10.5-9.8,19.5-20.8,22.5c-15.4,4.1-31.2-5-35.3-20.4s5-31.2,20.4-35.3c11-3,22.3,0.9,29.3,9
          l9.2-2.5c-8.8-12.7-24.9-19.3-40.7-15c-20,5.4-32,26-26.6,46.1s26,32,46.1,26.6c15.8-4.2,26.5-18,27.7-33.4L83.5,60.6L83.5,60.6z"
          />
        <path d="M91.5,45.4c1.1,4.3,1.5,8.5,1.1,12.7l8.9-2.4c0.1-4.2-0.4-8.4-1.6-12.6S97.1,35,95,31.5l-8.9,2.4
          C88.5,37.3,90.3,41.2,91.5,45.4L91.5,45.4z"/>
        <path d="M101.5,55.7C101.2,76,87.7,94.4,67.2,99.9c-24.7,6.6-50.2-8.1-56.8-32.8S18.5,17,43.2,10.4
          C63.6,4.9,84.7,14.1,95,31.5l8.8-2.3C91.9,7.1,66.1-4.9,40.9,1.9C11.5,9.8-6,40,1.9,69.4s38.2,46.9,67.5,39
          c25.2-6.8,41.6-30,40.8-55L101.5,55.7L101.5,55.7z"/>
        <path d="M108.4,40.9c1.1,4.2,1.7,8.4,1.8,12.5L119,51c-0.3-4.1-0.9-8.3-2.1-12.5s-2.6-8.1-4.5-11.8l-8.7,2.3
          C105.7,32.8,107.3,36.7,108.4,40.9L108.4,40.9z"/>
      </Logo>
    </LogoWrap>


  )
}
