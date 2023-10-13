import React from 'react'
import { formatter, polymorphicRoute } from '@/lib'
import { Text } from '@mantine/core'
import { Link } from '@/Components'

const AssignmentHistoryContent = ({ activity }: { activity: Schema.Activity }) => {

	return (
		<>
			{ activity.created_at && <Text size="sm" c="dimmed">
				{ formatter.date.long(activity.created_at) }
			</Text> }
		</>
	)
}

export default AssignmentHistoryContent
