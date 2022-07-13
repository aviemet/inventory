import { Section } from '@/Components'
import { Form, Input, Submit } from '@/Components/Form'
import { Routes } from '@/lib'
import React from 'react'
import { has } from 'lodash'

interface ISettingsProps {
	ldap: Schema.Ldap
}

const Settings = ({ ldap }: ISettingsProps) => {
	const ldapNew = ldap.id === undefined

	return (
		<Section>
			<Form
				model="ldap"
				data={ { ldap } }
				to={ ldapNew ? Routes.ldaps() : Routes.ldap(ldap) }
				method={ ldapNew ? 'post' : 'patch' }
			>
				<Input label="Host" name="host" />

				<Input label="Port" name="port" />

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

export default Settings
