import React from "react"

import { NewIcon } from "@/components/Icons"
import { IndexPageTemplate } from "@/features"
import { Routes } from "@/lib"

import ConsumablesTable from "../Table"

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
			pagination={ pagination }
			menuOptions={ [
				{ label: "New Consumable", href: Routes.newConsumable(), icon: <NewIcon /> },
			] }
			deleteRoute={ Routes.consumables() }
		>
			<ConsumablesTable />
		</IndexPageTemplate>
	)
}

export default ConsumablesIndex
