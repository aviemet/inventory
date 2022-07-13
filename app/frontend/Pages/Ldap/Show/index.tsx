import { Section, Table } from '@/Components'
import React from 'react'

interface IShowLdapProps {
	ldap: Schema.Ldap
}

const ShowLdap = ({ ldap }: IShowLdapProps) => {
	console.log({ ldap })
	return (
		<Section>
			<Table>
				<Table.Body>
					<Table.Row>
						<Table.Cell>Host</Table.Cell>
						<Table.Cell>{ ldap.host }</Table.Cell>
					</Table.Row>

					<Table.Row>
						<Table.Cell>Port</Table.Cell>
						<Table.Cell>{ ldap.port }</Table.Cell>
					</Table.Row>

					<Table.Row>
						<Table.Cell>username</Table.Cell>
						<Table.Cell>{ ldap.username }</Table.Cell>
					</Table.Row>

					<Table.Row>
						<Table.Cell>Tree Base</Table.Cell>
						<Table.Cell>{ ldap.tree_base }</Table.Cell>
					</Table.Row>

					<Table.Row>
						<Table.Cell>Search Params</Table.Cell>
						<Table.Cell>{ ldap.user_search }</Table.Cell>
					</Table.Row>

					<Table.Row>
						<Table.Cell>Sync Interval</Table.Cell>
						<Table.Cell>{ ldap.sync_interval }</Table.Cell>
					</Table.Row>
				</Table.Body>
			</Table>
		</Section>
	)
}

export default ShowLdap
