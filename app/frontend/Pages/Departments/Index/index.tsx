import React from 'react'
import { Head } from '@inertiajs/inertia-react'
import { Routes } from '@/lib'
import { Link, Table } from '@/Components'
import { EditButton } from '@/Components/Button'
import { NewIcon } from '@/Components/Icons'

interface DepartmentWithCounts extends Schema.Department {
	counts: {
		items: number
		accessories: number
		consumables: number
		components: number
		departments: number
		licenses: number
		people: number
	}
}

interface IDepartmentsIndexProps {
	departments: DepartmentWithCounts[]
	pagination: Schema.Pagination
}

const Index = ({ departments, pagination }: IDepartmentsIndexProps) => {
	const title = 'Departments'

	return (
		<>
			<Head title={ title }></Head>

			<Table.Section>
				<Table.TableProvider
					selectable
					hideable
					model="departments"
					rows={ departments }
					pagination={ pagination }
				>

					<Table.Title
						title={ title }
						menuOptions={ [
							{ label: 'New Department', href: Routes.newDepartment(), icon: NewIcon },
						] }
					/>

					<Table>
						<Table.Head>
							<Table.Row>
								<Table.Cell nowrap sort="name">Name</Table.Cell>
								<Table.Cell sort="items">Assets</Table.Cell>
								<Table.Cell sort="accessories">Accessories</Table.Cell>
								<Table.Cell sort="consumables">Consumables</Table.Cell>
								<Table.Cell sort="components">Components</Table.Cell>
								<Table.Cell sort="licenses">Licenses</Table.Cell>
								<Table.Cell sort="people">People</Table.Cell>
								<Table.Cell style={ { textAlign: 'right', paddingRight: '1rem' } }>Actions</Table.Cell>
							</Table.Row>
						</Table.Head>

						<Table.Body>
							<Table.RowIterator render={ department => (
								<Table.Row key={ department.id }>
									<Table.Cell nowrap>
										<Link href={ Routes.department(department.slug) }>{ department.name }</Link>
									</Table.Cell>

									<Table.Cell>
										<Link href={ Routes.items() }>{ department!.counts.items }</Link>
									</Table.Cell>

									<Table.Cell>
										<Link href={ Routes.accessories() }>{ department!.counts.accessories }</Link>
									</Table.Cell>

									<Table.Cell>
										<Link href={ Routes.consumables() }>{ department!.counts.consumables }</Link>
									</Table.Cell>

									<Table.Cell>
										<Link href={ Routes.components() }>{ department!.counts.components }</Link>
									</Table.Cell>

									<Table.Cell>
										<Link href={ Routes.licenses() }>{ department!.counts.licenses }</Link>
									</Table.Cell>

									<Table.Cell>
										<Link href={ Routes.people() }>{ department!.counts.people }</Link>
									</Table.Cell>

									<Table.Cell className="table-column-fit">
										<EditButton href={ Routes.editDepartment(department.slug) } />
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

export default Index
