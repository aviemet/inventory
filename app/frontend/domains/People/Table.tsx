import { Badge, Link, Table } from "@/components"
import { EditButton } from "@/components/Button"
import { CheckIcon, CrossIcon } from "@/components/Icons"
import { TableProps } from "@/components/Table/Table"
import { Routes } from "@/lib"

const PeopleTable = (props: Omit<TableProps, "children">) => {
	return (
		<Table { ...props }>
			<Table.Head>
				<Table.Row>
					<Table.HeadCell columnId="first_name" sort="first_name" hideable={ false }>First Name</Table.HeadCell>
					<Table.HeadCell columnId="last_name" sort="last_name">Last Name</Table.HeadCell>
					<Table.HeadCell columnId="employee_number" sort="employee_number">Emp. #</Table.HeadCell>
					<Table.HeadCell columnId="job_title" sort="job_title">Title</Table.HeadCell>
					<Table.HeadCell columnId="manager" sort="manager.name">Manager</Table.HeadCell>
					<Table.HeadCell columnId="department" sort="department.name">Department</Table.HeadCell>
					<Table.HeadCell columnId="items" sort="items.count">Items</Table.HeadCell>
					<Table.HeadCell columnId="accessories" sort="accessories.count">Accessories</Table.HeadCell>
					<Table.HeadCell columnId="groups">Groups</Table.HeadCell>
					<Table.HeadCell columnId="login_enabled">Login Enabled</Table.HeadCell>
					<Table.HeadCell columnId="actions" style={ { textAlign: "right", paddingRight: "1rem" } }>Actions</Table.HeadCell>
				</Table.Row>
			</Table.Head>

			<Table.Body>
				<Table.RowIterator render={ (person: Schema.PeopleIndex) => (
					<Table.Row key={ person.id }>
						<Table.Cell columnId="first_name" nowrap>
							<Link href={ Routes.person(person) }>{ person.first_name }</Link>
						</Table.Cell>

						<Table.Cell columnId="last_name">
							<Link href={ Routes.person(person) }>{ person.last_name }</Link>
						</Table.Cell>

						<Table.Cell columnId="employee_number">
							<Link href={ Routes.person(person) }>{ person.employee_number }</Link>
						</Table.Cell>

						<Table.Cell columnId="job_title">
							<Link href={ Routes.person(person) }>{ person.job_title }</Link>
						</Table.Cell>

						<Table.Cell columnId="manager">
							{ person?.manager?.id && <Link href={ Routes.person(person.manager.id) }>
								{ person.manager.name }
							</Link> }
						</Table.Cell>

						<Table.Cell columnId="department">
							{ person.department && <Link href={ Routes.department(person.department.slug) }>
								{ person.department?.name }
							</Link> }
						</Table.Cell>

						<Table.Cell columnId="items">
							{ person.items && <Link href={ Routes.items() }>{ person.items.length }</Link> }
						</Table.Cell>

						<Table.Cell columnId="accessories">
							{ person.accessories && <Link href={ Routes.accessories() }>{ person.accessories.length }</Link> }
						</Table.Cell>

						<Table.Cell columnId="groups">
							{ person.groups?.map(group => <Badge key={ group.id }>{ group.name }</Badge>) }
						</Table.Cell>

						<Table.Cell columnId="login_enabled">
							{ person.user && person.user.active ? <CheckIcon /> : <CrossIcon /> }
						</Table.Cell>

						<Table.Cell columnId="actions" fitContent>
							<EditButton href={ Routes.editPerson(person) } label={ person.name } />
						</Table.Cell>
					</Table.Row>
				) } />
			</Table.Body>
		</Table>
	)
}

export default PeopleTable
