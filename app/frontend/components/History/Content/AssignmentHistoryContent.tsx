import { Text } from "@mantine/core"
import React from "react"

import { Link } from "@/components"
import { formatter, polymorphicRoute } from "@/lib"

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
