import React, { forwardRef } from 'react'
import { SearchableDropdown as FormDropdown } from '@/Components/Form'
import { SearchableDropdown as InputDropdown } from '@/Components/Inputs'
import { Routes, inFormContext } from '@/lib'
import CategoriesForm from '@/Pages/Categories/Form'
import { getCategoriesAsOptions } from '@/queries/categories'
import { isEmpty } from 'lodash'
import { type IAsyncDropdown } from '.'

interface ICategoriesDropdown extends IAsyncDropdown<Schema.CategoriesOptions> {
	categorizable_type?: Schema.CategoryTypes
}

const CategoriesDropdown = forwardRef<HTMLInputElement, ICategoriesDropdown>((
	{ label = 'Category', name = 'category_id', categorizable_type, initialData = [], ...props },
	ref,
) => {
	const { data, isStale, refetch } = getCategoriesAsOptions(categorizable_type, {
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
				newForm={ <CategoriesForm
					to={ Routes.apiCategories() }
				/> }
				{ ...commonProps }
			/>
		)
	}

	return <InputDropdown { ...commonProps } />
})

export default CategoriesDropdown
