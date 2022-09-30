import React from 'react'
import { Routes } from '@/lib'
import { Link, Table } from '@/Components'
import { EditButton } from '@/Components/Button'
import { ITableProps } from '@/Components/Table/Table'

const PeopleTable = (props: ITableProps) => {
	return (
		<Table { ...props }>
			<Table.Head>
				<Table.Row>
					<Table.Cell sort="first_name">First Name</Table.Cell>
					<Table.Cell sort="last_name">Last Name</Table.Cell>
					<Table.Cell sort="employee_number">Emp. #</Table.Cell>
					<Table.Cell sort="job_title">Title</Table.Cell>
					<Table.Cell sort="manager.name">Manager</Table.Cell>
					<Table.Cell sort="department.name">Department</Table.Cell>
					<Table.Cell sort="items.count">Items</Table.Cell>
					<Table.Cell sort="accessories.count">Accessories</Table.Cell>
					<Table.Cell style={ { textAlign: 'right', paddingRight: '1rem' } }>Actions</Table.Cell>
				</Table.Row>
			</Table.Head>

			<Table.Body>
				<Table.RowIterator render={ (person: Schema.Person) => (
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
							{ person.manager && <Link href={ Routes.person(person.manager) }>
								{ person.manager.name }
							</Link> }
						</Table.Cell>

						<Table.Cell>
							{ person.department && <Link href={ Routes.department(person.department) }>
								{ person.department?.name }
							</Link> }
						</Table.Cell>

						<Table.Cell>
							{ person.items && <Link href={ Routes.items() }>{ person.items.length }</Link> }
						</Table.Cell>

						<Table.Cell>
							{ person.accessories && <Link href={ Routes.accessories() }>{ person.accessories.length }</Link> }
						</Table.Cell>

						<Table.Cell className="table-column-fit">
							<EditButton href={ Routes.editPerson(person) } />
						</Table.Cell>
					</Table.Row>
				) } />
			</Table.Body>
		</Table>
	)
}

export default PeopleTable
