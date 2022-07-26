import React from 'react'
import { Head } from '@inertiajs/inertia-react'
import { Section, Link, Menu, Flex, Heading, Tabs } from '@/Components'
import { formatter, Routes } from '@/lib'

interface IShowAccessoryProps {
	accessory: Schema.Accessory
}

const tabs = {
	details: 'details',
	history: 'history',
	associations: 'associations',
}

const ShowAccessory = ({ accessory }: IShowAccessoryProps) => {
	const title = accessory.name ?? 'Accessory Details'

	return (
		<>
			<Head title={ title }></Head>

			<Section>
				<Flex>
					<Heading sx={ { flex: 1 } }>{ title }</Heading>
					<Menu>
						<Menu.Target />
						<Menu.Dropdown>
							{ accessory.assignments ?
								<Menu.Item href={ Routes.checkinAccessory(accessory) }>
									Checkin Accessory
								</Menu.Item>
								:
								<Menu.Item href={ Routes.checkoutAccessory(accessory) }>
									Checkout Accessory
								</Menu.Item>
							}
							<Menu.Item href={ Routes.editAccessory(accessory) }>
								Edit Accessory
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
									{ accessory.manufacturer && <Link href={ Routes.manufacturer(accessory.manufacturer!) }>
										{ accessory.manufacturer!.name }
									</Link> }
								</div>
							</div>

							<div className="item-row">
								<label>Category:</label>
								<div className="value">
									{ accessory.category && <Link href={ Routes.category(accessory.category.slug) }>
										{ accessory.category!.name }
									</Link> }
								</div>
							</div>

							<div className="item-row">
								<label>Serial:</label>
								<div className="value">
									{ accessory.serial }
								</div>
							</div>

							<div className="item-row">
								<label>Quantity:</label>
								<div className="value">
									{ accessory.qty !== undefined && accessory.qty !== null && accessory.qty >= 0 ? accessory.qty - accessory?.assignments!.length : 0 } / { accessory.qty }
								</div>
							</div>

							<div className="item-row">
								<label>Asset Tag:</label>
								<div className="value">
									{ accessory.asset_tag }
								</div>
							</div>

							<div className="item-row">
								<label>Purchase Cost:</label>
								<div className="value">
									{ accessory.cost && formatter.currency(accessory.cost, accessory.cost_currency) }
								</div>
							</div>

							<div className="item-row">
								<label>Purchase Date:</label>
								<div className="value">

								</div>
							</div>

							<div className="item-row">
								<label>Vendor:</label>
								<div className="value">
									{ accessory.vendor && <Link href={ Routes.vendor(accessory.vendor.slug) }>
										{ accessory.vendor.name }
									</Link> }
								</div>
							</div>

						</div>
					</Tabs.Panel>

					<Tabs.Panel value="history">
						<Heading order={ 3 }>Assignment History</Heading>

						<div tw="inline-grid grid-cols-2">
							{ accessory.assignments && accessory.assignments.reverse().map(assignment => (
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
							{ accessory.audits?.reverse().map(audit => {
								const message = audit.action === 'create' ? 'Created' : 'Updated'

								return (
									<li tw="mb-1" key={ audit.id }>
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

export default ShowAccessory
