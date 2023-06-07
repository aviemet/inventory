import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'

import { Card as CardComponent } from '@/Components'

type CardStory = StoryObj<typeof CardComponent>

const meta: Meta<typeof CardComponent> = {
	title: 'Example/Card',
	component: CardComponent,
	argTypes: {
	},
}
export default meta

export const Standard: CardStory = {
	render: args => <CardComponent>
		Example content
	</CardComponent>,
}
