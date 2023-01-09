import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { TextInput as InputComponent } from '@/Components/Inputs'

export default {
	title: 'Example/Input',
	component: InputComponent,
	argTypes: {
	},
} as ComponentMeta<typeof InputComponent>

const inputArgs = {
}

const InputTemplate: ComponentStory<typeof InputComponent> = (args) => <Input { ...args } />

export const Input = InputTemplate.bind({})
Input.args = inputArgs
