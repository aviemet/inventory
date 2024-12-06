import React from 'react'
import { Select as FormSelect } from '@/Components/Form'
import { Routes } from '@/lib'
import StatusLabelsForm from '@/Pages/StatusLabels/Form'
import { useGetStatusLabelsAsOptions } from '@/queries/statusLabels'
import { isEmpty } from 'lodash'
import { type FormAsyncDropdown } from '..'

interface StatusLabelsDropdownProps extends Omit<FormAsyncDropdown<Schema.StatusLabelsOptions>, 'name'> {
	name?: string
}

const StatusLabelsDropdown = ({ label = 'Status Label',
	name = 'status_label_id',
	initialData,
	value,
	...props
}: StatusLabelsDropdownProps) => {
	const { data, isStale, refetch } = useGetStatusLabelsAsOptions({
		enabled: value !== undefined,
		initialData,
	})


	return (
		<FormSelect
			label={ label }
			name={ name }
			options={ !data
				? []
				: data.map(statusLabel => ({
					label: statusLabel.name!,
					value: String(statusLabel.id),
				})) }
			onDropdownOpen={ () => {
				if(isEmpty(data) || isStale) refetch()
			} }
			searchable
			clearable
			value={ value }
			newForm={
				<StatusLabelsForm
					to={ Routes.statusLabels() }
				/>
			}
			{ ...props }
		/>
	)

}

export default StatusLabelsDropdown
