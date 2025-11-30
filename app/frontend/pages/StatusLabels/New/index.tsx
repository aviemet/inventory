
import { Title, Page, Section } from "@/components"
import { Routes } from "@/lib"

import StatusLabelForm from "@/domains/StatusLabels/Form"

interface NewStatusLabelProps {
	status_label: Schema.StatusLabelsFormData
}

const NewStatusLabel = ({ ...data }: NewStatusLabelProps) => {
	const title = "New Status Label"

	return (
		<Page title={ title } breadcrumbs={ [
			{ title: "Status Labels", href: Routes.statusLabels() },
			{ title: "New Status Label", href: window.location.href },
		] }>
			<Section>
				<Title>{ title }</Title>

				<StatusLabelForm to={ Routes.statusLabels() } { ...data } />
			</Section>
		</Page>
	)
}

export default NewStatusLabel
