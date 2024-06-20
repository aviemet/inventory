import React from 'react'
import { Heading, Page, Section } from '@/Components'
import VendorForm from '../Form'
import { Routes } from '@/lib'

interface NewVendorProps {
	vendor: Schema.VendorsFormData
}

const New = ({ ...data }: NewVendorProps) => {
	const title = 'New Vendor'

	return (
		<Page title={ title } breadcrumbs={ [
			{ title: 'Vendors', href: Routes.vendors() },
			{ title: 'New Vendor', href: window.location.href },
		] }>
			<Section>
				<Heading>{ title }</Heading>

				<VendorForm to={ Routes.vendors() } { ...data } />
			</Section>
		</Page>
	)
}

export default New
