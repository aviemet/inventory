import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Menu as MenuComponent } from '@/Components'

export default {
	title: 'Example/Menu',
	component: MenuComponent,
	argTypes: {
	},
} as ComponentMeta<typeof MenuComponent>

const menuArgs = {
}

const MenuTemplate: ComponentStory<typeof MenuComponent> = (args) => <Menu { ...args } />

export const Menu = MenuTemplate.bind({})
Menu.args = menuArgs
