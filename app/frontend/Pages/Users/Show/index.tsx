import { Heading, Link, Section, Table, Text } from '@/Components'
import { Routes } from '@/lib'
import React from 'react'

interface ShowUserProps {
	user: Schema.UsersShow
}

const ShowUser = ({ user }: ShowUserProps) => {
	return (
		<>
			<Section>
				<Heading>User: { user.email }</Heading>
				<Text my={ 10 }>User is active in the following companies</Text>
				<Table>
					<Table.Head>
						<Table.Row>
							<Table.HeadCell>Person</Table.HeadCell>
							<Table.HeadCell>Company</Table.HeadCell>
							<Table.HeadCell>Roles</Table.HeadCell>
						</Table.Row>
					</Table.Head>
					<Table.Body>
						{ user.people.map(person => (
							<Table.Row key={ person.id }>
								<Table.Cell><Link href={ Routes.person(person.id) }>{ person.name }</Link></Table.Cell>
								<Table.Cell><Link href={ Routes.company(person.company.slug) }>{ person.company.name }</Link></Table.Cell>
								<Table.Cell></Table.Cell>
							</Table.Row>
						)) }
					</Table.Body>
				</Table>
			</Section>

		</>
	)
}

export default ShowUser
