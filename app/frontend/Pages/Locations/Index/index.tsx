import React from 'react'
import { Head } from '@inertiajs/inertia-react'
import { Routes } from '@/lib'
import { Link, Table } from '@/Components'
import { EditButton } from '@/Components/Button'
import { NewIcon } from '@/Components/Icons'

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

			<Table.Section>
				<Table.TableProvider
					selectable
					hideable
					model="locations"
					rows={ locations }
					pagination={ pagination }
				>

					<Table.Title
						title={ title }
						menuOptions={ [
							{ label: 'New Location', href: Routes.newLocation(), icon: NewIcon },
						] }
					/>


					<Table>
						<Table.Head>
							<Table.Row>
								<Table.Cell nowrap sort="name">Name</Table.Cell>
								<Table.Cell sort="name">Parent</Table.Cell>
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
							<Table.RowIterator render={ location => (
								<Table.Row key={ location.id }>
									<Table.Cell nowrap>
										<Link href={ Routes.location(location.slug) }>{ location.name }</Link>
									</Table.Cell>

									<Table.Cell>
										{ location.parent && <Link href={ Routes.location(location.parent.slug) }>{ location!.parent!.name }</Link> }
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

									<Table.Cell className="table-column-fit">
										<EditButton href={ Routes.editLocation(location.slug) } />
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
