import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Card as CardComponent } from '@/Components'

export default {
	title: 'Example/Card',
	component: CardComponent,
	argTypes: {
	},
} as ComponentMeta<typeof CardComponent>

const cardArgs = {
}

const CardTemplate: ComponentStory<typeof CardComponent> = (args) => <Card { ...args } />

export const Card = CardTemplate.bind({})
Card.args = cardArgs
