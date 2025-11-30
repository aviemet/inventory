import { isEmpty } from "lodash"

import { Select as FormSelect } from "@/components/Form"
import { useGetItemsAsOptions } from "@/queries/items"

import { type FormAsyncDropdown } from ".."

interface ItemsDropdownProps extends Omit<FormAsyncDropdown<Schema.ItemsOptions>, "name" | "options"> {
	name?: string
}

const ItemsDropdown = ({
	label = "Item",
	name = "item_id",
	initialData,
	value,
	...props
}: ItemsDropdownProps) => {
	const { data, isStale, refetch } = useGetItemsAsOptions({
		enabled: value !== undefined,
		initialData,
	})

	const options = data === undefined
		? []
		: data.map(item => ({
			label: item.name,
			value: String(item.id),
		}))

	return (
		<FormSelect
			label={ label }
			name={ name }
			onDropdownOpen={ () => {
				if(isEmpty(data) || isStale) refetch()
			} }
			searchable
			clearable
			value={ value }
			options={ options }
			{ ...props }
		/>
	)
}

export default ItemsDropdown

