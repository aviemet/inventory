import { NewIcon } from "@/components/Icons"
import LocationsTable, { locationsColumns } from "@/domains/Locations/Table"
import { IndexPageTemplate } from "@/features"
import { Routes } from "@/lib"


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
			<LocationsTable records={ locations } pagination={ pagination } model="locations" />
		</IndexPageTemplate>
	)
}

export default LocationsIndex
