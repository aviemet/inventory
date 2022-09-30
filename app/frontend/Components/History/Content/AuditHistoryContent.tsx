import React from 'react'
import { formatter, Routes } from '@/lib'
import { Text } from '@mantine/core'
import { Link } from '@/Components'

const AuditHistoryContent = ({ event }: { event: Schema.AuditedAudit }) => {
	return (
		<>
			{ event.person && <Text>
			by <Link href={ Routes.person(event.person) }>{ event.person.name }</Link>
			</Text> }

			{ event.created_at && <Text size="sm">
				{ formatter.date.long(event.created_at) }
			</Text> }
		</>
	)
}

export default AuditHistoryContent
