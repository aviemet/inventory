import React, { forwardRef } from 'react'
import { SearchableDropdown as FormDropdown } from '@/Components/Form'
import { SearchableDropdown as InputDropdown } from '@/Components/Inputs'
import { inFormContext } from '@/lib'
import { getDepartmentsAsOptions } from '@/queries/departments'
import { isEmpty } from 'lodash'
import { type IAsyncDropdown } from '.'

interface IPeopleDropdown extends IAsyncDropdown<Schema.PeopleOptions> {}

const PeopleDropdown = forwardRef<HTMLInputElement, IPeopleDropdown>((
	{ label = 'Person', name = 'person_id', initialData = [], ...props },
	ref,
) => {
	const { data, isStale, refetch } = getDepartmentsAsOptions({
		enabled: false,
		initialData,
	})

	const commonProps = {
		ref,
		label,
		name,
		options: data,
		onDropdownOpen: () => {
			if(isEmpty(data) || isStale) refetch()
		},
		...props,
	}

	if(inFormContext()) {
		return <FormDropdown { ...commonProps } />
	}

	return <InputDropdown { ...commonProps } />
})

export default PeopleDropdown
