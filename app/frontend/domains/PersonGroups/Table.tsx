import { Link, Table } from "@/components"
import { EditButton } from "@/components/Button"
import { type TableProps } from "@/components/Table/Table"
import { Routes } from "@/lib"

const GroupsTable = (props: TableProps) => {
	return (
		<Table { ...props }>
			<Table.Head>
				<Table.Row>
					<Table.HeadCell hideable={ false }>Group Name</Table.HeadCell>
					<Table.HeadCell>People</Table.HeadCell>
					<Table.HeadCell style={ { textAlign: "right", paddingRight: "1rem" } }>Actions</Table.HeadCell>
				</Table.Row>
			</Table.Head>

			<Table.Body>
				<Table.RowIterator render={ (person_group: Schema.PersonGroupsIndex) => (
					<Table.Row key={ person_group.id }>

						<Table.Cell nowrap>
							<Link href={ Routes.personGroup(person_group.slug) }>{ person_group.name }</Link>
						</Table.Cell>

						<Table.Cell>
							{ person_group.people?.length }
						</Table.Cell>

						<Table.Cell fitContent>
							<EditButton href={ Routes.editPersonGroup(person_group.slug) } label={ person_group.name } />
						</Table.Cell>

					</Table.Row>
				) } />
			</Table.Body>
		</Table>
	)
}

export default GroupsTable
