import React from 'react'
import { SearchableDropdown } from '@/Components/Form'
import { Routes } from '@/lib'
import VendorsForm from '@/Pages/Vendors/Form'
import { type IDropdownWithModalButton } from '../Inputs/SearchableDropdown'
import { getVendorsAsOptions } from '@/queries/vendors'

interface IVendorsDropdown extends IDropdownWithModalButton {}

const VendorsDropdown = ({ label = 'Vendor', name = 'vendor_id', ...props }: IVendorsDropdown) => {
	const { data, refetch } = getVendorsAsOptions({ enabled: false })

	return (
		<SearchableDropdown
			label={ label }
			name={ name }
			options={ data }
			onDropdownOpen={ () => refetch() }
			newForm={ <VendorsForm to={ Routes.vendors() } /> }
			{ ...props }
		/>
	)
}

export default VendorsDropdown
