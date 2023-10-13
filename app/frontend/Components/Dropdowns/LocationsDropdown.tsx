import React, { forwardRef } from 'react'
import { Select as FormSelect } from '@/Components/Form'
import { Select as InputSelect } from '@/Components/Inputs'
import { Routes, useInFormContext } from '@/lib'
import LocationsForm from '@/Pages/Locations/Form'
import { getLocationsAsOptions } from '@/queries/locations'
import { isEmpty } from 'lodash'
import { type IAsyncDropdown } from '.'

interface ILocationsDropdown extends IAsyncDropdown<Schema.LocationsOptions> {
	filter?: (location: Schema.LocationsOptions) => boolean
}

const LocationsDropdown = forwardRef<HTMLInputElement, ILocationsDropdown>((
	{ label = 'Location', name = 'location_id', filter, initialData, value, ...props },
	ref,
) => {
	const { data, isStale, refetch } = getLocationsAsOptions({
		enabled: value !== undefined,
		select: filter ? data => data.filter(filter) : undefined,
		initialData,
	})

	const commonProps = {
		ref,
		label,
		name,
		options: !data ? [] : data.map(location => ({
			label: location.name,
			value: String(location.id),
		})),
		onDropdownOpen: () => {
			if(isEmpty(data) || isStale) refetch()
		},
		searchable: true,
		clearable: true,
		value,
		autoComplete: 'off',
		...props,
	}

	if(useInFormContext()) {
		return (
			<FormSelect
				newForm={ <LocationsForm to={ Routes.locations() } /> }
				{ ...commonProps }
			/>
		)
	}

	return <InputSelect { ...commonProps } />
})

export default LocationsDropdown
