import React from 'react'
import { Head } from '@inertiajs/inertia-react'
import { Section, Tabs } from '@/Components'
import VendorForm from '../Form'
import { Routes } from '@/lib'

interface IUpdateVendorProps{
	vendor: Schema.Vendor
}

const New = ({ vendor, ...models }: IUpdateVendorProps) => {
	const title = `Edit ${vendor.name}`

	return (
		<>
			<Head title={ title }></Head>

			<Section>
				<h1>{ title }</h1>

				<Tabs>
					<Tabs.Tab label="Details">
						<VendorForm to={ Routes.vendor(vendor.slug) } method="patch" vendor={ vendor } { ...models } />
					</Tabs.Tab>

					<Tabs.Tab label="Contact Info">

					</Tabs.Tab>
				</Tabs>
			</Section>
		</>
	)
}

export default New
