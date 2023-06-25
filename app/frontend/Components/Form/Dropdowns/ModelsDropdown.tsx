import React from 'react'
import { SearchableDropdown } from '@/Components/Form'
import { Routes } from '@/lib'
import ModelsForm from '@/Pages/Models/Form'
import { type IDropdownWithModalButton } from '../Inputs/SearchableDropdown'
import { getModelsAsOptions } from '@/queries/models'

interface IModelsDropdown extends IDropdownWithModalButton {
	models: Schema.ModelsOptions[]
	manufacturers: Schema.ManufacturersOptions[]
	categories: Schema.CategoriesOptions[]
}

const ModelsDropdown = ({ label = 'Model', name = 'model_id', manufacturers, categories, ...props }: IModelsDropdown) => {
	const { data, refetch } = getModelsAsOptions({ enabled: false })

	return (
		<SearchableDropdown
			label={ label }
			name={ name }
			required
			options={ data }
			onDropdownOpen={ () => refetch() }
			newForm={ <ModelsForm
				to={ Routes.apiModels() }
				manufacturers={ manufacturers }
				categories={ categories }
			/> }
			{ ...props }
		/>
	)
}

export default ModelsDropdown
