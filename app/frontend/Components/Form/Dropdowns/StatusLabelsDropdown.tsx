import React from 'react'
import { SearchableDropdown } from '@/Components/Form'
import { Routes } from '@/lib'
import StatusLabelsForm from '@/Pages/StatusLabels/Form'
import { type IDropdownWithModalButton } from '../Inputs/SearchableDropdown'
import { getStatusLabelsAsOptions } from '@/queries/statusLabels'
import { isEmpty } from 'lodash'

interface IStatusLabelsDropdown extends IDropdownWithModalButton {}

const StatusLabelsDropdown = ({ label = 'Status Label', name = 'status_label_id', ...props }: IStatusLabelsDropdown) => {
	const { data, isStale, refetch } = getStatusLabelsAsOptions({ enabled: false })

	return (
		<SearchableDropdown
			label={ label }
			name={ name }
			options={ data }
			onDropdownOpen={ () => { if(isEmpty(data) || isStale) refetch() } }
			newForm={ <StatusLabelsForm
				to={ Routes.statusLabels() }
			/> }
			{ ...props }
		/>
	)
}

export default StatusLabelsDropdown
