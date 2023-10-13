import React from 'react'
import { Section, Menu, Group, Heading, Tabs, Page } from '@/Components'
import { formatter, Routes } from '@/lib'
import { EditIcon } from '@/Components/Icons'

interface IShowPersonProps {
	person: Schema.PeopleShow
}

const tabs = {
	details: 'details',
	history: 'history',
	associations: 'associations',
}

const Show = ({ person }: IShowPersonProps) => {
	const title = person.name ?? 'Person Details'

	return (
		<Page title={ title } breadcrumbs={ [
			{ title: 'People', href: Routes.people() },
			{ title: person.name! },
		] }>
			<Section>
				<Group justify="space-between">
					<Heading>{ title }</Heading>

					<Menu position="bottom-end">
						<Menu.Target />
						<Menu.Dropdown>
							<Menu.Link href={ Routes.editPerson(person) } icon={ <EditIcon /> }>
								Edit Person
							</Menu.Link>
						</Menu.Dropdown>
					</Menu>
				</Group>

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
							{ person.possessions && person.possessions.filter(assignment => assignment.active).map(assignment => (
								<li key={ assignment.id }>{ assignment.assignable_type }</li>
							)) }
						</ul>
					</Tabs.Panel>

					<Tabs.Panel value="history">
						<Heading order={ 3 }>Assignment History</Heading>

						<div>
							{ person.possessions && person.possessions.reverse().map(assignment => (
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
							{ person.activities?.reverse().map(activity => {
								let message = ''
								if(activity.key) {
									message = activity.key.split('.')[1].toUpperCase()
								}

								return (
									<li key={ activity.id }>
										{ activity.created_at && `${message} at ${formatter.date.long(activity.created_at)}` }
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
		</Page>
	)
}

export default Show
