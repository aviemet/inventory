import React, { forwardRef } from 'react'
import { Select as InputSelect } from '@/Components/Inputs'
import { useGetModelsAsOptions } from '@/queries/models'
import { isEmpty } from 'lodash'
import { type AsyncDropdown } from '..'

interface ModelsDropdownProps extends AsyncDropdown<Schema.ModelsOptions> {
	modelCategory?: Schema.CategoryTypes|undefined
}

const ModelsDropdown = forwardRef<HTMLInputElement, ModelsDropdownProps>((
	{ label = 'Model', name = 'model_id', modelCategory, initialData, value, ...props },
	ref,
) => {
	const { data, isStale, refetch } = useGetModelsAsOptions({ category: modelCategory }, {
		enabled: value !== undefined,
		initialData,
	})

	return <InputSelect
		ref={ ref }
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
		{ ...props } />
})

export default ModelsDropdown
