import React from 'react'
import { formatter, polymorphicRoute } from '@/lib'
import { Text } from '@mantine/core'
import { Link } from '@/Components'

import { type TReturn } from '../index'

const ReturnedHistoryContext = ({ event }: { event: TReturn }) => {
	return (
		<>
			by <Link href={ polymorphicRoute(event.assign_toable_type, event.assign_toable_id) }>
				{ event.assign_toable.name }
			</Link>
			{ event.created_at && <Text size="sm">
				{ formatter.date.long(event.created_at) }
			</Text> }
		</>
	)
}

export default ReturnedHistoryContext
