import React from 'react'
import { has } from 'lodash'
import { capitalize } from '@/lib'

import AssignmentHistoryContent from './AssignmentHistoryContent'
import AuditHistoryContent from './AuditHistoryContent'
import ReturnedHistoryContent from './ReturnedHistoryContent'

import { type TReturn } from '..'

export const buildTimelineData = (event: Schema.Assignment|Schema.AuditedAudit|TReturn) => {
	const timelineData = {
		title: '',
		content: <></>
	}

	// Audit
	if(has(event, 'auditable_type')) {
		timelineData.title = `${capitalize((event as Schema.AuditedAudit).action)}d`
		timelineData.content = <AuditHistoryContent event={ event } />

	// Assignment Return
	} else if(has(event, 'type') && (event as TReturn).type === 'return') {
		timelineData.title = 'Returned'
		timelineData.content = <ReturnedHistoryContent event={ event as TReturn } />

	// Assignment
	} else {
		timelineData.title = 'Assigned'
		timelineData.content = <AssignmentHistoryContent event={ event as Schema.Assignment } />
	}

	return timelineData
}
