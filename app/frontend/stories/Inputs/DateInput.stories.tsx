import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { DateInput, DateInputValue } from '@/Components/Inputs'
import { coerceArray } from '@/lib'
import { exclude } from '@/lib/collections'


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
		let value: DateInputValue

		if(Array.isArray(args.value)) {
			value = args.value
		} else if(args.value) {
			value = coerceArray(new Date(args.value))
		}

		return <DateInput { ...exclude(args, 'value') } value={ value } />
	},
}
