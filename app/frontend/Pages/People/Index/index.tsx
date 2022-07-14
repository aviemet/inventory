import React from 'react'
import { Head } from '@inertiajs/inertia-react'
import { Routes } from '@/lib'
import { Link, Table } from '@/Components'
import { EditButton } from '@/Components/Button'
import { NewIcon, SettingsIcon } from '@/Components/Icons'

interface IPeopleIndexProps {
	people: Schema.Person[]
	pagination: Schema.Pagination
}

const PeopleIndex = ({ people, pagination }: IPeopleIndexProps) => {
	const title = 'People'

	return (
		<>
			<Head title={ title }></Head>

			<Table.Section>
				<Table.TableProvider
					selectable
					hideable
					model="people"
					rows={ people }
					pagination={ pagination }
				>

					<Table.Title
						title={ title }
						menuOptions={ [
							{ label: 'New Person', href: Routes.newPerson(), icon: NewIcon },
							{ label: 'LDAP Settings', href: Routes.settings(), icon: SettingsIcon }
						] }
					/>

					<Table>
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
							<Table.RowIterator render={ person => (
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
										<Link href={ Routes.items() }>{ person.items.length }</Link>
									</Table.Cell>

									<Table.Cell>
										<Link href={ Routes.accessories() }>{ person.accessories.length }</Link>
									</Table.Cell>

									<Table.Cell className="table-column-fit">
										<EditButton href={ Routes.editPerson(person) } />
									</Table.Cell>
								</Table.Row>
							) } />
						</Table.Body>
					</Table>

					<Table.Pagination />
				</Table.TableProvider>
			</Table.Section>
		</>
	)
}

export default PeopleIndex
