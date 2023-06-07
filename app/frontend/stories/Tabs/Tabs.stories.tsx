import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'

import { Tabs as TabsComponent } from '@/Components'

export default {
	title: 'Example/Tabs',
	component: TabsComponent,
	argTypes: {
	},
} as ComponentMeta<typeof TabsComponent>

const tabsArgs = {
}

const TabsTemplate: ComponentStory<typeof TabsComponent> = (args) => <Tabs { ...args } />

export const Tabs = TabsTemplate.bind({})
Tabs.args = tabsArgs
