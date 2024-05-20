import React from 'react'
import { Routes } from '@/lib'
import { IndexPageTemplate } from '@/Features'
import { NewIcon } from '@/Components/Icons'
import ManufacturersTable from '../Table'

interface ManufacturersIndexProps {
	manufacturers: Schema.ManufacturersIndex[]
	pagination: Schema.Pagination
}

const ManufacturersIndex = ({ manufacturers, pagination }: ManufacturersIndexProps) => {
	return (
		<IndexPageTemplate
			title="Manufacturers"
			model="manufacturers"
			rows={ manufacturers }
			pagination={ pagination }
			deleteRoute={ Routes.manufacturers() }
			menuOptions={ [
				{ label: 'New Manufacturer', href: Routes.newManufacturer(), icon: NewIcon },
			] }
		>
			<ManufacturersTable />
		</IndexPageTemplate>
	)
}

export default ManufacturersIndex
