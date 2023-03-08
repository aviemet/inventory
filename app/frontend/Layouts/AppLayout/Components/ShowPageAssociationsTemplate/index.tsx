import React from 'react'
import { Heading, Link, List, Icon, Box, Flex } from '@/Components'
import { polymorphicRoute, formatter, Routes } from '@/lib'
import { ArrowRightSquareIcon, CheckoutIcon } from '@/Components/Icons'
import { CheckinButton } from '@/Components/Button'

interface IShowPageAssociationsProps {
	assignToable: Schema.Item|Schema.Accessory|Schema.Consumable|Schema.Component|Schema.License
}

const ShowPageAssociations = ({ assignToable }: IShowPageAssociationsProps) => {
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
							<Flex>
								{ formatter.date.relative(assignment.created_at) }

								<Box sx={ { padding: '0 8px' } }><ArrowRightSquareIcon /></Box>

								<Link href={ polymorphicRoute(assignment.assign_toable_type, assignment.assign_toable_id) }>{ assignment.assign_toable.name }</Link>

								<CheckinButton href={ Routes.checkinAccessory(assignToable.id, assignment.id) } />
							</Flex>
						</List.Item>
					)
				)) }
			</List> }
		</Box>
	)
}

export default ShowPageAssociations
