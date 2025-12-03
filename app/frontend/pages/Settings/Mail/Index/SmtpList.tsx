import { Group, Link, Table } from "@/components"
import { EditButton } from "@/components/Button"
import { Routes } from "@/lib"

interface SmtpListProps {
	smtps: Schema.Smtp[]
}

const SmtpList = ({ smtps }: SmtpListProps) => {
	return (
		<Table.TableProvider
			model="smtp"
			data={ smtps }
			selectable
		>
			<Table>
				<Table.Head>
					<Table.Row>
						<Table.HeadCell columnId="name" sort="name">Name</Table.HeadCell>
						<Table.HeadCell columnId="domain" sort="domain">Host</Table.HeadCell>
						<Table.HeadCell columnId="username" sort="username">Username</Table.HeadCell>
						<Table.HeadCell columnId="actions">Actions</Table.HeadCell>
					</Table.Row>
				</Table.Head>

				<Table.Body>
					<Table.RowIterator render={ (smtp: Schema.Smtp) => (
						<Table.Row key={ smtp.id }>
							<Table.Cell columnId="name">
								<Link href={ Routes.settingsSmtp(smtp.id!) }>{ smtp.name }</Link>
							</Table.Cell>
							<Table.Cell columnId="domain">{ smtp.domain }</Table.Cell>
							<Table.Cell columnId="username">{ smtp.username }</Table.Cell>
							<Table.Cell columnId="actions" fitContent>
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
