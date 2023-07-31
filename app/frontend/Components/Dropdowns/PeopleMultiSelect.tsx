import React, { forwardRef } from 'react'
import { MultiSelect as FormMultiSelect } from '@/Components/Form'
import { MultiSelect as InputMultiSelect } from '@/Components/Inputs'
import { inFormContext } from '@/lib'
import { getPeopleAsOptions } from '@/queries/people'
import { isEmpty } from 'lodash'
import { type IAsyncMultiSelect } from '.'

interface IPeopleDropdown extends IAsyncMultiSelect<Schema.PeopleOptions> {}

const PeopleDropdown = forwardRef<HTMLInputElement, IPeopleDropdown>((
	{ label = 'Person', name = 'person_id', initialData, ...props },
	ref,
) => {
	const { data, isStale, refetch } = getPeopleAsOptions({
		enabled: false,
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
		...props,
	}

	if(inFormContext()) {
		return <FormMultiSelect { ...commonProps } />
	}

	return <InputMultiSelect { ...commonProps } />
})

export default PeopleDropdown
