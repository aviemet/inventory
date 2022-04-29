import React from 'react'
import { Head } from '@inertiajs/inertia-react'
import { Link } from '@/Components'
import { formatter, Routes } from '@/lib'
import tw from 'twin.macro'
import { AProps } from 'react-html-props'
import { Popover, Option } from '@/Components/Popover'

interface IShowItemProps {
	item: Schema.Item
}

const Show = ({ item }: IShowItemProps) => {
	const title = item.name ?? 'Item Details'

	return (
		<>
			<Head title={ title }></Head>

			<section className="container relative">
				<div tw="flex">
					<h1 tw="flex-1">{ title }</h1>

					<div>
						<Popover>
							{ item.assignments ?
								<Option>
									<Link href={ Routes.checkinItem(item) }>Checkin Item</Link>
								</Option>
								:
								<Option>
									<Link href={ Routes.checkoutItem(item) }>Checkout Item</Link>
								</Option>
							}
							<Option>
								<Link href={ Routes.editItem(item) }>Edit Item</Link>
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
								{ item.manufacturer && <Link href={ Routes.manufacturer(item.manufacturer!) }>
									{ item.manufacturer!.name }
								</Link> }
							</div>
						</div>

						<div className="item-row">
							<label>Category:</label>
							<div className="value">
								{ item.category && <Link href={ Routes.categories(item.category) }>
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
				</section>

				<StickyTarget id="history" />
				<section>
					<h3>Assignment History</h3>

					<div tw="inline-grid grid-cols-2">
						{ item.assignments && item.assignments.reverse().map(assignment => (
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
						{ item.audits?.reverse().map(audit => {
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
						{ item.licenses && item.licenses.map(license => (
							<li key={ license.id }>{ license.name }</li>
						)) }
					</ul>
				</section>


			</section>
		</>
	)
}

export default Show

interface IStickyLinkProps extends Omit<AProps, 'href'> {
	section: string
}

const StickyLink = ({ children, section, ...props }: IStickyLinkProps) => {
	return (
		<a href={ `#${section}` } { ...props }>{ children }</a>
	)
}

interface IStickyTarget {
	id: string
}

const StickyTarget  = ({ id }: IStickyTarget) => {
	return (
		<a id={ id }></a>
	)
}
