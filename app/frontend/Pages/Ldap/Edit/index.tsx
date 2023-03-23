import { Heading, Page, Section } from '@/Components'
import { Routes } from '@/lib'
import React from 'react'
import LdapForm from '../Form'

interface ISettingsProps {
	ldap: Schema.Ldap
}

const EditLdap = ({ ldap }: ISettingsProps) => {
	const title = 'Edit LDAP Connection'

	return (
		<Page title={ title } breadcrumbs={ [
			{ title: 'Settings', href: Routes.settings() },
			{ title: ldap.name || ldap.host || 'LDAP', href: Routes.editLdap(ldap.id) },
			{ title: 'Edit LDAP' },
		] }>
			<Section>
				<Heading>LDAP Settings</Heading>

				<LdapForm ldap={ ldap } to={ Routes.ldap(ldap) } method='put' />

			</Section>
		</Page>
	)
}

export default EditLdap
