import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import Button from '@/Components/Button'

export default {
	title: 'Components/Buttons/Button',
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
} as ComponentMeta<typeof Button>

const ButtonTemplate: ComponentStory<typeof Button> = args => <Button { ...args } />

export const Standard = ButtonTemplate.bind({})
Standard.args = {
	children: 'Button',
	size: undefined,
	compact: false,
	disabled: false,
	fullWidth: false,
	loading: false,
	loaderPosition: undefined,
	radius: undefined,
	uppercase: false,
	variant: undefined,
}

