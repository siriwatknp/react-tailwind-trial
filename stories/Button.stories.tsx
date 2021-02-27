import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Button } from '../src';

export default {
  title: 'Button',
  component: Button,
  argTypes: {
    children: {
      description: 'React children',
      control: {
        type: 'text',
      },
    },
  },
  parameters: {
    controls: { expanded: true },
  },
  args: {
    children: 'Button',
  },
} as Meta;

export const Base: Story<{}> = args => <Button {...args} />;
Base.args = {};

export const Primary: Story<{}> = args => <Button {...args} />;
Primary.args = {
  primary: true,
};
