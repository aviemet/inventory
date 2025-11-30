
import { NewIcon } from "@/components/Icons"
import { IndexPageTemplate } from "@/features"
import { Routes } from "@/lib"

import ComponentsTable from "@/domains/Components/Table"

interface ComponentsIndexProps {
	components: Schema.Item[]
	pagination: Schema.Pagination
}

const ComponentsIndex = ({ components, pagination }: ComponentsIndexProps) => {
	return (
		<IndexPageTemplate
			title="Components"
			model="components"
			rows={ components }
			pagination={ pagination }
			deleteRoute={ Routes.components() }
			menuOptions={ [
				{ label: "New Component", href: Routes.newComponent(), icon: <NewIcon /> },
			] }
		>
			<ComponentsTable />
		</IndexPageTemplate>
	)
}

export default ComponentsIndex
