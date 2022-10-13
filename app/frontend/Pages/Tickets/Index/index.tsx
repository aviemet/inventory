import React from 'react'
import { Routes } from '@/lib'
import { Page, Table } from '@/Components'
import { TableTitleSection } from '@/Layouts/Components'
import { NewIcon } from '@/Components/Icons'
import TicketsTable from '../Table'

interface ITicketsIndexProps {
	tickets: Schema.Item[]
	pagination: Schema.Pagination
}

const TicketsIndex = ({ tickets, pagination }: ITicketsIndexProps) => {
	const title = 'Support Tickets'

	return (
		<Page title={ title }>
			<Table.Section>
				<Table.TableProvider
					selectable
					hideable
					model="tickets"
					rows={ tickets }
					pagination={ pagination }
				>

					<TableTitleSection title={ title } menuOptions={ [
						{ label: 'New Ticket', href: Routes.newTicket(), icon: NewIcon },
					] }>
						<Table.SearchInput />
						<Table.ColumnPicker />
					</TableTitleSection>

					<TicketsTable />

					<Table.Pagination />
				</Table.TableProvider>
			</Table.Section>
		</Page>
	)
}

export default TicketsIndex
