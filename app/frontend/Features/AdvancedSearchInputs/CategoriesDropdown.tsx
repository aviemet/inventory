import React, { forwardRef } from 'react'
import { Select } from '@/Components/Inputs'
import { Routes } from '@/lib'
import CategoriesForm from '@/Pages/Categories/Form'
import { useGetCategoriesAsOptions } from '@/queries/categories'
import { isEmpty } from 'lodash'
import { type AsyncDropdown } from '.'

interface CategoriesDropdownProps extends AsyncDropdown<Schema.CategoriesOptions> {
	categorizable_type?: Schema.CategoryTypes
}

const CategoriesDropdown = forwardRef<HTMLInputElement, CategoriesDropdownProps>((
	{ label = 'Category', name = 'category_id', categorizable_type, initialData, value, ...props },
	ref,
) => {
	const { data, isStale, refetch } = useGetCategoriesAsOptions(categorizable_type, {
		enabled: value !== undefined,
		initialData,
	})

	return (
		<Select
			ref={ ref }
			name={ name }
			label={ label }
			options={ !data ? [] : data.map(category => ({
				label: category.name!,
				value: String(category.id),
			})) }
			onDropdownOpen={ () => {
				if(isEmpty(data) || isStale) refetch()
			} }
			searchable
			clearable
			value={ value }
			{ ...props }
		/>
	)

})

export default CategoriesDropdown
