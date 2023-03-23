import React from 'react'
import { SearchableDropdown } from '@/Components/Form'

interface IPeopleDropdown extends IDropdownWithModalButton {
	people: Schema.Person[]
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
