import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { SocialShare } from './SocialShare';

const story = {
  title: 'atoms/SocialShare',
  component: SocialShare,
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
  <SocialShare 
    socials={[
      { type: 'Facebook', shareURL: 'http://www.tyerstober.com'},
      { type: 'LinkedIn', shareURL: 'http://www.tyerstober.com'},
      { type: 'Twitter', shareURL: 'http://www.tyerstober.com'}
    ]}
  />
)

