import { Text } from "@mantine/core"

import { formatter } from "@/lib"

export function ReturnedHistoryContent({ activity }: { activity: Schema.Activity }) {
	return (
		<>
			{ activity.created_at && <Text size="sm" c="dimmed">
				{ formatter.date.long(activity.created_at) }
			</Text> }
		</>
	)
}
