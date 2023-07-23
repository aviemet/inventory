import React from 'react'
import { SearchableDropdown } from '@/Components/Form'
import { Routes } from '@/lib'
import ManufacturersForm from '@/Pages/Manufacturers/Form'
import { type IDropdownWithModalButton } from '../Inputs/SearchableDropdown'
import { getManufacturersAsOptions } from '@/queries/manufacturers'
import { isEmpty } from 'lodash'

interface IManufacturersDropdown extends IDropdownWithModalButton {}

const ManufacturersDropdown = ({ label = 'Manufacturer', name = 'manufacturer_id',  ...props }: IManufacturersDropdown) => {
	const { data, isStale, refetch } = getManufacturersAsOptions({ enabled: false })

	return (
		<SearchableDropdown
			label={ label }
			name={ name }
			required
			options={ data }
			onDropdownOpen={ () => { if(isEmpty(data) || isStale) refetch() } }
			newForm={ <ManufacturersForm
				to={ Routes.apiManufacturers() }
			/> }
			{ ...props }
		/>
	)
}

export default ManufacturersDropdown
