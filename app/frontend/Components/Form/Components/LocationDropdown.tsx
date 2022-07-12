import React from 'react'
import { SearchableDropdown, useForm } from '@/Components/Form'

interface ILocationDropdown {
	locations: Schema.Location[]
}

const LocationDropdown = ({ locations }: ILocationDropdown) => {
	const { data } = useForm()
	const { assignment: { assign_toable_type: type } } = data

	if(type === 'Location') return <></>

	return (
		<SearchableDropdown
			options={ locations }
			label="Location"
			name="location_id"
			required
		/>
	)
}

export default LocationDropdown
