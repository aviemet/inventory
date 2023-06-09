import React from 'react'
import { Group } from '@/Components'
import { Form, type IFormProps, PasswordInput, RadioButtons, RichText, Submit, TextInput, FormConsumer } from '@/Components/Form'
import { TestResponseButton } from '@/Components/Button'
import { Routes } from '@/lib'
import { omit } from 'lodash'

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

			<TextInput name="host" label="SMTP Server Address" required />

			<TextInput name="port" label="Port Number" required />

			<TextInput name="username" label="Username" required />

			<PasswordInput name="password" label="Password" required />

			<TextInput name="domain" label="Email Domain" required
				placeholder='e.g. mycompany.com'
			/>

			<TextInput name="address" label="Reply-To Address"
				placeholder='If not provided, will default to your username'
			/>

			<RadioButtons name="security" label="Security" options={ [
				{ label: 'None', value: 'basic' },
				{ label: 'TLS', value: 'tls' },
				{ label: 'SSL', value: 'ssl' },
			] } />

			<Group pt="md" pb="xs" position="right">
				<FormConsumer<TSmtpFormData>>{ ({ data }) => (
					<TestResponseButton
						method="post"
						endpoint={ Routes.apiSmtpTest() }
						data={ { smtp: omit(data.smtp, 'id') } }
					/>
				) }</FormConsumer>
			</Group>

			<RichText name="notes" label="Notes" />

			<Submit>Save SMT Settings</Submit>
		</Form>
	)
}

export default SmtpForm
