import React from 'react'
import { Section, Link, Menu, Flex, Heading, Tabs, Page } from '@/Components'
import { formatter, Routes } from '@/lib'

interface IShowLicenseProps {
	license: Schema.License
}

const tabs = {
	details: 'details',
	history: 'history',
	associations: 'associations',
}

const ShowLicense = ({ license }: IShowLicenseProps) => {
	const title = license.name ?? 'License Details'
	return (
		<Page title={ title } breadcrumbs={ [
			{ title: 'Licenses', href: Routes.licenses() },
			{ title: license.name! },
		] }>
			<Section>
				<Flex position="apart">
					<Heading sx={ { flex: 1 } }>{ title }</Heading>

					<Menu>
						<Menu.Target />
						<Menu.Dropdown>
							{ /* license.assignments ?
								<Menu.Link href={ Routes.checkinLicense(license) }>
									Checkin License
								</Menu.Link>
								:
								<Menu.Link href={ Routes.checkoutLicense(license) }>
									Checkout License
								</Menu.Link>
							*/ }
							<Menu.Link href={ Routes.editLicense(license) }>
								Edit License
							</Menu.Link>
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
					</Tabs.Panel>

					<Tabs.Panel value="history">
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
							{ license.activities?.reverse().map(activity => {
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

export default ShowLicense
