import React from 'react'
import { Head } from '@inertiajs/inertia-react'
import { Section, Link, Menu, Flex, Heading, Tabs, Table } from '@/Components'
import { formatter, Routes } from '@/lib'

interface IShowLicenseProps {
	license: Schema.License
}

const ShowLicense = ({ license }: IShowLicenseProps) => {
	const title = license.name ?? 'License Details'
	return (
		<>
			<Head title={ title }></Head>
			<Section>
				<Flex position="apart">
					<Heading sx={ { flex: 1 } }>{ title }</Heading>

					<Menu>
						{ license.assignments ?
							<Menu.Item href={ Routes.checkinLicense(license) }>
									Checkin License
							</Menu.Item>
							:
							<Menu.Item href={ Routes.checkoutLicense(license) }>
									Checkout License
							</Menu.Item>
						}
						<Menu.Item href={ Routes.editLicense(license) }>
								Edit License
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
									{ license.manufacturer && <Link href={ Routes.manufacturer(license.manufacturer!) }>
										{ license.manufacturer!.name }
									</Link> }
								</div>
							</div>

							<div className="item-row">
								<label>Category:</label>
								<div className="value">
									{ license.category && <Link href={ Routes.category(license.category.slug) }>
										{ license.category!.name }
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
									{ license.cost && formatter.currency(license.cost, license.cost_currency) }
								</div>
							</div>

							<div className="item-row">
								<label>Purchase Date:</label>
								<div className="value">
									{ license.purchased_at && formatter.date.short(license.purchased_at) }
								</div>
							</div>

							<div className="item-row">
								<label>Vendor:</label>
								<div className="value">
									{ license.vendor && <Link href={ Routes.vendor(license.vendor.slug) }>
										{ license.vendor.name }
									</Link> }
								</div>
							</div>

						</div>
					</Tabs.Tab>

					<Tabs.Tab label="History">
						<Heading order={ 3 }>Assignment History</Heading>

						<div>
							{ license.assignments && license.assignments.reverse().map(assignment => (
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
							{ license.audits?.reverse().map(audit => {
								const message = audit.action === 'create' ? 'Created' : 'Updated'

								return (
									<li tw="mb-1" key={ audit.id }>
										{ audit.created_at && `${message} at ${formatter.date.long(audit.created_at)}` }
									</li>
								)
							}) }
						</ul>
					</Tabs.Tab>


					<Tabs.Tab label="Associations">
						<Heading order={ 3 }>Licenses</Heading>

					</Tabs.Tab>
				</Tabs>

			</Section>
		</>
	)
}

export default ShowLicense
