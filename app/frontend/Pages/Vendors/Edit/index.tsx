import React from 'react'
import { Heading, Page, Section, Tabs } from '@/Components'
import { Routes } from '@/lib'
import VendorForm from '../Form'

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
		<Page title={ title } breadcrumbs={ [
			{ title: 'Vendors', href: Routes.vendors() },
			{ title: vendor.name!, href: Routes.vendor(vendor) },
			{ title: 'Edit Vendor' },
		] }>
			<Section>
				<Heading>{ title }</Heading>

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
		</Page>
	)
}

export default New
