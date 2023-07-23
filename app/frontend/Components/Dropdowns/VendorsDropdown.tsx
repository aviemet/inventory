import React, { forwardRef } from 'react'
import { SearchableDropdown as FormDropdown } from '@/Components/Form'
import { SearchableDropdown as InputDropdown } from '@/Components/Inputs'
import { Routes, inFormContext } from '@/lib'
import VendorsForm from '@/Pages/Vendors/Form'
import { getVendorsAsOptions } from '@/queries/vendors'
import { isEmpty } from 'lodash'
import { type IAsyncDropdown } from '.'

interface IVendorsDropdown extends IAsyncDropdown<Schema.VendorsOptions> {}

const VendorsDropdown = forwardRef<HTMLInputElement, IVendorsDropdown>((
	{ label = 'Vendor', name = 'vendor_id', initialData = [], ...props },
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
		options: data,
		onDropdownOpen: () => {
			if(isEmpty(data) || isStale) refetch()
		},
		...props,
	}

	if(inFormContext()) {
		return (
			<FormDropdown
				newForm={ <VendorsForm to={ Routes.vendors() } /> }
				{ ...commonProps }
			/>
		)
	}

	return <InputDropdown { ...commonProps } />
})

export default VendorsDropdown
