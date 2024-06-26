import React from 'react'
import SettingsLayout from '../../SettingsLayout'
import { Heading } from '@/Components'
import { Routes } from '@/lib'
import SmtpForm from '../Form'

interface SmtpFormProps {
	smtp: Schema.Smtp
}

const NewMail = ({ smtp }: SmtpFormProps) => {
	return (
		<SettingsLayout breadcrumbs={ [
			{ title: 'Settings', href: Routes.settingsGeneralIndex() },
			{ title: 'Mail', href: Routes.settingsSmtps() },
			{ title: 'New', href: Routes.newSettingsSmtp() },
		] }>
			<Heading mb={ 24 }>Mail Settings</Heading>

			<SmtpForm
				data={ { smtp } }
				to={ Routes.settingsSmtps() }
			/>
		</SettingsLayout>
	)
}

export default NewMail
