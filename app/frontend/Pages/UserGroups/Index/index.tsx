import React from 'react'
import { Routes } from '@/lib'
import { IndexPageTemplate } from '@/Layouts/AppLayout/Components'
import { NewIcon } from '@/Components/Icons'
import GroupsTable from '../Table'

interface IGroupIndexProps {
	user_groups: Schema.UserGroup[]
	pagination: Schema.Pagination
}

const GroupIndex = ({ user_groups, pagination }: IGroupIndexProps) => {
	const title = 'Groups'

	return (
		<IndexPageTemplate
			title={ title }
			model="user_groups"
			rows={ user_groups }
			pagination={ pagination }
			search={ false }
			breadcrumbs={ [
				{ title: 'Users', href: Routes.users() },
				{ title, href: window.location.href },
			] }
			menuOptions={ [
				{ label: 'Create New Group', href: Routes.newUserGroup(), icon: NewIcon },
			] }
		>
			<GroupsTable />
		</IndexPageTemplate>
	)
}

export default GroupIndex
