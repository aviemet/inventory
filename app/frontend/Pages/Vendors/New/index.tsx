import React from 'react'
import { Heading, Page, Section } from '@/Components'
import VendorForm from '../Form'
import { Routes } from '@/lib'

interface INewVendorProps {
	vendor: Schema.Vendor
}

const New = ({ ...data }: INewVendorProps) => {
	const title = 'New Vendor'

	return (
		<Page title={ title } breadcrumbs={ [
			{ title: 'Vendors', href: Routes.vendors() },
			{ title: 'New Vendor' },
		] }>
			<Section>
				<Heading>{ title }</Heading>

				<VendorForm to={ Routes.vendors() } { ...data } />
			</Section>
		</Page>
	)
}

export default New
