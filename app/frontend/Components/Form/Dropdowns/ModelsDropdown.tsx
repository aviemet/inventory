import React from 'react'
import { SearchableDropdown } from '@/Components/Form'
import { Routes } from '@/lib'
import ModelsForm from '@/Pages/Models/Form'
import { type IDropdownWithModalButton } from '../Inputs/SearchableDropdown'
import { getModelsAsOptions } from '@/queries/models'
import { isEmpty } from 'lodash'

interface IModelsDropdown extends IDropdownWithModalButton {
	modelCategory?: Schema.CategoryTypes|undefined
}

const ModelsDropdown = ({ label = 'Model', name = 'model_id', modelCategory, ...props }: IModelsDropdown) => {
	const { data, isStale, refetch } = getModelsAsOptions(modelCategory, { enabled: false })

	return (
		<SearchableDropdown
			label={ label }
			name={ name }
			required
			options={ data }
			onDropdownOpen={ () => { if(isEmpty(data) || isStale) refetch() } }
			newForm={ <ModelsForm
				to={ Routes.apiModels() }
			/> }
			{ ...props }
		/>
	)
}

export default ModelsDropdown
