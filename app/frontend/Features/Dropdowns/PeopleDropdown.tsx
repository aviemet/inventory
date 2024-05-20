import React, { forwardRef } from 'react'
import { Select as FormSelect } from '@/Components/Form'
import { Select as InputSelect } from '@/Components/Inputs'
import { useInFormContext } from '@/lib'
import { useGetPeopleAsOptions } from '@/queries/people'
import { isEmpty } from 'lodash'
import { type AsyncDropdown } from '.'

interface PeopleDropdownProps extends AsyncDropdown<Schema.PeopleOptions> {}

const PeopleDropdown = forwardRef<HTMLInputElement, PeopleDropdownProps>((
	{ label = 'Person', name = 'person_id', initialData, value, ...props },
	ref,
) => {
	const { data, isStale, refetch } = useGetPeopleAsOptions({
		enabled: value !== undefined,
		initialData,
	})

	const commonProps = {
		ref,
		label,
		name,
		options: !data ? [] : data.map(person => ({
			label: person.name,
			value: String(person.id),
		})),
		onDropdownOpen: () => {
			if(isEmpty(data) || isStale) refetch()
		},
		searchable: true,
		clearable: true,
		value,
		...props,
	}

	if(useInFormContext()) {
		return <FormSelect { ...commonProps } />
	}

	return <InputSelect { ...commonProps } />
})

export default PeopleDropdown
