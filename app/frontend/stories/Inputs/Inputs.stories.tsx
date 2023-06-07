import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'

import { TextInput } from '@/Components/Inputs'

type InputStory = StoryObj<typeof TextInput>

const meta: Meta<typeof TextInput> = {
	title: 'Inputs/TextInput',
	component: TextInput,
	argTypes: {
		label: {
			name: 'label',
			defaultValue: 'Label',
			description: 'React node to render in a label tag',
		},
		required: {
			options: [true, false],
		},
	},
}
export default meta

export const Standard: InputStory = {
	args: {
		value: '',
		name: 'text',
	},
	render: args => <TextInput { ...args } />,
}
