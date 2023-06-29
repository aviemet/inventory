import React from 'react'
import { SearchableDropdown } from '@/Components/Form'
import { type IDropdownWithModalButton } from '../Inputs/SearchableDropdown'
import { getDepartmentsAsOptions } from '@/queries/departments'
import { isEmpty } from 'lodash'

interface IPeopleDropdown extends IDropdownWithModalButton {}

const PeopleDropdown = ({ label = 'Person', name = 'person_id', ...props }: IPeopleDropdown) => {
	const { data, isStale, refetch } = getDepartmentsAsOptions({ enabled: false })

	return (
		<SearchableDropdown
			label={ label }
			name={ name }
			options={ data }
			onDropdownOpen={ () => { if(isEmpty(data) || isStale) refetch() } }
			filterMatchKeys={ ['first_name', 'last_name'] }
			{ ...props }
		/>
	)
}

export default PeopleDropdown
