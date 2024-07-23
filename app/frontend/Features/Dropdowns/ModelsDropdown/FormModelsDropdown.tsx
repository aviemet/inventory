import React from 'react'
import { Select as FormSelect } from '@/Components/Form'
import { Routes } from '@/lib'
import ModelsForm from '@/Pages/Models/Form'
import { useGetModelsAsOptions } from '@/queries/models'
import { isEmpty } from 'lodash'
import { type FormAsyncDropdown } from '..'

interface ModelsDropdownProps extends Omit<FormAsyncDropdown<Schema.ModelsOptions>, 'name'> {
	name?: string
	modelCategory: Schema.CategoryTypes
}

const ModelsDropdown = ({
	label = 'Model',
	name = 'model_id',
	modelCategory,
	initialData,
	value,
	...props
}: ModelsDropdownProps) => {
	const { data, isStale, refetch } = useGetModelsAsOptions({ category: modelCategory }, {
		enabled: value !== undefined,
		initialData,
	})

	return (
		<FormSelect
			label={ label }
			name={ name }
			options={ !data ? [] : data.map(model => ({
				label: model.name!,
				value: String(model.id),
			})) }
			onDropdownOpen={ () => {
				if(isEmpty(data) || isStale) refetch()
			} }
			searchable
			clearable
			value={ value }
			newForm={
				<ModelsForm
					to={ Routes.apiModels() }
					categoryName={ modelCategory }
				/>
			}
			{ ...props }
		/>
	)

}

export default ModelsDropdown
