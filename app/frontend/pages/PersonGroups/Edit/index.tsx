import React from "react"

import { Title, Page, Section } from "@/components"
import { Routes } from "@/lib"

import GroupForm from "../Form"

interface UpdateGroupProps {
	person_group: Schema.PersonGroupsEdit
	people: Schema.Person[]
}

const EditGroup = ({ person_group, ...models }: UpdateGroupProps) => {
	const title = `Edit ${person_group.name}`

	return (
		<Page title={ title } breadcrumbs={ [
			{ title: "People", href: Routes.people() },
			{ title: "Groups", href: Routes.personGroups() },
			{ title: person_group.name!, href: Routes.personGroup(person_group.slug) },
			{ title: "Edit", href: window.location.href },
		] }>
			<Section>
				<Title>{ title }</Title>

				<GroupForm to={ Routes.personGroup(person_group.slug) } method="patch" person_group={ person_group } { ...models } />
			</Section>
		</Page>
	)
}

export default EditGroup
