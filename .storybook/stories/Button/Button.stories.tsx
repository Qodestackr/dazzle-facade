import type { Meta, StoryObj } from "@storybook/react";
import Button from '../../../src/core/components/button/Button'
// Import Button Component

const meta: Meta<typeof Button> = {
  title: "@Button",
  component: Button,
};

// Story

type Story = StoryObj<typeof Button>;

/**
 * Each named export is a story. Its contents specify how the story is rendered in addition
 * to other configuration options.
 */

export const Primary: Story = {
  args: {
    // primary: true,
    // label: "Display Button",
    // backgroundColor: "blue", // change to design system's match
  },
};

// export const Warning: Story = {
//   args: {
//     primary: true,
//     label: "Delete now",
//     backgroundColor: "red",
//   },
// };
