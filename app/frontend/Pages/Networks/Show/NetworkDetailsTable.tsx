import * as Table from '@/Components/Table'
import React from 'react'
import classnames from 'classnames'

interface INetworkDetailsTableProps {
	hosts: string[]
	n: number
}

const NetworkDetailsTable = ({ hosts, n }: INetworkDetailsTableProps) => {
	return (
		<Table.Table className="border-collapse border w-full md:w-auto md:flex-1 md:text=sm">
			<Table.Head className={ classnames('-top-4', { 'hidden md:table-header-group': n > 0 }) }>
				<Table.Row>
					<Table.Cell className="w-28">Address</Table.Cell>
					<Table.Cell>Host</Table.Cell>
				</Table.Row>
			</Table.Head>

			<Table.Body className={ classnames({ 'inverted': n % 2 === 1 }) }>
				{ hosts.map(host => {
					<Table.Row>
						<Table.Cell>{ host }</Table.Cell>
					</Table.Row>
				}) }
			</Table.Body>
		</Table.Table>
	)
}

export default NetworkDetailsTable
