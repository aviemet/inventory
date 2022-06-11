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

interface LocationWithCounts extends Schema.Location {
	counts: {
		items: number
		accessories: number
		consumables: number
		components: number
		licenses: number
		people: number
	}
}

interface ICompaniesIndexProps {
	locations: LocationWithCounts[]
	pagination: Schema.Pagination
}

const Index = ({ locations, pagination }: ICompaniesIndexProps) => {
	const title = 'Locations'

	return (
		<>
			<Head title={ title }></Head>

			<TableSection>
				<Table.TableProvider
					selectable
					hideable
					model="locations"
					rows={ locations }
					pagination={ pagination }
				>

					<TableTitleSection
						title={ title }
						popover={
							<Popover>
								<Option href={ Routes.newLocation() }>
									Create New Location
								</Option>
							</Popover>
						}
					/>

					<div className="scroll-content h-full">
						<Table.Table fixed={ false }>
							<Table.Head>
								<Table.Row>
									<Table.Cell nowrap sort="name">Name</Table.Cell>
									<Table.Cell sort="items">Assets</Table.Cell>
									<Table.Cell sort="accessories">Accessories</Table.Cell>
									<Table.Cell sort="consumables">Consumables</Table.Cell>
									<Table.Cell sort="components">Components</Table.Cell>
									<Table.Cell sort="licenses">Licenses</Table.Cell>
									<Table.Cell sort="people">People</Table.Cell>
									<Table.Cell className="text-right">Actions</Table.Cell>
								</Table.Row>
							</Table.Head>

							<Table.Body>
								<Table.RowIterator render={ location => (
									<Table.Row key={ location.id }>
										<Table.Cell nowrap>
											<Link href={ Routes.location(location.slug) }>{ location.name }</Link>
										</Table.Cell>

										<Table.Cell>
											<Link href={ Routes.items() }>{ location!.counts.items }</Link>
										</Table.Cell>

										<Table.Cell>
											<Link href={ Routes.accessories() }>{ location!.counts.accessories }</Link>
										</Table.Cell>

										<Table.Cell>
											<Link href={ Routes.consumables() }>{ location!.counts.consumables }</Link>
										</Table.Cell>

										<Table.Cell>
											<Link href={ Routes.components() }>{ location!.counts.components }</Link>
										</Table.Cell>

										<Table.Cell>
											<Link href={ Routes.licenses() }>{ location!.counts.licenses }</Link>
										</Table.Cell>

										<Table.Cell>
											<Link href={ Routes.people() }>{ location!.counts.people }</Link>
										</Table.Cell>

										<Table.Cell className="table-column-fit text-right">
											<EditButton href={ Routes.editLocation(location.slug) } />
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

export default Index
