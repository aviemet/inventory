import { createColumnHelper } from "@tanstack/react-table"

import { Link, Table } from "@/components"
import { EditButton } from "@/components/Button"
import { type TableProps } from "@/components/Table/Table"
import { Routes } from "@/lib"

const columnHelper = createColumnHelper<Schema.UsersIndex>()

export const usersColumns = [
	columnHelper.accessor("email", {
		header: "Email",
		enableSorting: true,
		meta: {
			model: "email",
			hideable: false,
		},
	}),
	columnHelper.display({
		id: "actions",
		header: "Actions",
		enableSorting: false,
		meta: {
			hideable: false,
		},
	}),
]

const UsersTable = (props: Omit<TableProps, "children">) => {
	return (
		<Table { ...props }>
			<Table.Head>
				<Table.Row>
					<Table.HeadCell columnId="email" />
					<Table.HeadCell columnId="actions" style={ { textAlign: "right", paddingRight: "1rem" } } />
				</Table.Row>
			</Table.Head>

			<Table.Body>
				<Table.RowIterator render={ (user: Schema.UsersIndex) => (
					<Table.Row key={ user.id }>

						<Table.Cell columnId="email" nowrap>
							<Link href={ Routes.user(user) }>{ user.email }</Link>
						</Table.Cell>

						<Table.Cell columnId="actions" fitContent>
							<EditButton href={ Routes.editUser(user) } label={ user.person?.name || user.email } />
						</Table.Cell>

					</Table.Row>
				) } />
			</Table.Body>
		</Table>
	)
}

export default UsersTable
