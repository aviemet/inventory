import React from 'react'
import { Routes } from '@/lib'
import { IndexPageTemplate } from '@/Layouts/AppLayout/Components'
import { NewIcon } from '@/Components/Icons'
import VendorsTable from '../Table'

interface IVendorsIndexProps {
	vendors: Schema.VendorsIndex[]
	pagination: Schema.Pagination
}

const VendorsIndex = ({ vendors, pagination }: IVendorsIndexProps) => {
	return (
		<IndexPageTemplate
			title="Vendors"
			model="vendors"
			rows={ vendors }
			pagination={ pagination }
			deleteRoute={ Routes.vendors() }
			menuOptions={ [
				{ label: 'New Vendor', href: Routes.newVendor(), icon: NewIcon },
			] }
		>
			<VendorsTable />
		</IndexPageTemplate>
	)
}

export default VendorsIndex
