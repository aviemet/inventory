
import { NewIcon } from "@/components/Icons"
import { IndexPageTemplate } from "@/features"
import { Routes } from "@/lib"

import StatusLabelsTable, { statusLabelsColumns } from "@/domains/StatusLabels/Table"

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
			columns={ statusLabelsColumns }
			pagination={ pagination }
			deleteRoute={ Routes.statusLabels() }
			menuOptions={ [
				{ label: "New Status Label", href: Routes.newStatusLabel(), icon: <NewIcon /> },
			] }
		>
			<StatusLabelsTable />
		</IndexPageTemplate>
	)
}

export default StatusLabelsIndex
