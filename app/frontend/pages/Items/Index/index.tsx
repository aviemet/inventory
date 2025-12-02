import { NewIcon } from "@/components/Icons"
import ItemsTable, { itemsColumns } from "@/domains/Items/Table"
import { IndexPageTemplate } from "@/features"
import { Routes } from "@/lib"

import AdvancedItemsSearch from "./AdvancedSearch"

interface ItemsIndexProps {
	items: Schema.ItemsIndex[]
	pagination: Schema.Pagination
}

const ItemsIndex = ({ items, pagination }: ItemsIndexProps) => {
	return (
		<IndexPageTemplate
			title="Hardware Assets"
			model="items"
			rows={ items }
			columns={ itemsColumns }
			pagination={ pagination }
			deleteRoute={ Routes.items() }
			menuOptions={ [
				{ label: "New Asset", href: Routes.newItem(), icon: <NewIcon /> },
			] }
			advancedSearch={ <AdvancedItemsSearch /> }
		/>
	)
}

export default ItemsIndex
