import React from 'react'
import SettingsLayout from '../../SettingsLayout'
import { Box, DangerousHtml, Heading, Table } from '@/Components'
import { Routes } from '@/lib'

interface ShowMailSettingProps {
	smtp: Schema.Smtp
}

const ShowMailSetting = ({ smtp }: ShowMailSettingProps) => {
	return (
		<SettingsLayout breadcrumbs={ [
			{ title: 'Settings', href: Routes.settingsGeneralIndex() },
			{ title: 'Mail', href: Routes.settingsSmtps() },
			{ title: smtp.name, href: Routes.settingsSmtp(smtp.id!) },
		] }>
			<Title mb={ 24 }>Mail Settings: { smtp.name }</Title>

			<Table>
				<Table.Body>

					<Table.Row>
						<Table.Cell>Host</Table.Cell>
						<Table.Cell>{ smtp.host }</Table.Cell>
					</Table.Row>

					<Table.Row>
						<Table.Cell>Port</Table.Cell>
						<Table.Cell>{ smtp.port }</Table.Cell>
					</Table.Row>

					<Table.Row>
						<Table.Cell>Domain</Table.Cell>
						<Table.Cell>{ smtp.domain }</Table.Cell>
					</Table.Row>

					<Table.Row>
						<Table.Cell>Security</Table.Cell>
						<Table.Cell>{ smtp.security }</Table.Cell>
					</Table.Row>

					<Table.Row>
						<Table.Cell>Reply-To Address</Table.Cell>
						<Table.Cell>{ smtp.address }</Table.Cell>
					</Table.Row>

					<Table.Row>
						<Table.Cell colSpan={ 2 }>
							<Box>Notes</Box>
							<DangerousHtml>{ smtp.notes }</DangerousHtml>
						</Table.Cell>
					</Table.Row>

				</Table.Body>
			</Table>

		</SettingsLayout>
	)
}

export default ShowMailSetting
