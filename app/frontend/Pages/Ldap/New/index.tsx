import { Heading, Page, Section } from '@/Components'
import { Form, TextInput, Submit, PasswordInput } from '@/Components/Form'
import { Routes } from '@/lib'
import React from 'react'

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
				<Form
					model="ldap"
					data={ { ldap } }
					to={ Routes.ldaps() }
					method={ 'post' }
				>
					<TextInput label="Host" name="host" />

					<TextInput label="Port" name="port" />

					<TextInput label="Domain" name="domain" />

					<TextInput label="Username" name="username" />

					<PasswordInput label="Password" name="password" />

					<TextInput label="Tree Base" name="tree_base" />

					<TextInput label="Search Path" name="user_search" />

					<TextInput label="Sync Interval" name="sync_interval" />

					<Submit>Save LDAP Settings</Submit>

				</Form>
			</Section>
		</Page>
	)
}

export default EditLdap
