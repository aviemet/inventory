import React from 'react'
import { useForm } from 'use-inertia-form'
import { LocationsDropdown } from '../Dropdowns'

interface ILocationDropdown {
	locations: Schema.LocationsOptions[]
}

const LocationDropdown = ({ locations }: ILocationDropdown) => {
	const { data } = useForm<{ assignment: Schema.AssignmentsFormData}>()
	const { assignment: { assign_toable_type: type } } = data

	if(type === 'Location') return <></>

	return (
		<LocationsDropdown
			locations={ locations }
			label="Location"
			name="location_id"
			required
		/>
	)
}

export default LocationDropdown
