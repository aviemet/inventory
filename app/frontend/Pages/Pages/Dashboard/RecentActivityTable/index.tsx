import React from 'react'
import { Link, Table } from '@/Components'
import { formatter, Routes } from '@/lib'

interface IDashboardProps {
	activities: Schema.ActivitiesDashboard[]
}

const RecentActivityTable = ({ activities }: IDashboardProps) => {
	return (
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
				{ activities.reverse().map(activity => (
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

