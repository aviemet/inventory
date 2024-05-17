import React, { forwardRef } from 'react'
import { Select as FormSelect } from '@/Components/Form'
import { Select as InputSelect } from '@/Components/Inputs'
import { isEmpty } from 'lodash'
import { useGetDepartmentsAsOptions } from '@/queries/departments'
import { useInFormContext } from '@/lib'
import { type AsyncDropdown } from '.'

interface IItemsDropdown extends AsyncDropdown<Schema.ItemsOptions> {}

const ItemsDropdown = forwardRef<HTMLInputElement, IItemsDropdown>((
	{ label = 'Item', name = 'item_id', initialData, value, ...props },
	ref,
) => {
	const { data, isStale, refetch } = useGetDepartmentsAsOptions({
		enabled: value !== undefined,
		initialData,
	})

	const commonProps = {
		ref,
		label,
		name,
		options: !data ? [] : data.map(item => ({
			label: item.name,
			value: String(item.id),
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

export default ItemsDropdown

