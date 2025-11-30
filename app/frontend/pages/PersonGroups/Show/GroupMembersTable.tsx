
import { Link, Table } from "@/components"
import { CheckIcon, CrossIcon } from "@/components/Icons"
import { TableProps } from "@/components/Table/Table"
import { Routes } from "@/lib"

const GroupMembersTable = (props: TableProps) => {
	return (
		<Table { ...props }>
			<Table.Head>
				<Table.Row>
					<Table.HeadCell sort="first_name" hideable={ false }>First Name</Table.HeadCell>
					<Table.HeadCell sort="last_name">Last Name</Table.HeadCell>
					<Table.HeadCell sort="employee_number">Emp. #</Table.HeadCell>
					<Table.HeadCell sort="job_title">Title</Table.HeadCell>
					<Table.HeadCell sort="department.name">Department</Table.HeadCell>
					<Table.HeadCell>Login Enabled</Table.HeadCell>
				</Table.Row>
			</Table.Head>

			<Table.Body>
				<Table.RowIterator render={ (person: Schema.PeopleBasic) => (
					<Table.Row key={ person.id }>

						<Table.Cell nowrap>
							<Link href={ Routes.person(person) }>{ person.first_name }</Link>
						</Table.Cell>

						<Table.Cell>
							<Link href={ Routes.person(person) }>{ person.last_name }</Link>
						</Table.Cell>

						<Table.Cell>
							<Link href={ Routes.person(person) }>{ person.employee_number }</Link>
						</Table.Cell>

						<Table.Cell>
							<Link href={ Routes.person(person) }>{ person.job_title }</Link>
						</Table.Cell>

						<Table.Cell>
							{ person.department && <Link href={ Routes.department(person.department.slug) }>
								{ person.department?.name }
							</Link> }
						</Table.Cell>

						<Table.Cell>
							{ person.user && person.user.active ? <CheckIcon /> : <CrossIcon /> }
						</Table.Cell>

					</Table.Row>
				) } />
			</Table.Body>
		</Table>
	)
}

export default GroupMembersTable
