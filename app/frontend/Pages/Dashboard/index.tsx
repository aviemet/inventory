import React from 'react'
import { Head } from '@inertiajs/inertia-react'
import { Link, Section, Table } from '@/Components'
import Counts from './Counts'
import { formatter, Routes } from '@/lib'

interface IDashboardProps {
	company: Schema.CompanyWithCounts
	audits: Schema.AuditedAudit[]
}

const Dashboard = ({ company, audits }: IDashboardProps) => {
	console.log({ audits })
	return (
		<>
			<Head title="Dashboard"></Head>

			<Section>
				<Counts counts={ company.counts } />
			</Section>

			<Section>
				<div>Recent Activity</div>
				<Table>
					<Table.Head>
						<Table.Row>
							<Table.Cell>Record</Table.Cell>
							<Table.Cell>Action</Table.Cell>
							<Table.Cell>User</Table.Cell>
							<Table.Cell>Date</Table.Cell>
						</Table.Row>
					</Table.Head>
					<Table.Body>
						{ audits.reverse().map(audit => (
							<Table.Row key={ audit.id }>
								<Table.Cell>
									{ audit.route ?
										<Link href={ audit.route }>{ audit.auditable_type }</Link>
										:
										audit.auditable_type
									}
								</Table.Cell>
								<Table.Cell>{ audit.action }</Table.Cell>
								<Table.Cell>
									{ audit.person && <Link href={ Routes.person(audit.person.id) }>{ audit.person?.name }</Link> }
								</Table.Cell>
								<Table.Cell>{ formatter.date.long(audit.created_at!) }</Table.Cell>
							</Table.Row>
						)) }
					</Table.Body>
				</Table>
			</Section>
		</>
	)
}

export default Dashboard
