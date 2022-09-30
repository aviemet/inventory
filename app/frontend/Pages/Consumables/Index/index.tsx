import React from 'react'
import { Head } from '@inertiajs/inertia-react'
import { Routes } from '@/lib'
import { Table } from '@/Components'
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
		<>
			<Head title={ title }></Head>

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
		</>
	)
}

export default ConsumablesIndex
