import React from 'react'
import { formatter, polymorphicRoute } from '@/lib'
import { Text } from '@mantine/core'
import { Link } from '@/Components'

const AssignmentHistoryContent = ({ event }: { event: Schema.Assignment }) => {
	return (
		<>
			to <Link href={ polymorphicRoute(event.assign_toable_type, event.assign_toable_id) }>
				{ event.assign_toable.name }
			</Link>
			{ event.created_at && <Text size="sm" color="dimmed">
				{ formatter.date.long(event.created_at) }
			</Text> }
		</>
	)
}

export default AssignmentHistoryContent
