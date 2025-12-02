import { createColumnHelper } from "@tanstack/react-table"

import { Link, Table } from "@/components"
import { EditButton } from "@/components/Button"
import { type TableProps } from "@/components/Table/Table"
import { Routes } from "@/lib"

const columnHelper = createColumnHelper<Schema.PersonGroupsIndex>()

export const personGroupsColumns = [
	columnHelper.accessor("name", {
		header: "Group Name",
		enableSorting: false,
		meta: {
			hideable: false,
		},
	}),
	columnHelper.display({
		id: "people",
		header: "People",
		enableSorting: false,
		meta: {
			hideable: "people",
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

const GroupsTable = (props: Omit<TableProps, "children">) => {
	return (
		<Table { ...props }>
			<Table.Head>
				<Table.Row>
					<Table.HeadCell columnId="name" />
					<Table.HeadCell columnId="people" />
					<Table.HeadCell columnId="actions" style={ { textAlign: "right", paddingRight: "1rem" } } />
				</Table.Row>
			</Table.Head>

			<Table.Body>
				<Table.RowIterator render={ (person_group: Schema.PersonGroupsIndex) => (
					<Table.Row key={ person_group.id }>

						<Table.Cell columnId="name" nowrap>
							<Link href={ Routes.personGroup(person_group.slug) }>{ person_group.name }</Link>
						</Table.Cell>

						<Table.Cell columnId="people">
							{ person_group.people?.length }
						</Table.Cell>

						<Table.Cell columnId="actions" fitContent>
							<EditButton href={ Routes.editPersonGroup(person_group.slug) } label={ person_group.name } />
						</Table.Cell>

					</Table.Row>
				) } />
			</Table.Body>
		</Table>
	)
}

export default GroupsTable
