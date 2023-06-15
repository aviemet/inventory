import React from 'react'
import { SearchableDropdown } from '@/Components/Form'
import { Routes } from '@/lib'
import VendorsForm from '@/Pages/Vendors/Form'
import { type IDropdownWithModalButton } from '../Inputs/SearchableDropdown'

interface IVendorsDropdown extends IDropdownWithModalButton {
	vendors: Schema.VendorsOptions[]
}

const VendorsDropdown = ({ label = 'Vendor', name = 'vendor_id', vendors, ...props }: IVendorsDropdown) => {
	return (
		<SearchableDropdown
			label={ label }
			name={ name }
			options={ vendors }
			filterMatchKeys={ ['name'] }
			fetchOnOpen="vendors"
			newForm={ <VendorsForm to={ Routes.vendors() } /> }
			{ ...props }
		/>
	)
}

export default VendorsDropdown
