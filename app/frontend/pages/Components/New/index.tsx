import { Title, Page, Section } from "@/components"
import ComponentForm from "@/domains/Components/Form"
import { Routes } from "@/lib"


interface NewComponentProps {
	component: Schema.ComponentsFormData
}

const NewComponent = ({ component }: NewComponentProps) => {
	const title = "New Component"

	return (
		<Page title={ title } breadcrumbs={ [
			{ title: "Components", href: Routes.components() },
			{ title: "New Component", href: window.location.href },
		] }>
			<Section>
				<Title>{ title }</Title>

				<ComponentForm to={ Routes.components() } component={ component } />
			</Section>
		</Page>
	)
}

export default NewComponent
