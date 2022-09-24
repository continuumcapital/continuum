import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { SiteContainer, BlockItem } from '@components';

const story = {
  title: 'foundation/BlockItem',
  component: BlockItem,
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
  <SiteContainer>
    <BlockItem><div style={{ width: '100%', height: 200, background: '#000' }}>This is something</div></BlockItem>
  </SiteContainer>
)

