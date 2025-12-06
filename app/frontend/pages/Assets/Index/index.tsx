import { AccessoriesIcon, ComponentsIcon, ConsumablesIcon, ItemsIcon } from "@/components/Icons"
import AssetTable from "@/domains/Assets/Table"
import { IndexPageTemplate } from "@/features"
import { Routes } from "@/lib"


interface AssetsIndexProps {
	assets: Schema.AssetsIndex[]
	pagination: Schema.Pagination
}

const AssetsIndex = ({ assets, pagination }: AssetsIndexProps) => {
	return (
		<IndexPageTemplate
			title="All Assets"
			model="assets"
			pagination={ pagination }
			deleteRoute={ Routes.assets() }
			menuOptions={ [
				{ label: "New Hardware", href: Routes.newItem(), icon: <ItemsIcon /> },
				{ label: "New Accessory", href: Routes.newAccessory(), icon: <AccessoriesIcon /> },
				{ label: "New Component", href: Routes.newComponent(), icon: <ComponentsIcon /> },
				{ label: "New Consumable", href: Routes.newConsumable(), icon: <ConsumablesIcon /> },
			] }
		>
			<AssetTable records={ assets } pagination={ pagination } model="assets" />
		</IndexPageTemplate>
	)
}

export default AssetsIndex
