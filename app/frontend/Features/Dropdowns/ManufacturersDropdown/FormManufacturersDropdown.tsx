import React, { forwardRef } from 'react'
import { Select as FormSelect } from '@/Components/Form'
import { Routes } from '@/lib'
import ManufacturersForm from '@/Pages/Manufacturers/Form'
import { useGetManufacturersAsOptions } from '@/queries/manufacturers'
import { isEmpty } from 'lodash'
import { type FormAsyncDropdown } from '..'

interface ManufacturersDropdownProps extends FormAsyncDropdown<Schema.ManufacturersOptions> {}

const ManufacturersDropdown = forwardRef<HTMLInputElement, ManufacturersDropdownProps>((
	{ label = 'Manufacturer', name = 'manufacturer_id', initialData, value, ...props },
	ref,
) => {
	const { data, isStale, refetch } = useGetManufacturersAsOptions({
		enabled: value !== undefined,
		initialData,
	})

	return (
		<FormSelect
			ref={ ref }
			label={ label }
			name={ name }
			options={ !data ? [] : data.map(manufacturer => ({
				label: manufacturer.name!,
				value: String(manufacturer.id),
			})) }
			onDropdownOpen={ () => {
				if(isEmpty(data) || isStale) refetch()
			} }
			searchable
			clearable
			value={ value }
			newForm={
				<ManufacturersForm
					to={ Routes.apiManufacturers() }
				/>
			}
			{ ...props }
		/>
	)
})

export default ManufacturersDropdown
