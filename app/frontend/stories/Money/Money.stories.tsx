import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'

import { Money as MoneyComponent } from '@/Components'

export default {
	title: 'Example/Money',
	component: MoneyComponent,
	argTypes: {
	},
} as ComponentMeta<typeof MoneyComponent>

const moneyArgs = {
}

const MoneyTemplate: ComponentStory<typeof MoneyComponent> = (args) => <Money { ...args } />

export const Money = MoneyTemplate.bind({})
Money.args = moneyArgs
