import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'

import { EditButton } from '@/Components/Button'

type ButtonStory = StoryObj<typeof EditButton>

const meta: Meta<typeof EditButton> = {
	title: 'Components/Buttons/Edit Button',
	component: EditButton,
	argTypes: {
		size: {
			options: ['xs', 'sm', 'md', 'lg', 'xl'],
		},
		variant: {
			options: [undefined, 'outline', 'white', 'light', 'default', 'filled', 'subtle', 'gradient'],
		},
	},
}
export default meta

export const EditButtonStory: ButtonStory = {
	args: {
		href: '/home',
	},
	render: args => <EditButton { ...args } />,
}
