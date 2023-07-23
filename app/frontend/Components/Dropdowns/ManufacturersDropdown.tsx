import React, { forwardRef } from 'react'
import { SearchableDropdown as FormDropdown } from '@/Components/Form'
import { SearchableDropdown as InputDropdown } from '@/Components/Inputs'
import { Routes, inFormContext } from '@/lib'
import ManufacturersForm from '@/Pages/Manufacturers/Form'
import { getManufacturersAsOptions } from '@/queries/manufacturers'
import { isEmpty } from 'lodash'
import { type IAsyncDropdown } from '.'

interface IManufacturersDropdown extends IAsyncDropdown<Schema.ManufacturersOptions> {}

const ManufacturersDropdown = forwardRef<HTMLInputElement, IManufacturersDropdown>((
	{ label = 'Manufacturer', name = 'manufacturer_id', initialData = [], ...props },
	ref,
) => {
	const { data, isStale, refetch } = getManufacturersAsOptions({
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
				newForm={ <ManufacturersForm to={ Routes.apiManufacturers() } /> }
				{ ...commonProps }
			/>
		)
	}

	return <InputDropdown { ...commonProps } />
})

export default ManufacturersDropdown
