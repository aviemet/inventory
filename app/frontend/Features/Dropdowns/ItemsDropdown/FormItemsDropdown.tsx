import React from 'react'
import { Select as FormSelect } from '@/Components/Form'
import { isEmpty } from 'lodash'
import { useGetDepartmentsAsOptions } from '@/queries/departments'
import { type AsyncDropdown } from '..'

interface ItemsDropdownProps extends AsyncDropdown<Schema.ItemsOptions> {}

const ItemsDropdown = ({
	label = 'Item',
	name = 'item_id',
	initialData,
	value,
	...props
}: ItemsDropdownProps) => {
	const { data, isStale, refetch } = useGetDepartmentsAsOptions({
		enabled: value !== undefined,
		initialData,
	})

	return <FormSelect
		label={ label }
		name={ name }
		options={ !data ? [] : data.map(item => ({
			label: item.name,
			value: String(item.id),
		})) }
		onDropdownOpen={ () => {
			if(isEmpty(data) || isStale) refetch()
		} }
		searchable
		clearable
		value={ value }
		{ ...props }
	/>
}

export default ItemsDropdown

