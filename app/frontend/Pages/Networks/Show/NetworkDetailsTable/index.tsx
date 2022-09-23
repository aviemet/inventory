import React from 'react'
import { Flex } from '@/Components'
import NetworkTable from './Table'

interface INetworkDetailsTableProps {
	hosts: string[]
	ips: Schema.IpLease[]
}

const NetworkDetailsTable = ({ hosts, ips }: INetworkDetailsTableProps) => {
	const tableRows = 3

	return (
		<Flex align="start">
			{ Array(tableRows).fill(undefined).map((_, i) => {
				const start = Math.ceil(hosts.length / tableRows * i)
				const end = Math.ceil((hosts.length / tableRows) * (i + 1))

				return (
					<NetworkTable
						key={ i }
						n={ i }
						hosts={ hosts.slice(start, end) }
						ips={ ips }
					/>
				)
			}) }
		</Flex>
	)
}

export default NetworkDetailsTable
