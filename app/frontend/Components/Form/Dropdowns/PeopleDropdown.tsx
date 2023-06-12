import React from 'react'
import { SearchableDropdown } from '@/Components/Form'
import { type IDropdownWithModalButton } from '../Inputs/SearchableDropdown'

interface IPeopleDropdown extends IDropdownWithModalButton {
	people: Schema.PeopleOptions[]
	currencies?: any
}

const PeopleDropdown = ({ label = 'Person', name = 'person_id', people, currencies, ...props }: IPeopleDropdown) => {
	return (
		<SearchableDropdown
			label={ label }
			name={ name }
			options={ people }
			fetchOnOpen="people"
			filterMatchKeys={ ['first_name', 'last_name'] }
			{ ...props }
		/>
	)
}

export default PeopleDropdown
