import React from 'react';
import { ComponentStory } from '@storybook/react';

import { storybookArgTypes } from '@leafygreen-ui/lib';

import SearchInput from '.';

export default {
  title: 'Components/SearchInput',
  component: SearchInput,
  argTypes: {
    darkMode: storybookArgTypes.darkMode,
    id: { control: 'string' },
    placeholder: { control: 'string' },
    value: { control: 'string' },
    disabled: { control: 'boolean' },
    ref: { control: 'none' },
  },
};

const Template: ComponentStory<typeof SearchInput> = props => (
  <SearchInput {...props} />
);

export const Basic = Template.bind({});
