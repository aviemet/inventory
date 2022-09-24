import React from 'react'
import { Routes } from '@/lib'
import { Link } from '@/Components'
import { Table } from '@/Components'

interface INetworkDetailsTableProps {
	hosts: string[]
	ips: Schema.IpLease[]
}

const NetworkDetailsTable = ({ hosts, ips }: INetworkDetailsTableProps) => {
	return (
		<Table wrapper={ false } sx={ { width: '100%', flex: 1 } }>
			<Table.Head sx={ { top: '-10px !important' } }>
				<Table.Row>
					<Table.Cell>Address</Table.Cell>
					<Table.Cell>Host</Table.Cell>
				</Table.Row>
			</Table.Head>

			<Table.Body>
				{ hosts.map(host => {
					const item = ips.find(ip => ip.address === host)?.item

					return (
						<Table.Row key={ host } sx={ { height: 40 } }>
							<Table.Cell fitContent>{ host }</Table.Cell>
							<Table.Cell>{ item && <Link href={ Routes.item(item) }>{ item.name }</Link> }</Table.Cell>
						</Table.Row>
					)
				}) }
			</Table.Body>
		</Table>
	)
}

export default NetworkDetailsTable
