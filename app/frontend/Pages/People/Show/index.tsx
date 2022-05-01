import React from 'react'
import { Head } from '@inertiajs/inertia-react'
import { Link } from '@/Components'
import { formatter, Routes } from '@/lib'
import tw from 'twin.macro'
import { Popover, Option } from '@/Components/Popover'
import { StickyLink, StickyTarget } from '@/Components/StickyContent/index'

interface IShowPersonProps {
	person: Schema.Person & { name: string }
}

const Show = ({ person }: IShowPersonProps) => {
	const title = person.name ?? 'Person Details'

	return (
		<>
			<Head title={ title }></Head>

			<section className="container relative">
				<div tw="flex">
					<h1 tw="flex-1">{ title }</h1>

					<div>
						<Popover>
							<Option>
								<Link href={ Routes.editPerson(person) }>Edit Person</Link>
							</Option>
						</Popover>
					</div>
				</div>

				<nav className="sticky" tw="bg-white p-3 border-b-2 -top-4">
					<div tw="inline px-2">
						<StickyLink section="details">Details</StickyLink>
					</div>
					<div tw="inline px-2">
						<StickyLink section="assets">Assets</StickyLink>
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
							<label>Name:</label>
							<div className="value">
								{ person.name }
							</div>
						</div>

						<div className="item-row">
							<label>Employee #:</label>
							<div className="value">
								{ person.employee_number ?? person.employee_number }
							</div>
						</div>

					</div>
				</section>

				<StickyTarget id="assets" />
				<section>
					<h3>Assets</h3>

					<ul>
						{ person.posessions && person.posessions.filter(assignment => assignment.active).map(assignment => (
							<li key={ assignment.id }>{ assignment.assignable_type }</li>
						)) }
					</ul>
				</section>

				<StickyTarget id="history" />
				<section>
					<h3>Assignment History</h3>

					<div tw="inline-grid grid-cols-2">
						{ person.posessions && person.posessions.reverse().map(assignment => (
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
						{ person.audits?.reverse().map(audit => {
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

export default Show
