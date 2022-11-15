import React from 'react'
import { Routes } from '@/lib'
import { IndexPageTemplate } from '@/Components/Layout'
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
			rows={ status_labels }
			pagination={ pagination }
			menuOptions={ [
				{ label: 'New StatusLabel', href: Routes.newStatusLabel(), icon: NewIcon },
			] }
		>
			<StatusLabelsTable />
		</IndexPageTemplate>
	)
}

export default StatusLabelsIndex
