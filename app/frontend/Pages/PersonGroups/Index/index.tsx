import React from 'react'
import { Routes } from '@/lib'
import { IndexPageTemplate } from '@/Features'
import { NewIcon } from '@/Components/Icons'
import GroupsTable from '../Table'

interface GroupIndexProps {
	person_groups: Schema.PersonGroupsIndex[]
	pagination: Schema.Pagination
}

const GroupIndex = ({ person_groups, pagination }: GroupIndexProps) => {
	const title = 'Groups'

	return (
		<IndexPageTemplate
			title={ title }
			model="person_groups"
			rows={ person_groups }
			pagination={ pagination }
			search={ false }
			deleteRoute={ Routes.personGroups() }
			breadcrumbs={ [
				{ title: 'People', href: Routes.people() },
				{ title, href: window.location.href },
			] }
			menuOptions={ [
				{ label: 'Create New Group', href: Routes.newPersonGroup(), icon: <NewIcon /> },
			] }
		>
			<GroupsTable />
		</IndexPageTemplate>
	)
}

export default GroupIndex
