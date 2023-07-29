import React, { forwardRef } from 'react'
import { SearchableDropdown as FormDropdown } from '@/Components/Form'
import { SearchableDropdown as InputDropdown } from '@/Components/Inputs'
import { isEmpty } from 'lodash'
import { getDepartmentsAsOptions } from '@/queries/departments'
import { inFormContext } from '@/lib'
import { type IAsyncDropdown } from '.'

interface IItemsDropdown extends IAsyncDropdown<Schema.ItemsOptions> {}

const ItemsDropdown = forwardRef<HTMLInputElement, IItemsDropdown>((
	{ label = 'Item', name = 'item_id', initialData, ...props },
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

export default ItemsDropdown

