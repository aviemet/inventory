import React from 'react'
import { SearchableDropdown } from '@/Components/Form'
import { Routes } from '@/lib'
import CategoriesForm from '@/Pages/Categories/Form'
import { type IDropdownWithModalButton } from '../Inputs/SearchableDropdown'

interface ICategoriesDropdown extends IDropdownWithModalButton {
	categories: Schema.CategoriesOptions[]
	categorizable_type?: 'Accessory' | 'Address' | 'Component' | 'Consumable' | 'Contact' | 'Contract' | 'Department' | 'Email' | 'Item' | 'License' | 'Location' | 'Manufacturer' | 'Model' | 'Order' | 'Person' | 'Phone' | 'Ticket' | 'User' | 'Vendor' | 'Vendor' | 'Website'
}

const CategoriesDropdown = ({ label = 'Category', name = 'category_id',  categories, ...props }: ICategoriesDropdown) => {
	return (
		<SearchableDropdown
			label={ label }
			name={ name }
			options={ categories }
			filterMatchKeys={ ['name'] }
			fetchOnOpen="categories"
			newForm={ <CategoriesForm
				to={ Routes.apiCategories() }
			/> }
			{ ...props }
		/>
	)
}

export default CategoriesDropdown
