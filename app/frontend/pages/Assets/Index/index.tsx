import React from "react"

import { AccessoriesIcon, ComponentsIcon, ConsumablesIcon, ItemsIcon } from "@/components/Icons"
import { IndexPageTemplate } from "@/features"
import { Routes } from "@/lib"

import AssetTable from "../Table"

interface AssetsIndexProps {
	assets: Schema.AssetsIndex[]
	pagination: Schema.Pagination
}

const AssetsIndex = ({ assets, pagination }: AssetsIndexProps) => {
	return (
		<IndexPageTemplate
			title="All Assets"
			model="assets"
			rows={ assets }
			pagination={ pagination }
			deleteRoute={ Routes.assets() }
			menuOptions={ [
				{ label: "New Hardware", href: Routes.newItem(), icon: <ItemsIcon /> },
				{ label: "New Accessory", href: Routes.newAccessory(), icon: <AccessoriesIcon /> },
				{ label: "New Component", href: Routes.newComponent(), icon: <ComponentsIcon /> },
				{ label: "New Consumable", href: Routes.newConsumable(), icon: <ConsumablesIcon /> },
			] }
		>
			<AssetTable />
		</IndexPageTemplate>
	)
}

export default AssetsIndex
