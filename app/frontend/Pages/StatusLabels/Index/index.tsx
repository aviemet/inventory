import React from 'react'
import { Routes } from '@/lib'
import { IndexPageTemplate } from '@/Layouts/AppLayout/Components'
import { NewIcon } from '@/Components/Icons'
import StatusLabelsTable from '../Table'

interface IStatusLabelsIndexProps {
	status_labels: Schema.StatusLabel[]
	pagination: Schema.Pagination
}

const StatusLabelsIndex = ({ status_labels, pagination }: IStatusLabelsIndexProps) => {
	return (
		<IndexPageTemplate
			title="Support StatusLabels"
			model="status_labels"
			search={ false }
			rows={ status_labels }
			pagination={ pagination }
			deleteRoute={ Routes.statusLabels() }
			menuOptions={ [
				{ label: 'New Status Label', href: Routes.newStatusLabel(), icon: NewIcon },
			] }
		>
			<StatusLabelsTable />
		</IndexPageTemplate>
	)
}

export default StatusLabelsIndex
