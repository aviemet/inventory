import React from 'react'
import { Routes } from '@/lib'
import { Link, Table } from '@/components'
import { EditButton } from '@/components/Button'
import { type TableProps } from '@/components/Table/Table'

const NetworksTable = (props: TableProps) => {
	return (
		<Table { ...props }>
			<Table.Head>
				<Table.Row>
					<Table.HeadCell sort="name" hideable={ false }>Name</Table.HeadCell>
					<Table.HeadCell sort="address">Network</Table.HeadCell>
					<Table.HeadCell sort="gateway">Gateway</Table.HeadCell>
					<Table.HeadCell sort="dhcp_start">DHCP Start</Table.HeadCell>
					<Table.HeadCell sort="dhcp_end">DHCP End</Table.HeadCell>
					<Table.HeadCell sort="vlan_id">VLAN Id</Table.HeadCell>
					<Table.HeadCell style={ { textAlign: 'right', paddingRight: '1rem' } }>Actions</Table.HeadCell>
				</Table.Row>
			</Table.Head>

			<Table.Body>
				<Table.RowIterator render={ (network: Schema.NetworksIndex) => (
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
