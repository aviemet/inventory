import React from 'react'
import { Routes } from '@/lib'
import { Badge, Link, Table } from '@/Components'
import { EditButton } from '@/Components/Button'
import { TableProps } from '@/Components/Table/Table'
import { CheckIcon, CrossIcon } from '@/Components/Icons'

const PeopleTable = (props: TableProps) => {
	return (
		<Table { ...props }>
			<Table.Head>
				<Table.Row>
					<Table.HeadCell sort="first_name" hideable={ false }>First Name</Table.HeadCell>
					<Table.HeadCell sort="last_name">Last Name</Table.HeadCell>
					<Table.HeadCell sort="employee_number">Emp. #</Table.HeadCell>
					<Table.HeadCell sort="job_title">Title</Table.HeadCell>
					<Table.HeadCell sort="manager.name">Manager</Table.HeadCell>
					<Table.HeadCell sort="department.name">Department</Table.HeadCell>
					<Table.HeadCell sort="items.count">Items</Table.HeadCell>
					<Table.HeadCell sort="accessories.count">Accessories</Table.HeadCell>
					<Table.HeadCell>Groups</Table.HeadCell>
					<Table.HeadCell>Login Enabled</Table.HeadCell>
					<Table.HeadCell style={ { textAlign: 'right', paddingRight: '1rem' } }>Actions</Table.HeadCell>
				</Table.Row>
			</Table.Head>

			<Table.Body>
				<Table.RowIterator render={ (person: Schema.PeopleIndex) => (
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
							{ person?.manager?.id && <Link href={ Routes.person(person.manager.id) }>
								{ person.manager.name }
							</Link> }
						</Table.Cell>

						<Table.Cell>
							{ person.department && <Link href={ Routes.department(person.department.slug) }>
								{ person.department?.name }
							</Link> }
						</Table.Cell>

						<Table.Cell>
							{ person.items && <Link href={ Routes.items() }>{ person.items.length }</Link> }
						</Table.Cell>

						<Table.Cell>
							{ person.accessories && <Link href={ Routes.accessories() }>{ person.accessories.length }</Link> }
						</Table.Cell>

						<Table.Cell>
							{ person.groups?.map(group => <Badge key={ group.id }>{ group.name }</Badge>) }
						</Table.Cell>

						<Table.Cell>
							{ person.user && person.user.active ? <CheckIcon /> : <CrossIcon /> }
						</Table.Cell>

						<Table.Cell fitContent>
							<EditButton href={ Routes.editPerson(person) } label={ person.name } />
						</Table.Cell>
					</Table.Row>
				) } />
			</Table.Body>
		</Table>
	)
}

export default PeopleTable
