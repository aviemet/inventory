import React from 'react'
import { Table } from '@/Components'
import EditableLink from './EditableLink'

interface INetworkDetailsTableProps {
	hosts: string[]
	ips: Schema.IpLease[]
}

const NetworkDetailsTable = ({ hosts, ips }: INetworkDetailsTableProps) => {
	return (
		<Table wrapper={ false } sx={ { width: '100%', flex: 1 } }>
			<Table.Head>
				<Table.Row>
					<Table.Cell>Address</Table.Cell>
					<Table.Cell>Host</Table.Cell>
				</Table.Row>
			</Table.Head>

			<Table.Body>
				{ hosts.map(host => {
					const item = ips.find(ip => ip.address === host)?.item

					return (
						<Table.Row key={ host } sx={ theme => ({
							height: 40,

							'&:hover .item-ip-assign-button, & .item-ip-assign-button.editing': {
								color: theme.colors.gray[4],
							},
						}) }>
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
