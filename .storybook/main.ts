import type { StorybookConfig } from '@storybook/nextjs'
import path from 'path'

const config: StorybookConfig = {
	stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
	addons: [
		'@storybook/addon-links',
		'@storybook/addon-essentials',
		'@storybook/addon-interactions',
		{
			name: '@storybook/addon-styling',
			options: {
				postCss: true,
			},
		},
	],
	framework: {
		name: '@storybook/nextjs',
		options: {},
	},
	docs: {
		autodocs: 'tag',
	},
	webpackFinal: async (config, { configType }) => {
		if (config.resolve) {
			config.resolve.alias = {
				...config.resolve.alias,
				'@/*': ['./src/*'],
			}
		}
		return config
	},
}

export default config
