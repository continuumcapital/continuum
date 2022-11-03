import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { SiteContainer } from './SiteContainer';

const story = {
  title: 'foundation/SiteContainer',
  component: SiteContainer,
  argTypes: {},
}
export default story

export const Primary = () => (
  <SiteContainer>This is some content</SiteContainer>
)

