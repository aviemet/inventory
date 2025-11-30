import { isEmpty } from "lodash"
import React, { forwardRef } from "react"

import { MultiSelect as InputMultiSelect } from "@/components/Inputs"
import { useGetPeopleAsOptions } from "@/queries/people"

import { type AsyncMultiSelect } from ".."

interface PeopleDropdownProps extends AsyncMultiSelect<Schema.PeopleOptions> {}

const PeopleDropdown = forwardRef<HTMLInputElement, PeopleDropdownProps>((
	{ label = "Person", name = "person_id", initialData, value, ...props },
	ref,
) => {
	const { data, isStale, refetch } = useGetPeopleAsOptions({
		enabled: value !== undefined,
		initialData,
	})

	return <InputMultiSelect
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
		{ ...props } />
})

export default PeopleDropdown
