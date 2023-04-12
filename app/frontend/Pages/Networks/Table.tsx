import React from 'react'
import { Routes } from '@/lib'
import { Link, Table } from '@/Components'
import { EditButton } from '@/Components/Button'
import { type ITableProps } from '@/Components/Table/Table'

const NetworksTable = (props: ITableProps) => {
	return (
		<Table { ...props }>
			<Table.Head>
				<Table.Row>
					<Table.Cell sort="name" hideable={ false }>Name</Table.Cell>
					<Table.Cell sort="address">Network</Table.Cell>
					<Table.Cell sort="gateway">Gateway</Table.Cell>
					<Table.Cell sort="dhcp_start">DHCP Start</Table.Cell>
					<Table.Cell sort="dhcp_end">DHCP End</Table.Cell>
					<Table.Cell sort="vland_id">VLAN Id</Table.Cell>
					<Table.Cell style={ { textAlign: 'right', paddingRight: '1rem' } }>Actions</Table.Cell>
				</Table.Row>
			</Table.Head>

			<Table.Body>
				<Table.RowIterator render={ (network: Schema.Network) => (
					<Table.Row key={ network.id }>

						<Table.Cell nowrap>
							<Link href={ Routes.network(network) }>{ network.name }</Link>
						</Table.Cell>

						<Table.Cell>
							<Link href={ Routes.network(network) }>{ network.address }</Link>
						</Table.Cell>

						<Table.Cell>
							<Link href={ Routes.network(network) }>{ network.gateway }</Link>
						</Table.Cell>

						<Table.Cell>
							<Link href={ Routes.network(network) }>{ network.dhcp_start }</Link>
						</Table.Cell>

						<Table.Cell>
							<Link href={ Routes.network(network) }>{ network.dhcp_end }</Link>
						</Table.Cell>

						<Table.Cell>
							{ <Link href={ Routes.network(network) }>{ network.vlan_id }</Link> }
						</Table.Cell>

						<Table.Cell fitContent>
							<EditButton href={ Routes.editNetwork(network) } label={ network.name } />
						</Table.Cell>

					</Table.Row>
				) } />
			</Table.Body>
		</Table>
	)
}

export default NetworksTable
