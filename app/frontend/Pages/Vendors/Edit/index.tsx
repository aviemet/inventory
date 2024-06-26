import React from 'react'
import { Heading, Page, Section } from '@/Components'
import { Routes } from '@/lib'
import VendorForm from '../Form'

interface UpdateVendorProps{
	vendor: Schema.VendorsEdit
}

const EditVendor = ({ vendor, ...models }: UpdateVendorProps) => {
	const title = `Edit ${vendor.name}`

	return (
		<Page title={ title } breadcrumbs={ [
			{ title: 'Vendors', href: Routes.vendors() },
			{ title: vendor.name!, href: Routes.vendor(vendor) },
			{ title: 'Edit Vendor' },
		] }>
			<Section>
				<Heading>{ title }</Heading>
				<VendorForm
					to={ Routes.vendor(vendor.slug) }
					method="patch"
					vendor={ vendor }
					{ ...models }
				/>
			</Section>
		</Page>
	)
}

export default EditVendor
