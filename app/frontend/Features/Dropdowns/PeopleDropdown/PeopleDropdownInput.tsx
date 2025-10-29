import React, { forwardRef } from 'react'
import { Select as InputSelect } from '@/components/Inputs'
import { useGetPeopleAsOptions } from '@/queries/people'
import { isEmpty } from 'lodash'
import { type AsyncDropdown } from '..'

interface PeopleDropdownProps extends AsyncDropdown<Schema.PeopleOptions> {}

const PeopleDropdown = forwardRef<HTMLInputElement, PeopleDropdownProps>((
	{ label = 'Person', name = 'person_id', initialData, value, ...props },
	ref,
) => {
	const { data, isStale, refetch } = useGetPeopleAsOptions({
		enabled: value !== undefined,
		initialData,
	})

	return <InputSelect
		ref={ ref }
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
})

export default PeopleDropdown
