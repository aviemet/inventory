import React from 'react'
import { Head } from '@inertiajs/inertia-react'
import { Section, Menu, Flex, Heading, Tabs } from '@/Components'
import { formatter, Routes } from '@/lib'
import { EditIcon } from '@/Components/Icons'

interface IShowPersonProps {
	person: Schema.Person & { name: string }
}

const tabs = {
	details: 'details',
	history: 'history',
	associations: 'associations',
}

const Show = ({ person }: IShowPersonProps) => {
	const title = person.name ?? 'Person Details'

	return (
		<>
			<Head title={ title }></Head>

			<Section>
				<Flex position="apart">
					<Heading sx={ { flex: 1 } }>{ title }</Heading>

					<Menu>
						<Menu.Target />
						<Menu.Dropdown>
							<Menu.Item href={ Routes.editPerson(person) } icon={ <EditIcon /> }>
								Edit Person
							</Menu.Item>
						</Menu.Dropdown>
					</Menu>
				</Flex>

				<Tabs urlControlled={ true } defaultValue={ tabs.details }>
					<Tabs.List>
						<Tabs.Tab value={ tabs.details }>Details</Tabs.Tab>
						<Tabs.Tab value={ tabs.history }>History</Tabs.Tab>
						<Tabs.Tab value={ tabs.associations }>Associations</Tabs.Tab>
					</Tabs.List>

					<Tabs.Panel value="details">
						<Heading order={ 3 }>Details</Heading>

						<div className="item-details">

							<div className="item-row">
								<label>Name:</label>
								<div className="value">
									{ person.name }
								</div>
							</div>

							<div className="item-row">
								<label>Employee #:</label>
								<div className="value">
									{ person.employee_number ?? person.employee_number }
								</div>
							</div>

						</div>
						<h3>Assets</h3>

						<ul>
							{ person.posessions && person.posessions.filter(assignment => assignment.active).map(assignment => (
								<li key={ assignment.id }>{ assignment.assignable_type }</li>
							)) }
						</ul>
					</Tabs.Panel>

					<Tabs.Panel value="history">
						<Heading order={ 3 }>Assignment History</Heading>

						<div>
							{ person.posessions && person.posessions.reverse().map(assignment => (
								<React.Fragment key={ assignment.id }>
									<div>
								Link to assigntoable object
									</div>
									<div>
										{ assignment.assignable_type }
									</div>
								</React.Fragment>
							)) }
						</div>

						<Heading order={ 3 }>Audit History</Heading>


						<ul>
							{ person.audits?.reverse().map(audit => {
								const message = audit.action === 'create' ? 'Created' : 'Updated'

								return (
									<li key={ audit.id }>
										{ audit.created_at && `${message} at ${formatter.date.long(audit.created_at)}` }
									</li>
								)
							}) }
						</ul>

					</Tabs.Panel>

					<Tabs.Panel value="associations">
						<Heading order={ 3 }>Licenses</Heading>


					</Tabs.Panel>
				</Tabs>
			</Section>
		</>
	)
}

export default Show
