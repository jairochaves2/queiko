import type { Meta, StoryObj } from "@storybook/react";
import { Button, ButtonProps } from "../lib/components";
import React from 'react'

const meta: Meta<ButtonProps> = {
  component: Button,
};

export default meta;
type Story = StoryObj<ButtonProps>;

export const WithText: Story = {
  args: {
    text: "Button",
  },
};

export const WithChildren: Story = {
 render: (args) => (
   <Button {...args}>{args.children}</Button>
 ),
 args: {
   children: "Button",
 }
}
