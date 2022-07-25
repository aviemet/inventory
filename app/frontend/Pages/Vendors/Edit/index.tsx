import React from 'react'
import { Head } from '@inertiajs/inertia-react'
import { Section, Tabs } from '@/Components'
import VendorForm from '../Form'
import { Routes } from '@/lib'

interface IUpdateVendorProps{
	vendor: Schema.Vendor
}

const tabs = {
	details: 'details',
	contact: 'contact',
}

const New = ({ vendor, ...models }: IUpdateVendorProps) => {
	const title = `Edit ${vendor.name}`

	return (
		<>
			<Head title={ title }></Head>

			<Section>
				<h1>{ title }</h1>

				<Tabs>
					<Tabs.List>
						<Tabs.Tab value={ tabs.details }>Details</Tabs.Tab>
						<Tabs.Tab value={ tabs.contact }>Contact Info</Tabs.Tab>
					</Tabs.List>

					<Tabs.Panel value={ tabs.details }>
						<VendorForm
							to={ Routes.vendor(vendor.slug) }
							method="patch"
							vendor={ vendor }
							{ ...models }
						/>
					</Tabs.Panel>

					<Tabs.Panel value={ tabs.contact }>

					</Tabs.Panel>
				</Tabs>
			</Section>
		</>
	)
}

export default New
