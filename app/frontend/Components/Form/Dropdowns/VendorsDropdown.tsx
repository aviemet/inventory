import React from 'react'
import { SearchableDropdown } from '@/Components/Form'
import { Routes } from '@/lib'
import VendorsForm from '@/Pages/Vendors/Form'
import { type IDropdownWithModalButton } from '../Inputs/SearchableDropdown'
import { getVendorsAsOptions } from '@/queries/vendors'
import { isEmpty } from 'lodash'

interface IVendorsDropdown extends IDropdownWithModalButton {}

const VendorsDropdown = ({ label = 'Vendor', name = 'vendor_id', ...props }: IVendorsDropdown) => {
	const { data, isStale, refetch } = getVendorsAsOptions({ enabled: false })

	return (
		<SearchableDropdown
			label={ label }
			name={ name }
			options={ data }
			onDropdownOpen={ () => { if(isEmpty(data) || isStale) refetch() } }
			newForm={ <VendorsForm to={ Routes.vendors() } /> }
			{ ...props }
		/>
	)
}

export default VendorsDropdown
