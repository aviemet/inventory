import React from 'react'
import { Group } from '@/Components'
import { Form, type FormProps, PasswordInput, SegmentedControl, RichText, Submit, TextInput, FormConsumer } from '@/Components/Form'
import { TestResponseButton } from '@/Components/Button'
import { Routes, isUnset } from '@/lib'
import { omit } from 'lodash'

type SmtpFormData = {
	smtp: Schema.SmtpsFormData
}

export interface SmtpFormProps extends FormProps<SmtpFormData> {
	data: SmtpFormData
}

const requiredFields = ['smtp.host', 'smtp.port', 'smtp.domain', 'smtp.username', 'smtp.password']

const SmtpForm = ({ method = 'post', ...props }: SmtpFormProps) => {
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

			<SegmentedControl name="security" label="Security" options={ [
				{ label: 'None', value: 'basic' },
				{ label: 'TLS', value: 'tls' },
				{ label: 'SSL', value: 'ssl' },
			] } />

			<Group pt="md" pb="xs" position="right">
				<FormConsumer<SmtpFormData>>{ ({ data, getData }) => (
					<TestResponseButton
						method="post"
						endpoint={ Routes.apiSmtpTest() }
						data={ { smtp: omit(data.smtp, 'id') } }
						disabled={ requiredFields.some(field => isUnset(getData(field))) }
					/>
				) }</FormConsumer>
			</Group>

			<RichText name="notes" label="Notes" />

			<Submit requiredFields={ requiredFields }>
				Save SMT Settings
			</Submit>
		</Form>
	)
}

export default SmtpForm
