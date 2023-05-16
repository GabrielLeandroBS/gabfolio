import type { Meta, StoryObj } from '@storybook/react'

import Button from '.'

const meta: Meta<typeof Button> = {
	title: 'Components/Button',
	component: Button,
	tags: ['autodocs'],
	argTypes: {
		size: {
			options: ['small', 'medium', 'large'],
			control: { type: 'select' },
		},
	},
}

export default meta

type Story = StoryObj<typeof Button>

export const Primary: Story = {
	args: {
		primary: true,
		label: 'Button',
		url: '#',
		size: 'medium',
	},
}

export const Secondary: Story = {
	args: {
		primary: false,
		label: 'Button',
		url: '#',
		size: 'medium',
	},
}
