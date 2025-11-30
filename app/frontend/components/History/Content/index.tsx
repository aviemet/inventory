import React from "react"

import { Link } from "@/components"
import { CircleDotIcon, CheckinIcon, CheckoutIcon } from "@/components/Icons"
import { capitalize, polymorphicRoute } from "@/lib"

import AssignmentHistoryContent from "./AssignmentHistoryContent"
import AuditHistoryContent from "./AuditHistoryContent"
import ReturnedHistoryContent from "./ReturnedHistoryContent"

type TimelineData = {
	title: React.ReactNode
	content: React.ReactNode
	icon: React.ReactNode
	color: string
	lineStyle: "dashed" | "dotted" | "solid"
}

export const buildTimelineData = (
	activity: Schema.Activity,
	assignment?: Schema.Assignment,
) => {
	const timelineData: TimelineData = {
		title: activity.key ? `${capitalize(activity.key.split(".")[1])}d` : "",
		content: <></>,
		icon: <CircleDotIcon />,
		color: "",
		lineStyle: "solid",
	}

	// Assignment
	if(activity.key === "assignment.create") {
		if(activity.parameters) {
			timelineData.title = <>Assigned to <Link href={ polymorphicRoute(activity.parameters.assign_toable_type, activity.parameters.assign_toable_id) }>
				{ assignment ? assignment.assign_toable.name : "" }
			</Link> </>
		}
		timelineData.content = assignment ?
			<AssignmentHistoryContent activity={ activity } />
			:
			<></>
		timelineData.icon = <CheckoutIcon />
		timelineData.color = "teal"
		timelineData.lineStyle = "dashed"

	// Assignment Return
	} else if(activity.key === "assignment.end") {
		timelineData.title = "Returned"
		timelineData.content = <ReturnedHistoryContent activity={ activity } />
		timelineData.icon = <CheckinIcon />
		timelineData.color = "teal"

	// Audit
	} else {
		timelineData.content = <AuditHistoryContent activity={ activity as Schema.Activity } />
		timelineData.lineStyle = "dotted"
	}

	return timelineData
}
