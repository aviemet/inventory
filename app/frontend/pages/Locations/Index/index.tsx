
import { NewIcon } from "@/components/Icons"
import { IndexPageTemplate } from "@/features"
import { Routes } from "@/lib"

import LocationsTable, { locationsColumns } from "@/domains/Locations/Table"

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
			columns={ locationsColumns }
			pagination={ pagination }
			deleteRoute={ Routes.locations() }
			menuOptions={ [
				{ label: "New Location", href: Routes.newLocation(), icon: <NewIcon /> },
			] }
		>
			<LocationsTable />
		</IndexPageTemplate>
	)
}

export default LocationsIndex
