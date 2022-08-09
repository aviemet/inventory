import React from 'react'
import { SearchableDropdown } from '@/Components/Form'
import { Routes } from '@/lib'
import VendorsForm from '@/Pages/Vendors/Form'

interface IVendorsDropdown extends IDropdownWithModalButton {
	vendors: Schema.Vendor[]
}

const VendorsDropdown = ({ label = 'Vendor', name = 'vendor_id', vendors }: IVendorsDropdown) => {
	return (
		<SearchableDropdown
			label={ label }
			name={ name }
			options={ vendors }
			filterMatchKeys={ ['name'] }
			fetchOnOpen="vendors"
			newForm={ <VendorsForm to={ Routes.vendors() } /> }
		/>
	)
}

export default VendorsDropdown
