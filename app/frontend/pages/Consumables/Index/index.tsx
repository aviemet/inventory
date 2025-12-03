import { NewIcon } from "@/components/Icons"
import ConsumablesTable, { consumablesColumns } from "@/domains/Consumables/Table"
import { IndexPageTemplate } from "@/features"
import { Routes } from "@/lib"


interface ConsumablesIndexProps {
	consumables: Schema.ConsumablesIndex[]
	pagination: Schema.Pagination
}

const ConsumablesIndex = ({ consumables, pagination }: ConsumablesIndexProps) => {
	return (
		<IndexPageTemplate
			title="Consumables"
			model="consumables"
			rows={ consumables }
			columns={ consumablesColumns }
			pagination={ pagination }
			menuOptions={ [
				{ label: "New Consumable", href: Routes.newConsumable(), icon: <NewIcon /> },
			] }
			deleteRoute={ Routes.consumables() }
		>
			<ConsumablesTable records={ consumables } pagination={ pagination } model="consumables" />
		</IndexPageTemplate>
	)
}

export default ConsumablesIndex
