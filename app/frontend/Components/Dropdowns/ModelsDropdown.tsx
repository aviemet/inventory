import React, { forwardRef } from 'react'
import { SearchableDropdown as FormDropdown } from '@/Components/Form'
import { SearchableDropdown as InputDropdown } from '@/Components/Inputs'
import { Routes, inFormContext } from '@/lib'
import ModelsForm from '@/Pages/Models/Form'
import { getModelsAsOptions } from '@/queries/models'
import { isEmpty } from 'lodash'
import { type IAsyncDropdown } from '.'

interface IModelsDropdown extends IAsyncDropdown<Schema.ModelsOptions> {
	modelCategory?: Schema.CategoryTypes|undefined
}

const ModelsDropdown = forwardRef<HTMLInputElement, IModelsDropdown>((
	{ label = 'Model', name = 'model_id', modelCategory, initialData = [], ...props },
	ref,
) => {
	const { data, isStale, refetch } = getModelsAsOptions(modelCategory, {
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
				newForm={ <ModelsForm
					category={ modelCategory }
					to={ Routes.apiModels() }
				/> }
				{ ...commonProps }
			/>
		)
	}

	return <InputDropdown { ...commonProps } />
})

export default ModelsDropdown
