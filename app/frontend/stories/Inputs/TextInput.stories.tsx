import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'

import { TextInput } from '@/Components/Inputs'

const meta: Meta<typeof TextInput> = {
	title: 'Inputs/TextInput',
	component: TextInput,
	parameters: {
		actions: { argTypesRegex: '^on.*' },
	},
	argTypes: {
		name: {
			name: 'Name',
			defaultValue: 'input_name',
			description: 'HTML input name',
		},
		label: {
			name: 'Label',
			description: 'React node to render in a label tag',
		},
		value: {
			onChange: {
				action: 'changed',
			},
		},
		required: {
			control: {
				type: 'boolean',
			},
			options: [true, false],
		},
	},
}

export default meta

type TextInputStory = StoryObj<typeof meta>

export const Standard: TextInputStory = {
	render: args => <TextInput { ...args } />,
}
