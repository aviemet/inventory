import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Flash as FlashComponent } from '@/Components/Flash'

export default {
	title: 'Example/Flash',
	component: FlashComponent,
	argTypes: {
	},
} as ComponentMeta<typeof FlashComponent>

const flashArgs = {
}

const FlashTemplate: ComponentStory<typeof FlashComponent> = (args) => <Flash { ...args } />

export const Flash = FlashTemplate.bind({})
Flash.args = flashArgs
