import React from 'react'
import { Routes } from '@/lib'
import { IndexPageTemplate } from '@/Layouts/AppLayout/Components'
import { NewIcon, SettingsIcon } from '@/Components/Icons'
import PeopleTable from '../Table'

interface IPeopleIndexProps {
	people: Schema.Person[]
	pagination: Schema.Pagination
}

const PeopleIndex = ({ people, pagination }: IPeopleIndexProps) => {
	return (
		<IndexPageTemplate
			title="People"
			model="people"
			rows={ people }
			pagination={ pagination }
			deleteRoute={ Routes.people() }
			menuOptions={ [
				{ label: 'New Person', href: Routes.newPerson(), icon: NewIcon },
				// { label: 'LDAP Settings', href: Routes.settings(), icon: SettingsIcon },
			] }
		>
			<PeopleTable />
		</IndexPageTemplate>
	)
}

export default PeopleIndex
