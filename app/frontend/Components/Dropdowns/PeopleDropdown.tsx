import React, { forwardRef } from 'react'
import { Select as FormSelect } from '@/Components/Form'
import { Select as InputSelect } from '@/Components/Inputs'
import { inFormContext } from '@/lib'
import { getPeopleAsOptions } from '@/queries/people'
import { isEmpty } from 'lodash'
import { type IAsyncDropdown } from '.'

interface IPeopleDropdown extends IAsyncDropdown<Schema.PeopleOptions> {}

const PeopleDropdown = forwardRef<HTMLInputElement, IPeopleDropdown>((
	{ label = 'Person', name = 'person_id', initialData, value, ...props },
	ref,
) => {
	const { data, isStale, refetch } = getPeopleAsOptions({
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

	if(inFormContext()) {
		return <FormSelect { ...commonProps } />
	}

	return <InputSelect { ...commonProps } />
})

export default PeopleDropdown
