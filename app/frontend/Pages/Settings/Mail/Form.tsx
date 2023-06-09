import React from 'react'
import { Group } from '@/Components'
import { Form, type IFormProps, PasswordInput, RadioButtons, RichText, Submit, TextInput } from '@/Components/Form'
import { TestResponseButton } from '@/Components/Button'
import { Routes } from '@/lib'

type TSmtpFormData = {
	smtp: Schema.SmtpsFormData
}

export interface ISmtpFormProps extends IFormProps<TSmtpFormData> {
	data: TSmtpFormData
}

const SmtpForm = ({ method = 'post', ...props }: ISmtpFormProps) => {
	return (
		<Form
			model="smtp"
			method={ method }
			{ ...props }
		>
			<TextInput name="name" label="Name" required />

			<TextInput name="username" label="Username" required />

			<PasswordInput name="password" label="Password" required />

			<TextInput name="domain" label="SMTP Server" required />

			<TextInput name="port" label="Port Number" required />

			<TextInput name="address" label="Reply-To Address" />

			<RadioButtons name="security" label="Security" options={ [
				{ label: 'None', value: 'basic' },
				{ label: 'TLS', value: 'tls' },
				{ label: 'SSL', value: 'ssl' },
			] } />

			<Group pt="md" pb="xs" position="right">
				<TestResponseButton
					endpoint={ Routes.apiSmtpTest() }
				/>
			</Group>

			<RichText name="notes" label="Notes" />

			<Submit>Save SMT Settings</Submit>
		</Form>
	)
}

export default SmtpForm
