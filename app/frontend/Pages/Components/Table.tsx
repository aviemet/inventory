import React from 'react'
import { Routes } from '@/lib'
import { Link, Money, Table, Tooltip } from '@/Components'
import { EditButton, CheckoutButton } from '@/Components/Button'
import { isNil } from 'lodash'
import { type ITableProps } from '@/Components/Table/Table'

const ComponentsTable = (props: ITableProps) => {
	const qty = (component: Schema.Component) => {
		if(isNil(component.qty)) {
			return '-'
		}
		return component.qty
	}

	return (
		<Table { ...props }>
			<Table.Head>
				<Table.Row>
					<Table.Cell sort="name" hideable={ false }>Name</Table.Cell>
					<Table.Cell sort="models.name">Model</Table.Cell>
					<Table.Cell sort="serial">Serial</Table.Cell>
					<Table.Cell sort="categories.name">Category</Table.Cell>
					<Table.Cell sort="manufacturers.name">Manufacturer</Table.Cell>
					<Table.Cell sort="vendors.name">Vendor</Table.Cell>
					<Table.Cell sort="cost_cents">Cost</Table.Cell>
					<Table.Cell sort="departments.name">Qty</Table.Cell>
					<Table.Cell sort="departments.name">Min Qty</Table.Cell>
					<Table.Cell style={ { textAlign: 'right', paddingRight: '1rem' } }>Actions</Table.Cell>
				</Table.Row>
			</Table.Head>

			<Table.Body>
				<Table.RowIterator render={ (component: Schema.Component) => (
					<Table.Row key={ component.id }>

						<Table.Cell nowrap>
							<Link href={ Routes.component(component) }>{ component.name }</Link>
						</Table.Cell>

						<Table.Cell>
							<Link href={ Routes.component(component) }>{ component.model?.name }</Link>
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
							<Money currency={ component.cost_currency }>{ component.cost }</Money>
						</Table.Cell>

						<Table.Cell nowrap>{ qty(component) }</Table.Cell>

						<Table.Cell>{ component.min_qty }</Table.Cell>

						<Table.Cell fitContent>
							{ !component.available_to_checkout ?
								<Tooltip label="There are none in stock" position="left" withArrow><CheckoutButton href={ Routes.checkoutComponent(component) } disabled /></Tooltip>
								:
								<CheckoutButton href={ Routes.checkoutComponent(component) } />
							}
							<EditButton href={ Routes.editComponent(component) } />
						</Table.Cell>

					</Table.Row>
				) } />
			</Table.Body>
		</Table>
	)
}

export default ComponentsTable
