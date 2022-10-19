import React from 'react'
import { Routes } from '@/lib'
import { Page, Table } from '@/Components'
import { TableTitleSection } from '@/Components/Layout'
import { NewIcon } from '@/Components/Icons'
import ItemsTable from '../Table'

interface IItemsIndexProps {
	items: Schema.Item[]
	pagination: Schema.Pagination
}

const ItemsIndex = ({ items, pagination }: IItemsIndexProps) => {
	const title = 'Hardware Assets'

	return (
		<Page title={ title }>
			<Table.Section>
				<Table.TableProvider
					selectable
					hideable
					model="items"
					rows={ items }
					pagination={ pagination }
				>
					<TableTitleSection title={ title } menuOptions={ [
						{ label: 'New Asset', href: Routes.newItem(), icon: NewIcon },
					] }>
						<Table.SearchInput />
					</TableTitleSection>

					<ItemsTable />

					<Table.Pagination />
				</Table.TableProvider>
			</Table.Section>
		</Page>
	)
}

export default ItemsIndex
