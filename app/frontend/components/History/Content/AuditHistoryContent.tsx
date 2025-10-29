import React from 'react'
import { formatter, Routes } from '@/lib'
import { Text } from '@mantine/core'
import { Link } from '@/components'

const AuditHistoryContent = ({ activity }: { activity: Schema.Activity }) => {
	return (
		<>
			{ activity.person && <Text>
				by <Link href={ Routes.person(activity.person.id!) }>{ activity.person.name }</Link>
			</Text> }

			{ activity.created_at && <Text size="sm" c="dimmed">
				{ formatter.date.long(activity.created_at) }
			</Text> }
		</>
	)
}

export default AuditHistoryContent
