import React from 'react'
import { MultiSelect as FormMultiSelect } from '@/components/Form'
import { useGetPeopleAsOptions } from '@/queries/people'
import { isEmpty } from 'lodash'
import { type FormAsyncMultiSelect } from '..'

interface PeopleDropdownProps extends Omit<FormAsyncMultiSelect<Schema.PeopleOptions>, 'name'> {
	name?: string
}

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

	return (
		<FormMultiSelect
			label={ label }
			name={ name }
			options={ !data
				? []
				: data.map(person => ({
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
	)

}

export default PeopleDropdown
