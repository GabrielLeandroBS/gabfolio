import type { Meta, StoryObj } from '@storybook/react'

import Heading from '.'

const meta: Meta<typeof Heading> = {
	title: 'Components/Heading',
	component: Heading,
	tags: ['autodocs'],
	argTypes: {
		as: {
			type: { name: 'string', required: true },
			options: ['h1', 'h2', 'h3', 'h4'],
			control: { type: 'select' },
			description: "Sets the element's level ",
			defaultValue: 'h1',
			name: 'as',
			table: {
				type: { summary: 'string' },
				defaultValue: { summary: 'h1' },
			},
		},
		title: {
			control: { type: 'text' },
			description: 'Sets the title content text',
			defaultValue: 'Hello World!',
			name: 'title',
			type: 'string',
			table: {
				type: { summary: 'string' },
				defaultValue: { summary: 'Hello World!' },
			},
		},
		label: {
			control: { type: 'text' },
			description: 'Sets the aria label content text',
			defaultValue: "I'm a title",
			name: 'title',
			type: 'string',
			table: {
				type: { summary: 'string' },
				defaultValue: { summary: "I'm a title" },
			},
		},
	},
	parameters: {
		docs: {
			description: {
				component: 'A reusable heading component that renders HTML headings.',
			},
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
