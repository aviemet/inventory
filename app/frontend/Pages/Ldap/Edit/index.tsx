import { Heading, Section } from '@/Components'
import { Form, Input, Submit } from '@/Components/Form'
import { Routes } from '@/lib'
import React from 'react'

interface ISettingsProps {
	ldap: Schema.Ldap
}

const EditLdap = ({ ldap }: ISettingsProps) => {
	const ldapNew = ldap.id === undefined

	return (
		<Section>
			<Heading>LDAP Settings</Heading>
			<Form
				model="ldap"
				data={ { ldap } }
				to={ ldapNew ? Routes.ldaps() : Routes.ldap(ldap) }
				method={ ldapNew ? 'post' : 'patch' }
			>
				<Input label="Host" name="host" />

				<Input label="Port" name="port" />

				<Input label="Domain" name="domain" />

				<Input label="Username" name="username" />

				<Input label="Password" name="password" type="password" />

				<Input label="Tree Base" name="tree_base" />

				<Input label="Search Path" name="user_search" />

				<Input label="Sync Interval" name="sync_interval" />

				<Submit>Save LDAP Settings</Submit>

			</Form>
		</Section>
	)
}

export default EditLdap