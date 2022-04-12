import React from 'react'
import { Head } from '@inertiajs/inertia-react'
import { Link } from '@/Components'
import { Routes, formatter } from '@/lib'
import * as Table from '@/Components/Table'
import { MdEdit } from 'react-icons/md'

const Index = ({ consumables }: { consumables: Schema.Consumable[] }) => {
	return (
		<>
			<Head title="Consumables"></Head>

			<section className="h-full flex flex-col">
				<div className="flex justify-between">
					<h1 className="inline-block align-text-top md:align-middle">Consumables</h1>
					<div>
						<Table.SearchInput model="consumables" />
						<Link as="button" href={ Routes.newComponent() }>+ New Consumable</Link>
					</div>
				</div>

				<Table.Table scroll selectable rows={ consumables } fixed={ false }>
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
						<Table.RowIterator render={ consumable => (
							<Table.Row key={ consumable.id }>
								<Table.Cell nowrap>
									<Link href={ Routes.consumable(consumable) }>{ consumable.name }</Link>
								</Table.Cell>
								<Table.Cell>
									<Link href={ Routes.consumable(consumable) }>{ consumable.model?.name }</Link>
								</Table.Cell>
								<Table.Cell>
									<Link href={ Routes.consumable(consumable) }>{ consumable.asset_tag }</Link>
								</Table.Cell>
								<Table.Cell>
									<Link href={ Routes.consumable(consumable) }>{ consumable.serial }</Link>
								</Table.Cell>
								<Table.Cell>
									<Link href={ Routes.consumable(consumable) }>{ consumable.category?.name }</Link>
								</Table.Cell>
								<Table.Cell>
									<Link href={ Routes.consumable(consumable) }>{ consumable.manufacturer?.name }</Link>
								</Table.Cell>
								<Table.Cell>
									<Link href={ Routes.consumable(consumable) }>{ consumable.vendor?.name }</Link>
								</Table.Cell>
								<Table.Cell>
									{ consumable.cost ? formatter.currency(consumable.cost, consumable.cost_currency) : '-' }
								</Table.Cell>
								<Table.Cell>{ consumable.qty }</Table.Cell>
								<Table.Cell>{ consumable.min_qty }</Table.Cell>
								<Table.Cell className="table-column-fit text-right">
									<Link as="button" href={ Routes.editConsumable(consumable) }><MdEdit /></Link>
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
