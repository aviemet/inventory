import React from 'react'
import { Routes } from '@/lib'
import { IndexPageTemplate } from '@/Layouts/AppLayout/Components'
import { NewIcon } from '@/Components/Icons'
import ItemsTable from '../Table'

interface IItemsIndexProps {
	items: Schema.ItemsIndex[]
	pagination: Schema.Pagination
}

const ItemsIndex = ({ items, pagination }: IItemsIndexProps) => {
	return (
		<IndexPageTemplate
			title="Hardware Assets"
			model="items"
			rows={ items }
			pagination={ pagination }
			deleteRoute={ Routes.items() }
			menuOptions={ [
				{ label: 'New Asset', href: Routes.newItem(), icon: NewIcon },
			] }
		>
			<ItemsTable />
		</IndexPageTemplate>
	)
}

export default ItemsIndex
