import React from 'react'
import { Head } from '@inertiajs/inertia-react'
import { Routes } from '@/lib'
import { Table } from '@/Components'
import { TableTitleSection } from '@/Layouts/Components'
import { NewIcon } from '@/Components/Icons'
import LocationsTable from '../Table'

export interface LocationWithCounts extends Schema.Location {
	counts: {
		items: number
		accessories: number
		consumables: number
		components: number
		licenses: number
		people: number
	}
}

interface ICompaniesIndexProps {
	locations: LocationWithCounts[]
	pagination: Schema.Pagination
}

const LocationsIndex = ({ locations, pagination }: ICompaniesIndexProps) => {
	const title = 'Locations'

	return (
		<>
			<Head title={ title }></Head>

			<Table.Section>
				<Table.TableProvider
					selectable
					hideable
					model="locations"
					rows={ locations }
					pagination={ pagination }
				>

					<TableTitleSection title={ title } menuOptions={ [
						{ label: 'New Location', href: Routes.newLocation(), icon: NewIcon },
					] }>
						<Table.SearchInput />
						<Table.ColumnPicker />
					</TableTitleSection>

					<LocationsTable />

					<Table.Pagination />
				</Table.TableProvider>
			</Table.Section>
		</>
	)
}

export default LocationsIndex
