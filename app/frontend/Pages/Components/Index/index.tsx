import React from 'react'
import { Head } from '@inertiajs/inertia-react'
import { Link } from '@/Components'
import { Routes, formatter } from '@/lib'
import * as Table from '@/Components/Table'
import { MdEdit } from 'react-icons/md'

const Index = ({ components }: { components: Schema.Accessory[] }) => {
	console.log({ components })
	return (
		<>
			<Head title="Components"></Head>

			<section className="h-full flex flex-col">
				<div className="flex justify-between">
					<h1 className="inline-block align-text-top md:align-middle">Components</h1>
					<div>
						<Table.SearchInput model="components" />
						<Link as="button" href={ Routes.newComponent() }>+ New Component</Link>
					</div>
				</div>

				<Table.Table scroll selectable rows={ components } fixed={ false }>
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
						<Table.RowIterator render={ accessory => (
							<Table.Row key={ accessory.id }>
								<Table.Cell nowrap>
									<Link href={ Routes.accessory(accessory) }>{ accessory.name }</Link>
								</Table.Cell>
								<Table.Cell>
									<Link href={ Routes.accessory(accessory) }>{ accessory.model?.name }</Link>
								</Table.Cell>
								<Table.Cell>
									<Link href={ Routes.accessory(accessory) }>{ accessory.asset_tag }</Link>
								</Table.Cell>
								<Table.Cell>
									<Link href={ Routes.accessory(accessory) }>{ accessory.serial }</Link>
								</Table.Cell>
								<Table.Cell>
									<Link href={ Routes.accessory(accessory) }>{ accessory.category?.name }</Link>
								</Table.Cell>
								<Table.Cell>
									<Link href={ Routes.accessory(accessory) }>{ accessory.manufacturer?.name }</Link>
								</Table.Cell>
								<Table.Cell>
									<Link href={ Routes.accessory(accessory) }>{ accessory.vendor?.name }</Link>
								</Table.Cell>
								<Table.Cell>
									{ accessory.cost ? formatter.currency(accessory.cost, accessory.cost_currency) : '-' }
								</Table.Cell>
								<Table.Cell>{ accessory.qty }</Table.Cell>
								<Table.Cell>{ accessory.min_qty }</Table.Cell>
								<Table.Cell className="table-column-fit text-right">
									<Link as="button" href={ Routes.editAccessory(accessory) }><MdEdit /></Link>
								</Table.Cell>
							</Table.Row>
						) } />
					</Table.Body>
				</Table.Table>
			</section>
		</>
	)
}

export default Index
