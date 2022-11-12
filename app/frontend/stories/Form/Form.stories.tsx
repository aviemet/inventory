import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Form as FormComponent } from '@/Components/Form'

export default {
	title: 'Example/Form',
	component: FormComponent,
	argTypes: {
	},
} as ComponentMeta<typeof FormComponent>

const formArgs = {
}

const FormTemplate: ComponentStory<typeof FormComponent> = (args) => <Form { ...args } />

export const Form = FormTemplate.bind({})
Form.args = formArgs
