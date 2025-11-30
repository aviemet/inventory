import React from "react"

import { Table, Title, Page, Group, Menu } from "@/components"
import { EditIcon } from "@/components/Icons"
import { Routes } from "@/lib"

import GroupMembersTable from "./GroupMembersTable"

interface ShowUserProps {
	person_group: Schema.PersonGroupsShow
}

const ShowUser = ({ person_group }: ShowUserProps) => {
	const title = `${person_group.name}`

	return (
		<Page title={ title } breadcrumbs={ [
			{ title: "People", href: Routes.people() },
			{ title: "Groups", href: Routes.personGroups() },
			{ title, href: window.location.href },
		] }>
			<Table.Section>

				<Group justify="space-between">
					<Title mb={ 8 }>Group: { title }</Title>

					<Menu position="bottom-end">
						<Menu.Target />
						<Menu.Dropdown>
							<Menu.Link href={ Routes.editPersonGroup(person_group.slug) } leftSection={ <EditIcon /> }>
								Edit
							</Menu.Link>
						</Menu.Dropdown>
					</Menu>
				</Group>

				<Table.TableProvider
					selectable
					model="people"
					rows={ person_group.people }
				>
					<GroupMembersTable />
				</Table.TableProvider>
			</Table.Section>
		</Page>
	)
}

export default ShowUser
