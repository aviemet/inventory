import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Tile as TileComponent } from '@/Components'

export default {
	title: 'Example/Tile',
	component: TileComponent,
	argTypes: {
	},
} as ComponentMeta<typeof TileComponent>

const tileArgs = {
}

const TileTemplate: ComponentStory<typeof TileComponent> = (args) => <Tile { ...args } />

export const Tile = TileTemplate.bind({})
Tile.args = tileArgs
