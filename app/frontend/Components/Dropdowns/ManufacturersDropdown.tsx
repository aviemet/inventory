import React, { forwardRef } from 'react'
import { Select as FormSelect } from '@/Components/Form'
import { Select as InputSelect } from '@/Components/Inputs'
import { Routes, inFormContext } from '@/lib'
import ManufacturersForm from '@/Pages/Manufacturers/Form'
import { getManufacturersAsOptions } from '@/queries/manufacturers'
import { isEmpty } from 'lodash'
import { type IAsyncDropdown } from '.'

interface IManufacturersDropdown extends IAsyncDropdown<Schema.ManufacturersOptions> {}

const ManufacturersDropdown = forwardRef<HTMLInputElement, IManufacturersDropdown>((
	{ label = 'Manufacturer', name = 'manufacturer_id', initialData, value, ...props },
	ref,
) => {
	const { data, isStale, refetch } = getManufacturersAsOptions({
		enabled: value !== undefined,
		initialData,
	})

	const commonProps = {
		ref,
		label,
		name,
		options: !data ? [] : data.map(manufacturer => ({
			label: manufacturer.name,
			value: String(manufacturer.id),
		})),
		onDropdownOpen: () => {
			if(isEmpty(data) || isStale) refetch()
		},
		searchable: true,
		clearable: true,
		value,
		...props,
	}

	if(inFormContext()) {
		return (
			<FormSelect
				newForm={ <ManufacturersForm to={ Routes.apiManufacturers() } /> }
				{ ...commonProps }
			/>
		)
	}

	return <InputSelect { ...commonProps } />
})

export default ManufacturersDropdown
