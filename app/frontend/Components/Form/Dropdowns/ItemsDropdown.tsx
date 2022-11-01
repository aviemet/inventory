import React, { forwardRef } from 'react'
import { SearchableDropdown } from '@/Components/Form'
import { Routes } from '@/lib'
import ItemsForm from '@/Pages/Items/Form'

interface IItemsDropdown extends IDropdownWithModalButton {
	items?: Schema.Item[]
}

const ItemsDropdown = forwardRef<HTMLInputElement, IItemsDropdown>((
	{ label = 'Item', name = 'item_id', items, ...props },
	ref
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

/*

			newForm={ <ItemsForm
				to={ Routes.items() }
			/> }
			 */
