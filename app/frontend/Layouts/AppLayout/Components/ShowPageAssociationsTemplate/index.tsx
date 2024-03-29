import React from 'react'
import { Heading, Link, List, Icon, Box, Group } from '@/Components'
import { polymorphicRoute, formatter } from '@/lib'
import { ArrowRightSquareIcon, CheckoutIcon } from '@/Components/Icons'
import { CheckinButton } from '@/Components/Button'

interface IShowPageAssociationsProps {
	assignToable: Schema.Item|Schema.Accessory|Schema.Consumable|Schema.Component|Schema.License
	checkinRoute?: (assignToableId: string|number, assignmentId: string|number) => string
}

const ShowPageAssociations = ({ assignToable, checkinRoute }: IShowPageAssociationsProps) => {
	return (
		<Box mt={ 16 }>
			<Heading order={ 3 }>Active Assignments</Heading>

			{ assignToable.assignments && <List mt={ 16 } icon={
				<Icon color="teal" size={ 24 } radius="xl">
					<CheckoutIcon size={ 16 } />
				</Icon>
			}>
				{ assignToable.assignments.map(assignment => (
					assignment.active && (
						<List.Item key={ assignment.id }>
							<Group>
								{ formatter.date.relative(assignment.created_at) }

								<Box style={ { padding: '0 8px' } }><ArrowRightSquareIcon /></Box>

								{ assignment.qty && <span>x{ assignment.qty } to </span> }

								<Link href={ polymorphicRoute(assignment.assign_toable_type, assignment.assign_toable_id) }>
									{ assignment.assign_toable.name }
								</Link>

								{ checkinRoute && <CheckinButton href={ checkinRoute(assignToable.id, assignment.id) } /> }
							</Group>
						</List.Item>
					)
				)) }
			</List> }
		</Box>
	)
}

export default ShowPageAssociations
