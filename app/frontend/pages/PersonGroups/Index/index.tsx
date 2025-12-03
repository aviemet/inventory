import { NewIcon } from "@/components/Icons"
import GroupsTable, { personGroupsColumns } from "@/domains/PersonGroups/Table"
import { IndexPageTemplate } from "@/features"
import { Routes } from "@/lib"


interface GroupIndexProps {
	person_groups: Schema.PersonGroupsIndex[]
	pagination: Schema.Pagination
}

const GroupIndex = ({ person_groups, pagination }: GroupIndexProps) => {
	const title = "Groups"

	return (
		<IndexPageTemplate
			title={ title }
			model="person_groups"
			rows={ person_groups }
			columns={ personGroupsColumns }
			pagination={ pagination }
			search={ false }
			deleteRoute={ Routes.personGroups() }
			breadcrumbs={ [
				{ title: "People", href: Routes.people() },
				{ title, href: window.location.href },
			] }
			menuOptions={ [
				{ label: "Create New Group", href: Routes.newPersonGroup(), icon: <NewIcon /> },
			] }
		>
			<GroupsTable records={ person_groups } pagination={ pagination } model="person_groups" />
		</IndexPageTemplate>
	)
}

export default GroupIndex
