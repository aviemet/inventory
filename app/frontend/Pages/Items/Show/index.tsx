import React from 'react'
import { Head } from '@inertiajs/inertia-react'
import { Section, Link, Menu, Flex, Heading, Tabs, Table } from '@/Components'
import { formatter, Routes } from '@/lib'

interface IShowItemProps {
	item: Schema.Item
}

const Show = ({ item }: IShowItemProps) => {
	const title = item.name ?? 'Item Details'

	return (
		<>
			<Head title={ title }></Head>

			<Section>
				<Flex position="apart">
					<Heading sx={ { flex: 1 } }>{ title }</Heading>

					<Menu>
						{ item.assignments ?
							<Menu.Item href={ Routes.checkinItem(item) }>
									Checkin Item
							</Menu.Item>
							:
							<Menu.Item href={ Routes.checkoutItem(item) }>
									Checkout Item
							</Menu.Item>
						}
						<Menu.Item href={ Routes.editItem(item) }>
								Edit Item
						</Menu.Item>
					</Menu>
				</Flex>

				<Tabs>
					<Tabs.Tab label="Details">
						<Section>
							<Heading order={ 3 }>Details</Heading>

							<Table>
								<Table.Head>

								</Table.Head>
							</Table>

							<div className="item-details">

								<div className="item-row">
									<label>Model:</label>
									<div className="value">
										{ item.manufacturer && <Link href={ Routes.manufacturer(item.manufacturer!) }>
											{ item.manufacturer!.name }
										</Link> }
									</div>
								</div>

								<div className="item-row">
									<label>Category:</label>
									<div className="value">
										{ item.category && <Link href={ Routes.category(item.category.slug) }>
											{ item.category!.name }
										</Link> }
									</div>
								</div>

								<div className="item-row">
									<label>Serial:</label>
									<div className="value">
										{ item.serial }
									</div>
								</div>

								<div className="item-row">
									<label>Assigned To:</label>
									<div className="value">
								Figure this out
									</div>
								</div>

								<div className="item-row">
									<label>Asset Tag:</label>
									<div className="value">
										{ item.asset_tag }
									</div>
								</div>

								<div className="item-row">
									<label>Purchase Cost:</label>
									<div className="value">
										{ item.cost && formatter.currency(item.cost, item.cost_currency) }
									</div>
								</div>

								<div className="item-row">
									<label>Purchase Date:</label>
									<div className="value">
										{ item.purchased_at && formatter.date.short(item.purchased_at) }
									</div>
								</div>

								<div className="item-row">
									<label>Vendor:</label>
									<div className="value">
										{ item.vendor && <Link href={ Routes.vendor(item.vendor.slug) }>
											{ item.vendor.name }
										</Link> }
									</div>
								</div>

							</div>
						</Section>
					</Tabs.Tab>

					<Tabs.Tab label="History">
						<Section>
							<Heading order={ 3 }>Assignment History</Heading>

							<div>
								{ item.assignments && item.assignments.reverse().map(assignment => (
									<React.Fragment key={ assignment.id }>
										<div>Link to assigntoable object</div>
										<div>
											{ assignment.assignable_type }
										</div>
									</React.Fragment>
								)) }
							</div>

							<h3>Audit History</h3>

							<ul>
								{ item.audits?.reverse().map(audit => {
									const message = audit.action === 'create' ? 'Created' : 'Updated'

									return (
										<li key={ audit.id }>
											{ audit.created_at && `${message} at ${formatter.date.long(audit.created_at)}` }
										</li>
									)
								}) }
							</ul>

						</Section>
					</Tabs.Tab>

					<Tabs.Tab label="Associations">
						<Section>
							<Heading order={ 3 }>Licenses</Heading>

							<ul>
								{ item.licenses && item.licenses.map(license => (
									<li key={ license.id }>{ license.name }</li>
								)) }
							</ul>
						</Section>

					</Tabs.Tab>
				</Tabs>


			</Section>
		</>
	)
}

export default Show
