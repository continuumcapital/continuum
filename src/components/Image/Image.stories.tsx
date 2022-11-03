import React from 'react'
import { Image } from '@components'

const story = {
  title: 'atoms/Image',
  component: Image,
  layout: 'fullscreen',
  argTypes: {}
}
export default story

export const Primary = () => (

  <Image image='/global/social-hero.jpg' alt="Grow in the dark by Ross Ulbritch" />
  
)
