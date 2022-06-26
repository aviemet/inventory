import React from 'react'
import { Head } from '@inertiajs/inertia-react'
import { Section, Link, Menu, Flex, Heading, Tabs, Table } from '@/Components'
import { formatter, Routes } from '@/lib'

interface IShowConsumableProps {
	consumable: Schema.Consumable
}

const ShowConsumable = ({ consumable }: IShowConsumableProps) => {
	const title = consumable.name ?? 'Consumable Details'
	return (
		<>
			<Head title={ title }></Head>

			<Section>
				<Flex position="apart">
					<Heading sx={ { flex: 1 } }>{ title }</Heading>

					<Menu>
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
					</Menu>
				</Flex>

				<Tabs>
					<Tabs.Tab label="Details">
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

						</div>
					</Tabs.Tab>

					<Tabs.Tab label="History">
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

					</Tabs.Tab>

					<Tabs.Tab label="Associations">
					</Tabs.Tab>
				</Tabs>

			</Section>
		</>
	)
}

export default ShowConsumable
