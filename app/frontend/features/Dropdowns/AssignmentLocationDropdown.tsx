import React from 'react'
import { useForm } from 'use-inertia-form'
import { FormLocationsDropdown } from '.'
import { type LocationsDropdownProps } from './LocationsDropdown/FormLocationsDropdown'

const AssignmentLocationDropdown = ({ label = 'Location', name = 'location_id', ...props }: LocationsDropdownProps) => {
	const { getData } = useForm<{ assignment: Schema.AssignmentsFormData }>()
	// @ts-ignore
	const assignmentType = getData('assignment.assign_toable_type')

	if(assignmentType === 'Location') return <></>

	return (
		<FormLocationsDropdown
			label={ label }
			name={ name }
			{ ...props }
		/>
	)
}

export default AssignmentLocationDropdown
