import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'

import { Table as Table } from '@/Components'

type TableStory = StoryObj<typeof Table>

const meta: Meta<typeof Table> = {
	title: 'Table/Basic',
	component: Table,
	argTypes: {
	},
}
export default meta

export const Standard: TableStory = {
	render: args => (
		<Table { ...args }>
			<Table.Head>
				<Table.Row>
					<Table.HeadCell>Heading One</Table.HeadCell>
					<Table.HeadCell>Heading Two</Table.HeadCell>
					<Table.HeadCell>Heading Three</Table.HeadCell>
				</Table.Row>
			</Table.Head>

			<Table.Body>
				<Table.Row>
					<Table.Cell>Body One</Table.Cell>
					<Table.Cell>Body Two</Table.Cell>
					<Table.Cell>Body Three</Table.Cell>
				</Table.Row>

				<Table.Row>
					<Table.Cell>Body One</Table.Cell>
					<Table.Cell>Body Two</Table.Cell>
					<Table.Cell>Body Three</Table.Cell>
				</Table.Row>
			</Table.Body>
		</Table>
	),
}
