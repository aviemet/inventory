import React from 'react'
import { Head } from '@inertiajs/inertia-react'
import { Link } from '@/Components'
import { Routes } from '@/lib'
import * as Table from '@/Components/Table'
import { Popover, Divider, Option } from '@/Components/Popover'
import { EditButton } from '@/Components/Button'
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

			<section className="flex flex-col h-full">
				<Table.TableProvider selectable rows={ companies } pagination={ pagination }>
					<div className="flex items-center justify-between">
						<h1 className="md:inline-block md:flex-1 md:align-middle align-text-top">{ title }</h1>
						<div className="md:flex-1 flex">
							<Table.SearchInput model="items" />

							<div className="inline-block w-10 p-1">
								<Popover>
									<Option href={ Routes.newItem() }>
									Create New Company
									</Option>
								</Popover>
							</div>

						</div>
					</div>
					<div className="scroll-content h-full">
						<Table.Table fixed={ false }>
							<Table.Head>
								<Table.Row>
									<Table.Cell nowrap sort="name">Name</Table.Cell>
									<Table.Cell sort="locations">Locations</Table.Cell>
									<Table.Cell sort="departments">Departments</Table.Cell>
									<Table.Cell sort="items">Assets</Table.Cell>
									<Table.Cell sort="accessories">Accessories</Table.Cell>
									<Table.Cell sort="consumables">Consumables</Table.Cell>
									<Table.Cell sort="components">Components</Table.Cell>
									<Table.Cell sort="licenses">Licenses</Table.Cell>
									<Table.Cell sort="contracts">Contracts</Table.Cell>
									<Table.Cell sort="vendors">Vendors</Table.Cell>
									<Table.Cell sort="people">People</Table.Cell>
									<Table.Cell className="text-right">Actions</Table.Cell>
								</Table.Row>
							</Table.Head>

							<Table.Body>
								<Table.RowIterator render={ company => (
									<Table.Row key={ company.id }>
										<Table.Cell nowrap>
											<Link href={ Routes.company(company.slug) }>{ company.name }</Link>
										</Table.Cell>

										<Table.Cell>
											<Link href={ Routes.locations() }>{ company!.counts.locations }</Link>
										</Table.Cell>

										<Table.Cell>
											<Link href={ Routes.departments() }>{ company!.counts.departments }</Link>
										</Table.Cell>

										<Table.Cell>
											<Link href={ Routes.items() }>{ company!.counts.items }</Link>
										</Table.Cell>

										<Table.Cell>
											<Link href={ Routes.accessories() }>{ company!.counts.accessories }</Link>
										</Table.Cell>

										<Table.Cell>
											<Link href={ Routes.consumables() }>{ company!.counts.consumables }</Link>
										</Table.Cell>

										<Table.Cell>
											<Link href={ Routes.components() }>{ company!.counts.components }</Link>
										</Table.Cell>

										<Table.Cell>
											<Link href={ Routes.licenses() }>{ company!.counts.licenses }</Link>
										</Table.Cell>

										<Table.Cell>
											<Link href={ Routes.contracts() }>{ company!.counts.contracts }</Link>
										</Table.Cell>

										<Table.Cell>
											<Link href={ Routes.vendors() }>{ company!.counts.vendors }</Link>
										</Table.Cell>

										<Table.Cell>
											<Link href={ Routes.people() }>{ company!.counts.people }</Link>
										</Table.Cell>

										<Table.Cell className="table-column-fit text-right">
											<EditButton href={ Routes.editCompany(company.slug) } />
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
