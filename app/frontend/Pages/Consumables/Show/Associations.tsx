import React from 'react'
import { Heading, Link, List, Icon, Box } from '@/Components'
import { polymorphicRoute, formatter } from '@/lib'
import { ArrowRightSquareIcon, CheckoutIcon } from '@/Components/Icons'

interface IConsumableAssociationsProps {
	consumable: Schema.Consumable
}
const Associations = ({ consumable }: IConsumableAssociationsProps) => {
	return (
		<>
			<Heading order={ 3 }>Assignments</Heading>

			{ consumable.assignments && <List icon={
				<Icon color="teal" size={ 24 } radius="xl">
					<CheckoutIcon size={ 16 } />
				</Icon>
			}>
				{ consumable.assignments.map(assignment => (
					assignment.active && (
						<List.Item key={ assignment.id }>
							{ formatter.date.relative(assignment.created_at) }

							<Box sx={ { padding: '0 8px' } }><ArrowRightSquareIcon /></Box>

							<Link href={ polymorphicRoute(assignment.assign_toable_type, assignment.assign_toable_id) }>{ assignment.assign_toable.name }</Link>
						</List.Item>
					)
				)) }
			</List> }
		</>
	)
}

export default Associations
