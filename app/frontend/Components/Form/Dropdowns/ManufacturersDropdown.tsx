import React from 'react'
import { SearchableDropdown } from '@/Components/Form'
import { Routes } from '@/lib'
import ManufacturersForm from '@/Pages/Manufacturers/Form'

interface IManufacturersDropdown extends IDropdownWithModalButton {
	manufacturers: Schema.ManufacturersOptions[]
}

const ManufacturersDropdown = ({ label = 'Manufacturer', name = 'manufacturer_id',  manufacturers, ...props }: IManufacturersDropdown) => {
	return (
		<SearchableDropdown
			label={ label }
			name={ name }
			required
			options={ manufacturers }
			fetchOnOpen="manufacturers"
			filterMatchKeys={ ['name'] }
			newForm={ <ManufacturersForm
				to={ Routes.apiManufacturers() }
			/> }
			{ ...props }
		/>
	)
}

export default ManufacturersDropdown
