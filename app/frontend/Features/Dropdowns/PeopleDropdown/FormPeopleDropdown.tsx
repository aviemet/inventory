import React from 'react'
import { Select as FormSelect } from '@/Components/Form'
import { useGetPeopleAsOptions } from '@/queries/people'
import { isEmpty } from 'lodash'
import { type AsyncDropdown } from '..'

interface PeopleDropdownProps extends AsyncDropdown<Schema.PeopleOptions> {}

const PeopleDropdown = ({
	label = 'Person',
	name = 'person_id',
	initialData,
	value,
	...props
}: PeopleDropdownProps) => {
	const { data, isStale, refetch } = useGetPeopleAsOptions({
		enabled: value !== undefined,
		initialData,
	})

	return <FormSelect
		label={ label }
		name={ name }
		options={ !data ? [] : data.map(person => ({
			label: person.name,
			value: String(person.id),
		})) }
		onDropdownOpen={ () => {
			if(isEmpty(data) || isStale) refetch()
		} }
		searchable
		clearable
		value={ value }
		{ ...props }
	/>
}

export default PeopleDropdown
