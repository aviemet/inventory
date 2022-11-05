import React from 'react'
import { Routes, formatter } from '@/lib'
import { Link, Table } from '@/Components'
import { EditButton, CheckoutButton, CheckinButton } from '@/Components/Button'
import { type ITableProps } from '@/Components/Table/Table'

const HardwareTable = (props: ITableProps) => {
	return (
		<Table { ...props }>
			<Table.Head>
				<Table.Row>
					<Table.Cell sort="name" hideable={ false }>Name</Table.Cell>
					<Table.Cell sort="models.name">Model</Table.Cell>
					<Table.Cell sort="asset_tag">Asset Tag</Table.Cell>
					<Table.Cell sort="serial">Serial</Table.Cell>
					<Table.Cell sort="categories.name">Category</Table.Cell>
					<Table.Cell sort="manufacturers.name">Manufacturer</Table.Cell>
					<Table.Cell sort="vendors.name">Vendor</Table.Cell>
					<Table.Cell sort="cost_cents">Cost</Table.Cell>
					<Table.Cell sort="departments.name">Department</Table.Cell>
					<Table.Cell style={ { textAlign: 'right', paddingRight: '1rem' } }>Actions</Table.Cell>
				</Table.Row>
			</Table.Head>

			<Table.Body>
				<Table.RowIterator render={ (hardware: Schema.Hardware) => (
					<Table.Row key={ hardware.id }>

						<Table.Cell nowrap>
							<Link href={ Routes.hardware(hardware) }>{ hardware.name }</Link>
						</Table.Cell>

						<Table.Cell nowrap >
							<Link href={ Routes.hardware(hardware) }>{ hardware.model?.name }</Link>
						</Table.Cell>

						<Table.Cell>
							<Link href={ Routes.hardware(hardware) }>{ hardware.asset_tag }</Link>
						</Table.Cell>

						<Table.Cell>
							<Link href={ Routes.hardware(hardware) }>{ hardware.serial }</Link>
						</Table.Cell>

						<Table.Cell>
							<Link href={ Routes.hardware(hardware) }>{ hardware.category?.name }</Link>
						</Table.Cell>

						<Table.Cell>
							<Link href={ Routes.hardware(hardware) }>{ hardware.manufacturer?.name }</Link>
						</Table.Cell>

						<Table.Cell>
							<Link href={ Routes.hardware(hardware) }>{ hardware.vendor?.name }</Link>
						</Table.Cell>

						<Table.Cell>
							<Link href={ Routes.hardware(hardware) }>{ hardware.cost && formatter.currency(hardware.cost, hardware.cost_currency) }</Link>
						</Table.Cell>

						<Table.Cell >
							<Link href={ Routes.hardware(hardware) }>{ hardware.department?.name }</Link>
						</Table.Cell>

						<Table.Cell fitContent>
							{ hardware.assigned ?
								<CheckinButton href={ Routes.checkinHardware(hardware) } />
								:
								<CheckoutButton href={ Routes.checkoutHardware(hardware) } />
							}
							<EditButton href={ Routes.editHardware(hardware) } />
						</Table.Cell>

					</Table.Row>
				) } />
			</Table.Body>
		</Table>
	)
}

export default HardwareTable
