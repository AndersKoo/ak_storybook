import type { Meta, StoryObj } from '@storybook/react';
import { Card } from '../../src/components';

const meta: Meta<typeof Card> = {
  title: 'Components/Card',
  component: Card,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['default', 'elevated', 'outlined'],
    },
    size: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large'],
    },
    onClick: { action: 'clicked' },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: 'Example Card',
    children: 'This is a basic card component with some sample content.',
  },
};

export const WithImage: Story = {
  args: {
    title: 'Card with Image',
    imageUrl: 'https://via.placeholder.com/300x200/007acc/ffffff?text=Card+Image',
    children: 'This card includes an image above the content.',
  },
};

export const Elevated: Story = {
  args: {
    title: 'Elevated Card',
    variant: 'elevated',
    children: 'This card has an elevated shadow effect.',
  },
};

export const Outlined: Story = {
  args: {
    title: 'Outlined Card',
    variant: 'outlined',
    children: 'This card has a blue outline instead of a shadow.',
  },
};

export const Small: Story = {
  args: {
    title: 'Small Card',
    size: 'small',
    children: 'This is a small-sized card component.',
  },
};

export const Large: Story = {
  args: {
    title: 'Large Card',
    size: 'large',
    children: 'This is a large-sized card component with more padding.',
  },
};

export const Interactive: Story = {
  args: {
    title: 'Clickable Card',
    children: 'Click this card to see the action in the Actions panel.',
    onClick: () => console.log('Card clicked!'),
  },
};