import React, { forwardRef } from 'react'
import { SearchableDropdown } from '@/Components/Form'
import { type IDropdownWithModalButton } from '../Inputs/SearchableDropdown'

interface IItemsDropdown extends IDropdownWithModalButton {
	items?: Schema.Item[]
}

const ItemsDropdown = forwardRef<HTMLInputElement, IItemsDropdown>((
	{ label = 'Item', name = 'item_id', items, ...props },
	ref,
) => {
	return (
		<SearchableDropdown
			ref={ ref }
			label={ label }
			name={ name }
			options={ items || [] }
			fetchOnOpen="items"
			{ ...props }
		/>
	)
})

export default ItemsDropdown

