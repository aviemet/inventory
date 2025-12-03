import { Title, Page, Section } from "@/components"
import { Routes } from "@/lib"

import NewPersonForm from "./Form"

interface NewPersonProps {
	person: Schema.PeopleFormData
}

const New = ({ person }: NewPersonProps) => {
	const title = "New Person"

	return (
		<Page title={ title } breadcrumbs={ [
			{ title: "People", href: Routes.people() },
			{ title: "New Person", href: window.location.href },
		] }>
			<Section>
				<Title>{ title }</Title>

				<NewPersonForm to={ Routes.people() } person={ person } />
			</Section>
		</Page>
	)
}

export default New
