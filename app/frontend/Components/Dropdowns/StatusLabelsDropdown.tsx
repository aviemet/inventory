import React, { forwardRef } from 'react'
import { SearchableDropdown as FormDropdown } from '@/Components/Form'
import { SearchableDropdown as InputDropdown } from '@/Components/Inputs'
import { Routes, inFormContext } from '@/lib'
import StatusLabelsForm from '@/Pages/StatusLabels/Form'
import { getStatusLabelsAsOptions } from '@/queries/statusLabels'
import { isEmpty } from 'lodash'
import { type IAsyncDropdown } from '.'

interface IStatusLabelsDropdown extends IAsyncDropdown<Schema.StatusLabelsOptions> {}

const StatusLabelsDropdown = forwardRef<HTMLInputElement, IStatusLabelsDropdown>((
	{ label = 'Status Label', name = 'status_label_id', initialData, ...props },
	ref,
) => {
	const { data, isStale, refetch } = getStatusLabelsAsOptions({
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
				newForm={ <StatusLabelsForm to={ Routes.statusLabels() } /> }
				{ ...commonProps }
			/>
		)
	}

	return <InputDropdown { ...commonProps } />
})

export default StatusLabelsDropdown
