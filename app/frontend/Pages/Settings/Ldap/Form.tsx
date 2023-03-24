import React from 'react'
import { Form, TextInput, Submit, PasswordInput } from '@/Components/Form'
import { FormProps } from 'use-inertia-form'

interface ILdapFormProps extends Omit<FormProps<{ ldap: Schema.Ldap}>, 'data'> {
	ldap: Schema.Ldap
	to: string
	method?: HTTPVerb
}

const LdapForm = ({ ldap, method = 'post', ...props }: ILdapFormProps) => {
	return (
		<Form
			model="ldap"
			data={ { ldap } }
			method={ method }
			{ ...props }
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
