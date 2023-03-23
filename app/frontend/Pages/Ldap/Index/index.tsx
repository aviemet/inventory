import React from 'react'
import { Routes } from '@/lib'
import { Page, Table } from '@/Components'
import { TableTitleSection } from '@/Layouts/AppLayout/Components'
import { NewIcon } from '@/Components/Icons'
import LdapsTable from '../Table'

interface ILdapIndexProps {
	ldaps: Schema.Ldap[]
}

const LdapIndex = ({ ldaps }: ILdapIndexProps) => {

	const title = 'LDAP Connections'
	return (
		<Page title={ title } breadcrumbs={ [
			{ title: 'Settings', href: Routes.settings() },
			{ title: 'LDAP Connection' },
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
					</TableTitleSection>

					<LdapsTable />

					<Table.Pagination />
				</Table.TableProvider>
			</Table.Section>
		</Page>
	)
}

export default LdapIndex
