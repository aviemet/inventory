import React from 'react'
import { Routes } from '@/lib'
import { Page, Table } from '@/Components'
import { TableTitleSection } from '@/Layouts/Components'
import { NewIcon } from '@/Components/Icons'
import ConsumablesTable from '../Table'

interface IConsumablesIndexProps {
	consumables: Schema.Consumable[]
	pagination: Schema.Pagination
}

const ConsumablesIndex = ({ consumables, pagination }: IConsumablesIndexProps) => {
	const title = 'Consumables'

	return (
		<Page title={ title }>
			<Table.Section>
				<Table.TableProvider selectable rows={ consumables } pagination={ pagination }>
					<TableTitleSection title={ title } menuOptions={ [
						{ label: 'New Consumable', href: Routes.newConsumable(), icon: NewIcon },
					] }>
						<Table.SearchInput />
						<Table.ColumnPicker />
					</TableTitleSection>

					<ConsumablesTable />

					<Table.Pagination />
				</Table.TableProvider>
			</Table.Section>
		</Page>
	)
}

export default ConsumablesIndex
