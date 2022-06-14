import React from 'react'
import { SearchableDropdown, useForm } from '@/Components/Form'

interface ILocationDropdown {
	locations: Schema.Location[]
}

const LocationDropdown = ({ locations }: ILocationDropdown) => {
	const { data } = useForm()
	const { assignment: { assign_toable_type: type } } = data

	console.log({ locations })

	return (
		<SearchableDropdown
			options={ locations }
			label="Location"
			name="location_id"
			disabled={ type === 'Location' }
			required
		/>
	)
}

export default LocationDropdown
