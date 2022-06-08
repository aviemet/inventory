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

interface IComponentsIndexProps {
	components: Schema.Item[]
	pagination: Schema.Pagination
}

const ComponentsIndex = ({ components, pagination }: IComponentsIndexProps) => {
	const title = 'Components'

	return (
		<>
			<Head title={ title }></Head>

			<TableSection>
				<Table.TableProvider
					selectable
					hideable
					model="components"
					rows={ components }
					pagination={ pagination }
				>

					<TableTitleSection
						title={ title }
						popover={
							<Popover>
								<Option href={ Routes.newComponent() }>
									New Component
								</Option>
							</Popover>
						}
					/>

					<div className="scroll-content h-full">
						<Table.Table fixed={ false }>
							<Table.Head>
								<Table.Row>
									<Table.Cell sort="name">Name</Table.Cell>
									<Table.Cell sort="models.name">Model</Table.Cell>
									<Table.Cell sort="serial">Serial</Table.Cell>
									<Table.Cell sort="asset_tag">Asset Tag</Table.Cell>
									<Table.Cell sort="categories.name">Category</Table.Cell>
									<Table.Cell sort="manufacturers.name">Manufacturer</Table.Cell>
									<Table.Cell sort="vendors.name">Vendor</Table.Cell>
									<Table.Cell sort="cost_cents">Cost</Table.Cell>
									<Table.Cell sort="departments.name">Qty</Table.Cell>
									<Table.Cell sort="departments.name">Min Qty</Table.Cell>
									<Table.Cell className="text-right">Actions</Table.Cell>
								</Table.Row>
							</Table.Head>

							<Table.Body>
								<Table.RowIterator render={ component => (
									<Table.Row key={ component.id }>
										<Table.Cell nowrap>
											<Link href={ Routes.component(component) }>{ component.name }</Link>
										</Table.Cell>
										<Table.Cell>
											<Link href={ Routes.component(component) }>{ component.model?.name }</Link>
										</Table.Cell>
										<Table.Cell>
											<Link href={ Routes.component(component) }>{ component.asset_tag }</Link>
										</Table.Cell>
										<Table.Cell>
											<Link href={ Routes.component(component) }>{ component.serial }</Link>
										</Table.Cell>
										<Table.Cell>
											<Link href={ Routes.component(component) }>{ component.category?.name }</Link>
										</Table.Cell>
										<Table.Cell>
											<Link href={ Routes.component(component) }>{ component.manufacturer?.name }</Link>
										</Table.Cell>
										<Table.Cell>
											<Link href={ Routes.component(component) }>{ component.vendor?.name }</Link>
										</Table.Cell>
										<Table.Cell>
											{ component.cost ? formatter.currency(component.cost, component.cost_currency) : '-' }
										</Table.Cell>
										<Table.Cell>{ component.qty }</Table.Cell>
										<Table.Cell>{ component.min_qty }</Table.Cell>
										<Table.Cell className="table-column-fit text-right">
											<EditButton as="button" href={ Routes.editComponent(component) } />
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

export default ComponentsIndex
