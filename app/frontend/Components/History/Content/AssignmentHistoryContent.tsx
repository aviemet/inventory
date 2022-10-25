import React from 'react'
import { formatter, polymorphicRoute } from '@/lib'
import { Text } from '@mantine/core'
import { Link } from '@/Components'

const AssignmentHistoryContent = ({ activity }: { activity: Schema.PublicActivityActivity }) => {

	return (
		<>
			{ activity.created_at && <Text size="sm" color="dimmed">
				{ formatter.date.long(activity.created_at) }
			</Text> }
		</>
	)
}

export default AssignmentHistoryContent
