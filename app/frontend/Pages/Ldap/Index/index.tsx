import React from 'react'
import { Routes } from '@/lib'
import { Link, Page, Table } from '@/Components'
import { TableTitleSection } from '@/Layouts/Components'
import { NewIcon } from '@/Components/Icons'
import { EditButton } from '@/Components/Button'

interface ILdapIndexProps {
	ldaps: Schema.Ldap[]
}

const LdapIndex = ({ ldaps }: ILdapIndexProps) => {
	const title = 'LDAP Connections'
	return (
		<Page title={ title } breadcrumbs={ [
			{ title: 'Settings', href: Routes.settings() },
			{ title: 'LDAP Connection' }
		] }>
			<Table.Section>
				<Table.TableProvider
					selectable
					hideable
					model="ldaps"
					rows={ ldaps }
				>

					<TableTitleSection title={ title } menuOptions={ [
						{ label: 'New LDAP Connection', href: Routes.newLdap(), icon: NewIcon },
					] }>
						<Table.SearchInput />
						<Table.ColumnPicker />
					</TableTitleSection>

					<Table>
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

									<Table.Cell className="table-column-fit">
										<EditButton href={ Routes.editLdap(ldap.id) } />
									</Table.Cell>
								</Table.Row>
							) } />
						</Table.Body>
					</Table>

					<Table.Pagination />
				</Table.TableProvider>
			</Table.Section>
		</Page>
	)
}

export default LdapIndex
