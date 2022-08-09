import React from 'react'
import { SearchableDropdown } from '@/Components/Form'
import { Routes } from '@/lib'
import LocationsForm from '@/Pages/Locations/Form'

interface ILocationsDropdown extends IDropdownWithModalButton {
	locations: Schema.Location[]
	currencies: any
}

const LocationsDropdown = ({ label = 'Location', name = 'location_id', locations, currencies }: ILocationsDropdown) => {
	return (
		<SearchableDropdown
			label={ label }
			name={ name }
			options={ locations }
			fetchOnOpen="locations"
			newForm={ <LocationsForm
				to={ Routes.locations() }
				locations={ locations }
				currencies={ currencies }
			/> }
		/>
	)
}

export default LocationsDropdown
