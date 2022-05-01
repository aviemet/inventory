import React from 'react'
import { Head } from '@inertiajs/inertia-react'
import { Popover, Option } from '@/Components/Popover'
import { Link } from '@/Components'
import { formatter, Routes } from '@/lib'
import tw from 'twin.macro'
import { StickyLink, StickyTarget } from '@/Components/StickyContent/index'

const ShowConsumable = ({ consumable }) => {
	const title = consumable.name ?? 'Consumable Details'
	return (
		<>
			<Head title={ title }></Head>

			<section className="container relative">
				<div tw="flex">
					<h1 tw="flex-1">{ title }</h1>

					<div>
						<Popover>
							{ consumable.assignments ?
								<Option href={ Routes.checkinConsumable(consumable) }>
									Checkin Consumable
								</Option>
								:
								<Option href={ Routes.checkoutConsumable(consumable) }>
									Checkout Consumable
								</Option>
							}
							<Option href={ Routes.editConsumable(consumable) }>
								Edit Consumable
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
				<section>
					<h3>Details</h3>

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
								{ consumable.category && <Link href={ Routes.categories(consumable.category) }>
									{ consumable.category!.name }
								</Link> }
							</div>
						</div>

						<div className="item-row">
							<label>Serial:</label>
							<div className="value">
								{ consumable.serial }
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
								{ consumable.asset_tag }
							</div>
						</div>

						<div className="item-row">
							<label>Purchase Cost:</label>
							<div className="value">
								{ consumable.cost && formatter.currency(consumable.cost, consumable.cost_currency) }
							</div>
						</div>

						<div className="item-row">
							<label>Purchase Date:</label>
							<div className="value">
								{ consumable.purchased_at && formatter.date.short(consumable.purchased_at) }
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
				</section>

				<StickyTarget id="history" />
				<section>
					<h3>Assignment History</h3>

					<div tw="inline-grid grid-cols-2">
						{ consumable.assignments && consumable.assignments.reverse().map(assignment => (
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
						{ consumable.audits?.reverse().map(audit => {
							const message = audit.action === 'create' ? 'Created' : 'Updated'

							return (
								<li tw="mb-1" key={ audit.id }>
									{ audit.created_at && `${message} at ${formatter.date.long(audit.created_at)}` }
								</li>
							)
						}) }
					</ul>

				</section>

				<StickyTarget id="licenses" />
				<section>
					<h3>Licenses</h3>

					<ul>
						{ consumable.licenses && consumable.licenses.map(license => (
							<li key={ license.id }>{ license.name }</li>
						)) }
					</ul>
				</section>
			</section>
		</>
	)
}

export default ShowConsumable
