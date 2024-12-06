import React from 'react'
import { Select as FormSelect } from '@/Components/Form'
import { Routes } from '@/lib'
import VendorsForm from '@/Pages/Vendors/Form'
import { useGetVendorsAsOptions } from '@/queries/vendors'
import { isEmpty } from 'lodash'
import { type FormAsyncDropdown } from '..'

interface VendorsDropdownProps extends Omit<FormAsyncDropdown<Schema.VendorsOptions>, 'name'> {
	name?: string
}

const VendorsDropdown = ({
	label = 'Vendor',
	name = 'vendor_id',
	initialData,
	value,
	...props
}: VendorsDropdownProps) => {
	const { data, isStale, refetch } = useGetVendorsAsOptions({
		enabled: value !== undefined,
		initialData,
	})

	return (
		<FormSelect
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
			newForm={
				<VendorsForm
					to={ Routes.apiVendors() }
				/>
			}
			{ ...props }
		/>
	)
}

export default VendorsDropdown
