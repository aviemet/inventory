import React from 'react'
import { Head } from '@inertiajs/inertia-react'
import { Popover, Option } from '@/Components/Popover'
import { Link, Section } from '@/Components'
import { formatter, Routes } from '@/lib'
import tw from 'twin.macro'
import { StickyLink, StickyTarget } from '@/Components/StickyContent/index'

interface IShowAccessoryProps {
	accessory: Schema.Accessory
}

const ShowAccessory = ({ accessory }: IShowAccessoryProps) => {
	const title = accessory.name ?? 'Accessory Details'

	return (
		<>
			<Head title={ title }></Head>

			<Section>
				<div tw="flex">
					<h1 tw="flex-1">{ title }</h1>

					<div tw="w-10 p-1">
						<Popover>
							{ accessory.assignments ?
								<Option href={ Routes.checkinAccessory(accessory) }>
									Checkin Accessory
								</Option>
								:
								<Option href={ Routes.checkoutAccessory(accessory) }>
									Checkout Accessory
								</Option>
							}
							<Option href={ Routes.editAccessory(accessory) }>
								Edit Accessory
							</Option>
						</Popover>
					</div>
				</div>

				<nav className="sticky" tw="bg-white p-3 border-b-2 -top-4">
					<div tw="inline px-2">
						<StickyLink section="details">Details</StickyLink>
					</div>
					<div tw="inline px-2">
						<StickyLink section="history">History</StickyLink>
					</div>
					<div tw="inline px-2">
						<StickyLink section="licenses">Licenses</StickyLink>
					</div>
				</nav>

				<StickyTarget id="details" />
				<Section>
					<h3>Details</h3>

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
								{ accessory.category && <Link href={ Routes.categories(accessory.category) }>
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
				</Section>

				<StickyTarget id="history" />
				<Section>
					<h3>Assignment History</h3>

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

					<h3>Audit History</h3>

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

				</Section>

				<StickyTarget id="licenses" />
				<Section>
					<h3>Licenses</h3>


				</Section>
			</Section>
		</>
	)
}

export default ShowAccessory
