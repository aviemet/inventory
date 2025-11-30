import { isEmpty } from "lodash"
import React, { forwardRef } from "react"

import { Select as InputSelect } from "@/components/Inputs"
import { useGetVendorsAsOptions } from "@/queries/vendors"

import { type AsyncDropdown } from ".."

interface VendorsDropdownProps extends AsyncDropdown<Schema.VendorsOptions> {}

const VendorsDropdown = forwardRef<HTMLInputElement, VendorsDropdownProps>((
	{ label = "Vendor", name = "vendor_id", initialData, value, ...props },
	ref,
) => {
	const { data, isStale, refetch } = useGetVendorsAsOptions({
		enabled: value !== undefined,
		initialData,
	})

	return (
		<InputSelect
			ref={ ref }
			label={ label }
			name={ name }
			options={ !data
				? []
				: data.map(vendor => ({
					label: vendor.name,
					value: String(vendor.id),
				})) }
			onDropdownOpen={ () => {
				if(isEmpty(data) || isStale) refetch()
			} }
			searchable
			clearable
			value={ value }
			{ ...props }
		/>
	)
})

export default VendorsDropdown
