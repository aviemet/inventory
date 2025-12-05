import { NewIcon } from "@/components/Icons"
import ComponentsTable from "@/domains/Components/Table"
import { IndexPageTemplate } from "@/features"
import { Routes } from "@/lib"


interface ComponentsIndexProps {
	components: Schema.Item[]
	pagination: Schema.Pagination
}

const ComponentsIndex = ({ components, pagination }: ComponentsIndexProps) => {
	return (
		<IndexPageTemplate
			title="Components"
			model="components"
			pagination={ pagination }
			deleteRoute={ Routes.components() }
			menuOptions={ [
				{ label: "New Component", href: Routes.newComponent(), icon: <NewIcon /> },
			] }
		>
			<ComponentsTable records={ components } pagination={ pagination } model="components" />
		</IndexPageTemplate>
	)
}

export default ComponentsIndex
