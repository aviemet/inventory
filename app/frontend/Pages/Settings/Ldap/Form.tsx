import React from 'react'
import { Form, TextInput, Submit, PasswordInput } from '@/Components/Form'
import { type FormProps, type HTTPVerb } from 'use-inertia-form'

interface LdapFormProps extends Omit<FormProps<{ ldap: Schema.LdapsFormData}>, 'data'> {
	ldap: Schema.LdapsFormData
	to: string
	method?: HTTPVerb
}

const LdapForm = ({ ldap, method = 'post', ...props }: LdapFormProps) => {
	return (
		<Form
			model="ldap"
			data={ { ldap } }
			method={ method }
			{ ...props }
		>
			<TextInput label="Name" name="name" required />

			<TextInput label="Host" name="host" required />

			<TextInput label="Port" name="port" required />

			<TextInput label="Domain" name="domain" required />

			<TextInput label="Username" name="username" required />

			<PasswordInput label="Password" name="password" required />

			<TextInput label="Tree Base" name="tree_base" />

			<TextInput label="Search Path" name="user_search" />

			<TextInput label="Sync Interval" name="sync_interval" />

			<Submit>{ ldap.id ? 'Update' : 'Save' } LDAP Settings</Submit>
		</Form>
	)
}

export default LdapForm
