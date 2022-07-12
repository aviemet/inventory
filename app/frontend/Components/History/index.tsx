import React from 'react'
import { has } from 'lodash'
import { Text, Timeline } from '@mantine/core'
import { formatter, capitalize, Routes, polymorphicRoute } from '@/lib'
import { Link } from '@/Components'

const RETURNED = 'return'

type TReturn = {
	id: number
	type: 'return'
	assignable_type: TAssignable
	assignable_id: number
	assign_toable_type: TAssignToable
	assign_toable_id: number
	assign_toable: Schema.Person|Schema.Item|Schema.Location
	qty?: number | null
	created_at?: string | null
}
type THistoryArray = (Schema.Assignment|Schema.AuditedAudit|TReturn)[]

interface IHistoryProps {
	assignments?: Schema.Assignment[]
	audits?: Schema.AuditedAudit[]
}

const History = ({ assignments, audits }: IHistoryProps) => {
	const events: THistoryArray = []

	if(Array.isArray(assignments)) {
		events.push(...assignments)

		assignments.forEach(assignment => {
			if(assignment.returned_at) {
				const returned: TReturn = {
					id: assignment.id,
					type: RETURNED,
					assignable_type: assignment.assignable_type,
					assignable_id: assignment.assignable_id,
					assign_toable_type: assignment.assign_toable_type,
					assign_toable_id: assignment.assign_toable_id,
					assign_toable: assignment.assign_toable,
					qty: assignment.qty,
					created_at: assignment.returned_at,
				}
				events.push(returned)
			}
		})
	}
	if(Array.isArray(audits)) events.push(...audits)
	events.sort((a, b) => {
		if(a.created_at === b.created_at) return 0
		return a.created_at! < b.created_at! ? 1 : -1
	})

	// Timeline.Item components cannot be wrapped
	return (
		<Timeline>
			{ events.map((event, i) => {

				// Audit
				if(has(event, 'auditable_type')) {
					const audit = event as Schema.AuditedAudit
					return (
						<Timeline.Item key={ i } title={ `${capitalize(audit.action)}d` }>
							{ audit.person && <Text>
								by <Link href={ Routes.person(audit.person) }>{ audit.person.name }</Link>
							</Text> }
							{ audit.created_at && <Text size="sm">
								{ formatter.date.long(audit.created_at) }
							</Text> }
						</Timeline.Item>
					)

				// Assignment Return
				} else if(has(event, 'type') && event.type === RETURNED) {
					const assignment = event as TReturn
					return (
						<Timeline.Item key={ i } title="Returned">
							by <Link href={ polymorphicRoute(assignment.assign_toable_type, assignment.assign_toable_id) }>{ assignment.assign_toable.name }</Link>
							{ assignment.created_at && <Text size="sm">
								{ formatter.date.long(assignment.created_at) }
							</Text> }
						</Timeline.Item>
					)
				}

				// Assignment
				const assignment = event as Schema.Assignment
				return (
					<Timeline.Item key={ i } title="Assigned" active={ assignment.active }>
						to <Link href={ polymorphicRoute(assignment.assign_toable_type, assignment.assign_toable_id) }>{ assignment.assign_toable.name }</Link>
						{ assignment.created_at && <Text size="sm">
							{ formatter.date.long(assignment.created_at) }
						</Text> }
					</Timeline.Item>
				)
			}) }
		</Timeline>
	)
}

export default History
