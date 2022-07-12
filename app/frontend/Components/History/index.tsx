import React from 'react'
import { has } from 'lodash'
import { Text, Timeline } from '@mantine/core'
import { formatter, capitalize, Routes } from '@/lib'
import { Link } from '@/Components'

type THistoryArray = (Schema.Assignment|Schema.AuditedAudit)[]

interface IHistoryProps {
	assignments?: Schema.Assignment[]
	audits?: Schema.AuditedAudit[]
}

const History = ({ assignments, audits }: IHistoryProps) => {
	const events: THistoryArray = []

	if(Array.isArray(assignments)) events.push(...assignments)
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
								by: <Link href={ Routes.person(audit.person) }>{ audit.person.name }</Link>
							</Text> }
							{ audit.created_at && <Text>
								{ formatter.date.long(audit.created_at) }
							</Text> }
						</Timeline.Item>
					)
				}
				// Assignment
				const assignment = event as Schema.Assignment
				return (
					<Timeline.Item key={ i } title="Assigned" active={ assignment.active }>
						{ assignment.assign_toable.name }
						{ assignment.created_at && <Text>{ formatter.date.long(assignment.created_at) }</Text> }
					</Timeline.Item>
				)
			}) }
		</Timeline>
	)
}

export default History
