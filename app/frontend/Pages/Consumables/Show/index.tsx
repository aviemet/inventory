import React from 'react'
import { Head } from '@inertiajs/inertia-react'
import { Section, Link, Menu, Flex, Heading, Tabs } from '@/Components'
import { formatter, Routes } from '@/lib'

interface IShowConsumableProps {
	consumable: Schema.Consumable
}

const tabs = {
	details: 'details',
	history: 'history',
	associations: 'associations',
}

const ShowConsumable = ({ consumable }: IShowConsumableProps) => {
	const title = consumable.name ?? 'Consumable Details'
	return (
		<>
			<Head title={ title }></Head>

			<Section>
				<Flex position="apart">
					<Heading sx={ { flex: 1 } }>{ title }</Heading>

					<Menu position="bottom-end">
						<Menu.Target />
						<Menu.Dropdown>
							{ consumable.assignments ?
								<Menu.Item href={ Routes.checkinConsumable(consumable) }>
									Checkin Consumable
								</Menu.Item>
								:
								<Menu.Item href={ Routes.checkoutConsumable(consumable) }>
									Checkout Consumable
								</Menu.Item>
							}
							<Menu.Item href={ Routes.editConsumable(consumable) }>
								Edit Consumable
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
									{ consumable.manufacturer && <Link href={ Routes.manufacturer(consumable.manufacturer!) }>
										{ consumable.manufacturer!.name }
									</Link> }
								</div>
							</div>

							<div className="item-row">
								<label>Category:</label>
								<div className="value">
									{ consumable.category && <Link href={ Routes.category(consumable.category.slug) }>
										{ consumable.category!.name }
									</Link> }
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
									{ consumable.cost && formatter.currency(consumable.cost, consumable.cost_currency) }
								</div>
							</div>

							<div className="item-row">
								<label>Vendor:</label>
								<div className="value">
									{ consumable.vendor && <Link href={ Routes.vendor(consumable.vendor.slug) }>
										{ consumable.vendor.name }
									</Link> }
								</div>
							</div>

							<div className="item-row">
								<label>Quantity:</label>
								<div className="value">
									{ consumable.qty || 0 }
								</div>
							</div>

						</div>
					</Tabs.Panel>

					<Tabs.Panel value="history">
						<Heading order={ 3 }>Assignment History</Heading>

						<div>
							{ consumable.assignments && consumable.assignments.reverse().map((assignment: Schema.Assignment) => (
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

						<h3>Audit History</h3>

						<ul>
							{ consumable.audits?.reverse().map((audit: Schema.AuditedAudit) => {
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

export default ShowConsumable
