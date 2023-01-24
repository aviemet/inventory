import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { EditButton } from '@/Components/Button'

export default {
	title: 'Components/Buttons',
	component: EditButton,
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
} as ComponentMeta<typeof EditButton>

const EditButtonTemplate: ComponentStory<typeof EditButton> = args => <EditButton { ...args } />
export const Edit = EditButtonTemplate.bind({})
Edit.args = {
	href: '/home',
}
