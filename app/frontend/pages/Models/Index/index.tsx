import { NewIcon } from "@/components/Icons"
import ModelsTable, { modelsColumns } from "@/domains/Models/Table"
import { IndexPageTemplate } from "@/features"
import { Routes } from "@/lib"


interface ModelsIndexProps {
	models: Schema.ModelsIndex[]
	pagination: Schema.Pagination
}

const ModelsIndex = ({ models, pagination }: ModelsIndexProps) => {
	return (
		<IndexPageTemplate
			title="Models"
			model="models"
			rows={ models }
			columns={ modelsColumns }
			pagination={ pagination }
			deleteRoute={ Routes.models() }
			menuOptions={ [
				{ label: "New Model", href: Routes.newModel(), icon: <NewIcon /> },
			] }
		>
			<ModelsTable records={ models } pagination={ pagination } model="models" />
		</IndexPageTemplate>
	)
}

export default ModelsIndex
