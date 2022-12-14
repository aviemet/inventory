import React from 'react'
import { Routes } from '@/lib'
import { IndexPageTemplate } from '@/Layouts/AppLayout/Components'
import { NewIcon } from '@/Components/Icons'
import VendorsTable from '../Table'

interface IVendorsIndexProps {
	vendors: Schema.Vendor[]
	pagination: Schema.Pagination
}

const VendorsIndex = ({ vendors, pagination }: IVendorsIndexProps) => {
	return (
		<IndexPageTemplate
			title="Vendors"
			model="vendors"
			rows={ vendors }
			pagination={ pagination }
			menuOptions={ [
				{ label: 'New Vendor', href: Routes.newVendor(), icon: NewIcon },
			] }
		>
			<VendorsTable />
		</IndexPageTemplate>
	)
}

export default VendorsIndex
