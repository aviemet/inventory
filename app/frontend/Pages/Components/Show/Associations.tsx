import React from 'react'
import { Heading, Link, List, Icon, Box } from '@/Components'
import { polymorphicRoute, formatter, Routes } from '@/lib'
import { ArrowRightSquareIcon, CheckoutIcon } from '@/Components/Icons'
import { CheckinButton } from '@/Components/Button'

interface IComponentAssociationsProps {
	component: Schema.Component
}
const Associations = ({ component }: IComponentAssociationsProps) => {
	return (
		<>
			<Heading order={ 3 }>Assignments</Heading>

			{ component.assignments && <List icon={
				<Icon color="teal" size={ 24 } radius="xl">
					<CheckoutIcon size={ 16 } />
				</Icon>
			}>
				{ component.assignments.map(assignment => (
					assignment.active && (
						<List.Item key={ assignment.id }>
							{ formatter.date.relative(assignment.created_at) }

							<Box sx={ { padding: '0 8px' } }><ArrowRightSquareIcon /></Box>

							<Link href={ polymorphicRoute(assignment.assign_toable_type, assignment.assign_toable_id) }>{ assignment.assign_toable.name }</Link>

							<CheckinButton href={ Routes.checkinComponent(component.id, assignment.id) } />
						</List.Item>
					)
				)) }
			</List> }
		</>
	)
}

export default Associations
