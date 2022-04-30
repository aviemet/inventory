import React from 'react'
import { Link, Card } from '@/Components'
import { Routes } from '@/lib'
import tw from 'twin.macro'
import { Option, Popover } from '@/Components/Popover'

type ShowPageVendor = Schema.Vendor & {
	items_count: number
	accessories_count: number
	consumables_count: number
	components_count: number
}

interface IVendorShowProps {
	vendor: ShowPageVendor
}

const Show = ({ vendor }: IVendorShowProps) => {
	return (
		<>
			<section className="container" tw="mb-4">
				<div tw="flex justify-between">
					<h1>{
						vendor.url ?
							<Link href={ vendor.url } target="_blank" rel="noreferrer">{ vendor.name }</Link>
							:
							vendor.name
					}</h1>
					<Popover>
						<Option>
							<Link href={ Routes.editVendor(vendor.slug) }>Edit</Link>
						</Option>
					</Popover>
				</div>
			</section>

			<section className="container" tw="flex">
				<Card>
					<h3>Hardware</h3>
					<p>{ vendor.items_count }</p>
				</Card>

				<Card>
					<h3>Accessories</h3>
					<p>{ vendor.accessories_count }</p>
				</Card>

				<Card>
					<h3>Consumables</h3>
					<p>{ vendor.consumables_count }</p>
				</Card>

				<Card>
					<h3>Components</h3>
					<p>{ vendor.components_count }</p>
				</Card>
			</section>
		</>
	)
}

export default Show
