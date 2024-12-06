import React from 'react'
import { Title, Link, List, Icon, Box, Group } from '@/Components'
import { polymorphicRoute, formatter } from '@/lib'
import { ArrowRightSquareIcon, CheckoutIcon } from '@/Components/Icons'
import { CheckinButton } from '@/Components/Button'

interface ShowPageAssociationsProps {
	assignable: Schema.ItemsShow | Schema.AccessoriesShow | Schema.ConsumablesShow | Schema.ComponentsShow | Schema.LicensesShow
	checkinRoute?: (assignableId: string | number, assignmentId: string | number) => string
}

const ShowPageAssociations = ({ assignable, checkinRoute }: ShowPageAssociationsProps) => {
	return (
		<Box mt={ 16 }>
			<Title order={ 3 }>Active Assignments</Title>

			{ assignable.assignments && <List mt={ 16 } icon={
				<Icon color="teal" size={ 24 } radius="xl">
					<CheckoutIcon size={ 16 } />
				</Icon>
			}>
				{ assignable.assignments.map(assignment => (
					assignment.active && (
						<List.Item key={ assignment.id }>
							<Group>
								{ formatter.date.relative(assignment.created_at) }

								<Box style={ { padding: '0 8px' } }><ArrowRightSquareIcon /></Box>

								{ assignment.qty && <span>x{ assignment.qty } to </span> }

								<Link href={ polymorphicRoute(assignment.assign_toable_type, assignment.assign_toable_id) }>
									{ assignment.assign_toable.name }
								</Link>

								{ checkinRoute && <CheckinButton href={ checkinRoute(assignable.id, assignment.id) } /> }
							</Group>
						</List.Item>
					)
				)) }
			</List> }
		</Box>
	)
}

export default ShowPageAssociations
