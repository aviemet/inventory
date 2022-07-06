import React from 'react'
import { Head } from '@inertiajs/inertia-react'
import { Routes, formatter } from '@/lib'
import { Link, Table } from '@/Components'
import { EditButton, CheckoutButton, CheckinButton } from '@/Components/Button'
import { NewIcon } from '@/Components/Icons'
import { isNil } from 'lodash'

interface IComponentsIndexProps {
	components: Schema.Item[]
	pagination: Schema.Pagination
}

const ComponentsIndex = ({ components, pagination }: IComponentsIndexProps) => {
	const title = 'Components'

	const qty = (accessory: Schema.Accessory) => {
		if(isNil(accessory.qty)) {
			return '-'
		} else if(isNil(accessory.active_assignments_count)) {
			return accessory.qty
		}
		return `${accessory.qty - accessory.active_assignments_count} / ${accessory.qty}`
	}

	return (
		<>
			<Head title={ title }></Head>

			<Table.Section>
				<Table.TableProvider
					selectable
					hideable
					model="components"
					rows={ components }
					pagination={ pagination }
				>

					<Table.Title
						title={ title }
						menuOptions={ [
							{ label: 'New Component', href: Routes.newComponent(), icon: NewIcon },
						] }
					/>

					<Table>
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
								<Table.Cell style={ { textAlign: 'right', paddingRight: '1rem' } }>Actions</Table.Cell>
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

									<Table.Cell nowrap>{ qty(component) }</Table.Cell>

									<Table.Cell>{ component.min_qty }</Table.Cell>

									<Table.Cell className="table-column-fit">
										{ component.assigned ?
											<CheckinButton href={ Routes.checkinComponent(component) } />
											:
											<CheckoutButton href={ Routes.checkoutComponent(component) } />
										}
										<EditButton as="button" href={ Routes.editComponent(component) } />
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

export default ComponentsIndex
