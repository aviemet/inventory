import React from 'react'
import { SearchableDropdown } from '@/Components/Form'
import { Routes } from '@/lib'
import ModelsForm from '@/Pages/Models/Form'

interface IModelsDropdown extends IDropdownWithModalButton {
	models: Schema.ModelsOptions[]
	manufacturers: Schema.ManufacturersOptions[]
	categories: Schema.CategoriesOptions[]
}

const ModelsDropdown = ({ label = 'Model', name = 'model_id',  models, manufacturers, categories, ...props }: IModelsDropdown) => {
	return (
		<SearchableDropdown
			label={ label }
			name={ name }
			required
			options={ models }
			fetchOnOpen="models"
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
