import React from 'react'
import { Head } from '@inertiajs/inertia-react'
import { Link } from '@/Components'
import { Routes, formatter } from '@/lib'
import * as Table from '@/Components/Table'
import { MdEdit } from 'react-icons/md'

const Index = ({ items }: { items: Schema.Item[] }) => {
	return (
		<>
			<Head title="Companies"></Head>

			<section className="h-full flex flex-col">
				<div className="flex justify-between">
					<h1 className="inline-block align-text-top md:align-middle">Harware Assets</h1>
					<div>
						<Table.SearchInput model="items" />
						<Link as="button" href={ Routes.newItem() }>+ New Asset</Link>
					</div>
				</div>

				<Table.Table scroll selectable rows={ items } fixed={ false }>
					<Table.Head>
						<Table.Row>
							<Table.Cell sort="name">Name</Table.Cell>
							<Table.Cell sort="models.name">Model</Table.Cell>
							<Table.Cell sort="asset_tag">Asset Tag</Table.Cell>
							<Table.Cell sort="serial">Serial</Table.Cell>
							<Table.Cell sort="categories.name">Category</Table.Cell>
							<Table.Cell sort="manufacturers.name">Manufacturer</Table.Cell>
							<Table.Cell sort="vendors.name">Vendor</Table.Cell>
							<Table.Cell sort="cost_cents">Cost</Table.Cell>
							<Table.Cell sort="departments.name">Department</Table.Cell>
							<Table.Cell className="text-right">Actions</Table.Cell>
						</Table.Row>
					</Table.Head>

					<Table.Body>
						<Table.RowIterator render={ item => (
							<Table.Row key={ item.id }>
								<Table.Cell nowrap>
									<Link href={ Routes.item(item) }>{ item.name }</Link>
								</Table.Cell>
								<Table.Cell>
									<Link href={ Routes.item(item) }>{ item.model?.name }</Link>
								</Table.Cell>
								<Table.Cell>
									<Link href={ Routes.item(item) }>{ item.asset_tag }</Link>
								</Table.Cell>
								<Table.Cell>
									<Link href={ Routes.item(item) }>{ item.serial }</Link>
								</Table.Cell>
								<Table.Cell>
									<Link href={ Routes.item(item) }>{ item.category?.name }</Link>
								</Table.Cell>
								<Table.Cell>
									<Link href={ Routes.item(item) }>{ item.manufacturer?.name }</Link>
								</Table.Cell>
								<Table.Cell>
									<Link href={ Routes.item(item) }>{ item.vendor?.name }</Link>
								</Table.Cell>
								<Table.Cell>
									<Link href={ Routes.item(item) }>{ formatter.currency(item.cost, item.cost_currency) }</Link>
								</Table.Cell>
								<Table.Cell>
									<Link href={ Routes.item(item) }>{ item.department?.name }</Link>
								</Table.Cell>
								<Table.Cell className="table-column-fit text-right">
									<Link as="button" href={ Routes.editItem(item) }><MdEdit /></Link>
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
