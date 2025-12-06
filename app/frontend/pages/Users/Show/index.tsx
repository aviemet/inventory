import { type DataTableColumn } from "mantine-datatable"

import { Title, Link, Section, Table, Text } from "@/components"
import { Routes } from "@/lib"

interface ShowUserProps {
	user: Schema.UsersShow
}

const columns: DataTableColumn<Schema.UsersShow["people"][0]>[] = [
	{
		accessor: "name",
		title: "Person",
		render: (person) => <Link href={ Routes.person(person.id) }>{ person.name }</Link>,
	},
	{
		accessor: "company.name",
		title: "Company",
		render: (person) => <Link href={ Routes.company(person.company.slug) }>{ person.company.name }</Link>,
	},
	{
		accessor: "roles",
		title: "Roles",
		render: () => null,
	},
]

const ShowUser = ({ user }: ShowUserProps) => {
	return (
		<>
			<Section>
				<Title>User: { user.email }</Title>
				<Text my={ 10 }>User is active in the following companies</Text>
				<Table.DataTable
					columns={ columns }
					records={ user.people }
				/>
			</Section>

		</>
	)
}

export default ShowUser
