import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Heading } from './Heading';

const story = {
  title: 'typography/Heading',
  component: Heading,
  argTypes: {
    // outline: { control: 'boolean' },
    // disabled: { control: 'boolean' },
    // level: {
    //   options: [0, 1, 2, 3, 4, 5, 6, 7],
    //   control: { type: 'select' },
    // },
    // glyph: {
    //   options: { '— none —': undefined, ...glyphKey },
    //   control: { type: 'select' },
    // },
  },
}
export default story

export const l0 = () => (
  <Heading size="l0" bold="heavy" title="This is the title" />
)

export const l1 = () => (
  <Heading size="l1" bold="heavy" title="This is the title" />
)

export const l2 = () => (
  <Heading size="l2" bold="heavy" title="This is the title" />
)

export const l3 = () => (
  <Heading size="l3" bold="heavy" title="This is the title" />
)

export const l4 = () => (
  <Heading size="l4" bold="heavy" title="This is the title" />
)

export const l5 = () => (
  <Heading size="l5" bold="heavy" title="This is the title" />
)

export const l6 = () => (
  <Heading size="l6" bold="heavy" title="This is the title" />
)

export const l7 = () => (
  <Heading size="l7" bold="heavy" title="This is the title" hTag={1} />
)

