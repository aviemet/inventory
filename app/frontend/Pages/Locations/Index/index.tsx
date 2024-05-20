import React from 'react'
import { Routes } from '@/lib'
import { IndexPageTemplate } from '@/Features'
import { NewIcon } from '@/Components/Icons'
import LocationsTable from '../Table'

interface CompaniesIndexProps {
	locations: Schema.LocationsIndex[]
	pagination: Schema.Pagination
}

const LocationsIndex = ({ locations, pagination }: CompaniesIndexProps) => {
	return (
		<IndexPageTemplate
			title="Locations"
			model="locations"
			rows={ locations }
			pagination={ pagination }
			deleteRoute={ Routes.locations() }
			menuOptions={ [
				{ label: 'New Location', href: Routes.newLocation(), icon: NewIcon },
			] }
		>
			<LocationsTable />
		</IndexPageTemplate>
	)
}

export default LocationsIndex
