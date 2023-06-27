import React from 'react'
import { SearchableDropdown } from '@/Components/Form'
import { Routes } from '@/lib'
import CategoriesForm from '@/Pages/Categories/Form'
import { type IDropdownWithModalButton } from '../Inputs/SearchableDropdown'
import { getCategoriesAsOptions } from '@/queries/categories'

interface ICategoriesDropdown extends IDropdownWithModalButton {
	categorizable_type?: Schema.CategoryTypes
}

const CategoriesDropdown = ({ label = 'Category', name = 'category_id', categorizable_type, ...props }: ICategoriesDropdown) => {
	const { data, refetch } = getCategoriesAsOptions(categorizable_type, { enabled: false })

	return (
		<SearchableDropdown
			label={ label }
			name={ name }
			options={ data }
			filterMatchKeys={ ['name'] }
			onDropdownOpen={ () => refetch() }
			newForm={ <CategoriesForm
				to={ Routes.apiCategories() }
			/> }
			{ ...props }
		/>
	)
}

export default CategoriesDropdown
