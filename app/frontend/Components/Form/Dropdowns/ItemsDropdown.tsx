import React, { forwardRef } from 'react'
import { SearchableDropdown } from '@/Components/Form'
import { type IDropdownWithModalButton } from '../Inputs/SearchableDropdown'
import { isEmpty } from 'lodash'
import { getDepartmentsAsOptions } from '@/queries/departments'

interface IItemsDropdown extends IDropdownWithModalButton {
	items?: Schema.Item[]
}

const ItemsDropdown = forwardRef<HTMLInputElement, IItemsDropdown>((
	{ label = 'Item', name = 'item_id', items, ...props },
	ref,
) => {
	const { data, isStale, refetch } = getDepartmentsAsOptions({ enabled: false })

	return (
		<SearchableDropdown
			ref={ ref }
			label={ label }
			name={ name }
			options={ data }
			onDropdownOpen={ () => { if(isEmpty(data) || isStale) refetch() } }
			{ ...props }
		/>
	)
})

export default ItemsDropdown

