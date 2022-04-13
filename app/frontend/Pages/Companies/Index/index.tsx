import React from 'react'
import { Head } from '@inertiajs/inertia-react'
import { Link } from '@/Components'
import { Routes } from '@/lib'
import * as Table from '@/Components/Table'
import { Popover, Divider, Option } from '@/Components/Popover'
import { MdEdit } from 'react-icons/md'

interface CompanyWithCounts extends Schema.Company {
	counts: {
		locations: number
		items: number
		accessories: number
		consumables: number
		components: number
		departments: number
		licenses: number
		contracts: number
		people: number
		vendors: number
		manufacturers: number
	}
}

interface ICompaniesIndexProps {
	companies: CompanyWithCounts[]
	pagination: Schema.Pagination
}

const Index = ({ companies, pagination }: ICompaniesIndexProps) => {
	const title = 'Companies'

	return (
		<>
			<Head title={ title }></Head>

			<section className="h-full flex flex-col">
				<Table.TableProvider selectable rows={ companies } pagination={ pagination }>
					<div className="flex justify-between items-center">
						<h1 className="inline-block align-text-top md:align-middle">{ title }</h1>
						<div>
							<Table.SearchInput model="items" />

							<Popover>
								<Option>
									<Link href={ Routes.newItem() } key="new_asset">Create New Asset</Link>
								</Option>
							</Popover>

						</div>
					</div>
					<div className="h-full scroll-content">
						<Table.Table fixed>
							<Table.Head>
								<Table.Row>
									<Table.Cell sort="name">Name</Table.Cell>
									<Table.Cell sort="locations">Locations</Table.Cell>
									<Table.Cell sort="departments">Departments</Table.Cell>
									<Table.Cell sort="items">Assets</Table.Cell>
									<Table.Cell sort="people">People</Table.Cell>
									<Table.Cell className="text-right">Actions</Table.Cell>
								</Table.Row>
							</Table.Head>

							<Table.Body>
								<Table.RowIterator render={ company => (
									<Table.Row key={ company.id }>
										<Table.Cell>
											<Link href={ Routes.company(company.slug) }>{ company.name }</Link>
										</Table.Cell>
										<Table.Cell>{ company!.counts.locations }</Table.Cell>
										<Table.Cell>{ company!.counts.departments }</Table.Cell>
										<Table.Cell>{ company!.counts.items }</Table.Cell>
										<Table.Cell>{ company!.counts.people }</Table.Cell>
										<Table.Cell className="table-column-fit text-right">
											<Link as="button" href={ Routes.editCompany(company.slug) }><MdEdit /></Link>
										</Table.Cell>
									</Table.Row>
								) } />
							</Table.Body>
						</Table.Table>
					</div>
					<Table.Pagination />
				</Table.TableProvider>
			</section>
		</>
	)
}

export default Index
