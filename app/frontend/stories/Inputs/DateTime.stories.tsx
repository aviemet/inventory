import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'

import { DateTime as DateTimeInput } from '@/Components/Inputs'

export default {
	title: 'Components/Inputs',
	component: DateTimeInput,
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
} as ComponentMeta<typeof DateTimeInput>

const InputTemplate: ComponentStory<typeof DateTimeInput> = (args) => <DateTimeInput { ...args } />

export const DateTime = InputTemplate.bind({})
DateTime.args = {
	required: false,
}
