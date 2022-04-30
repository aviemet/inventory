import React from 'react'
import { Head } from '@inertiajs/inertia-react'
import { Link } from '@/Components'
import { Routes, formatter } from '@/lib'
import * as Table from '@/Components/Table'
import { Popover, Divider, Option } from '@/Components/Popover'
import { MdEdit } from 'react-icons/md'

interface IComponentsIndexProps {
	components: Schema.Item[]
	pagination: Schema.Pagination
}

const ComponentsIndex = ({ components, pagination }: IComponentsIndexProps) => {
	const title = 'Components'

	return (
		<>
			<Head title={ title }></Head>

			<section className="flex flex-col h-full">
				<Table.TableProvider selectable rows={ components } pagination={ pagination }>
					<div className="flex items-center justify-between">
						<h1 className="md:align-middle inline-block align-text-top">{ title }</h1>
						<div>
							<Table.SearchInput model="components" />
							<Popover>
								<Option>
									<Link href={ Routes.newComponent() }>New Component</Link>
								</Option>
							</Popover>
						</div>
					</div>

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
											<Link as="button" href={ Routes.editComponent(component) }><MdEdit /></Link>
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

export default ComponentsIndex
