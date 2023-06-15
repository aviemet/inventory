import React from 'react'
import { SearchableDropdown } from '@/Components/Form'
import { Routes } from '@/lib'
import StatusLabelsForm from '@/Pages/StatusLabels/Form'
import { type IDropdownWithModalButton } from '../Inputs/SearchableDropdown'

interface IStatusLabelsDropdown extends IDropdownWithModalButton {
	status_labels: Schema.StatusLabelsOptions[]
	currencies?: any
}

const StatusLabelsDropdown = ({ label = 'Status Label', name = 'status_label_id', status_labels, ...props }: IStatusLabelsDropdown) => {
	return (
		<SearchableDropdown
			label={ label }
			name={ name }
			options={ status_labels }
			fetchOnOpen="status_labels"
			newForm={ <StatusLabelsForm
				to={ Routes.statusLabels() }
			/> }
			{ ...props }
		/>
	)
}

export default StatusLabelsDropdown
