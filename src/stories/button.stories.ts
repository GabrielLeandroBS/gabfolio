import type { Meta, StoryObj } from "@storybook/react";

import Button from "../components/atoms/button/index";

const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
  tags: ["autodocs"],
  argTypes: {
    size: {
      type: { name: "string" },
      options: ["small", "medium", "large"],
      control: { type: "select" },
      description: "Sets the size of the button",
      defaultValue: "medium",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "Medium" },
      },
    },
    primary: {
      defaultValue: false,
      description: "Defines the style of the button",
      type: { name: "boolean" },
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "False" },
      },
    },
    label: {
      description: "Defines the name of the button",
      type: { name: "string" },
      defaultValue: "Button",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "Button" },
      },
    },
    url: {
      control: { type: "text" },
      type: { name: "string" },
      description: "Sets the url link of the button",
      defaultValue: "#",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "#" },
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    primary: true,
    label: "Button",
    url: "#",
    size: "medium",
  },
};

export const Secondary: Story = {
  args: {
    primary: false,
    label: "Button",
    url: "#",
    size: "medium",
  },
};
