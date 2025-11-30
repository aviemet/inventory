import clsx from "clsx"
import React, { useMemo } from "react"

import { Table } from "@/components"
import IPAddress from "@/lib/IPAddress"

import { useNetworkContext } from ".."
import EditableLink from "./EditableLink"
import * as classes from "./NetworkDetailsTable.css"

interface NetworkDetailsTableProps {
	hosts: string[]
	ips: Schema.IpLeasesBasic[]
}

const NetworkDetailsTable = ({ hosts, ips }: NetworkDetailsTableProps) => {
	const { network } = useNetworkContext()

	const dhcpStart = useMemo(() => {
		if(!network.dhcp_start) return
		return new IPAddress(network.dhcp_start)
	}, [network.dhcp_start])

	const dhcpEnd = useMemo(() => {
		if(!network.dhcp_end) return
		return new IPAddress(network.dhcp_end)
	}, [network.dhcp_end])

	return (
		<Table wrapper={ false } className={ clsx(classes.table) }>
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
					const dhcp = dhcpStart !== undefined && dhcpEnd !== undefined
						? addr.between(dhcpStart, dhcpEnd)
						: undefined

					return (
						<Table.Row key={ host } className={ clsx(classes.row, { dhcp }) }>
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
