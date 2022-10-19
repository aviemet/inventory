import React from 'react'
import { Routes } from '@/lib'
import { Page, Table } from '@/Components'
import { TableTitleSection } from '@/Components/Layout'
import { NewIcon } from '@/Components/Icons'
import ManufacturersTable from '../Table'

interface IManufacturersIndexProps {
	manufacturers: Schema.ManufacturerWithCounts[]
	pagination: Schema.Pagination
}

const ManufacturersIndex = ({ manufacturers, pagination }: IManufacturersIndexProps) => {
	const title = 'Manufacturers'

	return (
		<Page title={ title }>
			<Table.Section>
				<Table.TableProvider
					selectable
					hideable
					model="manufacturers"
					rows={ manufacturers }
					pagination={ pagination }
				>
					<TableTitleSection title={ title } menuOptions={ [
						{ label: 'New Manufacturer', href: Routes.newManufacturer(), icon: NewIcon },
					] }>
						<Table.SearchInput />
					</TableTitleSection>

					<ManufacturersTable />

					<Table.Pagination />
				</Table.TableProvider>
			</Table.Section>
		</Page>
	)
}

export default ManufacturersIndex
