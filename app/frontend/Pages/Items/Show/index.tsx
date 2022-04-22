import React from 'react'
import { Head } from '@inertiajs/inertia-react'
import { Link } from '@/Components'
import { Routes } from '@/lib'
import tw from 'twin.macro'
import { AProps } from 'react-html-props'

interface IShowItemProps {
	item: Schema.Item
}

const Show = ({ item }: IShowItemProps) => {
	const title = item.name ?? 'Item Details'

	return (
		<>
			<Head title={ title }></Head>

			<section className="container relative">
				<h1 tw="flex-1">{ title }</h1>

				<span>
					{ /* actions menu */ }
				</span>

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
								<Link href={ Routes.manufacturer(item.manufacturer!) }>
									{ item.manufacturer!.name }
								</Link>
							</div>
						</div>
					</div>
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
