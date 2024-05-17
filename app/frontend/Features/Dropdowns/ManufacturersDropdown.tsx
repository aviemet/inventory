import React, { forwardRef } from 'react'
import { Select as FormSelect } from '@/Components/Form'
import { Select as InputSelect } from '@/Components/Inputs'
import { Routes, useInFormContext } from '@/lib'
import ManufacturersForm from '@/Pages/Manufacturers/Form'
import { useGetManufacturersAsOptions } from '@/queries/manufacturers'
import { isEmpty } from 'lodash'
import { type AsyncDropdown } from '.'

interface IManufacturersDropdown extends AsyncDropdown<Schema.ManufacturersOptions> {}

const ManufacturersDropdown = forwardRef<HTMLInputElement, IManufacturersDropdown>((
	{ label = 'Manufacturer', name = 'manufacturer_id', initialData, value, ...props },
	ref,
) => {
	const { data, isStale, refetch } = useGetManufacturersAsOptions({
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

	if(useInFormContext()) {
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
