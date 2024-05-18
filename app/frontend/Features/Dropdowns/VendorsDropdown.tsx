import React, { forwardRef } from 'react'
import { Select as FormSelect } from '@/Components/Form'
import { Select as InputSelect } from '@/Components/Inputs'
import { Routes, useInFormContext } from '@/lib'
import VendorsForm from '@/Pages/Vendors/Form'
import { useGetVendorsAsOptions } from '@/queries/vendors'
import { isEmpty } from 'lodash'
import { type AsyncDropdown } from '.'

interface IVendorsDropdown extends AsyncDropdown<Schema.VendorsOptions> {}

const VendorsDropdown = forwardRef<HTMLInputElement, IVendorsDropdown>((
	{ label = 'Vendor', name = 'vendor_id', initialData, value, ...props },
	ref,
) => {
	const { data, isStale, refetch } = useGetVendorsAsOptions({
		enabled: value !== undefined,
		initialData,
	})

	const commonProps = {
		ref,
		label,
		name,
		options: !data ? [] : data.map(vendor => ({
			label: vendor.name,
			value: String(vendor.id),
		})),
		onDropdownOpen: () => {
			if(isEmpty(data) || isStale) refetch()
		},
		searchable: true,
		clearable: true,
		value,
		...props,
	}

	if(useInFormContext()) {
		return (
			<FormSelect
				newForm={ <VendorsForm to={ Routes.apiVendors() } /> }
				{ ...commonProps }
			/>
		)
	}

	return <InputSelect { ...commonProps } />
})

export default VendorsDropdown
