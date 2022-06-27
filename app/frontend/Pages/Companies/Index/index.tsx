import React from 'react'
import { Head } from '@inertiajs/inertia-react'
import { Routes } from '@/lib'
import { Link, Table } from '@/Components'
import { EditButton } from '@/Components/Button'
import { NewIcon } from '@/Components/Icons'

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

			<Table.Section>
				<Table.TableProvider
					selectable
					hideable
					model="companies"
					rows={ companies }
					pagination={ pagination }
				>

					<Table.Title
						title={ title }
						menuOptions={ [
							{ label: 'New Company', href: Routes.newCompany(), icon: NewIcon },
						] }
					/>

					<Table>
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
								<Table.Cell style={ { textAlign: 'right', paddingRight: '1rem' } }>Actions</Table.Cell>
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

									<Table.Cell className="table-column-fit">
										<EditButton href={ Routes.editCompany(company.slug) } />
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
