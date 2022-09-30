import React from 'react'
import { Head } from '@inertiajs/inertia-react'
import { Routes } from '@/lib'
import { Table } from '@/Components'
import { TableTitleSection } from '@/Layouts/Components'
import { NewIcon } from '@/Components/Icons'
import ManufacturersTable from '../Table'

interface IManufacturersIndexProps {
	manufacturers: Schema.Manufacturer[]
	pagination: Schema.Pagination
}

const ManufacturersIndex = ({ manufacturers, pagination }: IManufacturersIndexProps) => {
	const title = 'Manufacturers'

	return (
		<>
			<Head title={ title }></Head>

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
						<Table.ColumnPicker />
					</TableTitleSection>

					<ManufacturersTable />

					<Table.Pagination />
				</Table.TableProvider>
			</Table.Section>
		</>
	)
}

export default ManufacturersIndex
