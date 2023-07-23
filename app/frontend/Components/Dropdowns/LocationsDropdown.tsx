import React, { forwardRef } from 'react'
import { SearchableDropdown as FormDropdown } from '@/Components/Form'
import { SearchableDropdown as InputDropdown } from '@/Components/Inputs'
import { Routes, inFormContext } from '@/lib'
import LocationsForm from '@/Pages/Locations/Form'
import { getLocationsAsOptions } from '@/queries/locations'
import { isEmpty } from 'lodash'
import { type IAsyncDropdown } from '.'

interface ILocationsDropdown extends IAsyncDropdown<Schema.LocationsOptions> {
	filter?: (location: Schema.LocationsOptions) => boolean
}

const LocationsDropdown = forwardRef<HTMLInputElement, ILocationsDropdown>((
	{ label = 'Location', name = 'location_id', filter, initialData = [], ...props },
	ref,
) => {
	const { data, isStale, refetch } = getLocationsAsOptions({
		enabled: false,
		select: filter ? data => data.filter(filter) : undefined,
		initialData,
	})

	const commonProps = {
		ref,
		label,
		name,
		options: data,
		onDropdownOpen: () => {
			if(isEmpty(data) || isStale) refetch()
		},
		...props,
	}

	if(inFormContext()) {
		return (
			<FormDropdown
				newForm={ <LocationsForm to={ Routes.locations() } /> }
				{ ...commonProps }
			/>
		)
	}

	return <InputDropdown { ...commonProps } />
})

export default LocationsDropdown
