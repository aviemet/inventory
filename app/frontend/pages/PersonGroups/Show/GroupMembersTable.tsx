
import { Link, Table } from "@/components"
import { CheckIcon, CrossIcon } from "@/components/Icons"
import { type TableProps } from "@/components/Table/Table"
import { Routes } from "@/lib"

const GroupMembersTable = (props: Omit<TableProps, "children">) => {
	return (
		<Table { ...props }>
			<Table.Head>
				<Table.Row>
					<Table.HeadCell columnId="first_name" sort="first_name" hideable={ false }>First Name</Table.HeadCell>
					<Table.HeadCell columnId="last_name" sort="last_name">Last Name</Table.HeadCell>
					<Table.HeadCell columnId="employee_number" sort="employee_number">Emp. #</Table.HeadCell>
					<Table.HeadCell columnId="job_title" sort="job_title">Title</Table.HeadCell>
					<Table.HeadCell columnId="department" sort="department.name">Department</Table.HeadCell>
					<Table.HeadCell columnId="login_enabled">Login Enabled</Table.HeadCell>
				</Table.Row>
			</Table.Head>

			<Table.Body>
				<Table.RowIterator render={ (person: Schema.PeopleBasic) => (
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

						<Table.Cell columnId="department">
							{ person.department && <Link href={ Routes.department(person.department.slug) }>
								{ person.department?.name }
							</Link> }
						</Table.Cell>

						<Table.Cell columnId="login_enabled">
							{ person.user && person.user.active ? <CheckIcon /> : <CrossIcon /> }
						</Table.Cell>

					</Table.Row>
				) } />
			</Table.Body>
		</Table>
	)
}

export default GroupMembersTable
