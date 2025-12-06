import { Title, Page, Section } from "@/components"
import ModelForm from "@/domains/Models/Form"
import { Routes } from "@/lib"


interface UpdateModelProps {
	model: Schema.ModelsEdit
	categories: Schema.CategoriesOptions[]
	manufacturers: Schema.ManufacturersOptions[]
}

const New = ({ model, ...models }: UpdateModelProps) => {
	const title = `Edit ${model.name}`

	return (
		<Page title={ title } breadcrumbs={ [
			{ title: "Models", href: Routes.models() },
			{ title: model.name!, href: Routes.model(model) },
			{ title: "Edit Model", href: window.location.href },
		] }>
			<Section>
				<Title>{ title }</Title>

				<ModelForm to={ Routes.model(model) } method="patch" model={ model } { ...models } />
			</Section>
		</Page>
	)
}

export default New
