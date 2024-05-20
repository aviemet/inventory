import React, { forwardRef } from 'react'
import { Select as FormSelect } from '@/Components/Form'
import { Select as InputSelect } from '@/Components/Inputs'
import { Routes, useInFormContext } from '@/lib'
import StatusLabelsForm from '@/Pages/StatusLabels/Form'
import { useGetStatusLabelsAsOptions } from '@/queries/statusLabels'
import { isEmpty } from 'lodash'
import { type AsyncDropdown } from '.'

interface StatusLabelsDropdownProps extends AsyncDropdown<Schema.StatusLabelsOptions> {}

const StatusLabelsDropdown = forwardRef<HTMLInputElement, StatusLabelsDropdownProps>((
	{ label = 'Status Label', name = 'status_label_id', initialData, value, ...props },
	ref,
) => {
	const { data, isStale, refetch } = useGetStatusLabelsAsOptions({
		enabled: value !== undefined,
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
		value,
		...props,
	}

	if(useInFormContext()) {
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
