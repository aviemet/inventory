import React from 'react'
import cn from 'classnames'
import { Routes } from '@/lib'
import { Link } from '@/Components'
import { Table } from '@/Components'

interface INetworkDetailsTableProps {
	hosts: string[]
	ips: Schema.IpLease[]
	n: number
}

const NetworkDetailsTable = ({ hosts, ips, n }: INetworkDetailsTableProps) => {

	return (
		<Table wrapper={ false } sx={ { width: '100%', flex: 1 } } className="border-collapse border w-full md:w-auto md:flex-1 md:text=sm">
			<Table.Head className={ cn('-top-4', { 'hidden md:table-header-group': n > 0 }) }>
				<Table.Row>
					<Table.Cell className="w-28">Address</Table.Cell>
					<Table.Cell>Host</Table.Cell>
				</Table.Row>
			</Table.Head>

			<Table.Body className={ cn({ 'inverted': n % 2 === 1 }) }>
				{ hosts.map(host => {
					const item = ips.find(ip => ip.address === host)?.item

					return (
						<Table.Row key={ host }>
							<Table.Cell>{ host }</Table.Cell>
							<Table.Cell>{ item && <Link href={ Routes.item(item) }>{ item.name }</Link> }</Table.Cell>
						</Table.Row>
					)
				}) }
			</Table.Body>
		</Table>
	)
}

export default NetworkDetailsTable
