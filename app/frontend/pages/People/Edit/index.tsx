import React from "react"

import { Title, Page, Section } from "@/components"
import { Routes } from "@/lib"

import EditPersonForm from "./Form"

interface UpdatePersonProps {
	person: Schema.PeopleEdit
}

const EditPerson = ({ person }: UpdatePersonProps) => {
	const title = `Edit ${person.first_name} ${person.last_name}`

	return (
		<Page title={ title } breadcrumbs={ [
			{ title: "People", href: Routes.person(person) },
			{ title: `${person.first_name} ${person.last_name}`, href: Routes.person(person) },
			{ title: "Edit Person", href: window.location.href },
		] }>
			<Section>
				<Title>{ title }</Title>

				<EditPersonForm
					to={ Routes.person(person) }
					method="patch"
					person={ person }
				/>
			</Section>
		</Page>
	)
}

export default EditPerson
