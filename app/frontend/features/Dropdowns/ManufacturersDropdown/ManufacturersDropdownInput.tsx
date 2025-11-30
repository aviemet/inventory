import { isEmpty } from "lodash"
import React, { forwardRef } from "react"

import { Select as InputSelect } from "@/components/Inputs"
import { useGetManufacturersAsOptions } from "@/queries/manufacturers"

import { type AsyncDropdown } from ".."

interface ManufacturersDropdownProps extends AsyncDropdown<Schema.ManufacturersOptions> {}

const ManufacturersDropdown = forwardRef<HTMLInputElement, ManufacturersDropdownProps>((
	{ label = "Manufacturer", name = "manufacturer_id", initialData, value, ...props },
	ref,
) => {
	const { data, isStale, refetch } = useGetManufacturersAsOptions({
		enabled: value !== undefined,
		initialData,
	})

	return <InputSelect
		ref={ ref }
		label={ label }
		name={ name }
		options={ !data
			? []
			: data.map(manufacturer => ({
				label: manufacturer.name!,
				value: String(manufacturer.id),
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

export default ManufacturersDropdown
