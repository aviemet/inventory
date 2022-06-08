import React from 'react'
import { Head } from '@inertiajs/inertia-react'
import { Link } from '@/Components'
import { Routes, formatter } from '@/lib'
import * as Table from '@/Components/Table'
import { Popover, Option } from '@/Components/Popover'
import { EditButton } from '@/Components/Button'
import {
	TableSection,
	TableTitleSection,
} from '@/Components/Layout/IndexPageComponents'

interface IContractsIndexProps {
	contracts: Schema.Contract[]
	pagination: Schema.Pagination
}

const ContractsIndex = ({ contracts, pagination }: IContractsIndexProps) => {
	const title = 'Contracts'

	return (
		<>
			<Head title={ title }></Head>

			<TableSection>
				<Table.TableProvider
					selectable
					hideable
					model="contracts"
					rows={ contracts }
					pagination={ pagination }
				>

					<TableTitleSection
						title={ title }
						popover={
							<Popover>
								<Option href={ Routes.newContract() }>
									Add New Contract
								</Option>
							</Popover>
						}
					/>

					<div className="scroll-content h-full">
						<Table.Table fixed={ false }>
							<Table.Head>
								<Table.Row>
									<Table.Cell sort="name">Name</Table.Cell>
									<Table.Cell sort="number">#</Table.Cell>
									<Table.Cell sort="begins_at">Start Date</Table.Cell>
									<Table.Cell sort="ends_at">End Date</Table.Cell>
									<Table.Cell sort="vendor.name">Vendor</Table.Cell>
									<Table.Cell sort="category.name">Category</Table.Cell>
									<Table.Cell className="text-right">Actions</Table.Cell>
								</Table.Row>
							</Table.Head>

							<Table.Body>
								<Table.RowIterator render={ contract => (
									<Table.Row key={ contract.id }>
										<Table.Cell nowrap>
											<Link href={ Routes.contract(contract) }>{ contract.name }</Link>
										</Table.Cell>

										<Table.Cell nowrap>
											<Link href={ Routes.contract(contract) }>{ contract.number }</Link>
										</Table.Cell>

										<Table.Cell nowrap>
											{ contract.begins_at && formatter.date.short(contract.begins_at) }
										</Table.Cell>

										<Table.Cell nowrap>
											{ contract.ends_at && formatter.date.short(contract.ends_at) }
										</Table.Cell>

										<Table.Cell>
											{ contract.vendor && <Link href={ Routes.vendor(contract.vendor.slug) }>
												{ contract.vendor?.name }
											</Link> }
										</Table.Cell>

										<Table.Cell>
											{ contract.category && <Link href={ Routes.category(contract.category) }>
												{ contract.category?.name }
											</Link> }
										</Table.Cell>

										<Table.Cell className="table-column-fit text-right">
											<EditButton as="button" href={ Routes.editContract(contract) } />
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

export default ContractsIndex
