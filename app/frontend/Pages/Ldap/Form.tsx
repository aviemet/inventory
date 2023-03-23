import React from 'react'
import { Form, TextInput, Submit, PasswordInput } from '@/Components/Form'
import { UseFormProps } from 'use-inertia-form'

interface ILdapFormProps {
	ldap: Schema.Ldap
	to: string
	method?: HTTPVerb
	onSubmit?: (object: UseFormProps<Schema.Ldap>) => boolean|void
}

const LdapForm = ({ ldap, to, method = 'post', onSubmit }: ILdapFormProps) => {

	return (
		<Form
			model="ldap"
			data={ { ldap } }
			to={ to }
			method={ method }
		>
			<TextInput label="Host" name="host" />

			<TextInput label="Port" name="port" />

			<TextInput label="Domain" name="domain" />

			<TextInput label="Username" name="username" />

			<PasswordInput label="Password" name="password" />

			<TextInput label="Tree Base" name="tree_base" />

			<TextInput label="Search Path" name="user_search" />

			<TextInput label="Sync Interval" name="sync_interval" />

			<Submit>{ ldap.id ? 'Update' : 'Save' } LDAP Settings</Submit>
		</Form>
	)
}

export default LdapForm
