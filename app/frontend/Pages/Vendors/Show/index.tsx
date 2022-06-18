import React from 'react'
import { Link, Card, Section } from '@/Components'
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
			<Section tw="mb-4">
				<div tw="flex justify-between">
					<h1>{
						vendor.url ?
							<Link href={ vendor.url } target="_blank" rel="noreferrer">{ vendor.name }</Link>
							:
							vendor.name
					}</h1>

					<div tw="w-10 p-1">
						<Popover>
							<Option href={ Routes.editVendor(vendor.slug) }>
							Edit
							</Option>
						</Popover>
					</div>
				</div>
			</Section>

			<Section tw="flex">
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
			</Section>
		</>
	)
}

export default Show
