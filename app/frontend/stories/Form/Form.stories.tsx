import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'

import { Checkbox, DateTimeInput, Form, FormGroup, TextInput, SegmentedControl, NumberInput } from '@/Components/Form'

type FormStory = StoryObj<typeof Form>

const meta: Meta<typeof Form> = {
	title: 'Example/Form',
	component: Form,
	argTypes: {
	},
}
export default meta

export const Standard: FormStory = {
	name: 'Form',
	args: {
		data: {
			string: 'string',
			date: new Date(),
			number: 10,
			checkbox: true,
			choices: '1',
			grouped: 'One Value',
		},
	},
	render: args => (
		<Form { ...args }>
			<TextInput label="String" name="string" />

			<DateTimeInput label="Date/Time" name="date" />

			<NumberInput label="Number" name="number" />

			<Checkbox label="Checkbox" name="checkbox" />

			<SegmentedControl label="Radio Buttons" name="choices" options={ [
				{ label: 'One', value: '1' },
				{ label: 'Two', value: '2' },
				{ label: 'Three', value: '3' },
			] } />

			<FormGroup legend="Form Group">
				<TextInput label="Group Member" name="grouped" />
			</FormGroup>
		</Form>
	),
}

