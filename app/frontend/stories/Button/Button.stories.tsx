import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'

import Button from '@/Components/Button'

type ButtonStory = StoryObj<typeof Button>

const meta: Meta<typeof Button> = {
	title: 'Buttons/Button',
	component: Button,
	argTypes: {
		loaderPosition: {
			options: ['left', 'right'],
		},
		radius: {
			options: ['xs', 'sm', 'md', 'lg', 'xl'],
		},
		size: {
			options: ['xs', 'sm', 'md', 'lg', 'xl'],
		},
		variant: {
			options: [undefined, 'outline', 'white', 'light', 'default', 'filled', 'subtle', 'gradient'],
		},
	},
}
export default meta

export const Standard: ButtonStory = {
	args: {
		children: 'Button Text',
		size: undefined,
		compact: false,
		disabled: false,
		fullWidth: false,
		loading: false,
		loaderPosition: undefined,
		radius: undefined,
		uppercase: false,
		variant: undefined,
	},
	render: args => <Button { ...args } />,
}

