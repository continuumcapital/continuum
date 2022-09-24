import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { SiteContainer } from './SiteContainer';

const story = {
  title: 'foundation/SiteContainer',
  component: SiteContainer,
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
  },
}
export default story

export const Primary = () => (
  <SiteContainer>This is some content</SiteContainer>
)

