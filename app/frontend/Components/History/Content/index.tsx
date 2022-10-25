import React from 'react'
import { has } from 'lodash'
import { capitalize, polymorphicRoute } from '@/lib'
import { CircleDotIcon, CheckinIcon, CheckoutIcon } from '@/Components/Icons'
import AssignmentHistoryContent from './AssignmentHistoryContent'
import AuditHistoryContent from './AuditHistoryContent'
import ReturnedHistoryContent from './ReturnedHistoryContent'
import Link from '@/Components/Link'

type TTimelineData = {
	title: React.ReactNode
	content: React.ReactNode
	icon: React.ReactNode
	color: string
	lineStyle: 'dashed'|'dotted'|'solid'
}

export const buildTimelineData = (activity: Schema.PublicActivityActivity, assignment?: Schema.Assignment) => {
	console.log({ activity, assignment })
	const timelineData: TTimelineData = {
		title: activity.key ? `${capitalize(activity.key.split('.')[1])}d` : '',
		content: <></>,
		icon: <CircleDotIcon />,
		color: '',
		lineStyle: 'solid'
	}

	// Assignment
	if(activity.key === 'assignment.create') {
		if(activity.parameters) {
			timelineData.title = <>Assigned to <Link href={ polymorphicRoute(activity.parameters.assign_toable_type, activity.parameters.assign_toable_id) }>
				{ assignment ? assignment.assign_toable.name : '' }
			</Link> </>
		}
		timelineData.content = assignment ?
			<AssignmentHistoryContent activity={ activity } />
			:
			<></>
		timelineData.icon = <CheckoutIcon />
		timelineData.color = 'teal'
		timelineData.lineStyle = 'dashed'

	// Assignment Return
	} else if(activity.key === 'assignment.end') {
		timelineData.title = 'Returned'
		timelineData.content = <ReturnedHistoryContent activity={ activity } />
		timelineData.icon = <CheckinIcon />
		timelineData.color = 'teal'

	// Audit
	} else {
		timelineData.content = <AuditHistoryContent activity={ activity as Schema.PublicActivityActivity } />
		timelineData.lineStyle = 'dotted'
	}

	return timelineData
}
