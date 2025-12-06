import { Title, Page, Section } from "@/components"
import DocumentationForm from "@/domains/Documentation/Form"
import { Routes } from "@/lib"


interface NewDocumentationProps {
	documentation: Schema.DocumentationsFormData
}

const NewDocumentation = ({ documentation }: NewDocumentationProps) => {
	const title = "New Documentation"

	return (
		<Page title={ title } breadcrumbs={ [
			{ title: "Documentations", href: Routes.documentations() },
			{ title, href: window.location.href },
		] }>

			<Section>
				<Title>{ title }</Title>

				<DocumentationForm
					to={ Routes.documentations() }
					documentation={ documentation }
				/>
			</Section>

		</Page>
	)
}

export default NewDocumentation
