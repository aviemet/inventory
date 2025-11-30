
import { Title, Link, Section, Table, Text } from "@/components"
import { Routes } from "@/lib"

interface ShowUserProps {
	user: Schema.UsersShow
}

const ShowUser = ({ user }: ShowUserProps) => {
	return (
		<>
			<Section>
				<Title>User: { user.email }</Title>
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
