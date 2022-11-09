import React from 'react'
import { Routes } from '@/lib'
import { IndexPageTemplate } from '@/Components/Layout'
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
	return (
		<IndexPageTemplate
			title="Locations"
			model="locations"
			rows={ locations }
			pagination={ pagination }
			menuOptions={ [
				{ label: 'New Location', href: Routes.newLocation(), icon: NewIcon },
			] }
		>
			<LocationsTable />
		</IndexPageTemplate>
	)
}

export default LocationsIndex
