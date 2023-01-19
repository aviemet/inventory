import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import {
	// Checkbox,
	// CurrencyInput,
	// DateTime,
	// NumberInput,
	// PasswordInput,
	// RadioButtons,
	// RichText,
	// SearchableDropdown,
	// Textarea,
	TextInput,
} from '@/Components/Inputs'

export default {
	title: 'Components/Inputs',
	component: TextInput,
	argTypes: {
		label: {
			name: 'label',
			type: { name: 'string', required: false },
			defaultValue: 'Label',
			description: 'React node to render in a label tag',
		},
		required: {
			options: [true, false],
		},
	},
} as ComponentMeta<typeof TextInput>

const InputTemplate: ComponentStory<typeof TextInput> = (args) => <TextInput { ...args } />

export const Text = InputTemplate.bind({})
Text.args = {
	required: false,
}
