import pluralize from "pluralize"
import React, { useMemo } from "react"

import { Box, Title, Link } from "@/components"
import { polymorphicRoute } from "@/lib/index"

interface PersonAssociationsProps {
	person: Schema.PeopleShow
}

const Associations = ({ person }: PersonAssociationsProps) => {
	const groupedPossessions = useMemo(
		() => Object.groupBy(person.possessions, possession => possession.assignable_type),
		[person.possessions],
	)

	return (
		<Box>
			{ person?.possessions && Object.entries(groupedPossessions).map(([type, possessions]) => (
				<React.Fragment key={ type }>
					<Title order={ 2 }>{ pluralize(type) }</Title>

					<Box>
						{ Array.isArray(possessions) && possessions.map(possession => (
							<Link key={ possession.id } href={ polymorphicRoute(possession.assignable_type, possession.assignable_id) }>{ possession.assignable.name }</Link>
						),
						) }
					</Box>
				</React.Fragment>
			),
			) }
		</Box>
	)
}

export default Associations
