import { has } from "lodash"
import React from "react"

import { Link } from "@/components"
import { Routes } from "@/lib"

type PathOption = "item" | "person" | "location"

const itemAssignment = (item: Schema.ItemsShow) => {
	if(!item.assigned || !item.assignments) return

	return item.assignments.find(assignment => assignment.active)
}

interface ItemAssignmentLinkProps {
	item: Schema.ItemsShow
}

const AssignmentLink = ({ item }: ItemAssignmentLinkProps) => {
	const assignment = itemAssignment(item)

	if(!assignment) return <></>

	const path = Routes[assignment.assign_toable_type.toLowerCase() as PathOption]

	const param = has(assignment.assign_toable, "slug") ?
		assignment.assign_toable.slug as string :
		assignment.assign_toable_id

	return <Link href={ path(param) }>{ assignment.assign_toable.name }</Link>
}

export default AssignmentLink
