import React from 'react'
import { SearchableDropdown } from '@/Components/Form'
import { Routes } from '@/lib'
import LocationsForm from '@/Pages/Locations/Form'
import { type IDropdownWithModalButton } from '../Inputs/SearchableDropdown'
import { getLocationsAsOptions } from '@/queries/locations'
import { isEmpty } from 'lodash'

interface ILocationsDropdown extends IDropdownWithModalButton {
	filter?: (location: Schema.LocationsOptions) => boolean
}

const LocationsDropdown = ({ label = 'Location', name = 'location_id', filter, ...props }: ILocationsDropdown) => {
	const { data, isStale, refetch } = getLocationsAsOptions({
		enabled: false,
		select: filter ? data => data.filter(filter) : undefined,
	})

	return (
		<SearchableDropdown
			label={ label }
			name={ name }
			options={ data }
			onDropdownOpen={ () => { if(isEmpty(data) || isStale) refetch() } }
			newForm={ <LocationsForm
				to={ Routes.locations() }
			/> }
			{ ...props }
		/>
	)
}

export default LocationsDropdown
