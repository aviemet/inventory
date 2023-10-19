import { Heading, Link, Section, Table, Text } from '@/Components'
import { Routes } from '@/lib'
import React from 'react'

interface IShowUserProps {
	user: Schema.UsersShow
}

const ShowUser = ({ user }: IShowUserProps) => {
	return (
		<>
			<Section>
				<Heading>User: { user.email }</Heading>
				<Text my={ 10 }>User is active in the following companies</Text>
				<Table>
					<Table.Head>
						<Table.Row>
							<Table.Cell>Person</Table.Cell>
							<Table.Cell>Company</Table.Cell>
							<Table.Cell>Roles</Table.Cell>
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
