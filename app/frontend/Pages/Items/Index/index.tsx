import React from 'react'
import { Routes } from '@/lib'
import { IndexPageTemplate } from '@/Components/Layout'
import { NewIcon } from '@/Components/Icons'
import ItemsTable from '../Table'

interface IItemsIndexProps {
	items: Schema.Item[]
	pagination: Schema.Pagination
}

const ItemsIndex = ({ items, pagination }: IItemsIndexProps) => {
	return (
		<IndexPageTemplate
			title="Hardware Assets"
			model="items"
			rows={ items }
			pagination={ pagination }
			menuOptions={ [
				{ label: 'New Asset', href: Routes.newItem(), icon: NewIcon },
			] }
		>
			<ItemsTable />
		</IndexPageTemplate>
	)
}

export default ItemsIndex
