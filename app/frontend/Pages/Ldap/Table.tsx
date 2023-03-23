import React from 'react'
import { Routes } from '@/lib'
import { Link, Table } from '@/Components'
import { EditButton } from '@/Components/Button'
import { ITableProps } from '@/Components/Table/Table'

const LdapIndex = (props: ITableProps) => {
	return (
		<Table { ...props }>
			<Table.Head>
				<Table.Row>
					<Table.Cell nowrap sort="name">Name</Table.Cell>
					<Table.Cell sort="locations">Host</Table.Cell>
					<Table.Cell sort="departments">Port</Table.Cell>
					<Table.Cell sort="items">Domain</Table.Cell>
					<Table.Cell sort="accessories">Sync Interval</Table.Cell>
					<Table.Cell style={ { textAlign: 'right', paddingRight: '1rem' } }>Actions</Table.Cell>
				</Table.Row>
			</Table.Head>

			<Table.Body>
				<Table.RowIterator render={ ldap => (
					<Table.Row key={ ldap.id }>
						<Table.Cell nowrap>
							<Link href={ Routes.ldap(ldap.id) }>{ ldap.name }</Link>
						</Table.Cell>

						<Table.Cell>{ ldap.host }</Table.Cell>

						<Table.Cell>{ ldap.port }</Table.Cell>

						<Table.Cell>{ ldap.domain }</Table.Cell>

						<Table.Cell>{ ldap.sync_interval }</Table.Cell>

						<Table.Cell fitContent>
							<EditButton href={ Routes.editLdap(ldap.id) } />
						</Table.Cell>
					</Table.Row>
				) } />
			</Table.Body>
		</Table>
	)
}

export default LdapIndex
