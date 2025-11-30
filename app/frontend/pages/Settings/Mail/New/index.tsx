import React from "react"

import { Title } from "@/components"
import { Routes } from "@/lib"

import SettingsLayout from "../../SettingsLayout"
import SmtpForm from "../Form"

interface SmtpFormProps {
	smtp: Schema.Smtp
}

const NewMail = ({ smtp }: SmtpFormProps) => {
	return (
		<SettingsLayout breadcrumbs={ [
			{ title: "Settings", href: Routes.settingsGeneralIndex() },
			{ title: "Mail", href: Routes.settingsSmtps() },
			{ title: "New", href: Routes.newSettingsSmtp() },
		] }>
			<Title mb={ 24 }>Mail Settings</Title>

			<SmtpForm
				data={ { smtp } }
				to={ Routes.settingsSmtps() }
			/>
		</SettingsLayout>
	)
}

export default NewMail
