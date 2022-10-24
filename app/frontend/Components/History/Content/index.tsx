import React from 'react'
import { has } from 'lodash'
import { capitalize } from '@/lib'
import { CircleDotIcon, CheckinIcon, CheckoutIcon } from '@/Components/Icons'
import AssignmentHistoryContent from './AssignmentHistoryContent'
import AuditHistoryContent from './AuditHistoryContent'
import ReturnedHistoryContent from './ReturnedHistoryContent'

import { type TReturn } from '..'

type TTimelineData = {
	title: string
	content: React.ReactNode
	icon: React.ReactNode
	color: string
	lineStyle: 'dashed'|'dotted'|'solid'
}

export const buildTimelineData = (event: Schema.Assignment|Schema.PublicActivityActivity|TReturn) => {
	const timelineData: TTimelineData = {
		title: '',
		content: <></>,
		icon: <CircleDotIcon />,
		color: '',
		lineStyle: 'solid'
	}

	// Audit
	if(has(event, 'auditable_type')) {
		timelineData.title = `${capitalize((event as Schema.PublicActivityActivity).action)}d`
		timelineData.content = <AuditHistoryContent event={ event } />
		timelineData.lineStyle = 'dotted'

	// Assignment Return
	} else if(has(event, 'type') && (event as TReturn).type === 'return') {
		timelineData.title = 'Returned'
		timelineData.content = <ReturnedHistoryContent event={ event as TReturn } />
		timelineData.icon = <CheckinIcon />
		timelineData.color = 'teal'

	// Assignment
	} else {
		timelineData.title = 'Assigned'
		timelineData.content = <AssignmentHistoryContent event={ event as Schema.Assignment } />
		timelineData.icon = <CheckoutIcon />
		timelineData.color = 'teal'
		timelineData.lineStyle = 'dashed'
	}

	return timelineData
}
