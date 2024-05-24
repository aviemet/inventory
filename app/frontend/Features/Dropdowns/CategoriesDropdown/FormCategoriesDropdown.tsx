import React from 'react'
import { Select as FormSelect } from '@/Components/Form'
import { Routes } from '@/lib'
import CategoriesForm from '@/Pages/Categories/Form'
import { useGetCategoriesAsOptions } from '@/queries/categories'
import { isEmpty } from 'lodash'
import { type FormAsyncDropdown } from '..'

interface FormCategoriesDropdownProps extends Omit<FormAsyncDropdown<Schema.CategoriesOptions>, 'name'> {
	name?: string
	categorizable_type?: Schema.CategoryTypes
}

const FormCategoriesDropdown = ({
	label = 'Category',
	name = 'category_id',
	categorizable_type,
	initialData,
	value,
	...props
}: FormCategoriesDropdownProps) => {
	const { data, isStale, refetch } = useGetCategoriesAsOptions({ categoryType: categorizable_type }, {
		enabled: value !== undefined,
		initialData,
	})

	return (
		<FormSelect
			label={ label }
			name={ name }
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
			newForm={
				<CategoriesForm
					to={ Routes.apiCategories() }
					categoryType='Contract'
				/>
			}
			{ ...props }
		/>
	)
}

export default FormCategoriesDropdown
