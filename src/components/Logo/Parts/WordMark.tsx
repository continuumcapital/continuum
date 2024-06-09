import React from 'react'
import { styled } from '@theme'
import { Heading } from '@components'

const WordMarkWrap = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  position: 'relative',
  '*': { margin: '0 !important' }
})

interface WordmarkProps {
  size?: 'l0'
}

export const WordMark = ({ size }:WordmarkProps) => {
  return(

    <WordMarkWrap>
      <Heading bold="bold" size={ size == 'l0' ? "l1" : "l8"} title="Continuum" />
      <Heading size={ size == 'l0' ? "l1" : "l8"} title="Digital" />
    </WordMarkWrap>

  )
}
