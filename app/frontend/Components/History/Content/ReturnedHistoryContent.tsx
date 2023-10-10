import React from 'react'
import { formatter, polymorphicRoute } from '@/lib'
import { Text } from '@mantine/core'
import { Link } from '@/Components'

const ReturnedHistoryContext = ({ activity }: { activity: Schema.Activity }) => {
	return (
		<>
			{ /* by <Link href={ polymorphicRoute(activity.assign_toable_type, activity.assign_toable_id) }>
				{ activity.assign_toable.name }
			</Link>*/ }
			{ activity.created_at && <Text size="sm" c="dimmed">
				{ formatter.date.long(activity.created_at) }
			</Text> }
		</>
	)
}

export default ReturnedHistoryContext
