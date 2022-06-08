import React from 'react'
import { Head } from '@inertiajs/inertia-react'
import { Link } from '@/Components'
import { Routes } from '@/lib'
import * as Table from '@/Components/Table'
import { Popover, Option } from '@/Components/Popover'
import { EditButton } from '@/Components/Button'
import {
	TableSection,
	TableTitleSection,
} from '@/Components/Layout/IndexPageComponents'

interface IPeopleIndexProps {
	people: Schema.Person[]
	pagination: Schema.Pagination
}

const PeopleIndex = ({ people, pagination }: IPeopleIndexProps) => {
	const title = 'People'

	return (
		<>
			<Head title={ title }></Head>

			<TableSection>
				<Table.TableProvider
					selectable
					hideable
					model="people"
					rows={ people }
					pagination={ pagination }
				>

					<TableTitleSection
						title={ title }
						popover={
							<Popover>
								<Option href={ Routes.newPerson() }>
									Add New Person
								</Option>
							</Popover>
						}
					/>

					<div className="scroll-content h-full">
						<Table.Table fixed={ false }>
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
									<Table.Cell className="text-right">Actions</Table.Cell>
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

										<Table.Cell className="table-column-fit text-right">
											<EditButton href={ Routes.editPerson(person) } />
										</Table.Cell>
									</Table.Row>
								) } />
							</Table.Body>
						</Table.Table>
					</div>
					<Table.Pagination />
				</Table.TableProvider>
			</TableSection>
		</>
	)
}

export default PeopleIndex
