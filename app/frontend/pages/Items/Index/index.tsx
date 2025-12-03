import { useState } from "react"

import { NewIcon } from "@/components/Icons"
import ItemsTable from "@/domains/Items/Table"
import { IndexPageTemplate } from "@/features"
import { Routes } from "@/lib"

import AdvancedItemsSearch from "./AdvancedSearch"

interface ItemsIndexProps {
	items: Schema.ItemsIndex[]
	pagination: Schema.Pagination
}

const ItemsIndex = ({ items, pagination }: ItemsIndexProps) => {
	const [selectedRecords, setSelectedRecords] = useState<Schema.ItemsIndex[]>([])

	return (
		<IndexPageTemplate
			title="Hardware Assets"
			model="items"
			rows={ items }
			columns={ [] }
			pagination={ pagination }
			deleteRoute={ Routes.items() }
			menuOptions={ [
				{ label: "New Asset", href: Routes.newItem(), icon: <NewIcon /> },
			] }
			advancedSearch={ <AdvancedItemsSearch /> }
			selectedRecords={ selectedRecords }
		>
			<ItemsTable
				records={ items }
				pagination={ pagination }
				model="items"
				onSelectedRecordsChange={ setSelectedRecords }
			/>
		</IndexPageTemplate>
	)
}

export default ItemsIndex
