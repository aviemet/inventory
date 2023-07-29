import React, { forwardRef } from 'react'
import { Select as FormSelect } from '@/Components/Form'
import { Select as InputSelect } from '@/Components/Inputs'
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
		options: !data ? [] : data.map(item => ({
			label: item.name,
			value: String(item.id),
		})),
		onDropdownOpen: () => {
			if(isEmpty(data) || isStale) refetch()
		},
		searchable: true,
		clearable: true,
		...props,
	}

	if(inFormContext()) {
		return <FormSelect { ...commonProps } />
	}

	return <InputSelect { ...commonProps } />
})

export default ItemsDropdown

