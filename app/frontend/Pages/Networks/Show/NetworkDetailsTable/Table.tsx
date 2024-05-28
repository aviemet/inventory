import React, { useMemo } from 'react'
import { Table } from '@/Components'
import EditableLink from './EditableLink'
import IPAddress from '@/lib/IPAddress'
import { useNetworkContext } from '..'
import cx from 'clsx'
import * as classes from './NetworkDetailsTable.css'

interface NetworkDetailsTableProps {
	hosts: string[]
	ips: Schema.IpLeasesBasic[]
}

const NetworkDetailsTable = ({ hosts, ips }: NetworkDetailsTableProps) => {
	const { network } =  useNetworkContext()

	const dhcpStart = useMemo(() => new IPAddress(network.dhcp_start), [network.dhcp_start])
	const dhcpEnd = useMemo(() => new IPAddress(network.dhcp_end), [network.dhcp_end])

	return (
		<Table wrapper={ false } className={ cx(classes.table) }>
			<Table.Head>
				<Table.Row>
					<Table.HeadCell>Address</Table.HeadCell>
					<Table.HeadCell>Host</Table.HeadCell>
				</Table.Row>
			</Table.Head>

			<Table.Body>
				{ hosts.map(host => {
					const item = ips.find(ip => ip.address === host)?.item

					const addr = new IPAddress(host)
					const dhcp = addr.between(dhcpStart, dhcpEnd)

					return (
						<Table.Row key={ host } className={ cx(classes.row, { dhcp }) }>
							<Table.Cell fitContent>{ host }</Table.Cell>
							<Table.Cell>
								<EditableLink item={ item } ip={ host } />
							</Table.Cell>
						</Table.Row>
					)
				}) }
			</Table.Body>
		</Table>
	)
}

export default NetworkDetailsTable
