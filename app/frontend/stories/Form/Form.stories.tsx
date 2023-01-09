import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Checkbox, DateTime, Form, FormGroup, Input, RadioButtons } from '@/Components/Form'

export default {
	title: 'Example/Form',
	component: Form,
	argTypes: {
	},
} as ComponentMeta<typeof Form>

const defaultArgs = {
	data: {
		string: 'string',
		date: new Date(),
		number: 10,
		checkbox: true,
		choices: [
			{ label: 'One', value: '1' },
			{ label: 'Two', value: '2' },
			{ label: 'Three', value: '3' },
		],
		grouped: 'One Value'
	},
}

const FormTemplate: ComponentStory<typeof Form> = (args) => (
	<Form { ...args }>
		<Input label="String" name="string" />

		<DateTime label="Date/Time" name="date" />

		<Input label="Number" type="number" name="number" />

		<Checkbox label="Checkbox" name="checkbox" />

		<RadioButtons label="Radio Buttons" name="choices" options={ defaultArgs.data.choices } />

		<FormGroup legend="Form Group">
			<Input label="Group Member" name="grouped" />
		</FormGroup>
	</Form>
)

export const WithLabels = FormTemplate.bind({})
WithLabels.args = defaultArgs
