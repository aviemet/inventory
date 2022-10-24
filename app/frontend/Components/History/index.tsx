import React, { useCallback } from 'react'
import { Timeline } from '@mantine/core'
import { buildTimelineData } from './Content'

const RETURNED = 'return'

export type TReturn = {
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
export type THistory = Schema.Assignment|Schema.PublicActivityActivity|TReturn

interface IHistoryProps {
	assignments?: Schema.Assignment[]
	audits?: Schema.PublicActivityActivity[]
}

const History = ({ assignments, audits }: IHistoryProps) => {

	const sortedEvents = useCallback(() => {
		const events: THistory[] = []

		if(Array.isArray(assignments)) {
			events.push(...assignments)

			assignments.forEach(assignment => {
				if(assignment.returned_at) {
					events.push({
						id: assignment.id,
						type: RETURNED,
						assignable_type: assignment.assignable_type,
						assignable_id: assignment.assignable_id,
						assign_toable_type: assignment.assign_toable_type,
						assign_toable_id: assignment.assign_toable_id,
						assign_toable: assignment.assign_toable,
						qty: assignment.qty,
						created_at: assignment.returned_at,
					})
				}
			})
		}

		if(Array.isArray(audits)) events.push(...audits)

		events.sort((a, b) => {
			if(a.created_at === b.created_at) return 0
			return a.created_at! < b.created_at! ? 1 : -1
		})

		return events
	}, [assignments, audits])

	// Timeline.Item components cannot be wrapped, so the content has been componentized instead
	// https://mantine.dev/core/timeline/#wrap-timelineitem
	return (
		<Timeline active={ sortedEvents().length }>
			{ sortedEvents().map((event, i) => {
				const timelineData = buildTimelineData(event)

				return (
					<Timeline.Item key={ i } title={ timelineData.title } bullet={ timelineData.icon } bulletSize={ 24 } color={ timelineData.color } lineVariant={ timelineData.lineStyle }>
						{ timelineData.content }
					</Timeline.Item>
				)

			}) }
		</Timeline>
	)
}

export default History
