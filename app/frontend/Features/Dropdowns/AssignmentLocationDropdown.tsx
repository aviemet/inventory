import React from 'react'
import { useForm } from 'use-inertia-form'
import { LocationsDropdown } from '.'
import { type LocationsDropdownProps } from './LocationsDropdown/LocationsDropdownInput'

const AssignmentLocationDropdown = ({ label = 'Location', name = 'location_id', ...props }: LocationsDropdownProps) => {
	const { getData } = useForm<{ assignment: Schema.AssignmentsFormData}>()
	// @ts-expect-error 'Type instantiation is excessively deep and possibly infinite.'
	const assignmentType = getData('assignment.assign_toable_type')

	if(assignmentType === 'Location') return <></>

	return (
		<LocationsDropdown
			label={ label }
			name={ name }
			{ ...props }
		/>
	)
}

export default AssignmentLocationDropdown
