import React from 'react'
import { Routes } from '@/lib'
import { IndexPageTemplate } from '@/Layouts/AppLayout/Components'
import { NewIcon } from '@/Components/Icons'
import AccessoriesTable from '../Table'

interface IAccessoriesIndexProps {
	accessories: Schema.AccessoriesIndex[]
	pagination: Schema.Pagination
}

const AccessoriesIndex = ({ accessories, pagination }: IAccessoriesIndexProps) => {
	return (
		<IndexPageTemplate
			title="Accessories"
			model="accessories"
			rows={ accessories }
			pagination={ pagination }
			deleteRoute={ Routes.accessories() }
			menuOptions={ [
				{ label: 'Create New Accessory', href: Routes.newAccessory(), icon: NewIcon },
			] }
		>
			<AccessoriesTable />
		</IndexPageTemplate>
	)
}

export default AccessoriesIndex
