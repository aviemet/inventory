import React from 'react'
import { Link } from '@/Components'
import { Routes } from '@/lib'
import { has } from 'lodash'
import { IShowItemProps } from '.'

type TPathOption = 'item'|'person'|'location'

const itemAssignment = (item: Schema.ItemsShow) => {
	if(!item.assigned || !item.assignments) return

	return item.assignments.find(assignment => assignment.active)
}

const AssignmentLink = ({ item }: IShowItemProps) => {
	const assignment = itemAssignment(item)

	if(!assignment) return <></>

	const path = Routes[assignment.assign_toable_type.toLowerCase() as TPathOption]
	// @ts-ignore
	const param = has(assignment.assign_toable, 'slug') ? assignment.assign_toable.slug : assignment.assign_toable_id

	return <Link href={ path(param) }>{ assignment.assign_toable.name }</Link>
}

export default AssignmentLink
