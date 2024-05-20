import React from 'react'
import { Link, Table } from '@/Components'
import { formatter, Routes } from '@/lib'

interface DashboardProps {
	activities: Schema.ActivitiesDashboard[]
}

const headingLabels = {
	record: 'Record',
	action: 'Action',
	user: 'User',
	date: 'Date',
}

const RecentActivityTable = ({ activities }: DashboardProps) => {
	return (
		<Table>
			<Table.Head>
				<Table.Row>
					<Table.HeadCell>{ headingLabels.record }</Table.HeadCell>
					<Table.HeadCell>{ headingLabels.action }</Table.HeadCell>
					<Table.HeadCell>{ headingLabels.user }</Table.HeadCell>
					<Table.HeadCell>{ headingLabels.date }</Table.HeadCell>
				</Table.Row>
			</Table.Head>
			<Table.Body>
				{ activities.map(activity => (
					<Table.Row key={ activity.id }>
						<Table.Cell>
							{ activity.route ?
								<Link href={ activity.route }>{ activity.trackable_type }</Link>
								:
								activity.trackable_type
							}
						</Table.Cell>
						<Table.Cell>{ activity.key }</Table.Cell>
						<Table.Cell>
							{ activity.person && <Link href={ Routes.person(activity.person.id!) }>{ activity.person?.name }</Link> }
						</Table.Cell>
						<Table.Cell>{ formatter.date.long(activity.created_at!) }</Table.Cell>
					</Table.Row>
				)) }
			</Table.Body>
		</Table>
	)
}

export default RecentActivityTable

