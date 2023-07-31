import React, { forwardRef } from 'react'
import { Select as FormSelect } from '@/Components/Form'
import { Select as InputSelect } from '@/Components/Inputs'
import { Routes, inFormContext } from '@/lib'
import VendorsForm from '@/Pages/Vendors/Form'
import { getVendorsAsOptions } from '@/queries/vendors'
import { isEmpty } from 'lodash'
import { type IAsyncDropdown } from '.'

interface IVendorsDropdown extends IAsyncDropdown<Schema.VendorsOptions> {}

const VendorsDropdown = forwardRef<HTMLInputElement, IVendorsDropdown>((
	{ label = 'Vendor', name = 'vendor_id', initialData, ...props },
	ref,
) => {
	const { data, isStale, refetch } = getVendorsAsOptions({
		enabled: false,
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
		...props,
	}

	if(inFormContext()) {
		return (
			<FormSelect
				newForm={ <VendorsForm to={ Routes.vendors() } /> }
				{ ...commonProps }
			/>
		)
	}

	return <InputSelect { ...commonProps } />
})

export default VendorsDropdown
