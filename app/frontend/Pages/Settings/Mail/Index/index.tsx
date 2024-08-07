import React from 'react'
import SettingsLayout from '../../SettingsLayout'
import { Group, Title, Menu } from '@/Components'
import Empty from './Empty'
import SmtpList from './SmtpList'
import { Routes } from '@/lib'

interface MailSettingsProps {
	smtps: Schema.Smtp[]
}

const Mail = ({ smtps }: MailSettingsProps) => {
	return (
		<SettingsLayout breadcrumbs={ [
			{ title: 'Settings', href: Routes.settingsGeneralIndex() },
			{ title: 'Mail', href: Routes.settingsSmtps() },
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
