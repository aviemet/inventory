import React from 'react'
import { Head } from '@inertiajs/inertia-react'
import { Popover, Option } from '@/Components/Popover'
import { Link } from '@/Components'
import { formatter, Routes } from '@/lib'
import tw from 'twin.macro'
import { StickyLink, StickyTarget } from '@/Components/StickyContent/index'

const ShowLicense = ({ license }) => {
	const title = license.name ?? 'License Details'
	return (
		<>
			<Head title={ title }></Head>

			<section className="container relative">
				<div tw="flex">
					<h1 tw="flex-1">{ title }</h1>

					<div>
						<Popover>
							{ license.assignments ?
								<Option href={ Routes.checkinLicense(license) }>
									Checkin License
								</Option>
								:
								<Option href={ Routes.checkoutLicense(license) }>
									Checkout License
								</Option>
							}
							<Option href={ Routes.editLicense(license) }>
								Edit License
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
				</nav>

				<StickyTarget id="details" />
				<section>
					<h3>Details</h3>

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
								{ license.category && <Link href={ Routes.categories(license.category) }>
									{ license.category!.name }
								</Link> }
							</div>
						</div>

						<div className="item-row">
							<label>Serial:</label>
							<div className="value">
								{ license.serial }
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
								{ license.asset_tag }
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
				</section>

				<StickyTarget id="history" />
				<section>
					<h3>Assignment History</h3>

					<div tw="inline-grid grid-cols-2">
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

				</section>

			</section>
		</>
	)
}

export default ShowLicense
