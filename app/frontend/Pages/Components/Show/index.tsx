import React from 'react'
import { Head } from '@inertiajs/inertia-react'
import { Section, Link, Menu, Flex, Heading, Tabs } from '@/Components'
import { formatter, Routes } from '@/lib'

interface IShowComponentProps {
	component: Schema.Component
}

const tabs = {
	details: 'details',
	history: 'history',
	associations: 'associations',
}

const ShowComponent = ({ component }: IShowComponentProps) => {
	const title = component.name ?? 'Component Details'

	return (
		<>
			<Head title={ title }></Head>

			<Section>
				<Flex position="apart">
					<Heading sx={ { flex: 1 } }>{ title }</Heading>

					<Menu>
						<Menu.Target />
						<Menu.Dropdown>
							{ component.assignments ?
								<Menu.Item href={ Routes.checkinComponent(component) }>
									Checkin Component
								</Menu.Item>
								:
								<Menu.Item href={ Routes.checkoutComponent(component) }>
									Checkout Component
								</Menu.Item>
							}
							<Menu.Item href={ Routes.editComponent(component) }>
								Edit Component
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
								<label>Model:</label>
								<div className="value">
									{ component.manufacturer && <Link href={ Routes.manufacturer(component.manufacturer!) }>
										{ component.manufacturer!.name }
									</Link> }
								</div>
							</div>

							<div className="item-row">
								<label>Category:</label>
								<div className="value">
									{ component.category && <Link href={ Routes.category(component.category.slug) }>
										{ component.category!.name }
									</Link> }
								</div>
							</div>

							<div className="item-row">
								<label>Serial:</label>
								<div className="value">
									{ component.serial }
								</div>
							</div>

							<div className="item-row">
								<label>Assigned To:</label>
								<div className="value">
								Figure this out
								</div>
							</div>

							<div className="item-row">
								<label>Purchase Cost:</label>
								<div className="value">
									{ component.cost && formatter.currency(component.cost, component.cost_currency) }
								</div>
							</div>

							<div className="item-row">
								<label>Purchase Date:</label>
								<div className="value">
									{ component.purchased_at && formatter.date.short(component.purchased_at) }
								</div>
							</div>

							<div className="item-row">
								<label>Vendor:</label>
								<div className="value">
									{ component.vendor && <Link href={ Routes.vendor(component.vendor.slug) }>
										{ component.vendor.name }
									</Link> }
								</div>
							</div>

						</div>
					</Tabs.Panel>

					<Tabs.Panel value="history">

						<Heading order={ 3 }>Assignment History</Heading>

						<div>
							{ component.assignments && component.assignments.reverse().map(assignment => (
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
							{ component.audits?.reverse().map(audit => {
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

export default ShowComponent
