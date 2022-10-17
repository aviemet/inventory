import { Heading, Page, Section } from '@/Components'
import { Routes } from '@/lib'
import React from 'react'

interface ICheckoutLicenseProps {
	license: Schema.License
}

const Checkout = ({ license }: ICheckoutLicenseProps) => {
	const title = 'Checkout License'

	return (
		<Page title={ title } breadcrumbs={ [
			{ title: 'License', href: Routes.licenses() },
			{ title: license.name!, href: Routes.license(license) },
			{ title: 'Check Out' },
		] }>
			<Section>
				<Heading order={ 3 }>{ title }</Heading>

			</Section>
		</Page>
	)
}

export default Checkout
