import React from 'react'
import SettingsLayout from '../../SettingsLayout'
import { Box, Button, Group, Heading } from '@/Components'
import { Form, PasswordInput, RadioButtons, RichText, Submit, TextInput } from '@/Components/Form'

interface ISmtpFormProps {
	smtp: Schema.Smtp
}

const NewMail = ({ smtp }: ISmtpFormProps) => {
	return (
		<SettingsLayout>
			<Heading mb={ 24 }>Mail Settings</Heading>

			<Form
				model="smtp"
				data={ { smtp } }
			>
				<TextInput name="name" label="Name" required />

				<TextInput name="username" label="Username" required />

				<PasswordInput name="password" label="Password" required />

				<TextInput name="domain" label="SMTP Server" required />

				<TextInput name="port" label="Port Number" required />

				<TextInput name="address" label="Reply-To Address" />

				<RadioButtons name="tls" label="Security" options={ [
					{ label: 'None', value: '' },
					{ label: 'TLS', value: 'tls' },
				] } />

				<Group pt="md" pb="xs" position="right">
					<Button>Test</Button>
				</Group>

				<RichText name="notes" label="Notes" />

				<Submit>Save SMT Settings</Submit>
			</Form>
		</SettingsLayout>
	)
}

export default NewMail
