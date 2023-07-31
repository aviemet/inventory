import React, { forwardRef } from 'react'
import { Select as FormSelect } from '@/Components/Form'
import { Select as InputSelect } from '@/Components/Inputs'
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
		options: !data ? [] : data.map(statusLabel => ({
			label: statusLabel.name,
			value: String(statusLabel.id),
		})),
		onDropdownOpen: () => {
			if(isEmpty(data) || isStale) refetch()
		},
		searchable: true,
		clearable: true,
		...props,
	}

	if(inFormContext()) {
		return (
			<FormSelect
				newForm={ <StatusLabelsForm to={ Routes.statusLabels() } /> }
				{ ...commonProps }
			/>
		)
	}

	return <InputSelect { ...commonProps } />
})

export default StatusLabelsDropdown
