import { isEmpty } from "lodash"

import { Select as FormSelect } from "@/components/Form"
import LocationsForm from "@/domains/Locations/Form"
import { Routes } from "@/lib"
import { useGetLocationsAsOptions } from "@/queries/locations"

import { type FormAsyncDropdown } from ".."

export interface LocationsDropdownProps extends Omit<FormAsyncDropdown<Schema.LocationsOptions>, "name"> {
	name?: string
}

const LocationsDropdown = ({
	label = "Location",
	name = "location_id",
	filter,
	initialData,
	value,
	...props
}: LocationsDropdownProps) => {
	const { data, isStale, refetch } = useGetLocationsAsOptions({
		enabled: value !== undefined,
		initialData,
	})

	return (
		<FormSelect
			label={ label }
			name={ name }
			options={ !data
				? []
				: data.map(location => ({
					label: location.name!,
					value: String(location.id),
				})) }
			onDropdownOpen={ () => {
				if(isEmpty(data) || isStale) refetch()
			} }
			searchable
			clearable
			value={ value }
			newForm={
				<LocationsForm
					to={ Routes.locations() } />
			}
			{ ...props }
		/>
	)
}

export default LocationsDropdown
