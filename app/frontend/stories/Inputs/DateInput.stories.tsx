import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { DateInput } from '@/Components/Inputs'
import { coerceArray } from '@/lib'


const meta: Meta<typeof DateInput> = {
	title: 'Inputs/DateInput',
	component: DateInput,
	parameters: {
		actions: { argTypesRegex: '^on.*' },
	},
	args: {
		name: 'created_at',
		label: 'Date Picker',
		required: false,
		type: 'default',
	},
	argTypes: {
		value: {
			onChange: {
				action: 'changed',
			},
			control: 'date',
		},
		required: {
			control: {
				type: 'boolean',
			},
		},
		type: {
			control: {
				type: 'radio',
			},
			options: ['default', 'range'],
			defaultValue: 'default',
		},
	},
}

export default meta

type DateInputStory = StoryObj<typeof meta>

export const Standard: DateInputStory = {
	render: args => {
		const value = args.value ? coerceArray(new Date(args.value)) : undefined
		return <DateInput value={ value } { ...args } />
	},
}
