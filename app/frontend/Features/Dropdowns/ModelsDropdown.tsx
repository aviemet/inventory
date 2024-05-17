import React, { forwardRef } from 'react'
import { Select as FormSelect } from '@/Components/Form'
import { Select as InputSelect } from '@/Components/Inputs'
import { Routes, useInFormContext } from '@/lib'
import ModelsForm from '@/Pages/Models/Form'
import { useGetModelsAsOptions } from '@/queries/models'
import { isEmpty } from 'lodash'
import { type AsyncDropdown } from '.'

interface IModelsDropdown extends AsyncDropdown<Schema.ModelsOptions> {
	modelCategory?: Schema.CategoryTypes|undefined
}

const ModelsDropdown = forwardRef<HTMLInputElement, IModelsDropdown>((
	{ label = 'Model', name = 'model_id', modelCategory, initialData, value, ...props },
	ref,
) => {
	const { data, isStale, refetch } = useGetModelsAsOptions(modelCategory, {
		enabled: value !== undefined,
		initialData,
	})

	const commonProps = {
		ref,
		label,
		name,
		options: !data ? [] : data.map(model => ({
			label: model.name,
			value: String(model.id),
		})),
		onDropdownOpen: () => {
			if(isEmpty(data) || isStale) refetch()
		},
		searchable: true,
		clearable: true,
		value,
		...props,
	}

	if(useInFormContext()) {
		return (
			<FormSelect
				newForm={ <ModelsForm
					category={ modelCategory }
					to={ Routes.apiModels() }
				/> }
				{ ...commonProps }
			/>
		)
	}

	return <InputSelect { ...commonProps } />
})

export default ModelsDropdown
