import React from 'react'
import { formatter, Routes } from '@/lib'
import { Text } from '@mantine/core'
import { Link } from '@/Components'

const AuditHistoryContent = ({ activity }: { activity: Schema.Activity }) => {
	return (
		<>
			{ activity.person && <Text>
			by <Link href={ Routes.person(activity.person.id!) }>{ activity.person.name }</Link>
			</Text> }

			{ activity.created_at && <Text size="sm" color="dimmed">
				{ formatter.date.long(activity.created_at) }
			</Text> }
		</>
	)
}

export default AuditHistoryContent
