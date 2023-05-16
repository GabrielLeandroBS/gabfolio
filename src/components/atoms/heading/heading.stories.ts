import type { Meta, StoryObj } from '@storybook/react'

import Heading from '.'

const meta: Meta<typeof Heading> = {
	title: 'Components/Heading',
	component: Heading,
	tags: ['autodocs'],
	argTypes: {
		as: {
			options: ['h1', 'h2', 'h3', 'h4'],
			control: { type: 'select' },
		},
	},
}

export default meta

type Story = StoryObj<typeof Heading>

export const Title: Story = {
	args: {
		as: 'h1',
		title: 'Hello World!',
		label: "I'm a title",
	},
}
