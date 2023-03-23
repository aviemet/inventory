import React from 'react'
import { Heading, Page, Section } from '@/Components'
import { Routes } from '@/lib'
import LdapForm from '../Form'

interface ISettingsProps {
	ldap: Schema.Ldap
}

const EditLdap = ({ ldap }: ISettingsProps) => {
	const title = 'New LDAP Connection'

	return (
		<Page title={ title } breadcrumbs={ [
			{ title: 'Settings', href: Routes.settings() },
			{ title: 'New LDAP' },
		] }>
			<Section>
				<Heading>LDAP Settings</Heading>
				<LdapForm to={ Routes.ldaps() } ldap={ ldap } />
			</Section>
		</Page>
	)
}

export default EditLdap
