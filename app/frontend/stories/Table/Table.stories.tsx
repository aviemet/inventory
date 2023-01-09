import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Table as TableComponent } from '@/Components'

export default {
	title: 'Example/Table',
	component: TableComponent,
	argTypes: {
	},
} as ComponentMeta<typeof TableComponent>

const tableArgs = {
}

const TableTemplate: ComponentStory<typeof TableComponent> = (args) => <Table { ...args } />

export const Table = TableTemplate.bind({})
Table.args = tableArgs
