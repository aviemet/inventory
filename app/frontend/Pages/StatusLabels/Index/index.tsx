import React from 'react'
import { Routes } from '@/lib'
import { IndexPageTemplate } from '@/Features'
import { NewIcon } from '@/Components/Icons'
import StatusLabelsTable from '../Table'

interface StatusLabelsIndexProps {
	status_labels: Schema.StatusLabelsIndex[]
	pagination: Schema.Pagination
}

const StatusLabelsIndex = ({ status_labels, pagination }: StatusLabelsIndexProps) => {
	return (
		<IndexPageTemplate
			title="Support StatusLabels"
			model="status_labels"
			search={ false }
			rows={ status_labels }
			pagination={ pagination }
			deleteRoute={ Routes.statusLabels() }
			menuOptions={ [
				{ label: 'New Status Label', href: Routes.newStatusLabel(), icon: <NewIcon /> },
			] }
		>
			<StatusLabelsTable />
		</IndexPageTemplate>
	)
}

export default StatusLabelsIndex
