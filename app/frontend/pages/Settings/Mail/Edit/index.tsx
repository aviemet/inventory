import { Title } from "@/components"
import SmtpForm from "@/domains/Settings/Mail/Form"
import { Routes } from "@/lib"

import SettingsLayout from "../../SettingsLayout"

interface SmtpFormProps {
	smtp: Schema.Smtp
}

const EditMail = ({ smtp }: SmtpFormProps) => {
	return (
		<SettingsLayout breadcrumbs={ [
			{ title: "Settings", href: Routes.settingsGeneralIndex() },
			{ title: "Mail", href: Routes.settingsSmtps() },
			{ title: smtp.name!, href: Routes.settingsSmtp(smtp.id!) },
			{ title: "Edit", href: Routes.editSettingsSmtp(smtp.id!) },
		] }>
			<Title mb={ 24 }>Mail Settings</Title>

			<SmtpForm
				method="put"
				data={ { smtp } }
				to={ Routes.settingsSmtp(smtp.id!) }
			/>
		</SettingsLayout>
	)
}

export default EditMail
