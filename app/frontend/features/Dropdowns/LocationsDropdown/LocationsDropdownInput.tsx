import React, { forwardRef } from 'react'
import { Select as InputSelect } from '@/components/Inputs'
import { useGetLocationsAsOptions } from '@/queries/locations'
import { isEmpty } from 'lodash'
import { type AsyncDropdown } from '..'

export interface LocationsDropdownProps extends AsyncDropdown<Schema.LocationsOptions> {}

const LocationsDropdown = forwardRef<HTMLInputElement, LocationsDropdownProps>((
	{ label = 'Location', name = 'location_id', filter, initialData, value, ...props },
	ref,
) => {
	const { data, isStale, refetch } = useGetLocationsAsOptions({
		enabled: value !== undefined,
		initialData,
	})

	return <InputSelect
		ref={ ref }
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
		{ ...props }
	/>
})

export default LocationsDropdown
