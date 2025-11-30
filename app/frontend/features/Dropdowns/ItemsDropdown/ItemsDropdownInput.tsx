import { isEmpty } from "lodash"
import React, { forwardRef } from "react"

import { Select as InputSelect } from "@/components/Inputs"
import { useGetItemsAsOptions } from "@/queries/items"

import { type AsyncDropdown } from ".."

interface ItemsDropdownProps extends AsyncDropdown<Schema.ItemsOptions> {}

const ItemsDropdown = forwardRef<HTMLInputElement, ItemsDropdownProps>((
	{ label = "Item", name = "item_id", initialData, value, ...props },
	ref,
) => {
	const { data, isStale, refetch } = useGetItemsAsOptions({
		enabled: value !== undefined,
		initialData,
	})

	return <InputSelect
		ref={ ref }
		label={ label }
		name={ name }
		options={ !data
			? []
			: data.map(item => ({
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
})

export default ItemsDropdown

