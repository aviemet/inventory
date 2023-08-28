import React from 'react'
import { useForm } from 'use-inertia-form'
import { LocationsDropdown } from '@/Components/Dropdowns'

const LocationDropdown = () => {
	const { data } = useForm<{ assignment: Schema.AssignmentsFormData}>()
	const { assignment: { assign_toable_type: type } } = data

	if(type === 'Location') return <></>

	return (
		<LocationsDropdown
			label="Location"
			name="location_id"
			required
		/>
	)
}

export default LocationDropdown
