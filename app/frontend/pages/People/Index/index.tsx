import React from "react"

import { NewIcon, SettingsIcon } from "@/components/Icons"
import { IndexPageTemplate } from "@/features"
import { Routes } from "@/lib"

import PeopleTable from "../Table"

interface PeopleIndexProps {
	people: Schema.PeopleIndex[]
	pagination: Schema.Pagination
}

const PeopleIndex = ({ people, pagination }: PeopleIndexProps) => {
	return (
		<IndexPageTemplate
			title="People"
			model="people"
			rows={ people }
			pagination={ pagination }
			deleteRoute={ Routes.people() }
			menuOptions={ [
				{ label: "New Person", href: Routes.newPerson(), icon: <NewIcon /> },
				// { label: 'LDAP Settings', href: Routes.settings(), icon: SettingsIcon },
			] }
		>
			<PeopleTable />
		</IndexPageTemplate>
	)
}

export default PeopleIndex
