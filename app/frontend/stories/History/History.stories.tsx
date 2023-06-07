import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'

import { History as HistoryComponent } from '@/Components'

export default {
	title: 'Example/History',
	component: HistoryComponent,
	argTypes: {
	},
} as ComponentMeta<typeof HistoryComponent>

const historyArgs = {
}

const HistoryTemplate: ComponentStory<typeof HistoryComponent> = (args) => <History { ...args } />

export const History = HistoryTemplate.bind({})
History.args = historyArgs
