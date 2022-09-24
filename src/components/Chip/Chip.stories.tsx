import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Chip } from '@components';

const story = {
  title: 'atoms/Chip',
  component: Chip,
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
  <Chip><div style={{ width: 300, height: 44 }}></div></Chip>
)

