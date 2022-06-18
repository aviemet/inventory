import React from 'react'
import { Head } from '@inertiajs/inertia-react'
import { Popover, Option } from '@/Components/Popover'
import { Link, Section } from '@/Components'
import { formatter, Routes } from '@/lib'
import tw from 'twin.macro'
import { StickyLink, StickyTarget } from '@/Components/StickyContent/index'

interface IShowConsumableProps {
	consumable: Schema.Consumable
}

const ShowConsumable = ({ consumable }: IShowConsumableProps) => {
	const title = consumable.name ?? 'Consumable Details'
	return (
		<>
			<Head title={ title }></Head>

			<Section>
				<div tw="flex">
					<h1 tw="flex-1">{ title }</h1>

					<div tw="w-10 p-1">
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
				<Section>
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
				</Section>

				<StickyTarget id="history" />
				<Section>
					<h3>Assignment History</h3>

					<div tw="inline-grid grid-cols-2">
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

					<ul>
						{ consumable.licenses && consumable.licenses.map((license: Schema.License) => (
							<li key={ license.id }>{ license.name }</li>
						)) }
					</ul>
				</Section>
			</Section>
		</>
	)
}

export default ShowConsumable
