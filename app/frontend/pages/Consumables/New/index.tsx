
import { Title, Page, Section } from "@/components"
import { Routes } from "@/lib"

import ConsumableForm from "@/domains/Consumables/Form"

interface NewConsumableProps {
	consumable: Schema.ConsumablesFormData
}

const NewConsumable = ({ consumable }: NewConsumableProps) => {
	const title = "New Consumable"

	return (
		<Page title={ title } breadcrumbs={ [
			{ title: "Consumables", href: Routes.consumables() },
			{ title: "New Consumable", href: window.location.href },
		] }>
			<Section>
				<Title>{ title }</Title>

				<ConsumableForm to={ Routes.consumables() } consumable={ consumable } />
			</Section>
		</Page>
	)
}

export default NewConsumable
