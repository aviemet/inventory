import React from 'react'
import { Head } from '@inertiajs/inertia-react'
import { Link } from '@/Components'
import { Routes, formatter } from '@/lib'
import * as Table from '@/Components/Table'
import { Popover, Divider, Option } from '@/Components/Popover'
import { MdEdit } from 'react-icons/md'

interface ILicensesIndexProps {
	licenses: Schema.License[]
	pagination: Schema.Pagination
}

const Index = ({ licenses, pagination }: ILicensesIndexProps ) => {
	const title = 'Licenses'

	return (
		<>
			<Head title={ title }></Head>

			<section className="flex flex-col h-full">
				<Table.TableProvider selectable rows={ licenses } pagination={ pagination }>
					<div className="flex items-center justify-between">
						<h1 className="md:inline-block md:flex-1 md:align-middle align-text-top">{ title }</h1>
						<div className="md:flex-1 flex">
							<Table.SearchInput model="license" />
							<div className="inline-block">
								<Popover>
									<Option>
										<Link href={ Routes.newLicense() } key="new_license">Add New License</Link>
									</Option>
								</Popover>
							</div>
						</div>
					</div>

					<div className="scroll-content h-full">
						<Table.Table fixed={ false }>
							<Table.Head>
								<Table.Row>
									<Table.Cell sort="name">Name</Table.Cell>
									<Table.Cell sort="seats">Seats</Table.Cell>
									<Table.Cell sort="licenser_name">Licensed To Name</Table.Cell>
									<Table.Cell sort="licenser_email">Licensed To Email</Table.Cell>
									<Table.Cell sort="reassignable">Reassignable</Table.Cell>
									<Table.Cell sort="cost_cents">Cost</Table.Cell>
									<Table.Cell sort="purchased_at">Purchase Date</Table.Cell>
									<Table.Cell sort="expires_at">Expire Date</Table.Cell>
									<Table.Cell sort="terminates_at">Termination Date</Table.Cell>
									<Table.Cell sort="maintained">Maintained</Table.Cell>
									<Table.Cell sort="category.name">Category</Table.Cell>
									<Table.Cell sort="vendors.name">Vendor</Table.Cell>
									<Table.Cell sort="manufacturers.name">Manufacturer</Table.Cell>
									<Table.Cell className="text-right">Actons</Table.Cell>
								</Table.Row>
							</Table.Head>

							<Table.Body>
								<Table.RowIterator render={ license => (
									<Table.Row key={ license.id }>
										<Table.Cell nowrap>
											<Link href={ Routes.license(license) }>{ license.name }</Link>
										</Table.Cell>
										<Table.Cell>
											<Link href={ Routes.license(license) }>{ license.seats }</Link>
										</Table.Cell>
										<Table.Cell>
											<Link href={ Routes.license(license) }>{ license.licenser_name }</Link>
										</Table.Cell>
										<Table.Cell>
											<Link href={ Routes.license(license) }>{ license.licenser_email }</Link>
										</Table.Cell>
										<Table.Cell>
											<Link href={ Routes.license(license) }>{ license.reassignable }</Link>
										</Table.Cell>
										<Table.Cell>
											{ license.cost ? formatter.currency(license.cost, license.cost_currency) : '-' }
										</Table.Cell>
										<Table.Cell>{ formatter.date.short(license.purchased_at) }</Table.Cell>
										<Table.Cell>{ formatter.date.short(license.expires_at) }</Table.Cell>
										<Table.Cell>{ formatter.date.short(license.terminates_at) }</Table.Cell>
										<Table.Cell>{ license.maintained }</Table.Cell>
										<Table.Cell>
											<Link href={ Routes.license(license) }>{ license.category?.name }</Link>
										</Table.Cell>
										<Table.Cell>
											<Link href={ Routes.license(license) }>{ license.vendor?.name }</Link>
										</Table.Cell>
										<Table.Cell>
											<Link href={ Routes.license(license) }>{ license.manufacturer?.name }</Link>
										</Table.Cell>
										<Table.Cell className="table-column-fit text-right">
											<Link as="button" href={ Routes.editLicense(license) }><MdEdit /></Link>
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
