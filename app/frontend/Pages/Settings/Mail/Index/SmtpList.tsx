import { Group, Link, Table } from '@/components'
import { EditButton } from '@/components/Button'
import { Routes } from '@/lib'
import React from 'react'

interface SmtpListProps {
	smtps: Schema.Smtp[]
}

const SmtpList = ({ smtps }: SmtpListProps) => {
	return (
		<Table.TableProvider
			model="smtp"
			rows={ smtps }
			selectable
		>
			<Table>
				<Table.Head>
					<Table.Row>
						<Table.HeadCell sort="name">Name</Table.HeadCell>
						<Table.HeadCell sort="domain">Host</Table.HeadCell>
						<Table.HeadCell sort="username">Username</Table.HeadCell>
						<Table.HeadCell>Actions</Table.HeadCell>
					</Table.Row>
				</Table.Head>

				<Table.Body>
					<Table.RowIterator render={ (smtp: Schema.Smtp) => (
						<Table.Row key={ smtp.id }>
							<Table.Cell>
								<Link href={ Routes.settingsSmtp(smtp.id!) }>{ smtp.name }</Link>
							</Table.Cell>
							<Table.Cell>{ smtp.domain }</Table.Cell>
							<Table.Cell>{ smtp.username }</Table.Cell>
							<Table.Cell fitContent>
								<Group wrap="nowrap" gap="sm">
									<EditButton href={ Routes.editSettingsSmtp(smtp.id!) } label={ smtp.name } />
								</Group>
							</Table.Cell>
						</Table.Row>
					) } />
				</Table.Body>

			</Table>
		</Table.TableProvider>
	)
}

export default SmtpList
