import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'

import { Money } from '@/Components'

type MoneyStory = StoryObj<typeof Money>

const meta: Meta<typeof Money> = {
	title: 'Example/Money',
	component: Money,
	argTypes: {
	},
}

export default meta

export const Standard: MoneyStory = {
	render: args => <Money { ...args } />,
}
