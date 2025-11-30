
import { Link, Title, Table, Box, Badge, Money } from "@/components"
import { formatter, Routes } from "@/lib"

import AssignmentLink from "./AssignmentLink"

interface PersonDetailsProps {
	person: Schema.PeopleShow
}

const PersonDetails = ({ person }: PersonDetailsProps) => {
	return (
		<>
			<Title order={ 2 }>Details</Title>

			<Box style={ theme => ({ maxWidth: `${theme.breakpoints.sm}` }) }>
				<Table>
					<Table.Body>

						<Table.Row>
							<Table.Cell>Name</Table.Cell>
							<Table.Cell>{ person.name }</Table.Cell>
						</Table.Row>

						<Table.Row>
							<Table.Cell>Employee Number</Table.Cell>
							<Table.Cell>{ person.employee_number }</Table.Cell>
						</Table.Row>

						{ person?.department && <Table.Row>
							<Table.Cell>Department</Table.Cell>
							<Table.Cell>
								<Link href={ Routes.department(person.department.id) }>{ person.department.name }</Link>
							</Table.Cell>
						</Table.Row> }

						{ person?.location && <Table.Row>
							<Table.Cell>Location</Table.Cell>
							<Table.Cell>
								<Link href={ Routes.location(person.location.id!) }>{ person.location.name }</Link>
							</Table.Cell>
						</Table.Row> }

						{ person?.manager_id && <Table.Row>
							<Table.Cell>Manager</Table.Cell>
							<Table.Cell>
								<Link href={ Routes.person(person.manager_id) }>{ person.manager.name }</Link>
							</Table.Cell>
						</Table.Row> }

						<Table.Row>
							<Table.Cell>User</Table.Cell>
							<Table.Cell>
								<Link href={ Routes.user(person.user.id) }>
									{ person.user.email }
								</Link>
							</Table.Cell>
						</Table.Row>

					</Table.Body>
				</Table>
			</Box>
		</>
	)
}

export default PersonDetails
