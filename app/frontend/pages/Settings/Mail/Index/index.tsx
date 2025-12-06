import { Group, Title, Menu } from "@/components"
import { Routes } from "@/lib"

import Empty from "./Empty"
import SmtpList from "./SmtpList"
import SettingsLayout from "../../SettingsLayout"

interface MailSettingsProps {
	smtps: Schema.Smtp[]
}

const Mail = ({ smtps }: MailSettingsProps) => {
	return (
		<SettingsLayout breadcrumbs={ [
			{ title: "Settings", href: Routes.settingsGeneralIndex() },
			{ title: "Mail", href: Routes.settingsSmtps() },
		] }>
			<Group justify="space-between">
				<Title mb={ 24 }>Mail Settings</Title>
				<Menu position="bottom-end">
					<Menu.Target />
					<Menu.Dropdown>
						<Menu.Link href={ Routes.newSettingsSmtp() }>New Mail Connection</Menu.Link>
					</Menu.Dropdown>
				</Menu>
			</Group>

			{ smtps.length === 0 ? <Empty /> : <SmtpList smtps={ smtps } /> }
		</SettingsLayout>
	)
}

export default Mail
