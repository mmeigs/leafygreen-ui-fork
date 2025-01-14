import React from 'react';
import { ComponentStory } from '@storybook/react';

import { storybookArgTypes } from '@leafygreen-ui/lib';

import Copyable from '.';

export default {
  title: 'Components/Copyable',
  component: Copyable,
  args: {
    copyable: true,
    shouldTooltipUsePortal: true,
    darkMode: false,
  },
  argTypes: {
    copyable: { control: 'boolean' },
    label: { control: 'text' },
    description: { control: 'text' },
    shouldTooltipUsePortal: { control: 'boolean' },
    children: storybookArgTypes.children,
    darkMode: storybookArgTypes.darkMode,
  },
};

const Template: ComponentStory<typeof Copyable> = args => (
  <div>
    <Copyable {...args} />
  </div>
);

export const Basic = Template.bind({});
Basic.args = {
  label: 'Label',
  description: 'Description',
  children: 'npm install @leafygreen-ui/copyable',
};

export const LongText = Template.bind({});
LongText.args = {
  label: 'Label',
  description: 'Description',
  children: 'npm install @leafygreen-ui/leafygreen-provider',
};
