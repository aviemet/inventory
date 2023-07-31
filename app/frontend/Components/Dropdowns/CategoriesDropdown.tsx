import React, { forwardRef } from 'react'
import { Select as FormSelect } from '@/Components/Form'
import { Select as InputSelect } from '@/Components/Inputs'
import { Routes, inFormContext } from '@/lib'
import CategoriesForm from '@/Pages/Categories/Form'
import { getCategoriesAsOptions } from '@/queries/categories'
import { isEmpty } from 'lodash'
import { type IAsyncDropdown } from '.'

interface ICategoriesDropdown extends IAsyncDropdown<Schema.CategoriesOptions> {
	categorizable_type?: Schema.CategoryTypes
}

const CategoriesDropdown = forwardRef<HTMLInputElement, ICategoriesDropdown>((
	{ label = 'Category', name = 'category_id', categorizable_type, initialData, ...props },
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
		options: !data ? [] : data.map(category => ({
			label: category.name,
			value: String(category.id),
		})),
		onDropdownOpen: () => {
			if(isEmpty(data) || isStale) refetch()
		},
		searchable: true,
		clearable: true,
		...props,
	}

	if(inFormContext()) {
		return (
			<FormSelect
				newForm={ <CategoriesForm
					to={ Routes.apiCategories() }
				/> }
				{ ...commonProps }
			/>
		)
	}

	return <InputSelect { ...commonProps } />
})

export default CategoriesDropdown
